import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <div className="flex justify-start items-center w-2 py-48 pl-24 sm:pr-[0vw] lg:pr-[40vw] -ml-24">
      <motion.ul
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="min-w-[200px] text-opv-pink-900 text-2xl leading-[40px] capitalize "
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

      <div className="text-gray-50 text-2xl leading-[40px] capitalize absolute left-20 w-96">
        <div className="-rotate-90 text-center">
          <p className="text-md">Prochain Évènement </p>
          <Marquee
            speed={8}
            gradient={false}
            className="bg-opv-pink-100 text-black"
          >
            Les Goules - 24 juin 19h30
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
