import { motion } from "framer-motion";
import { NextPage } from "next";
import { geo } from "../utils/geoMetrical";
import { useSequence } from "../utils/useSequence";
import Image from "next/image";
import Footer from "./Footer";

const BodyFullSlider: NextPage<any> = ({ children }) => {
  const sequence = useSequence();

  const storage = globalThis?.sessionStorage;
  const prevPath = storage && storage.getItem("prevPath");

  return (
    <motion.div
      initial={{
        x: 312,
      }}
      animate={sequence}
      transition={{
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1],
      }}
      exit={{ opacity: 1 }}
      className="absolute will-change-auto"
      layoutId="sliderWrapper"
      layout="position"
    >
      <motion.div
        layout="position"
        layoutId="slider"
        initial={{
          clipPath:
            prevPath === "/en-CA" || prevPath === "/"
              ? geo().polygon
              : geo().rectangle,
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
        <div className="flex flex-col min-h-screen h-full w-[calc(100vw-100px)] 2xl:w-[1440px] z-50 overflow-scroll px-5 lg:px-10">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
