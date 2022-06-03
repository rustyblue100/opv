import { motion } from "framer-motion";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Iprops {
  children: string;
}

const Header: NextPage<Iprops> = ({ children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="h1"
    >
      {children}
    </motion.h1>
  );
};

export default Header;
