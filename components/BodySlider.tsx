import { motion } from "framer-motion";
import { useContext } from "react";
import { use100vh } from "react-div-100vh";
import { Context } from "../contexts/Context";
import { Geo } from "../utils/geoMetrical";
import useRamdomColors from "../utils/useRandomColors";
import { useWindowSize } from "../utils/hooks";

const BodySlider = () => {
  const appContext = useContext(Context);
  const heightVH = use100vh();
  const randomColors = useRamdomColors();

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  const width = useWindowSize().width;

  const actionSlider = () => {
    switch (true) {
      case !appContext?.menuHover:
        return appContext!.distanceLeft;
      case appContext?.menuHover:
        return appContext!.distanceLeftHover;
      default:
        return appContext!.distanceLeft;
    }
  };

  return (
    <motion.div
      layout="position"
      layoutId="sliderWrapper"
      initial={{
        clipPath: polygon,
        WebkitClipPath: polygon,
        marginLeft: actionSlider(),
      }}
      animate={{
        clipPath: polygon,
        WebkitClipPath: polygon,
        marginLeft: actionSlider(),
      }}
      transition={{ duration: 0.6, type: "tween", ease: "easeInOut" }}
      exit={{
        clipPath: rectangle,
        WebkitClipPath: rectangle,
        opacity: 1,
        transition: { duration: 0.6, type: "tween", ease: "easeInOut" },
        backgroundColor: "#FFEDED",
        backgroundImage: "",
      }}
      style={{
        backgroundColor: !appContext?.menuHover ? randomColors : "#FFEDED",
        transition: "background-color 1.4s linear",
        marginLeft: actionSlider(),
        minHeight: heightVH ? heightVH : "100vh",
        backgroundImage: "url(/bg-3-opacity.png)",
      }}
      className="[clip-path:polygon(0_0,0_100vh,62vw_100vh,34vw_0)] md:[clip-path:polygon(0_0,0_100vh,47vw_100vh,22vw_0)]"
    ></motion.div>
  );
};

export default BodySlider;
