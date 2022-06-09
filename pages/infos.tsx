import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../components/BodyFull";
import CalendarCell from "../components/CalendarCell";
import Header from "../components/Header";
import Image from "next/image";

const infos = () => {
  return (
    <BodyFull>
      <motion.main
      /*         initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }} */
      >
        {/*         <Header>Infos</Header>

        <div className="mt-10 max-w-[800px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat
          dolores odit nobis vitae cupiditate et magnam laborum error. Ad
          consequatur autem maxime expedita porro nostrum modi ea totam natus.
        </div> */}

        <motion.div
          layoutId="test"
          initial={{ clipPath: "polygon(0 0, 0 100vh, 47vw 100vh, 22vw 0)" }}
          animate={{ clipPath: "polygon(0 0, 0 100vh, 47vw 100vh, 22vw 0)" }}
          transition={{ duration: 1.3 }}
          exit={{ clipPath: "polygon(0 0, 0 100vh, 100% 100vh, 100% 0)" }}
          className="mt-10  h-screen bg-violet-500"
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="relative h-full w-full"
            style={{ minHeight: "100%" }}
          >
            <Image
              src="/bg-3-opacity.png"
              layout="fill"
              objectPosition="center"
              objectFit="cover"
              alt=""
              priority
            />
          </motion.div>
        </motion.div>
      </motion.main>
    </BodyFull>
  );
};

export default infos;
