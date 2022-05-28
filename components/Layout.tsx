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
    <div className="container max-w-[1400px] mx-auto ">
      <div className="grid grid-rows-1 grid-flow-col h-screen ml-10 absolute">
        <div
          className="self-center"
          onMouseOver={() => setMenuHover(true)}
          onMouseLeave={handleOnMouseLeave}
        >
          <Navigation setClicked={setClicked} />
        </div>

        <div className="justify-self-end">
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
          >
            <Link href="/">
              <a>
                <Image
                  src="/logo-opv.jpeg"
                  width="571"
                  height="171"
                  objectFit="contain"
                  alt="OPV"
                />
              </a>
            </Link>
          </motion.div>

          <div className=" justify-self-end">
            <SpotLights menuHover={menuHover} />
          </div>
        </div>
      </div>

      <Context.Provider value={{ menuHover, clicked }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default Layout;
