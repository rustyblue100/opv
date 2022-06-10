import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextPage } from "next";

interface Iprops {
  complet?: boolean;
}

const CalendarCell: NextPage<Iprops> = ({ complet }) => {
  return (
    <div className="relative ">
      <div className="flex w-full flex-col justify-between overflow-hidden py-6 sm:flex-row ">
        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="absolute top-0 w-full border-t border-opv-black-300"
        ></motion.hr>

        <div className="relative flex-1">
          <div className="mb-2 text-2xl font-bold sm:mb-0 md:text-3xl">
            vendredi
          </div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl font-normal lg:text-6xl"
          >
            03
            <small className="relative top-1 align-top text-xs">Janvier</small>
          </motion.div>

          {complet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 transform border border-opv-pink-1200 p-1 uppercase tracking-wide text-opv-pink-1200 md:text-2xl">
                Complet
              </div>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="relative flex-1 border-opv-black-300 sm:border-l sm:pl-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 5, rotate: -90 }}
            animate={{ opacity: 1, y: 0, rotate: -90 }}
            transition={{ duration: 0.2, delay: 0.9 }}
            className="absolute bottom-6 -left-12 hidden -rotate-90 text-sm font-normal sm:block"
          >
            Entrée: 10$
          </motion.div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-normal md:text-4xl"
            >
              Les Goules
              <div className="mt-1 text-sm">
                Musiciens: Jf-Batteur / Marc-Guitariste
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1.1 }}
              className="mt-0 text-sm font-normal sm:mt-0"
            >
              <div className="md:-rotate-90">19h30</div>
            </motion.div>
          </div>

          <div className="flex flex-col items-start xl:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-[200px]"
            >
              <Image
                className="flex-1"
                src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNzAtcG9tLTgwOTcuanBn.jpg"
                width="400"
                height="400"
                objectFit="cover"
                alt="band"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-lg flex-1 xl:mt-0 xl:px-4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              suscipit at esse voluptatum numquam. Numquam quia quo, ullam saepe
              quaerat suscipit dolores officiis consectetur sint sequi
              perferendis doloremque culpa exercitationem.
            </motion.div>
            <motion.div className="mt-5 block flex-1 text-sm font-bold sm:hidden">
              Entrée: 10$
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarCell;
