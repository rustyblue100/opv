import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../components/BodyFull";
import CalendarCell from "../components/CalendarCell";

const calendrier = () => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="px-10"
      >
        <h1 className="h1">Calendrier</h1>
        <h2 className="text-opv-pink-900 text-3xl uppercase mb-3">
          Janvier 2022
        </h2>

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
