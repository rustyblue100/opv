import dayjs from "dayjs";
import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import BodyFull from "../../components/BodyFull";
import { sanityClient, urlFor } from "../../lib/sanityClient";
import { Calendrier } from "../../typings";
import { PortableText } from "../../lib/sanityClient";
import Header from "../../components/Header";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IProps {
  calendrierData: Calendrier;
  locale: string;
}

const EventDetails: NextPage<IProps> = ({ calendrierData, locale }) => {
  const { title, mainImage, date, description, prix, complet }: any =
    calendrierData;

  const { t } = useTranslation();

  return (
    <BodyFull>
      <motion.article
        className="grid gap-x-16 gap-y-12 lg:grid-cols-2 lg:gap-y-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="">
          <Link href="/calendrier">
            <button className="mt-8 flex items-center  gap-3 border-0 bg-none transition-all hover:underline">
              ← Retour au calendrier
            </button>
          </Link>
          <Header>{title.fr}</Header>
          <h2 className="text-3xl text-opv-pink-1200">
            {dayjs(date).locale("fr").format("dddd DD MMMM")}{" "}
            {complet && (
              <div className="ml-5 inline-block -rotate-12 border border-black p-1 uppercase  text-black md:text-xl">
                Complet
              </div>
            )}
          </h2>

          <div className="mt-24 flex justify-start gap-5">
            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">{t("evenement:type_event")}</h3>
              <div>Musique</div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">Adresse</h3>
              <div>356, rue Mont-Royal EST</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-12 flex justify-start gap-5">
            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">{t("evenement:portes")}</h3>
              <div>
                {dayjs(date).locale("fr").format("HH")}h
                {dayjs(date).locale("fr").format("mm")}
              </div>
              <hr className=" border-opv-black"></hr>
            </div>

            <div className="flex-1 space-y-2 text-lg">
              <h3 className="font-bold">Admission</h3>
              <div>18+</div>
              <hr className=" border-opv-black"></hr>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between rounded border border-black bg-violet-200 p-5 text-2xl">
            <div className="my-3">{prix}$</div>
            <div className="">{t("evenement:billets")}</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="pt-8"
        >
          <div className="">
            <Image
              src={urlFor(mainImage).url()!}
              width="1200"
              height="1200"
              layout="responsive"
              alt={title}
              objectFit="cover"
              className="rounded"
            />
          </div>

          <div className="float-right">
            <ul className="flex gap-3">
              <li>Site Web</li>
              <li>Facebook</li>
            </ul>
          </div>
        </motion.div>

        <div className="">
          <h2 className="mb-4 text-4xl">Bio</h2>
          <div className="max-w-3xl text-lg ">
            <PortableText
              value={locale === "fr" ? description?.fr : description?.en}
            />
          </div>
        </div>

        <div className="">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/sOreUnGoIMg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
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
    "slug":slug.current
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
    fallback: true,
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
