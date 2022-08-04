import dayjs from "dayjs";
import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanityClient";
import { Calendrier } from "../../typings";
import { useRouter } from "next/router";

interface IProps {
  data: Calendrier;
  locale: string;
}

const CalendarCell: NextPage<IProps> = ({ data, locale }) => {
  const { query } = useRouter() || { query: { text: "" } };

  const { title, mainImage, complet, prix, description, artiste } =
    data?.recurrents ? data.recurrents : data;

  const date = data.date;
  const slug = data.slug;

  function truncate(string: string, limit: number) {
    return string.length > limit ? `${string.slice(0, limit)}...` : string;
  }

  return (
    <div className="relative">
      <div className="flex w-full flex-col justify-between overflow-hidden py-6 sm:flex-row">
        <motion.hr
          initial={!query.i && { opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="absolute top-0 w-full border-t border-opv-black-300"
        ></motion.hr>

        <div className="relative flex-1">
          <div className="mb-2 text-2xl font-bold sm:mb-0 md:text-3xl">
            {dayjs(date)
              .locale(locale === "fr" ? "fr" : "en")
              .format("dddd")}
          </div>
          <motion.div
            initial={!query.i && { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl font-normal lg:text-6xl"
            data-testid="date"
          >
            {dayjs(date).format("DD")}
            <small className="relative top-1 align-top text-sm">
              {dayjs(date)
                .locale(locale === "fr" ? "fr" : "en")
                .format("MMMM")}
            </small>
          </motion.div>

          {complet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 transform border border-opv-pink-1200 p-1 uppercase tracking-wide text-opv-pink-1200 md:text-2xl">
                {(locale === "fr" ? "fr" : "en") === "fr" ? "complet" : "full"}
              </div>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="relative flex-1 border-opv-black-300 sm:border-l sm:pl-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 5, rotate: -90 }}
            animate={{ opacity: 1, y: 0, rotate: -90 }}
            transition={{ duration: 0.2, delay: 0.9 }}
            className="absolute bottom-6 -left-12 hidden -rotate-90 text-sm font-normal sm:block"
          >
            {prix ? (locale === "fr" ? "entrée" : "cover") : ""}:{" "}
            {prix && prix + "$"}
          </motion.div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-2xl font-normal sm:mt-0 sm:text-3xl md:text-3xl"
            >
              <Link href={`/calendrier/${slug}`} passHref>
                <a>{title?.fr}</a>
              </Link>

              <div className="mt-1 text-sm">
                <ul className="m-0 flex list-none flex-col px-0 pb-3 md:flex-row md:pb-0">
                  {artiste?.map((art: any, i: number) => {
                    return (
                      <li key={art._id} className=" flex text-gray-600 ">
                        {art.nom}
                        <span className="mx-2 hidden md:block">
                          {i !== artiste.length - 1 && "/"}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1.1 }}
              className="mt-0 text-sm font-normal sm:mt-0"
            >
              <div className="md:-rotate-90">
                {dayjs(date)
                  .locale(locale === "fr" ? "fr" : "en")
                  .format("HH")}
                h
                {dayjs(date)
                  .locale(locale === "fr" ? "fr" : "en")
                  .format("mm")}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-start xl:flex-row ">
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:w-[200px] "
            >
              {mainImage && (
                <Link href={`/calendrier/${slug}`} passHref>
                  <a>
                    <Image
                      className="flex-1 cursor-pointer rounded-lg md:rounded-full"
                      src={
                        mainImage
                          ? urlFor(mainImage).width(400).url()
                          : "https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNzAtcG9tLTgwOTcuanBn.jpg"
                      }
                      width="400"
                      height="400"
                      objectFit="cover"
                      alt="band"
                    />
                  </a>
                </Link>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-[800px] flex-1 xl:mt-0 xl:px-12"
            >
              {/* <PortableText value={description?.fr[0]} /> */}
              {description &&
                truncate(
                  locale === "fr"
                    ? description.fr[0].children[0].text
                    : description.en[0].children[0].text,
                  150
                )}

              <br />
              <Link href={`/calendrier/${slug}`} passHref>
                <a className="text-opv-pink-1200" data-testid="see more">
                  {locale === "fr" ? "Voir plus..." : "See more..."}
                </a>
              </Link>
            </motion.div>
            <motion.div className="mt-5 block flex-1 text-sm font-bold sm:hidden">
              Entrée: {prix}$
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarCell;
