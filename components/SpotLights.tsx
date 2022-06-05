import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../components/Context";

const Spotlights: NextPage = () => {
  const appContext = useContext(Context);

  const spotlights = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 0.5,
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
    <motion.div className=" grid h-full grid-cols-3">
      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${"show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !appContext?.menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 1.8,
        }}
        exit="exit"
        className="col-span-1 -ml-10 hidden max-w-[55px] xs:block sm:max-w-[75px] md:max-w-[95px] 2md:max-w-[100px] lg:mr-16 lg:max-w-[115px] xl:max-w-full"
      >
        <Image
          src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDM3LWZlbGl4LTE1NS5qcGc.jpg"
          width="170"
          height="170"
          alt="show"
          objectFit="cover"
          className={`${
            appContext?.menuHover && "mask"
          } rounded-full grayscale-[0] `}
        />
      </motion.div>

      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${"show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !appContext?.menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 0.4,
        }}
        exit="exit"
        className="col-span-3 max-w-[130px] justify-self-end xs:max-w-[200px] sm:col-span-2 sm:max-w-[150px] md:max-w-[180px] 2md:max-w-[180px] lg:max-w-[200px] xl:max-w-full"
      >
        <Image
          src="https://fastly.4sqi.net/img/general/width960/54255444_x7ZweBJGKxWeqQXQcxE4KRkRWWL2l-PhKbhyQcDnwBY.jpg"
          width="310"
          height="310"
          alt="show"
          objectFit="cover"
          className={`${
            appContext?.menuHover && "mask"
          } rounded-full grayscale-[0] `}
        />
      </motion.div>

      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${"show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !appContext?.menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 1.1,
        }}
        exit="exit"
        className="col-span-2 hidden max-w-[80px] pl-10 xs:block sm:max-w-[100px] md:max-w-[130px] 2md:max-w-[120px] lg:ml-20 lg:max-w-[150px] xl:max-w-full "
      >
        <Image
          src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYyMTk1ODI5LXdpa2ltZWRpYS1pbWFnZS1rb3dzNmcxZi5qcGc.jpg"
          width="220"
          height="220"
          alt="show"
          objectFit="cover"
          className={`${
            appContext?.menuHover && "mask"
          } rounded-full grayscale-[0] `}
        />
      </motion.div>
    </motion.div>
  );
};

export default Spotlights;
