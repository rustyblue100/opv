import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { geo } from "../utils/geoMetrical";
import { useSequence } from "../utils/useSequence";

const BodySlider: NextPage = () => {
  const sequence = useSequence();

  const slideVariant = {
    init: {
      x: 312,
    },
    anim: {
      x: 312,
    },

    anim2: {
      x: 100,
    },

    exit: { opacity: 1 },
  };

  return (
    <motion.div
      variants={slideVariant}
      initial="init"
      animate={sequence}
      transition={{
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      }}
      exit="exit"
      className="absolute top-0 left-0 will-change-auto "
      layoutId="sliderWrapper"
    >
      <motion.div
        layoutId="slider"
        initial={{
          opacity: 1,
          clipPath: geo().polygon,
        }}
        animate={{
          opacity: 1,
          clipPath: geo().polygon,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        exit={{
          opacity: 1,
        }}
        className={`h-screen relative -left-[100px] w-[1440px] bg-opv-pink-500 max-w-full will-change-auto md:left-[unset]`}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.3,
          }}
          exit={{ opacity: 0 }}
        >
          <Image
            className="bg-opv-pink-500 opacity-50"
            src="/bg-3.png"
            layout="fill"
            objectPosition="top"
            objectFit="cover"
            alt="OPV"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BodySlider;
