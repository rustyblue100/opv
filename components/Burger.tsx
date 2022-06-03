import React from "react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Iprops {
  menuHover: boolean;
  setMenuHover: (open: boolean) => void;
}

const Burger: NextPage<Iprops> = ({ menuHover, setMenuHover }) => {
  const route = useRouter();

  const stagger = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.08,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
      },
    },
  };

  return (
    <button
      onClick={() => setMenuHover(!menuHover)}
      className={`absolute top-0 right-0 py-1 pr-4 ${
        route.asPath !== "/" ? "text-opv-black" : "text-opv-pink-900"
      } md:hidden z-50 tracking-widest`}
    >
      <div className="leading-[18px] pl-2">
        {!menuHover ? (
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={item}>••</motion.div>
            <motion.div variants={item}>••</motion.div>
            <motion.div variants={item}>••</motion.div>
          </motion.div>
        ) : (
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={item}>•</motion.div>
            <motion.div variants={item}>•</motion.div>
            <motion.div variants={item}>•</motion.div>
          </motion.div>
        )}
      </div>
    </button>
  );
};

export default Burger;
