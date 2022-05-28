import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import SpotLights from "./SpotLights";

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
    <div className="flex justify-start items-center w-[300px]">
      <div className="flex-1 pl-14">
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
            <Link href="/">Histoire</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/">Photos</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/">Vidéos</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/">Infos Technique</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/">FAQ</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="hover:text-opv-pink-500"
          >
            <Link href="/contact">Contact</Link>
          </motion.li>

          <motion.li
            onClick={() => setClicked(true)}
            variants={item}
            className="text-gray-500  self-center  p-1 text-lg hover:text-opv-pink-500"
          >
            <Link href="/">En</Link>
          </motion.li>
        </motion.ul>
      </div>
      <div className="flex-1">
        <div className="flex-grow-1 h-screen pl-14 text-gray-50 text-2xl leading-[40px] flex flex-col justify-center fixed capitalize ">
          <h1>Nouvelle</h1>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
