import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../../components/BodyFull";
import CalendarCell from "../../components/CalendarCell";
import Header from "../../components/Header";
import { sanityClient } from "../../lib/sanityClient";
import { NextPage } from "next";
import { Calendrier } from "../../typings";

interface IProps {
  calendrier: [Calendrier];
}

const calendrier: NextPage<IProps> = ({ calendrier }) => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>Calendrier</Header>
        <h2 className="h2">Janvier 2022</h2>

        <div className="">
          {calendrier?.map((cal) => (
            <CalendarCell key={cal._id} data={cal} />
          ))}
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default calendrier;

export async function getStaticProps() {
  const fetchCalendar = `*[_type =="calendrier"] | order(date asc){
      _id,
      title,
      "slug":slug.current,
      artiste[]->,
      description,
      complet,
      prix,
      date,
      mainImage,
      "recurrents":evenements->{
        title,
        mainImage,
        artiste[]->,
        description,
        "slug":slug.current
      }, 
    } `;

  const calendrier = await sanityClient.fetch(fetchCalendar);

  return {
    props: {
      calendrier,
    },
  };
}
