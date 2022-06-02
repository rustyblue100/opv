import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../components/BodyFull";
import CalendarCell from "../components/CalendarCell";
import Header from "../components/Header";

const calendrier = () => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <Header>Calendrier</Header>
        <h2 className="h2">Janvier 2022</h2>

        <div className="">
          <CalendarCell />
          <CalendarCell complet={true} />
          <CalendarCell />
          <CalendarCell />
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default calendrier;
