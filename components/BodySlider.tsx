import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { geo } from "../utils/geoMetrical";
import { useSequence } from "../utils/useSequence";
import { useIsPresent } from "framer-motion";

const BodySlider: NextPage = () => {
  const sequence = useSequence();
  const isPresent = useIsPresent();

  console.log(isPresent);

  const slideVariant = {
    init: {
      x: 312,
    },
    anim: {
      x: 312,
    },

    exit: { opacity: 1 },
  };

  return (
    <motion.div
      layout="position"
      variants={slideVariant}
      initial="init"
      animate={sequence}
      transition={{
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      }}
      exit="exit"
      className="absolute will-change-auto "
      layoutId="sliderWrapper"
    >
      <motion.div
        layout="position"
        layoutId="slider"
        initial={{
          opacity: 1,
          clipPath: geo().rectangleFirstLoad,
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
        className={`h-screen relative -translate-x-[100] w-[1440px] bg-opv-pink-500 max-w-full will-change-auto md:translate-x-[0]`}
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
