import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

const Footer = () => {
  const router = useRouter();

  const meta = useContext(Context)?.meta;

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
    <motion.footer
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="mb-4 pt-24 font-bold xl:mt-48 xl:pt-0"
    >
      <div className="flex flex-col-reverse items-center justify-between  border-t border-opv-black md:flex-row">
        <div className="flex flex-1  items-center justify-between gap-3 text-center text-xs uppercase text-opv-black lg:justify-start xl:text-base">
          <div className="max-w-[24px] sm:max-w-[32px]">
            <Image
              width="32"
              height="32"
              objectFit="contain"
              alt="facebook"
              src="https://www.seekpng.com/png/full/18-185778_facebook-f-logo-png-transparent-background-facebook-icon.png/png/full/18-185778_facebook-f-logo-png-transparent-background-facebook-icon.png"
            ></Image>
          </div>

          <motion.div
            variants={item}
            className="transition-all duration-200 hover:text-opv-pink-1200"
          >
            <Link href="/contact">
              {router.locale === "fr" ? "Nous joindre" : "Contact us"}
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="transition-all duration-200 hover:text-opv-pink-1200"
          >
            <Link href="/politique-de-confidentialite">
              {router.locale === "fr"
                ? " Politique de condidentialité"
                : "Privacy Policy"}
            </Link>
          </motion.div>
        </div>

        <div className="flex-1">
          {/*         <motion.div variants={item} className="text-opv-black">
            514-555-5555
          </motion.div>
          <motion.div variants={item} className="text-opv-black ml-auto">
            356 Mont-Royal Ave E, Montreal, QC H2T 1R1
          </motion.div> */}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="w-[120px] md:ml-auto md:w-[200px]"
        >
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <div className="py-8 font-sans text-2xl font-bold uppercase tracking-tight  md:text-[28px] lg:float-right lg:ml-auto">
                {" "}
                <Link href="/" passHref>
                  {meta?.title}
                </Link>
              </div>
              {/*               <Image
                src="/logo-footer.png"
                width="200"
                height="100"
                objectFit="contain"
                alt="logo"
              /> */}
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
