import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../components/BodyFull";
import CalendarCell from "../components/CalendarCell";

const infos = () => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="h1">Infos</h1>

        <div className=""></div>
      </motion.main>
    </BodyFull>
  );
};

export default infos;
