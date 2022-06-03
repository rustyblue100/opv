import { motion } from "framer-motion";
import { NextPage } from "next";
import { AnimationFullBody } from "../utils/animations";
import { Geo } from "../utils/geoMetrical";
import Footer from "./Footer";

interface Iprops {
  children: React.ReactNode;
}

const BodyFullSlider: NextPage<Iprops> = ({ children }) => {
  const animations = AnimationFullBody();

  return (
    <motion.div
      style={{ clipPath: Geo().rectangle }}
      animate={animations}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{
        opacity: 1,
        transition: { duration: 0.4, clipPath: Geo().rectangle },
      }}
      className="fixed top-0 will-change-auto md:ml-[100px] h-screen bg-opv-pink-500 "
      layoutId="sliderWrapper"
    >
      <div className="flex flex-col min-h-screen h-full md:w-[calc(100vw-100px)] 2xl:w-[1440px] z-50 overflow-scroll px-5 lg:px-10">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default BodyFullSlider;
