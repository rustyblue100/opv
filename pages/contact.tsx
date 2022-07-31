import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import BodyFull from "../components/Layout/BodyLayout";
import Header from "../components/Header/Header";

const contact = () => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>
          <h1 className="h1">Contact</h1>
          <hr className="mt-4 w-full  border-opv-black-300"></hr>
        </Header>

        <div className="mt-10 ">Écrivez-nous!</div>

        <div className="mt-10 text-opv-black">514-758-4967</div>

        <div className="mt-10 text-opv-pink-1200 underline">
          <a
            href="mailto:sebastienfrancisque@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            sebastienfrancisque@gmail.com
          </a>
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default contact;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [])),
    },
  };
};
