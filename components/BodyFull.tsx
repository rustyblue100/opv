import { motion, MotionConfig } from "framer-motion";
import { NextPage } from "next";
import { Geo } from "../utils/geoMetrical";
import { AnimationFullBody } from "../utils/animations";
import Footer from "./Footer";

interface Iprops {
  children: React.ReactNode;
}

const BodyFullSlider: NextPage<Iprops> = ({ children }) => {
  const animations = AnimationFullBody();

  const storage = globalThis?.sessionStorage;
  const prevPath = storage && storage.getItem("prevPath");

  return (
    <motion.div
      key="body"
      style={{ clipPath: Geo().rectangle }}
      animate={animations}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1], type: "tween" }}
      exit={{ opacity: 1 }}
      className="fixed top-0  will-change-auto ml-[100px] h-screen bg-opv-pink-500 "
      layoutId="sliderWrapper"
    >
      <div className="flex flex-col min-h-screen h-full  w-[calc(100vw-100px)] 2xl:w-[1440px] z-50 overflow-scroll px-5 lg:px-10">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default BodyFullSlider;
