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
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
      >
        <Header>Nous Joindre</Header>
        <h2 className="h2">Janvier 2022</h2>

        <div className="">
          <CalendarCell />
          <CalendarCell />
          <CalendarCell />
          <CalendarCell />
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default calendrier;
