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
      <button
        onClick={() => setMenuHover(!menuHover)}
        className="absolute top-0 right-0 py-1 pr-4  text-opv-pink-900 md:hidden z-50 tracking-widest"
      >
        <div className="leading-[18px] pl-2">
          {!menuHover ? (
            <div>
              ••
              <br />
              ••
              <br />
              ••
            </div>
          ) : (
            <div>
              •<br />
              •
              <br />•
            </div>
          )}
        </div>
      </button>
      <div className="grid grid-rows-1 grid-flow-col w-full h-screen relative px-5 sm:px-10 justify-between ">
        <div
          className={`self-center`}
          onMouseOver={() => setMenuHover(true)}
          onMouseLeave={handleOnMouseLeave}
        >
          <Navigation setClicked={setClicked} />
        </div>

        <div className="place-self-center">
          <motion.div
            className={`relative mb-10 landscape:mt-0 2md:landscape:mt-5 2md:landscape:md:max-w-[260px] lg:landscape:md:max-w-[480px] lg:landscape:mt-0 sm:mb-0 mt-0 lg:mt-0 ml-auto max-w-[200px] sm:max-w-[300px] md:max-w-[300px] 2md:max-w-[420px] lg:max-w-[480px] xl:max-w-[510px] ${
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
        <div className="absolute top-0 left-0 z-10">{children}</div>
      </Context.Provider>
    </div>
  );
};

export default Layout;
