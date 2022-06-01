import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { NextPage } from "next";

interface Iprops {
  complet: boolean;
}

const CalendarCell: NextPage<Iprops> = ({ complet }) => {
  return (
    <div className="relative">
      <div className="flex justify-between py-6 w-full flex-col sm:flex-row ">
        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="absolute top-0 border-t border-opv-black-300 w-full"
        ></motion.hr>

        <div className="flex-1 relative">
          <div className="text-2xl md:text-3xl font-bold mb-5 sm:mb-0">
            vendredi
          </div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl md:text-6xl font-normal"
          >
            03
            <small className="align-top text-xs relative top-1">Janvier</small>
          </motion.div>

          {complet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              <div className="text-xl text-red-700 border border-red-700 p-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12  tracking-wide uppercase">
                Complet
              </div>
            </motion.div>
          )}
        </div>
        <div className="flex-1 sm:border-l border-opv-black-300 sm:pl-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 5, rotate: -90 }}
            animate={{ opacity: 1, y: 0, rotate: -90 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="text-sm -rotate-90 absolute bottom-6 -left-12 font-bold hidden sm:block"
          >
            Entrée: 10$
          </motion.div>
          <div className="flex sm:justify-between sm:items-center mb-10 flex-col sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl font-normal"
            >
              Les Goules
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="text-lg font-bold mt-1 sm:mt-0"
            >
              19h30
            </motion.div>
          </div>

          <div className="flex flex-col xl:flex-row">
            <Image
              className="flex-1"
              src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNzAtcG9tLTgwOTcuanBn.jpg"
              width="200"
              height="200"
              objectFit="cover"
              alt="band"
            />
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className=" flex-1 mt-4 md:p-4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              suscipit at esse voluptatum numquam. Numquam quia quo, ullam saepe
              quaerat suscipit dolores officiis consectetur sint sequi
              perferendis doloremque culpa exercitationem.
              <div className="mt-3 text-sm">
                Musiciens: Jf-Batteur / Marc-Guitariste
              </div>
            </motion.div>
            <motion.div className="flex-1 text-sm mt-5 font-bold block sm:hidden">
              Entrée: 10$
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCell;
