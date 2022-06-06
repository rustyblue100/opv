import Image from "next/image";
import { motion } from "framer-motion";
import { Geo } from "../utils/geoMetrical";
import { AnimationSlider } from "../utils/animations";
import { useEffect, useState, useContext } from "react";
import { Context } from "../components/Context";
import { useWindowSize } from "../utils/hooks";

const BodySlider = () => {
  const animations = AnimationSlider();
  const [randomColors, setRandomColors] = useState("#FFEDED");

  const appContext = useContext(Context);

  useEffect(() => {
    const interval = setInterval(() => {
      const hexValues = ["A", "B", "C", "D", "E", "F"];

      let hex = "#";

      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
      }
      setRandomColors(hex);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      /*      layout="position" */
      layoutId="sliderWrapper"
      initial={{
        opacity: 1,
        x: appContext!.distanceFromLeftBorderWindow,
        /*         clipPath: Geo().polygon, */
      }}
      animate={animations}
      exit={{
        opacity: 1,

        transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
        clipPath: Geo().rectangle,
        backgroundColor: "#FFEDED",
      }}
      className="fixed top-0 h-screen w-full will-change-auto md:ml-[40px]  xl:ml-[100px] iphone_landscape_special:ml-[40px] "
      style={{
        backgroundColor: !appContext!.menuHover ? randomColors : "#FFEDED",
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
        className="relative h-full w-[1000px]"
      >
        <Image
          src="/bg-3.png"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          alt=""
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default BodySlider;
