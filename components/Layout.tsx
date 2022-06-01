import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Context } from "../components/Context";
import Navigation from "./Navigation";
import SpotLights from "./SpotLights";
import Burger from "./Burger";
import { useRouter } from "next/router";

interface Iprops {
  children: any;
}

const Layout: NextPage<Iprops> = ({ children }) => {
  const [menuHover, setMenuHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const route = useRouter();

  const handleOnMouseLeave = () => {
    setMenuHover(false);
    setClicked(false);
  };

  return (
    <div className="container mx-auto fixed">
      <Burger menuHover={menuHover} setMenuHover={setMenuHover} />
      <div className="grid grid-rows-1 grid-flow-col h-screen relative px-5 sm:px-10 justify-between ">
        <div
          className={`self-center p-[7rem] -m-[7rem]`}
          onMouseOver={() => setMenuHover(true)}
          onMouseLeave={handleOnMouseLeave}
          onClick={() => handleOnMouseLeave}
          onMouseMove={() => setMenuHover(true)}
        >
          <Navigation
            clicked={clicked}
            setClicked={setClicked}
            setMenuHover={setMenuHover}
            handleOnMouseLeave={handleOnMouseLeave}
          />
        </div>

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
      <Context.Provider value={{ menuHover, clicked }}>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence initial={false}>
            <motion.div
              key={route.asPath}
              className="absolute top-0 z-10 will-change-auto"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </AnimateSharedLayout>
      </Context.Provider>
    </div>
  );
};

export default Layout;
