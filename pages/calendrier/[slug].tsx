import { motion } from "framer-motion";
import { GetStaticPaths, NextPage } from "next";
import { useState } from "react";
import BodyFull from "../../components/BodyFull";
import Header from "../../components/Header";
import { sanityClient } from "../../lib/sanityClient";

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
    imageUrl?: string;
    complet?: boolean;
    prix?: number;
    date: string;
  }[];
}

const EventDetails: NextPage<IProps> = ({ calendrierData }) => {
  const { title }: any = calendrierData;
  console.log(title.fr);

  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>{title.fr}</Header>
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
  "imageUrl": mainImage.asset->url,
  "recurrents":evenements->{
  title,
  "imageUrl": mainImage.asset->url,
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
