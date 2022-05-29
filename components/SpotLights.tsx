import Image from "next/image";
import { useContext } from "react";
import { Context } from "./Context";
import { motion } from "framer-motion";
import { NextPage } from "next";

interface IProps {
  menuHover: boolean;
}

const Spotlights: NextPage<IProps> = ({ menuHover }) => {
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
    <motion.div className=" grid grid-cols-3 h-full">
      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${!menuHover && "show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 1.8,
        }}
        exit="exit"
        className="col-span-1 md:ml-10 sm:max-w-[75px] md:max-w-[75px] 2md:max-w-[100px] lg:max-w-full"
      >
        <Image
          src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDM3LWZlbGl4LTE1NS5qcGc.jpg"
          width="150"
          height="150"
          alt="show"
          className={`${menuHover && "mask"} rounded-full`}
        />
      </motion.div>

      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${!menuHover && "show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 0.4,
        }}
        exit="exit"
        className="col-span-2 justify-self-end sm:max-w-[150px]  md:max-w-[150px] 2md:max-w-[180px] lg:max-w-full"
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
          repeat: !menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 1.1,
        }}
        exit="exit"
        className="col-span-2 md:ml-20 sm:max-w-[100px]  md:max-w-[100px] 2md:max-w-[120px] lg:max-w-full"
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
