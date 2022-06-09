import { motion } from "framer-motion";
import { NextPage } from "next";
import { useContext } from "react";
import { use100vh } from "react-div-100vh";
import { Context } from "../components/Context";
import { Geo } from "../utils/geoMetrical";
import Footer from "./Footer";

interface Iprops {
  children: React.ReactNode;
}

const BodyFullSlider: NextPage<Iprops> = ({ children }) => {
  const heightVH = use100vh();

  const appContext = useContext(Context);

  const rectangle = Geo().rectangle;

  return (
    <motion.div
      layout="position"
      layoutId="sliderWrapper"
      initial={{
        clipPath: rectangle,
        height: heightVH ? heightVH : "100vh",
      }}
      animate={{
        clipPath: rectangle,
        height: heightVH ? heightVH : "100vh",
      }}
      transition={{ duration: 0.6, type: "tween", ease: "easeInOut" }}
      exit={{
        /*         clipPath:
          route.asPath === "/" || route.asPath === "/en-CA"
            ? polygon
            : rectangle, */
        transition: {
          duration: 0.3,
          type: "tween",
          ease: "easeInOut",
        },
      }}
      className="relative bg-opv-pink-500 px-0 xl:px-0"
      style={{
        marginLeft: !appContext?.menuHover
          ? appContext!.distanceLeft
          : appContext!.distanceLeftHover,
        width: `calc(100vw - ${appContext!.distanceLeft}px)`,
      }}
    >
      <motion.div className="flex h-screen flex-col overflow-y-scroll bg-opv-pink-500 px-5 ">
        <motion.div className="flex-1">{children}</motion.div>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
