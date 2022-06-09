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
      initial={{ clipPath: rectangle }}
      animate={{ clipPath: polygon }}
      transition={{ duration: 0.6, type: "tween", ease: "easeInOut" }}
      exit={{
        clipPath: rectangle,
        opacity: 1,
        transition: { duration: 0.6, type: "tween", ease: "easeInOut" },
        backgroundColor: "#FFEDED",
        backgroundImage: "",
      }}
      className="w-full md:ml-[40px] xl:ml-[100px] iphone_landscape_special:ml-[40px]"
      style={{
        backgroundColor: !appContext?.menuHover ? randomColors : "#FFEDED",
        marginLeft: !appContext?.menuHover
          ? appContext!.distanceLeft
          : appContext!.distanceLeftHover,
        minHeight: heightVH ? heightVH : "100vh",
        backgroundImage: "url(/bg-3-opacity.png)",
      }}
    ></motion.div>
  );
};

export default BodySlider;
