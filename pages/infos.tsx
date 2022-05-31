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
        transition={{ duration: 1, delay: 0.3 }}
        className="container px-10 "
      >
        <h1 className="h1">Infos</h1>
      </motion.main>
    </BodyFull>
  );
};

export default infos;
