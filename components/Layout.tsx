import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Context } from "../components/Context";
import Navigation from "./Navigation";
import SpotLights from "./SpotLights";
import Burger from "./Burger";

interface Iprops {
  children: React.ReactNode;
}

const Layout: NextPage<Iprops> = ({ children }) => {
  const [menuHover, setMenuHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const distanceFromLeftBorderWindow: number = 212;

  function handleOnMouseLeave() {
    setMenuHover(false);
    setClicked(false);
  }

  return (
    <div className="container fixed top-0 left-0 3xl:left-[50%] 3xl:-translate-x-[50%] max-w-screen-2xl">
      <Burger menuHover={menuHover} setMenuHover={setMenuHover} />
      <div className="grid grid-rows-1 grid-flow-col h-screen relative px-5 sm:px-10 justify-between ">
        <motion.div
          className={`self-center p-[7rem] -m-[7rem]`}
          onHoverStart={() => setMenuHover(true)}
          onHoverEnd={handleOnMouseLeave}
        >
          <Navigation
            clicked={clicked}
            setClicked={setClicked}
            setMenuHover={setMenuHover}
          />
        </motion.div>

        <div className="place-self-center">
          <motion.div
            className={`relative mb-10 landscape:mt-0 2md:landscape:mt-5 2md:landscape:md:max-w-[260px] lg:landscape:md:max-w-[480px] lg:landscape:mt-0 sm:mb-0 mt-0 lg:mt-0 ml-auto max-w-[200px] sm:max-w-[300px] md:max-w-[300px] 2md:max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] ${
              menuHover && "invisible sm:visible "
            }`}
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

          <div className="mt-10">
            <SpotLights menuHover={menuHover} />
          </div>
        </div>
      </div>
      <Context.Provider
        value={{ menuHover, clicked, distanceFromLeftBorderWindow }}
      >
        <motion.div className="fixed top-0 left-0 z-10 will-change-auto overflow-hidden">
          {children}
        </motion.div>
        ç
      </Context.Provider>
    </div>
  );
};

export default Layout;
