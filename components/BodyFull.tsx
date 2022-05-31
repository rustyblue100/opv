import { motion } from "framer-motion";
import { NextPage } from "next";
import { geo } from "../utils/geoMetrical";
import { useSequence } from "../utils/useSequence";
import Image from "next/image";
import Footer from "./Footer";

const BodyFullSlider: NextPage<any> = ({ children }) => {
  const sequence = useSequence();

  const slideVariant = {
    init: {
      x: 312,
    },
    anim: {
      x: 312,
    },

    exit: { opacity: 1 },
  };

  return (
    <motion.div
      variants={slideVariant}
      initial="init"
      animate={sequence}
      transition={{
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1],
      }}
      exit="exit"
      className="absolute will-change-auto"
      layoutId="sliderWrapper"
    >
      <motion.div
        layoutId="slider"
        initial={{
          clipPath: geo().polygon,
        }}
        animate={{
          clipPath: geo().rectangle,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        exit={{ clipPath: geo().rectangle }}
        className={`h-screen relative  w-[1440px] bg-opv-pink-500 will-change-auto`}
      >
        <motion.div
          initial={{
            opacity: 0.3,
          }}
          animate={{
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
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
        <div className="flex flex-col min-h-screen h-full max-w-[90%] 2xl:max-w-full z-50 overflow-scroll">
          <div className="flex-1">{children}</div>

          <Footer />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
