import React from "react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Iprops {
  menuHover: boolean;
  setMenuHover: (open: boolean) => void;
}

export const Burger: NextPage<Iprops> = ({ menuHover, setMenuHover }) => {
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
      className={`absolute top-0 right-0  left-[unset] py-1 pr-4 xxs:top-2 sm:flex sm:h-full sm:flex-col sm:items-center  sm:justify-center md:left-1 md:right-[unset] xl:left-[unset] xl:right-0 ${"text-opv-pink-900"} z-50 tracking-widest xl:hidden iphone_landscape_special:left-1 iphone_landscape_special:right-[unset]`}
    >
      <div className="pl-2 leading-[18px]">
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
