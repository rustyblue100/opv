import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import LanguageSwitcher from "../LanguageSwitcher/";
import { sanityClient } from "../../lib/sanityClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface IProps {
  clicked: boolean;
  setClicked: (open: boolean) => void;
  setMenuHover: (open: boolean) => void;
}

const Navigation: NextPage<IProps> = ({ setClicked, setMenuHover }) => {
  const [calendarData, setCalendarData] = useState({
    title: { fr: "", en: "" },
    slug: { current: "" },
    recurrents: { title: { fr: "", en: "" } },
  });

  const [dynamicTitleMenu, setDynamicTitleMenu] = useState([
    {
      title: { fr: "", en: "" },
      slug: { current: "" },
    },
  ]);

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  let date = new Date();
  date.setHours(date.getHours() - 4);

  const today = date.toISOString();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "calendrier" && date >= '${today}' ] | order(date asc)[0]{
        title,
        slug,
        date,
        "recurrents":evenements->{
          title,
          mainImage,
          artiste[]->,
          description,
          "slug":slug.current
        }, 
      }`
      )
      .then((data) => setCalendarData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pages"]{
        title,
        slug,
       
      }`
      )
      .then((data) => {
        setDynamicTitleMenu(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

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

  const staticMenu = [
    {
      title: { fr: "Accueil", en: "Home" },
      slug: { current: "/" },
    },
    {
      title: { fr: "Calendrier", en: "Calendar" },
      slug: { current: "calendrier" },
    },
    {
      title: { fr: "Photos & Vidéos", en: "Photos & videos" },
      slug: { current: "photos" },
    },
  ];

  const handleClicked = () => {
    setClicked(true);
    setMenuHover(false);
  };

  const mergedMenu = staticMenu.concat(...dynamicTitleMenu);

  return (
    <div className="fixed top-0 left-0 flex h-full items-center justify-between">
      <div className="flex h-full items-center pl-4 xs:pl-12">
        {!loading && (
          <motion.ul
            variants={stagger}
            initial="hidden"
            animate="visible"
            className={`capitalize  leading-[30px] text-opv-pink-900 xxs:text-lg xs:text-xl sm:text-lg md:text-2xl md:leading-[43px]  3xl:text-[40px] 
          3xl:leading-[63px]`}
          >
            {mergedMenu.map((menuItemDynamic: any, i: number) => {
              const {
                title,
                slug,
              }: {
                title: { fr: string; en: string };
                slug: { current: string };
              } = menuItemDynamic;

              return (
                <motion.li
                  key={i}
                  variants={item}
                  onHoverStart={() => setMenuHover(true)}
                >
                  <Link href={`/${slug?.current}`}>
                    <a
                      className="hover:text-opv-pink-500 "
                      onClick={handleClicked}
                    >
                      {router.locale === "fr" ? title.fr : title.en}
                    </a>
                  </Link>
                </motion.li>
              );
            })}

            <LanguageSwitcher />
          </motion.ul>
        )}
      </div>

      <div className="text-md -ml-20 hidden max-w-xs flex-1 leading-[40px] text-white sm:block sm:text-xl md:block md:text-2xl">
        <div className="-rotate-90 text-center">
          <p className="text-xs  md:text-[16px]">☆ Prochain Évènement ☆</p>
          <Marquee
            speed={4}
            gradient={false}
            className="mt-0 cursor-pointer text-opv-pink-500 hover:text-opv-pink-900 md:mt-0"
          >
            <Link
              href={`/calendrier/${
                calendarData && calendarData.slug && calendarData.slug.current
                  ? calendarData.slug.current
                  : "/calendrier"
              }`}
              passHref
            >
              <a onClick={handleClicked}>
                {!calendarData.recurrents
                  ? calendarData?.title?.fr
                  : calendarData.recurrents.title.fr}
              </a>
            </Link>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
