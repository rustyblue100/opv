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
      layout="position"
    >
      <motion.div
        layout="position"
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
        exit={{ opacity: 1, clipPath: geo().rectangle }}
        className={`h-screen bg-opv-pink-500 will-change-auto`}
      >
        <div className="flex flex-col min-h-screen h-full w-[calc(100vw-100px)] 2xl:w-[1440px] z-50 overflow-scroll px-10">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
