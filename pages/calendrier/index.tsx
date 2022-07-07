import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../../components/BodyFull";
import CalendarCell from "../../components/CalendarCell";
import Header from "../../components/Header";
import { sanityClient } from "../../lib/sanityClient";
import { GetStaticProps, NextPage } from "next";
import { Calendrier } from "../../typings";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IProps {
  calendrier: [Calendrier];
}

const calendrier: NextPage<IProps> = ({ calendrier }) => {
  //reduce calendrier to array of objects by month
  const calendrierByMonth = calendrier?.reduce((acc: any, curr: any) => {
    const month = dayjs(curr.date).locale("fr").format("MMMM");

    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(curr);
    return acc;
  }, {});

  //transform object into a array of objects by month
  const calendrierByMonthArray =
    calendrierByMonth &&
    Object.keys(calendrierByMonth).map((key: string) => {
      return {
        month: key,
        events: calendrierByMonth[key],
      };
    });

  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>Calendrier</Header>

        {calendrierByMonthArray &&
          calendrierByMonthArray.map((m: any, i: number) => {
            return (
              <div key={i}>
                <h2 className="h2">{m.month}</h2>

                {m.events
                  /*               .filter(
                  (f) => dayjs(f.date).locale("fr").format("MMMM") === "juillet"
                ) */
                  .map((cal: any, index: number) => {
                    return <CalendarCell key={cal._id} data={cal} />;
                  })}
              </div>
            );
          })}
      </motion.main>
    </BodyFull>
  );
};

export default calendrier;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const fetchCalendar = `*[_type =="calendrier"] | order(date asc){
      _id,
      title,
      "slug":slug.current,
      artiste[]->,
      description,
      complet,
      prix,
      date,
      mainImage,
      "recurrents":evenements->{
        title,
        mainImage,
        artiste[]->,
        description,
        "slug":slug.current
      }, 
    } `;

  const calendrier = await sanityClient.fetch(fetchCalendar);

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [])),
      calendrier,
    },
  };
};
