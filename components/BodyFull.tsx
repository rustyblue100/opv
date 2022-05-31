import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { geo } from "../utils/geoMetrical";
import { Context } from "./Context";
import { useSequence } from "../utils/useSequence";

const BodyFullSlider: NextPage<any> = ({ children }) => {
  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;

  const controls = useSequence(linkMenuClicked, menuHover);

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

    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={slideVariant}
      initial="init"
      animate={controls}
      transition={{
        duration: 1.1,
        ease: [0.19, 1, 0.22, 1],
      }}
      exit="exit"
      className="absolute will-change-auto"
      layoutId="sliderWrapper"
    >
      <motion.div
        layoutId="slider"
        initial={{
          clipPath: geo.polygon,
        }}
        animate={{
          clipPath: geo.rectangle,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        exit={{ clipPath: geo.polygon }}
        className={`h-screen relative  w-[1440px] bg-opv-pink-500 will-change-auto overflow-scroll`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
