import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import BodyFull from "../components/Layout/BodyLayout";
import { PortableText, sanityClient, urlFor } from "../lib/sanityClient";
import { Calendrier } from "../typings";
import { useContext } from "react";
import { Context } from "../contexts/Context";

interface IProps {
  pageData: Calendrier;
  locale: string;
}

const EventDetails: NextPage<IProps> = ({ pageData, locale }) => {
  const { title, mainImage, description }: any = pageData;

  const { t } = useTranslation();
  const meta = useContext(Context)?.meta;

  // get document.referer from server

  return (
    <>
      <Head>
        <title className="uppercase">
          {locale === "fr" ? title?.fr : title?.en} | {meta?.title}{" "}
        </title>
      </Head>
      <BodyFull>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <Header>
            <h1 className="h1"> {locale === "fr" ? title?.fr : title?.en}</h1>
            <hr className="mt-4 w-full border-opv-black-300"></hr>
          </Header>

          <div className="mt-10 flex max-w-full flex-col-reverse lg:flex-row lg:items-start lg:gap-12">
            <div className="w-full lg:w-[58%]">
              <PortableText
                value={locale === "fr" ? description?.fr : description?.en}
              />
            </div>
            {mainImage && (
              <div className="relative mb-8 h-[400px]  w-full lg:flex-1 xl:mb-0 2xl:h-[800px]">
                {mainImage && (
                  <Image
                    src={urlFor(mainImage).url()}
                    layout="fill"
                    alt={title}
                    objectFit="cover"
                    className="rounded"
                  />
                )}
              </div>
            )}
          </div>
        </motion.main>
      </BodyFull>
    </>
  );
};

export default EventDetails;

const pagesQuery = `*[_type =="pages" && slug.current == $slug][0]`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths =
    await sanityClient.fetch(`*[_type =="pages" && defined(slug.current)]{
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

  const pageData = await sanityClient.fetch(pagesQuery, { slug });

  if (!pageData) {
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
      pageData,
    },
    revalidate: 60, // 60 seconds
  };
};
