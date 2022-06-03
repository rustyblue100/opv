import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Geo } from "../utils/geoMetrical";
import { AnimationSlider } from "../utils/animations";

const BodySlider = () => {
  const animations = AnimationSlider();

  const controls = useAnimation();

  return (
    <div
      style={{ clipPath: Geo().polygon }}
      /*       
      animate={animations}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      exit={{ opacity: 1, transition: { duration: 0.1 } }} */
      className="fixed top-0  will-change-auto ml-[100px] h-screen  w-[1440px] bg-opv-pink-500"
    >
      <div>
        <Image
          className="bg-opv-pink-500 opacity-50"
          src="/bg-3.png"
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          alt="OPV"
        />
      </div>
    </div>
  );
};

export default BodySlider;