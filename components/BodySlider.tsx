import Image from "next/image";
import { motion } from "framer-motion";
import { Geo } from "../utils/geoMetrical";
import { AnimationSlider } from "../utils/animations";
import { useEffect, useState, useContext } from "react";
import { Context } from "../components/Context";

const BodySlider = () => {
  const animations = AnimationSlider();
  const [randomColors, setRandomColors] = useState("#FFEDED");

  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;
  const distance = useContext(Context).distanceFromLeftBorderWindow;

  useEffect(() => {
    const interval = setInterval(() => {
      const hexValues = ["A", "B", "C", "D", "E", "F"];

      let hex = "#";

      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
      }
      setRandomColors(hex);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      layout="position"
      layoutId="sliderWrapper"
      initial={{ opacity: 1, x: distance, width: "100%" }}
      animate={animations}
      exit={{
        opacity: 1,
        transition: { duration: 0.4, type: "tween", ease: "easeInOut" },
        backgroundColor: "#FFEDED",
      }}
      className="fixed top-0 h-screen w-full will-change-auto md:ml-[100px]"
      style={{
        backgroundColor: !menuHover ? randomColors : "#FFEDED",
        clipPath: Geo().polygon,
        transition: "background-color .4s linear",
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
          duration: 1,
          ease: "linear",
        }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <Image
          src="/bg-3.png"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default BodySlider;
