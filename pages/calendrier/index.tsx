import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../../components/BodyFull";
import CalendarCell from "../../components/CalendarCell";
import Header from "../../components/Header";
import { sanityClient } from "../../lib/sanityClient";
import { NextPage } from "next";
import { Calendrier } from "../../typings";
import dayjs from "dayjs";
import "dayjs/locale/fr";

interface IProps {
  calendrier: [Calendrier];
}

const calendrier: NextPage<IProps> = ({ calendrier }) => {
  //reduce calendrier to array of objects by month
  const calendrierByMonth = calendrier.reduce((acc: any, curr: any) => {
    const month = dayjs(curr.date).locale("fr").format("MMMM");

    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(curr);
    return acc;
  }, {});

  //transform object into a array of objects by month
  const calendrierByMonthArray = Object.keys(calendrierByMonth).map(
    (key: string) => {
      return {
        month: key,
        events: calendrierByMonth[key],
      };
    }
  );

  console.log(calendrierByMonthArray);
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>Calendrier</Header>

        {calendrierByMonthArray.map((m: any, i: number) => {
          return (
            <>
              <h2 className="h2" key={i}>
                {m.month}
              </h2>

              {m.events.map((cal: any) => {
                return <CalendarCell key={i} data={cal} />;
              })}
            </>
          );
        })}
      </motion.main>
    </BodyFull>
  );
};

export default calendrier;

export async function getStaticProps() {
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
      calendrier,
    },
  };
}
