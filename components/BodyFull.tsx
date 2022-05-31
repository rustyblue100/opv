import { NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Context";
import { motion, useAnimation } from "framer-motion";

const BodyFullSlider: NextPage<any> = ({ children }) => {
  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;

  const slideVariant = {
    init: {
      x: 312,
    },
    anim: {
      x: 312,
    },

    anim2: {
      x: 100,
    },

    exit: {},
  };

  const polygon = `polygon(0 0, 0 100vh, 70vw 100vh, 27vw 0)`;
  const rectangle = `polygon(0 0, 0 100vh, 100vw 100vh, 100vw 0)`;

  return (
    <motion.div
      variants={slideVariant}
      initial="init"
      animate={`${menuHover ? "anim" : "anim2"}`}
      transition={{
        duration: 1.3,
        ease: [0.19, 1, 0.22, 1],
      }}
      exit="exit"
      className="absolute will-change-auto"
      layoutId="sliderWrapper"
    >
      <motion.div
        layoutId="slider"
        initial={{
          clipPath: polygon,
        }}
        animate={{
          clipPath: rectangle,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        exit={{ clipPath: rectangle }}
        className={`h-screen relative  w-[1440px] bg-opv-pink-500 will-change-auto`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
