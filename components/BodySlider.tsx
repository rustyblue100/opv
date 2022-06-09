import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";
import { Geo } from "../utils/geoMetrical";
import { AnimationSlider } from "../utils/animations";
import { useEffect, useState, useContext } from "react";
import { Context } from "../components/Context";
import { useWindowSize } from "../utils/hooks";
import { use100vh } from "react-div-100vh";
import useRamdomColors from "../utils/useRandomColors";

const BodySlider = () => {
  const animations = AnimationSlider();

  const appContext = useContext(Context);
  const heightVH = use100vh();
  const randomColors = useRamdomColors();

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  return (
    <motion.div
      layout="position"
      layoutId="sliderWrapper"
      initial={{ clipPath: polygon }}
      animate={{ clipPath: polygon }}
      transition={{ duration: 0.6, type: "tween", ease: "easeInOut" }}
      exit={{ clipPath: rectangle }}
      className="w-full md:ml-[40px] xl:ml-[100px] iphone_landscape_special:ml-[40px]"
      style={{
        backgroundColor: !appContext?.menuHover ? randomColors : "#FFEDED",
        marginLeft: appContext?.menuHover
          ? appContext!.distanceFromLeftBorderWindow
          : 100,

        transition: "background-color .4s linear",
        minHeight: heightVH ? heightVH : "100vh",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          minHeight: heightVH ? heightVH : "100vh",
        }}
        animate={{
          opacity: 1,
          minHeight: heightVH ? heightVH : "100vh",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        className="relative h-full w-full"
        style={{ clipPath: Geo().polygon, WebkitClipPath: Geo().polygon }}
      >
        <Image
          src="/bg-3-opacity.png"
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
