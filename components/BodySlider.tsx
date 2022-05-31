import { NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Context";
import { motion } from "framer-motion";

const BodySlider: NextPage = () => {
  const menuHover = useContext(Context).menuHover;

  const slideVariant = {
    init: {
      x: 312,
      opacity: 1,
    },
    anim: {
      x: 312,
      opacity: 1,
    },

    anim2: {
      x: 100,
      opacity: 1,
    },

    exit: { opacity: 1 },
  };

  const polygon = `polygon(0 0, 0 100vh, 48vw 100vh, 27vw 0)`;
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
      className="absolute top-0 left-0 will-change-auto "
      layoutId="sliderWrapper"
    >
      <motion.div
        layoutId="slider"
        initial={{
          opacity: 1,
          clipPath: rectangle,
        }}
        animate={{
          opacity: 1,
          clipPath: polygon,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        exit={{
          opacity: 1,
        }}
        className={`h-screen relative -left-[100px] w-[1440px]  bg-opv-pink-500 max-w-full  will-change-auto md:left-[unset] `}
        style={{
          backfaceVisibility: "hidden",
          transform: "translate3d(0,0,0)",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.3,
          }}
          exit={{ opacity: 0 }}
        >
          <Image
            className="bg-opv-pink-500 opacity-50"
            src="/bg-3.png"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            alt="OPV"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BodySlider;
