import { motion } from "framer-motion";
import { useContext } from "react";
import { use100vh } from "react-div-100vh";
import { Context } from "../components/Context";
import { Geo } from "../utils/geoMetrical";
import useRamdomColors from "../utils/useRandomColors";

const BodySlider = () => {
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
        transition: "background-color 1.4s linear",
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
