import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Context } from "../components/Context";
import Navigation from "./Navigation";
import SpotLights from "./SpotLights";
import Burger from "./Burger";
import { useMedia } from "../utils/hooks";

interface Iprops {
  children: React.ReactNode;
}

const Layout: NextPage<Iprops> = ({ children }) => {
  const [menuHover, setMenuHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const width = useMedia();

  const mediaSize = () => {
    switch (true) {
      case width > 900:
        return 212;
      case width > 480 && width < 900:
        return 272;
      default:
        return 212;
    }
  };

  const distanceFromLeftBorderWindow: number = mediaSize();

  function handleOnMouseLeave() {
    setMenuHover(false);
    setClicked(false);
  }

  return (
    <div className="container fixed top-0 left-0 max-w-screen-2xl 3xl:left-1/2 3xl:-translate-x-1/2">
      <Burger menuHover={menuHover} setMenuHover={setMenuHover} />
      <div className="relative grid h-screen grid-flow-col grid-rows-1 justify-between px-5 sm:px-10">
        <motion.div
          className={`-m-[7rem] self-center p-[7rem]`}
          onHoverStart={() => setMenuHover(true)}
          onHoverEnd={handleOnMouseLeave}
        >
          <Navigation
            clicked={clicked}
            setClicked={setClicked}
            setMenuHover={setMenuHover}
          />
        </motion.div>

        <div className="place-self-center ">
          <motion.div
            className={`2md:landscape relative mb-10 mt-0 ml-auto max-w-[200px] sm:mb-0 sm:max-w-[300px] md:max-w-[330px]  2md:max-w-[420px] lg:mt-0 lg:max-w-[480px] xl:max-w-[570px] landscape:mt-0 2md:landscape:mt-5 lg:landscape:mt-0 lg:landscape:xl:max-w-[500px] ${
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
        <div className="fixed top-0 left-0 z-10 overflow-hidden will-change-auto">
          {children}
        </div>
        ç
      </Context.Provider>
    </div>
  );
};

export default Layout;
