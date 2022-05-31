import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { geo } from "../utils/geoMetrical";
import { Context } from "./Context";

const BodyFullSlider: NextPage<any> = ({ children }) => {
  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;

  const controls = useAnimation();

  useEffect(() => {
    async function sequenceClicked() {
      await controls.start({ x: 312 });
      controls.start({ x: 100 });
    }

    async function sequenceHovered() {
      await controls.start({ x: 312 });
      controls.stop();
    }

    async function sequenceNotHovered() {
      await controls.start({ x: 100 });
      controls.stop();
    }

    switch (true) {
      case linkMenuClicked:
        console.log(1);
        sequenceClicked();
        break;
      case menuHover:
        console.log(2);
        sequenceHovered();
        break;
      case linkMenuClicked && menuHover:
        console.log(3);
        sequenceClicked();
        break;
      case !linkMenuClicked && menuHover:
        console.log(4);
        sequenceHovered();
        break;
      default:
        console.log("default");
        sequenceNotHovered();
        break;
    }
  }, [controls, linkMenuClicked, menuHover]);

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
