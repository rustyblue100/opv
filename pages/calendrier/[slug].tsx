import dayjs from "dayjs";
import "dayjs/locale/fr";
import { motion } from "framer-motion";
import getYouTubeId from "get-youtube-id";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import YouTube from "react-youtube";
import BodyFull from "../../components/Layout/BodyLayout";
import { Context } from "../../contexts/Context";
import { PortableText, sanityClient, urlFor } from "../../lib/sanityClient";
import { Calendrier } from "../../typings";
import { fetchCalendarSingleEvent } from "../../utils/sanityQuery";

interface IProps {
  calendrierData: Calendrier;
  locale: string;
}

const EventDetails: NextPage<IProps> = ({ calendrierData, locale }) => {
  const {
    title,
    mainImage,
    description,
    prix,
    complet,
    artiste,
    video,
    site,
    facebook,
    spotify,
    itunes,
  }: any = !calendrierData.recurrents
    ? calendrierData
    : calendrierData.recurrents;

  const date = calendrierData.date;

  const { t } = useTranslation();

  const router = useRouter();

  const previousRoute = useContext(Context)?.previousRoute;

  const canGoBack =
    (typeof window !== "undefined" && window.history.state?.idx) || 0 > 0;

  // get document.referer from server
  const referer = typeof window === "undefined" ? "" : window.document.referrer;

  return (
    <BodyFull>
      <motion.article
        className="flex flex-col-reverse gap-12 lg:grid-cols-2	lg:flex-row lg:gap-y-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="lg:w-[50%]">
          {canGoBack && previousRoute?.includes("calendrier") ? (
            <button
              onClick={() => router.back()}
              className="mt-8 hidden items-center gap-3 border-0 bg-none transition-all hover:underline lg:flex"
            >
              ← {t("evenement:calendar")}
            </button>
          ) : (
            <Link href="/calendrier" passHref>
              <a className="mt-8 hidden items-center gap-3 border-0 bg-none transition-all hover:underline lg:flex">
                ← {t("evenement:calendar")}
              </a>
            </Link>
          )}

          <div className="max-w-2xl pb-2 text-2xl font-bold uppercase sm:pt-9 md:pt-6 md:text-4xl lg:pt-8 lg:text-5xl">
            {title.fr}
          </div>

          <h2 className="text-3xl text-opv-pink-1200">
            {dayjs(date)
              .locale(locale === "fr" ? "fr" : "en")
              .format("dddd DD MMMM YYYY")}{" "}
          </h2>

          {artiste && (
            <div>
              <ul className=" mt-8 flex list-none flex-col px-0 pb-3 md:flex-row md:pb-0">
                {artiste?.map((art: any, i: number) => {
                  return (
                    <li key={art._id} className="flex">
                      {art.nom}
                      <span className="mx-2 hidden md:block">
                        {i !== artiste.length - 1 && "/"}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="mt-12 flex justify-start gap-5 md:mt-14">
            <div className="flex-1 space-y-2  text-sm sm:text-lg">
              <h3 className="font-bold">{t("evenement:type_event")}</h3>
              <div>Musique</div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">Adresse</h3>
              <div>555, rue Mont-Montréal EST</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-12 flex justify-start gap-5 md:mt-14">
            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">{t("evenement:portes")}</h3>
              <div>
                {dayjs(date)
                  .locale(locale === "fr" ? "fr" : "en")
                  .format("HH")}
                h
                {dayjs(date)
                  .locale(locale === "fr" ? "fr" : "en")
                  .format("mm")}
              </div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">Admission</h3>
              <div>18+</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-12 flex justify-start gap-5 md:mt-14">
            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">{t("evenement:cover")}</h3>
              <div>
                {prix || calendrierData.prix}$
                {complet && (
                  <div className="relative -top-1 ml-5 inline-block border border-opv-pink-1200 p-1 text-sm  uppercase  text-opv-pink-1200 md:text-sm">
                    {t("evenement:full")}
                  </div>
                )}
              </div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">&nbsp;</h3>
              <div>{t("evenement:billets")}</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          {/*         <div className="mt-12 flex items-center justify-between gap-4 rounded border border-black bg-violet-200 p-5 text-xl sm:text-2xl md:mt-20 md:gap-0">
            <div className="my-3">{prix}$</div>

            <div className="text-sm md:text-xl ">{t("evenement:billets")}</div>
          </div> */}

          <div className="mt-12 max-w-3xl text-lg md:mt-16">
            <PortableText
              value={locale === "fr" ? description?.fr : description?.en}
            />
          </div>

          <div className="mt-12 md:mt-14">
            {video && (
              <div>
                <YouTube
                  videoId={getYouTubeId(video) as string}
                  className="youtube-embed"
                />
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="left-0 right-0 w-full flex-1 xl:sticky xl:top-24 xl:h-[1000px] xl:w-1/2"
        >
          <button
            onClick={() =>
              referer.includes("calendrier") ? router.back() : router.back()
            }
            className="mb-8 flex items-center gap-3 border-0 bg-none transition-all hover:underline lg:hidden xl:mt-8"
          >
            ← {t("evenement:calendar")}
          </button>
          <div className="ml-auto max-w-6xl">
            {mainImage && (
              <Image
                src={urlFor(mainImage).quality(50).width(800).height(800).url()}
                width="800"
                height="800"
                layout="responsive"
                alt={title}
                objectFit="cover"
                className="rounded"
                placeholder="blur"
                blurDataURL={urlFor(mainImage)
                  .quality(5)
                  .width(1)
                  .height(1)
                  .url()}
              />
            )}
          </div>

          <div className="float-right mt-4">
            <ul className="flex w-full list-none items-center justify-start gap-5 capitalize text-opv-pink-1200">
              {site && (
                <li className="item-center  flex gap-1 hover:underline">
                  <a href={site} rel="noopener noreferrer" target={"_blank"}>
                    <span>web</span>
                  </a>
                </li>
              )}
              {facebook && (
                <li className="item-center  flex gap-1 hover:underline">
                  <a
                    href={facebook}
                    rel="noopener noreferrer"
                    target={"_blank"}
                    className="item-center flex gap-1"
                  >
                    <span>facebook</span>
                  </a>
                </li>
              )}

              {itunes && (
                <li className="item-center  flex gap-1 hover:underline">
                  <a
                    href={itunes}
                    rel="noopener noreferrer"
                    target={"_blank"}
                    className="item-center flex gap-1"
                  >
                    <span>itunes</span>
                  </a>
                </li>
              )}

              {spotify && (
                <li className="item-center  flex gap-1 hover:underline">
                  <a
                    href={spotify}
                    rel="noopener noreferrer"
                    target={"_blank"}
                    className="item-center flex gap-1"
                  >
                    <span>spotify</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </motion.article>
    </BodyFull>
  );
};

export default EventDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type =="calendrier" && defined(slug.current)]{
      "params": {
        "slug": slug.current
  }}`);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug }: any = params;

  const calendrierData = await sanityClient.fetch(fetchCalendarSingleEvent, {
    slug,
  });

  if (!calendrierData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale as string, [
        "common",
        "evenement",
      ])),
      calendrierData,
    },
    revalidate: 60, // 60 seconds
  };
};
