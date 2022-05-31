import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CalendarCell = () => {
  return (
    <div className="relative">
      <div className="flex justify-between flex-row py-6 w-full">
        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute top-0 border-t border-opv-black w-full"
        ></motion.hr>

        <div className="flex-1">
          <div className="text-3xl font-bold">vendredi</div>
          <div className="text-6xl font-normal">
            03
            <small className="align-top text-xs relative top-1s">Janvier</small>
          </div>
        </div>
        <div className="flex-1 border-l border-opv-black pl-5">
          <div className="  text-xl font-bold">19h:30</div>
          <div className="text-4xl font-normal mb-10">Les Goules</div>

          <div className="flex">
            <Image
              className="flex-1"
              src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay0xNzAtcG9tLTgwOTcuanBn.jpg"
              width="200"
              height="200"
              objectFit="cover"
              alt="band"
            />
            <div className=" flex-1 p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              suscipit at esse voluptatum numquam. Numquam quia quo, ullam saepe
              quaerat suscipit dolores officiis consectetur sint sequi
              perferendis doloremque culpa exercitationem.
              <div className="mt-3 text-sm">
                Musiciens: Jf-Batteur / Marc-Guitariste
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCell;
