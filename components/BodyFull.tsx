import { LayoutGroup, motion } from "framer-motion";
import { NextPage } from "next";
import { AnimationFullBody } from "../utils/animations";
import { Geo } from "../utils/geoMetrical";
import Footer from "./Footer";
import { useContext } from "react";
import { Context } from "../components/Context";
import { useRouter } from "next/router";
import { use100vh } from "react-div-100vh";

interface Iprops {
  children: React.ReactNode;
}

const BodyFullSlider: NextPage<Iprops> = ({ children }) => {
  const heightVH = use100vh();

  const animations = AnimationFullBody();
  const appContext = useContext(Context);

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  const route = useRouter();

  return (
    <motion.div
      layout="position"
      layoutId="sliderWrapper"
      initial={{ clipPath: "polygon(0 0, 0 100vh, 100% 100vh, 100% 0)" }}
      animate={{ clipPath: "polygon(0 0, 0 100vh, 100% 100vh, 100% 0)" }}
      transition={{ duration: 0.6, type: "tween", ease: "easeInOut" }}
      exit={{
        clipPath:
          route.asPath === "/" || route.asPath === "/en-CA"
            ? polygon
            : rectangle,
      }}
      className="relative scale-x-100  bg-opv-pink-500 px-0 md:ml-[40px] xl:ml-[100px] xl:px-0"
      style={{
        marginLeft: appContext?.menuHover
          ? appContext!.distanceFromLeftBorderWindow
          : 100,

        transition: "background-color .4s linear",
        minHeight: heightVH ? heightVH : "100vh",
      }}
    >
      <motion.div
        className="flex min-h-screen flex-col px-5 md:w-[calc(100vw-40px)] lg:px-10 xl:w-[calc(100vw-100px)] "
        style={{ minHeight: heightVH ? heightVH : "100vh" }}
      >
        <motion.div className="flex-1">{children}</motion.div>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default BodyFullSlider;
