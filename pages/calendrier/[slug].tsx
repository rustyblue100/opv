import { motion } from "framer-motion";
import { GetStaticPaths, NextPage } from "next";
import { useState } from "react";
import BodyFull from "../../components/BodyFull";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../lib/sanityClient";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/fr";

interface IProps {
  calendrierData: {
    _id: string;
    title: {
      fr: string;
      en?: string;
    };
    description: {
      fr: string;
      en?: string;
    };
    mainImage?: string;
    complet?: boolean;
    prix?: number;
    date: string;
  }[];
}

const EventDetails: NextPage<IProps> = ({ calendrierData }) => {
  const { title, mainImage, date }: any = calendrierData;

  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="flex justify-between">
          <div className="mt-8 space-y-10">
            <div className="text-5xl">
              {dayjs(date).locale("fr").format("dddd DD MMM")}
            </div>
            <h1>{title.fr}</h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex justify-end"
          >
            <Image
              src={urlFor(mainImage).url()}
              width="800"
              height="600"
              alt={title}
              objectFit="cover"
              className=""
            />
          </motion.div>
        </div>
      </motion.main>
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

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;

  const calendrierData = await sanityClient.fetch(calendrierQuery, { slug });

  return {
    props: {
      calendrierData,
    },
  };
};
