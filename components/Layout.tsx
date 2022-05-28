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
      <div className="absolute top-4 right-[3.4vw]">
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
        className="flex justify-between w-full absolute top-0 z-0"
        onMouseOver={() => setMenuHover(true)}
        onMouseLeave={handleOnMouseLeave}
      >
        <div className="flex-1 pr-14">
          <Navigation setClicked={setClicked} />
        </div>

        <div className="relative w-96 flex-1 ml-24">
          <SpotLights menuHover={menuHover} />
        </div>
      </div>

      <Context.Provider value={{ menuHover, clicked }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default Layout;
