import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import BodyFull from "../../components/Layout/BodyLayout";
import CalendarCell from "../../components/CalendarCell";
import Header from "../../components/Header";
import { sanityClient } from "../../lib/sanityClient";
import { GetStaticProps, NextPage } from "next";
import { Calendrier } from "../../typings";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MonthSlider from "../../components/MonthSlider";
import { useRouter } from "next/router";
import { fetchCalendar } from "../../utils/sanityQuery";
import useIsomorphicLayoutEffect from "../../utils/useIsomorphicLayoutEffect";
import pathPushQueryParams from "../../utils/pathPushQueryParams";
interface IProps {
  calendrier: [Calendrier];
}

const Calendrier: NextPage<IProps> = ({ calendrier }) => {
  const [monthPosition, setMonthPosition] = useState(0);

  const router = useRouter();
  const { query } = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (router.isReady && query.i) {
      setMonthPosition(Number(query.i) as number);
    }
  }, [router.isReady, query.i]);

  const prevSlide = () => {
    query.i
      ? router.push(
          pathPushQueryParams(monthPosition - 1, months[monthPosition - 1]),
          undefined,
          { shallow: true }
        )
      : setMonthPosition(0);
  };

  const nextSlide = () => {
    router.push(
      pathPushQueryParams(monthPosition + 1, months[monthPosition + 1]),
      undefined,
      { shallow: true }
    );
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
        initial={!query.i && { opacity: 0 }}
        animate={!query.i && { opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={
          !query.i ? { opacity: 0, transition: { duration: 0.3 } } : undefined
        }
      >
        <div className="mb-8 flex flex-col items-center justify-between sm:mb-0 sm:flex-row">
          <div className="">
            <Header>Calendrier</Header>
          </div>

          {months?.length > 1 && (
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
        <h2 className="h2 hidden sm:block">
          {months && months[monthPosition]}
        </h2>
        {calendrierByMonthArray &&
          calendrierByMonthArray.map(
            (m: { events: object[]; month: string }, i: number) => {
              return (
                <div key={i}>
                  {m.events
                    .filter((f: any) => {
                      return months[monthPosition]?.includes(
                        dayjs(f.date).locale("fr").format("MMMM YYYY")
                      );
                    })
                    .map((cal: any, index: number) => {
                      return <CalendarCell key={cal._id} data={cal} />;
                    })}
                </div>
              );
            }
          )}
      </motion.main>
    </BodyFull>
  );
};

export default Calendrier;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const today = new Date().toISOString().split("T")[0];

  const calendrier = await sanityClient.fetch(fetchCalendar(today));

  return {
    props: {
      ...(await serverSideTranslations(locale as string, [])),
      calendrier,
    },
    revalidate: 60, // 60 seconds
  };
};
