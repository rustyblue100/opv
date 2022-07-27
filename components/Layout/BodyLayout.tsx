import { motion } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { use100vh } from "react-div-100vh";
import { Context } from "../../contexts/Context";
import { Geo } from "../../utils/geoMetrical";
import Footer from "../Footer/";
import Image from "next/image";

interface Iprops {
  children: React.ReactNode;
}

const BodyLayout: NextPage<Iprops> = ({ children }) => {
  const heightVH = use100vh();

  const appContext = useContext(Context);
  const route = useRouter();

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  const actionSlider = () => {
    switch (true) {
      case !appContext?.menuHover:
        return appContext?.distanceLeft;
      case appContext?.menuHover:
        return appContext?.distanceLeftHover;
      default:
        return appContext?.distanceLeft;
    }
  };

  return (
    <motion.div
      layout="position"
      layoutId="sliderWrapper"
      initial={{
        clipPath: rectangle,
        WebkitClipPath: rectangle,
        height: heightVH ? heightVH : "100vh",
        marginLeft: actionSlider(),
      }}
      animate={{
        clipPath: rectangle,
        height: heightVH ? heightVH : "100vh",
        marginLeft: actionSlider(),
      }}
      transition={{ duration: 0.6, type: "tween", ease: "easeInOut" }}
      exit={{
        clipPath:
          route.asPath === "/" || route.asPath === "/en" ? polygon : rectangle,
        WebkitClipPath:
          route.asPath === "/" || route.asPath === "/en" ? polygon : rectangle,
        transition: {
          duration: 0.4,
          type: "tween",
          ease: "easeInOut",
          delay: route.asPath === "/" || route.asPath === "/en" ? 0.5 : 0,
        },
      }}
      className="relative bg-opv-pink-500"
      style={{
        marginLeft: actionSlider(),
        width: `calc(100vw - ${appContext?.distanceLeft}px)`,
      }}
    >
      <motion.div
        style={{ height: heightVH ? heightVH : "100vh" }}
        className="flex flex-col overflow-y-scroll bg-opv-pink-500 px-10 "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="w-[120px] md:ml-auto md:w-[180px] "
        >
          <Image
            src="/logo-footer.png"
            width="200"
            height="100"
            objectFit="contain"
            alt="logo"
          />
        </motion.div>
        <motion.div className="-mt-6 flex-1">{children}</motion.div>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default BodyLayout;
