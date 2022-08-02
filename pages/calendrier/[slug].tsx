import dayjs from "dayjs";
import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useRouter } from "next/router";
import BodyFull from "../../components/Layout/BodyLayout";
import { PortableText, sanityClient, urlFor } from "../../lib/sanityClient";
import { Calendrier } from "../../typings";
import { useContext, useEffect, useLayoutEffect } from "react";
import { Context } from "../../contexts/Context";
import Link from "next/link";

interface IProps {
  calendrierData: Calendrier;
  locale: string;
}

const EventDetails: NextPage<IProps> = ({ calendrierData, locale }) => {
  const { title, mainImage, description, prix, complet }: any =
    !calendrierData.recurrents ? calendrierData : calendrierData.recurrents;

  const date = calendrierData.date;

  const { t } = useTranslation();

  const router = useRouter();

  const previousRoute = useContext(Context)?.previousRoute();

  const canGoBack =
    (typeof window !== "undefined" && window.history.state?.idx) || 0 > 0;

  console.log("slug", previousRoute);

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
        <div className="xl:w-[50%]">
          {canGoBack ? (
            <button
              onClick={() => router.back()}
              className="mt-8 hidden items-center gap-3 border-0 bg-none transition-all hover:underline lg:flex"
            >
              ← Retour au calendrier
            </button>
          ) : (
            <Link href="/calendrier" passHref>
              <a className="mt-8 hidden items-center gap-3 border-0 bg-none transition-all hover:underline lg:flex">
                ← Retour au calendrier
              </a>
            </Link>
          )}

          <div className="max-w-2xl pb-2 text-2xl font-bold uppercase sm:pt-9 md:pt-6 md:text-4xl lg:pt-8 lg:text-5xl">
            {title.fr}
          </div>
          <h2 className="text-3xl text-opv-pink-1200">
            {dayjs(date).locale("fr").format("dddd DD MMMM YYYY")}{" "}
          </h2>

          <div className="mt-12 flex justify-start gap-5 md:mt-14">
            <div className="flex-1 space-y-2  text-sm sm:text-lg">
              <h3 className="font-bold">{t("evenement:type_event")}</h3>
              <div>Musique</div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">Adresse</h3>
              <div>356, rue Mont-Royal EST</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-12 flex justify-start gap-5 md:mt-14">
            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">{t("evenement:portes")}</h3>
              <div>
                {dayjs(date).locale("fr").format("HH")}h
                {dayjs(date).locale("fr").format("mm")}
              </div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-sm sm:text-lg">
              <h3 className="font-bold">Admission</h3>
              <div>18+</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4 rounded border border-black bg-violet-200 p-5 text-xl sm:text-2xl md:mt-20 md:gap-0">
            <div className="my-3">{prix}$</div>

            {complet && (
              <div className="ml-5 inline-block -rotate-12 border border-opv-pink-1200 p-1 text-sm  uppercase  text-opv-pink-1200 md:text-xl">
                Complet
              </div>
            )}
            <div className="text-sm md:text-xl ">{t("evenement:billets")}</div>
          </div>

          <div className="mt-12 max-w-3xl text-lg md:mt-14">
            <PortableText
              value={locale === "fr" ? description?.fr : description?.en}
            />
          </div>

          <div className="mt-12 md:mt-14">
            <iframe
              className="aspect-video w-full max-w-3xl"
              src="https://www.youtube.com/embed/sOreUnGoIMg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
            ← Retour au calendrier
          </button>
          <div className=" ml-auto max-w-6xl">
            <Image
              src={urlFor(mainImage).url()!}
              width="1200"
              height="1200"
              layout="responsive"
              alt={title}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="float-right mt-4">
            <ul className="flex gap-3">
              <li>Site Web</li>
              <li>Facebook</li>
            </ul>
          </div>
        </motion.div>
      </motion.article>
    </BodyFull>
  );
};

export default EventDetails;

const calendrierQuery = `*[_type =="calendrier" && slug.current == $slug][0]{
  _id,
  title,
  "slug":slug.current,
  artiste[]->,
  description,
  complet,
  prix,
  date,
  "mainImage": mainImage.asset->url,
  "recurrents":evenements->{
  title,
  "mainImage": mainImage.asset->url,
    artiste[]->,
    description,
  }, 
}`;

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

  const calendrierData = await sanityClient.fetch(calendrierQuery, { slug });

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
