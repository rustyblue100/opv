import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Context } from "../components/Context";
import Navigation from "./Navigation";
import SpotLights from "./SpotLights";

const Layout: NextPage<any> = ({ children }) => {
  const [menuHover, setMenuHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleOnMouseLeave = () => {
    setMenuHover(false);
    setClicked(false);
  };

  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <div className="absolute top-5 right-[70px]">
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0 }}
          className=" relative w-full sm:w-[371px] sm:h-[121px] lg:w-[501px] lg:h-[171px]"
        >
          <Link href="/">
            <a>
              <Image
                src="/logo-opv.jpeg"
                layout="fill"
                objectFit="contain"
                alt="OPV"
              />
            </a>
          </Link>
        </motion.div>
      </div>

      <div
        className="flex justify-between w-full absolute"
        onMouseOver={() => setMenuHover(true)}
        onMouseLeave={handleOnMouseLeave}
      >
        <div className="flex-1 pr-96">
          <Navigation setClicked={setClicked} />
        </div>

        <div className="">
          <SpotLights />
        </div>
      </div>

      <Context.Provider value={{ menuHover, clicked }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default Layout;
