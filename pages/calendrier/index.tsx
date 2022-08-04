import dayjs from "dayjs";
import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useState } from "react";
import CalendarCell from "../../components/CalendarCell/";
import Header from "../../components/Header/Header";
import BodyFull from "../../components/Layout/BodyLayout";
import MonthSlider from "../../components/MonthSlider/MonthSlider";
import { sanityClient } from "../../lib/sanityClient";
import { Calendrier } from "../../typings";
import pathPushQueryParams from "../../utils/pathPushQueryParams";
import { fetchCalendar } from "../../utils/sanityQuery";
import useIsomorphicLayoutEffect from "../../utils/useIsomorphicLayoutEffect";

interface IProps {
  calendrier: Calendrier[];
  locale: string;
}

const Calendrier: NextPage<IProps> = ({ calendrier, locale }) => {
  const [monthPosition, setMonthPosition] = useState(0);

  const router = useRouter();
  const { query } = useRouter();
  const { t } = useTranslation();

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
    const month = dayjs(curr.date)
      .locale(locale === "fr" ? "fr" : "en")
      .format("MMMM YYYY");

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
        <div className="mb-8 -mt-2 flex flex-col items-start justify-between sm:mb-0 sm:flex-row lg:items-center">
          <Header>
            <h1 className="h1 mb-5 lg:mb-0">{t("evenement:title")}</h1>
          </Header>

          <div className="flex items-center justify-between md:flex-row">
            <div>
              {months?.length > 1 && (
                <MonthSlider
                  months={months}
                  monthPosition={monthPosition}
                  nextSlide={nextSlide}
                  prevSlide={prevSlide}
                  setMonthPosition={setMonthPosition}
                />
              )}
            </div>

            <div className="flex items-center pl-0 sm:mt-6 md:mt-0 xl:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-5 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="hidden md:block">Download</span>{" "}
              <span className="xl:ml-1">PDF</span>
            </div>
          </div>
        </div>

        <h2 className="h2 hidden sm:block">
          {months && months[monthPosition]}
        </h2>

        {calendrierByMonthArray?.map(
          (m: { events: object[]; month: string }, i: number) => {
            return (
              <div key={i} data-testid={`evenement-item-${i}`}>
                {m.events
                  .filter((f: any) => {
                    return months[monthPosition]?.includes(
                      dayjs(f.date)
                        .locale(locale === "fr" ? "fr" : "en")
                        .format("MMMM YYYY")
                    );
                  })
                  .map((cal: any, index: number) => {
                    return (
                      <CalendarCell key={index} data={cal} locale={locale} />
                    );
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
  let date = new Date();
  date.setHours(date.getHours() - 4);

  const today = date.toISOString();

  const calendrier = await sanityClient.fetch(fetchCalendar(today));

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale as string, [
        "common",
        "evenement",
      ])),
      calendrier,
    },
    revalidate: 60, // 60 seconds
  };
};
