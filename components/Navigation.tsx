import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import SpotLights from "./SpotLights";
import Marquee from "react-fast-marquee";

interface IProps {
  setClicked: (open: boolean) => void;
}

const Navigation: NextPage<IProps> = ({ setClicked }) => {
  const stagger = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.08,
        ease: "easeInOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.2,
      },
    },
  };

  return (
    <div className="flex justify-start items-center w-[0px]">
      <div className="flex-1">
        <motion.ul
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-grow-1 h-screen pl-14 text-opv-pink-900 text-2xl leading-[40px] flex flex-col justify-center fixed capitalize "
        >
          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500 -z-50"
          >
            <Link href="/">Accueil</Link>
          </motion.li>
          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500 -z-50"
          >
            <Link href="/spectacles">Spectacles</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/">Notre Histoire</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/">Photos & vidéos</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/">Infos</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/contact">Nous joindre</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="text-gray-500  self-start  p-1 text-lg hover:text-opv-pink-500"
          >
            <Link href="/">EN</Link> | <Link href="/">FR</Link>
          </motion.li>
        </motion.ul>
      </div>
      <div className="flex-1 ml-8 pr-24">
        <div className=" h-screen text-gray-50 text-2xl leading-[40px] flex flex-col justify-center fixed items-center capitalize">
          <div className="-rotate-90 w-2/3 text-center">
            <p>Prochain Évènement </p>
            <Marquee
              speed={5}
              gradient={false}
              className="bg-opv-pink-500 text-black"
            >
              Les Goules - 24 juin 2022
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
