import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../components/BodyFull";
import CalendarCell from "../components/CalendarCell";
import Header from "../components/Header";

const infos = () => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>Infos</Header>

        <div className="max-w-[800px] mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          minus porro quas deserunt expedita ab earum ea sequi consectetur odit
          quasi, quisquam atque, a maxime illo voluptate eum! Magni, rerum!
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default infos;
