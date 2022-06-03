import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
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
      className="mt-48 pt-10 font-bold "
    >
      <div className="flex justify-between items-center border-t border-opv-black">
        <div className="flex-1 flex justify-betwwen items-center uppercase text-opv-black gap-3">
          <Image
            width="36"
            height="36"
            objectFit="contain"
            alt="facebook"
            src="https://www.seekpng.com/png/full/18-185778_facebook-f-logo-png-transparent-background-facebook-icon.png/png/full/18-185778_facebook-f-logo-png-transparent-background-facebook-icon.png"
          ></Image>

          <motion.div variants={item} className="">
            Nous joindre
          </motion.div>

          <motion.div variants={item} className="font-bold ">
            Politique de condidentialité
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
          className="ml-auto w-[180px]"
        >
          <Image
            src="/logo-footer.png"
            width="200"
            height="100"
            objectFit="contain"
            alt="logo"
          />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
