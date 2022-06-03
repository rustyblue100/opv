import Image from "next/image";
import { motion } from "framer-motion";
import { Geo } from "../utils/geoMetrical";
import { AnimationSlider } from "../utils/animations";
import { useEffect, useState } from "react";

const BodySlider = () => {
  const animations = AnimationSlider();
  const [randomColors, setRandomColors] = useState("#FFEDED");
  console.log(randomColors);

  useEffect(() => {
    const interval = setInterval(() => {
      const hexValues = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];

      let hex = "#";

      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
      }

      setRandomColors(hex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={animations}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      exit={{ opacity: 1, transition: { duration: 0.4 } }}
      className="fixed top-0 h-screen w-[1440px] will-change-auto md:ml-[100px]"
      layoutId="sliderWrapper"
      style={{
        backgroundColor: randomColors,
        clipPath: Geo().polygon,
        transition: "all 0.3s easeInOut",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.3,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0.5,
        }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <Image
          style={{ clipPath: Geo().polygon }}
          /*     className="bg-opv-pink-500" */
          src="/bg-3.png"
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          alt="OPV"
        />
      </motion.div>
    </motion.div>
  );
};

export default BodySlider;
