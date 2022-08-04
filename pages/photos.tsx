import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext } from "react";
import BodyFull from "../components/Layout/BodyLayout";
import Header from "../components/Header/Header";
import { fetchPhotosVideos } from "../utils/sanityQuery";
import { sanityClient } from "../lib/sanityClient";
import { Photos } from "../typings";
import Image from "next/image";
import { urlFor } from "../lib/sanityClient";
import Lightbox from "../components/Lightbox";
import { Context } from "../contexts/Context";
import Head from "next/head";

interface IProps {
  media: Photos[];
  locale: string;
}

const Contact: NextPage<IProps> = ({ media, locale }) => {
  const meta = useContext(Context)?.meta;

  return (
    <>
      <Head>
        <title className="uppercase">
          {locale === "fr" ? media[0].title.fr : media[0].title.en} |{" "}
          {meta?.title}{" "}
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
            <h1 className="h1 ">
              {locale === "fr" ? media[0].title.fr : media[0].title.en}
            </h1>
            <hr className="mt-4 w-full  border-opv-black-300"></hr>
          </Header>

          <Lightbox carousselData={media} />
        </motion.main>
      </BodyFull>
    </>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const media = await sanityClient.fetch(fetchPhotosVideos());

  return {
    props: {
      locale,
      media,
      ...(await serverSideTranslations(locale as string, [])),
    },
  };
};
