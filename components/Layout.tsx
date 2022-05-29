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
    <div className="container max-w-[1400px] mx-auto relative">
      <div className="grid grid-rows-1 grid-flow-col w-full h-screen relative px-10">
        <div
          className="self-center"
          onMouseOver={() => setMenuHover(true)}
          onMouseLeave={handleOnMouseLeave}
        >
          <Navigation setClicked={setClicked} />
        </div>

        <div className="justify-self-end place-self-center">
          <motion.div
            className="relative first-line:-mt-10 mb-10 ml-auto max-w-full  md:max-w-[300px] 2md:max-w-[420px] lg:max-w-[480px]"
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
          >
            <Link href="/">
              <a>
                <Image
                  src="/logo-sharp.png"
                  width="571"
                  height="171"
                  layout="responsive"
                  objectFit="contain"
                  alt="OPV"
                />
              </a>
            </Link>
          </motion.div>

          <div className=" ">
            <SpotLights menuHover={menuHover} />
          </div>
        </div>
      </div>
      <Context.Provider value={{ menuHover, clicked }}>
        <div className="absolute top-0 left-0 z-10">{children}</div>
      </Context.Provider>
    </div>
  );
};

export default Layout;
