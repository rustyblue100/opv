import { LayoutGroup, motion } from "framer-motion";
import { NextPage } from "next";
import { AnimationFullBody } from "../utils/animations";
import { Geo } from "../utils/geoMetrical";
import Footer from "./Footer";
import { useContext } from "react";
import { Context } from "../components/Context";
import { useRouter } from "next/router";

interface Iprops {
  children: React.ReactNode;
}

const BodyFullSlider: NextPage<Iprops> = ({ children }) => {
  const animations = AnimationFullBody();
  const appContext = useContext(Context);

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  const route = useRouter();

  return (
    <motion.div
      layoutId="sliderWrapper"
      initial={{
        clipPath: rectangle,
        x: appContext!.distanceFromLeftBorderWindow,
      }}
      animate={animations}
      exit={{
        opacity: 1,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
        clipPath:
          route.asPath === "/" || route.asPath === "/en-CA"
            ? polygon
            : rectangle,
      }}
      className="fixed top-0 h-screen w-full scale-x-100 bg-opv-pink-500 px-0 will-change-auto md:ml-[40px] xl:ml-[100px] xl:px-0"
    >
      <div className="z-50 flex h-full min-h-screen flex-col overflow-scroll px-5 md:w-[calc(100vw-40px)] lg:px-10 xl:w-[calc(100vw-100px)] 2xl:w-full">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default BodyFullSlider;
