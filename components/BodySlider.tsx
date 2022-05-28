import { NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Context";
import { motion, useAnimation } from "framer-motion";

const BodySlider: NextPage = () => {
  const menuHover = useContext(Context).menuHover;
  const controls = useAnimation();

  console.log(menuHover);

  const slideVariant = {
    init: {
      x: 120,
      transition: {
        duration: 1.3,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    anim: {
      x: 270,
      transition: {
        duration: 1.3,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <motion.div
      variants={slideVariant}
      initial="init"
      animate={menuHover ? "anim" : "init"}
    >
      <motion.div
        layoutId="slider"
        initial={{
          opacity: 1,
          clipPath: `polygon(0 0,100% 0,100% 100%,0% 100%)`,
        }}
        animate={{
          opacity: 1,
          clipPath: `polygon(0 0,60% 0,100% 100%,0% 100%)`,
        }}
        transition={{
          duration: 1.8,
          ease: [0.19, 1, 0.22, 1],
        }}
        exit={{
          opacity: 1,
        }}
        className={`h-screen relative  max-w-[50%] bg-opv-pink-500`}
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
          <Image
            className="bg-opv-pink-500 opacity-40"
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
