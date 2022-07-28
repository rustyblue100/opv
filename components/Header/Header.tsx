import { motion } from "framer-motion";
import { NextPage } from "next";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface Iprops {
  children: any;
}

const Header: NextPage<Iprops> = ({ children }) => {
  const { query } = useRouter();

  return (
    <motion.div
      initial={!query.i && { opacity: 0, y: -5 }}
      animate={!query.i && { opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export default Header;
