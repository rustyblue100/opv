import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import BodyFull from "../components/Layout/BodyLayout";
import Header from "../components/Header/Header";
import { fetchPhotosVideos } from "../utils/sanityQuery";
import { sanityClient } from "../lib/sanityClient";
import { Photos } from "../typings";
import Image from "next/image";
import { urlFor } from "../lib/sanityClient";

interface IProps {
  media: Photos[];
}

const contact: NextPage<IProps> = ({ media }) => {
  const imgArray = media[0].images;

  console.log(imgArray);
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>
          <h1 className="h1 ">Photos & Vidéos</h1>
        </Header>

        <div className="grid-flow-dense relative mt-8 grid max-w-full grid-cols-2 gap-y-12">
          {imgArray?.map((img) => {
            return (
              <div
                key={img._key}
                className="relative h-[600px] max-w-full 2xl:h-[1000px]"
              >
                <Image
                  src={urlFor(img).url()}
                  alt={img._key}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            );
          })}
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default contact;

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
