import { motion } from "framer-motion";
import React, { useState } from "react";
import BodyFull from "../../components/BodyFull";
import CalendarCell from "../../components/CalendarCell";
import Header from "../../components/Header";
import { sanityClient } from "../../lib/sanityClient";
import { GetStaticProps, NextPage } from "next";
import { Calendrier } from "../../typings";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MonthSlider from "../../components/MonthSlider";

interface IProps {
  calendrier: [Calendrier];
}

const Calendrier: NextPage<IProps> = ({ calendrier }) => {
  const [monthPosition, setMonthPosition] = useState(0);

  const nextSlide = () => {
    setMonthPosition(monthPosition - 1);
  };

  const prevSlide = () => {
    setMonthPosition(monthPosition + 1);
  };

  //reduce calendrier to array of objects by month
  const calendrierByMonth = calendrier?.reduce((acc: any, curr: any) => {
    const month = dayjs(curr.date).locale("fr").format("MMMM YYYY");

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

  const months = calendrierByMonthArray?.map((m: any) => m.month);

  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="flex items-center justify-between">
          <div className="">
            <Header>Calendrier</Header>
          </div>

          {months.length > 1 && (
            <div className="mt-5">
              <MonthSlider
                months={months}
                monthPosition={monthPosition}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                setMonthPosition={setMonthPosition}
              />
            </div>
          )}
        </div>
        <h2 className="h2">{months[monthPosition]}</h2>
        {calendrierByMonthArray &&
          calendrierByMonthArray.map((m: any, i: number) => {
            return (
              <div key={i}>
                {m.events
                  .filter((f: any) =>
                    months[monthPosition]?.includes(
                      dayjs(f.date).locale("fr").format("MMMM YYYY")
                    )
                  )
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

export default Calendrier;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const today = new Date().toISOString().split("T")[0];

  const fetchCalendar = `*[_type =="calendrier" && date >= '${today}'] | order(date asc){
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
    revalidate: 60, // 60 seconds
  };
};
