import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

interface IProps {
  clicked: boolean;
  setClicked: (open: boolean) => void;
  setMenuHover: (open: boolean) => void;
  handleOnMouseLeave: () => {
    setClicked: (open: boolean) => void;
    setMenuHover: (open: boolean) => void;
  };
}

const Navigation: NextPage<IProps> = ({
  setClicked,
  clicked,
  handleOnMouseLeave,
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
    <div className="flex justify-start items-center w-2 py-48 pl-24 sm:pr-[0vw] lg:pr-[40vw] xl:pr-[0vw] -ml-24">
      <motion.ul
        variants={stagger}
        initial="hidden"
        animate="visible"
        className={`min-w-[200px] text-opv-pink-900 text-lg sm:text-2xl  leading-[30px]  sm:leading-[43px] capitalize z-10 ${
          clicked && "z-0"
        }`}
      >
        {menu.map((menuItem, i) => {
          const { nom, slug }: { nom: string; slug: string } = menuItem;

          return (
            <motion.li
              key={i}
              variants={item}
              onHoverStart={() => setMenuHover(true)}
            >
              <Link href={slug}>
                <a
                  className="hover:text-opv-pink-500 "
                  onClick={handleClicked}

                  /*    onMouseEnter={handleOnMouseLeave} */
                >
                  {nom}
                </a>
              </Link>
            </motion.li>
          );
        })}
        <motion.li
          variants={item}
          className="text-gray-500  self-start  p-1 text-lg hover:text-opv-pink-500"
        >
          <a className=""></a>
          <Link href="/">EN</Link> | <Link href="/">FR</Link>
        </motion.li>
      </motion.ul>

      <div className="text-white text-2xl leading-[40px] absolute left-28 w-80 hidden md:block">
        <div className="-rotate-90 text-center ">
          <p className="text-[16px]">☆ Prochain Évènement ☆</p>
          <Marquee
            speed={8}
            gradient={false}
            className=" text-opv-pink-500 cursor-pointer  hover:text-opv-pink-900 "
          >
            Les Goules - 24 juin 19h30
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
