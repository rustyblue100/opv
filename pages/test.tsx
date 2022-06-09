import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../components/BodyFull";
import CalendarCell from "../components/CalendarCell";
import Header from "../components/Header";
import Spotlights from "../components/SpotLights";
import BodyTest from "../components/BodyTest";

const calendrier = () => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="flex ">
          <BodyTest />
          <Spotlights menuHover={false} />
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default calendrier;
