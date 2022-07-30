import { motion } from "framer-motion";
import React from "react";
import BodyFull from "../components/Layout/BodyLayout";
import CalendarCell from "../components/CalendarCell";
import Header from "../components/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const APropos = () => {
  return (
    <BodyFull>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Header>
          <h1 className="h1">À Propos</h1>
          <hr className="mt-4 w-full  border-opv-black-300"></hr>
        </Header>

        <div className="mt-10 max-w-[800px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            cumque temporibus harum fuga rem suscipit laboriosam beatae rerum
            exercitationem nisi, quia itaque consectetur dolor ducimus illo! Hic
            expedita cum deleniti!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            cumque temporibus harum fuga rem suscipit laboriosam beatae rerum
            exercitationem nisi, quia itaque consectetur dolor ducimus illo! Hic
            expedita cum deleniti!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            cumque temporibus harum fuga rem suscipit laboriosam beatae rerum
            exercitationem nisi, quia itaque consectetur dolor ducimus illo! Hic
            expedita cum deleniti!
          </p>
        </div>
      </motion.main>
    </BodyFull>
  );
};

export default APropos;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [])),
    },
  };
};
