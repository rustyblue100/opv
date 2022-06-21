import dayjs from "dayjs";
import "dayjs/locale/fr";
import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import BodyFull from "../../components/BodyFull";
import { sanityClient, urlFor } from "../../lib/sanityClient";
import { Calendrier } from "../../typings";
import { PortableText } from "../../lib/sanityClient";

interface IProps {
  calendrierData: Calendrier;
}

const EventDetails: NextPage<IProps> = ({ calendrierData }) => {
  const { title, mainImage, date, description }: any = calendrierData;

  return (
    <BodyFull>
      <motion.article
        className=" mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <div className="max-w-24 flex-1 px-5">
            <div className="mb-2 text-5xl">
              {dayjs(date).locale("fr").format("dddd DD MMMM")}{" "}
              {dayjs(date).locale("fr").format("HH")}h
              {dayjs(date).locale("fr").format("mm")}
            </div>
            <h1 className="text-2xl">{title.fr}</h1>

            <div className="mt-8">
              <PortableText value={description?.fr} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex justify-end"
          >
            <Image
              src={urlFor(mainImage).url()!}
              width="600"
              height="600"
              alt={title}
              objectFit="cover"
              className=""
            />
          </motion.div>
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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any = params;

  const calendrierData = await sanityClient.fetch(calendrierQuery, { slug });

  if (!calendrierData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      calendrierData,
    },
    revalidate: 60, // 60 seconds
  };
};
