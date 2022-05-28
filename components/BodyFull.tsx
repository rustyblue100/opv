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
      x: 120,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    anim: {
      x: 270,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  console.log({ menuHover });
  console.log({ linkMenuClicked });
  return (
    <motion.div
      variants={slideVariant}
      initial="init"
      animate={menuHover && linkMenuClicked ? "anim" : "init"}
    >
      <motion.div
        layoutId="slider"
        initial={{
          opacity: 1,
          clipPath: `polygon(0 0,100% 0,100% 100%,0% 100%)`,
        }}
        animate={{
          opacity: 1,
          clipPath: `polygon(0 0,100% 0,100% 100%,0% 100%)`,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        exit={{
          opacity: 1,
        }}
        className={`h-screen relative  max-w-[100%] bg-opv-pink-500`}
      >
        <motion.div
          layoutId="sliderBg"
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          exit={{ opacity: 1 }}
        >
          {/*           <Image
            className="bg-opv-pink-500 opacity-40"
            src="/bg-3.png"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            alt="OPV"
          /> */}
        </motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
