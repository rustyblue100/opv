import { motion } from "framer-motion";
import { NextPage } from "next";
import { AnimationFullBody } from "../utils/animations";
import { Geo } from "../utils/geoMetrical";
import Footer from "./Footer";
import { useContext } from "react";
import { Context } from "../components/Context";

interface Iprops {
  children: React.ReactNode;
}

const BodyFullSlider: NextPage<Iprops> = ({ children }) => {
  const animations = AnimationFullBody();
  const distance = useContext(Context).distanceFromLeftBorderWindow;

  return (
    <motion.div
      layoutId="sliderWrapper"
      initial={{ x: distance, clipPath: Geo().rectangle }}
      animate={animations}
      exit={{
        opacity: 1,
        transition: { duration: 0.3, type: "tween", ease: "easeInOut" },
      }}
      className="fixed top-0 h-screen bg-opv-pink-500 will-change-auto md:ml-[100px] "
    >
      <div className="z-50 flex h-full min-h-screen flex-col overflow-scroll px-5 md:w-[calc(100vw-100px)] lg:px-10 2xl:w-full">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default BodyFullSlider;
