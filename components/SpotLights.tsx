import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Context";
import { motion } from "framer-motion";
import { NextPage } from "next";

const Spotlights: NextPage = () => {
  const menuHover = useContext(Context).menuHover;

  const spotlights = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 0.6,
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        dutation: 0.01,
      },
    },
  };

  return (
    <motion.div className="relative">
      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${!menuHover && "show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? 999999999999999 : 0,
          repeatType: "reverse",
          delay: 0.5,
        }}
        exit="exit"
        className=" "
      >
        <Image
          src="https://fastly.4sqi.net/img/general/width960/54255444_x7ZweBJGKxWeqQXQcxE4KRkRWWL2l-PhKbhyQcDnwBY.jpg"
          width="300"
          height="300"
          alt="show"
          className={`${menuHover && "mask"} rounded-full `}
        />
      </motion.div>
      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${!menuHover && "show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? 999999999999999 : 0,
          repeatType: "reverse",
          delay: 1.2,
        }}
        exit="exit"
        className=" "
      >
        <Image
          src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDM3LWZlbGl4LTE1NS5qcGc.jpg"
          width="150"
          height="150"
          alt="show"
          className={` ${menuHover && "mask"} rounded-full`}
        />
      </motion.div>
      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${!menuHover && "show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? 999999999999999 : 0,
          repeatType: "reverse",
          delay: 1,
        }}
        exit="exit"
        className=" "
      >
        <Image
          src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYyMTk1ODI5LXdpa2ltZWRpYS1pbWFnZS1rb3dzNmcxZi5qcGc.jpg"
          width="200"
          height="200"
          alt="show"
          className={`${menuHover && "mask"} rounded-full`}
        />
      </motion.div>
    </motion.div>
  );
};

export default Spotlights;
