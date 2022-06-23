import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import LanguageSwitcher from "./LanguageSwitcher";

interface IProps {
  clicked: boolean;
  setClicked: (open: boolean) => void;
  setMenuHover: (open: boolean) => void;
}

const Navigation: NextPage<IProps> = ({
  setClicked,
  clicked,
  setMenuHover,
}) => {
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

  const menu = [
    {
      nom: "Accueil",
      slug: "/",
    },
    {
      nom: "Calendrier",
      slug: "calendrier",
    },
    {
      nom: "Photos & Vidéos",
      slug: "contact",
    },
    {
      nom: "Infos",
      slug: "infos",
    },
    {
      nom: "À propos",
      slug: "calendrier",
    },
    {
      nom: "Nous joindre",
      slug: "contact",
    },
  ];

  const handleClicked = () => {
    setClicked(true);
    setMenuHover(false);
  };

  return (
    <div className="fixed top-0 left-0 flex h-full items-center justify-between">
      <div className="flex h-full items-center pl-4 xs:pl-12">
        <motion.ul
          variants={stagger}
          initial="hidden"
          animate="visible"
          className={`text-md  capitalize leading-[30px] text-opv-pink-900 sm:text-lg md:text-2xl md:leading-[43px]  3xl:text-[40px] 
          3xl:leading-[63px]`}
        >
          {menu.map((menuItem, i) => {
            const { nom, slug }: { nom: string; slug: string } = menuItem;

            return (
              <motion.li
                key={i}
                variants={item}
                onHoverStart={() => setMenuHover(true)}
              >
                <Link href={`${slug}`}>
                  <a
                    className="hover:text-opv-pink-500 "
                    onClick={handleClicked}
                  >
                    {nom}
                  </a>
                </Link>
              </motion.li>
            );
          })}
          {/*           <motion.li
            variants={item}
            className="self-start  p-1  text-lg text-gray-400 hover:text-opv-pink-500"
          >
            <a className=""></a>
            <Link href="/">EN</Link> | <Link href="/">FR</Link>
          </motion.li> */}
          <LanguageSwitcher />
        </motion.ul>
      </div>

      <div className="text-md -ml-20 hidden max-w-xs flex-1 leading-[40px] text-white sm:block sm:text-xl md:block md:text-2xl">
        <div className="-rotate-90 text-center ">
          <p className="text-xs  md:text-[16px]">☆ Prochain Évènement ☆</p>
          <Marquee
            speed={8}
            gradient={false}
            className="mt-2 cursor-pointer text-opv-pink-500 hover:text-opv-pink-900 md:mt-0"
          >
            Les Goules - 24 juin 19h30
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
