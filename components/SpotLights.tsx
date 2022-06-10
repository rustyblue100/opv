import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

interface IProps {
  menuHover: boolean;
}

const Spotlights: NextPage<IProps> = ({ menuHover }) => {
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
    <motion.div className="grid h-full grid-cols-3">
      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${"show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 1.8,
        }}
        exit="exit"
        className="col-span-1 -ml-8 hidden max-w-[55px] will-change-auto sm:block sm:max-w-[75px] md:max-w-[75px] 2md:max-w-[100px] lg:-ml-24 lg:max-w-[155px] xl:-ml-36 xl:max-w-[200px] 3xl:max-w-full iphone_landscape:max-w-[50px]"
      >
        <Image
          src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDM3LWZlbGl4LTE1NS5qcGc.jpg"
          width="350"
          height="350"
          alt="show"
          objectFit="cover"
          className={`${
            menuHover && "mask"
          } duration-900 rounded-full grayscale-[0]  transition-all ease-in-out `}
        />
      </motion.div>

      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${"show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 0.4,
        }}
        exit="exit"
        className="col-span-3 max-w-[80px] justify-self-end will-change-auto xxs:max-w-[130px] xs:max-w-[200px] sm:col-span-2 sm:max-w-[150px] md:max-w-[160px] 2md:max-w-[180px] lg:max-w-[240px] xl:max-w-[320px] 3xl:max-w-full iphone_landscape:max-w-[110px]  ipadPro:max-w-[320px]"
      >
        <Image
          src="https://fastly.4sqi.net/img/general/width960/54255444_x7ZweBJGKxWeqQXQcxE4KRkRWWL2l-PhKbhyQcDnwBY.jpg"
          width="550"
          height="550"
          alt="show"
          objectFit="cover"
          className={`${
            menuHover && "mask"
          } rounded-full grayscale-[0] transition-all  duration-150 ease-in-out `}
        />
      </motion.div>

      <motion.div
        variants={spotlights}
        initial="hidden"
        animate={`${"show"}`}
        transition={{
          ease: "easeInOut",
          duration: 1.8,
          repeat: !menuHover ? Infinity : 0,
          repeatType: "reverse",
          delay: 1.1,
        }}
        exit="exit"
        className="col-span-2 hidden max-w-[80px] will-change-auto sm:block sm:max-w-[100px] md:max-w-[110px] 2md:max-w-[120px] lg:ml-4 lg:max-w-[190px] xl:max-w-[220px] 3xl:max-w-full  iphone_landscape:max-w-[100px]"
      >
        <Image
          src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYyMTk1ODI5LXdpa2ltZWRpYS1pbWFnZS1rb3dzNmcxZi5qcGc.jpg"
          width="380"
          height="380"
          alt="show"
          objectFit="cover"
          className={`${
            menuHover && "mask"
          } rounded-full grayscale-[0] transition-all duration-150 ease-in-out`}
        />
      </motion.div>
    </motion.div>
  );
};

export default Spotlights;
