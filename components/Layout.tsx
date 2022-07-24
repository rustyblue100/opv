import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Context } from "../contexts/Context";
import Navigation from "./Navigation";
import SpotLights from "./SpotLights";
import Burger from "./Burger";
import { useWindowSize } from "../utils/hooks";
import { useRouter } from "next/router";

interface Iprops {
  children: React.ReactNode;
}

const Layout: NextPage<Iprops> = ({ children }) => {
  const [menuHover, setMenuHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const width = useWindowSize().width;
  const router = useRouter();

  const mediaSize = () => {
    switch (true) {
      case width! > 1400:
        return 100;
      case width! > 660 && width! < 1399:
        return 40;
      case width! > 210 && width! < 659:
        return 0;
      default:
        return 100;
    }
  };

  const mediaSizeHover = () => {
    switch (true) {
      case width! > 2000:
        return 452;
      case width! > 480 && width! < 1999:
        return 332;
      case width! > 210 && width! < 479:
        return 182;
      default:
        return 232;
    }
  };

  const distanceLeft = mediaSize();
  const distanceLeftHover = mediaSizeHover();

  function handleOnMouseLeave() {
    setMenuHover(false);
    setClicked(false);
  }
  /* 
  useEffect(() => {
    if (router.asPath === "/") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [router]); */

  return (
    <div className="max-w-screen relative">
      <Burger menuHover={menuHover} setMenuHover={setMenuHover} />
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <motion.nav
          onHoverStart={() => setMenuHover(true)}
          onHoverEnd={handleOnMouseLeave}
        >
          <Navigation
            clicked={clicked}
            setClicked={setClicked}
            setMenuHover={setMenuHover}
          />
        </motion.nav>

        <div
          className={`fixed top-0 right-0 min-h-full pr-4 md:pr-10 xl:pr-12 ${
            router.asPath === "/" ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col justify-center">
            <motion.div
              className={`${menuHover && "invisible sm:visible"} `}
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
          value={{
            menuHover,
            clicked,
            distanceLeft,
            distanceLeftHover,
          }}
        >
          <main className="h-screen overflow-hidden">{children}</main>
        </Context.Provider>
      </motion.div>
    </div>
  );
};

export default Layout;
