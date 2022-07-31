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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            malesuada posuere ante. Nulla facilisi. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Mauris porta tortor magna. Mauris
            vel odio at ligula aliquam congue nec elementum dolor. Praesent vel
            odio nunc. Etiam ipsum quam, aliquet eu sapien at, feugiat ultricies
            lectus. In hac habitasse platea dictumst. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nulla egestas tellus purus, quis vehicula nunc hendrerit
            sed.
          </p>

          <p>
            Mauris non ipsum facilisis, finibus mauris ut, efficitur sem.
            Maecenas ultrices pharetra est, eleifend luctus eros posuere sed.
            Fusce vel convallis tortor. Morbi blandit purus vitae imperdiet
            malesuada. Mauris a mi placerat, scelerisque quam mollis, semper
            est. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Curabitur odio arcu, ultrices ut elit eget,
            mollis tincidunt neque. Fusce sit amet leo vel lacus egestas
            imperdiet vel sit amet sapien. Vestibulum bibendum libero at orci
            fermentum consectetur. Ut egestas sit amet tellus vitae mattis. In
            hac habitasse platea dictumst. Ut porttitor, metus id ornare
            iaculis, justo quam sodales risus, vel scelerisque orci elit ut
            tortor. Sed maximus, tortor nec sollicitudin molestie, odio nibh
            blandit nibh, nec pulvinar velit arcu ut neque.
          </p>

          <p>
            Etiam vitae sollicitudin ipsum. Vivamus id dolor varius, faucibus
            magna eu, pellentesque mauris. Suspendisse nec volutpat orci, vel
            egestas dui. Pellentesque nunc elit, ultricies a orci a, imperdiet
            ultrices ligula. Nunc venenatis, ipsum vel interdum varius, dolor
            quam placerat odio, vitae sagittis ligula nulla quis arcu. Quisque
            non elit ultrices, fringilla leo in, vestibulum lacus. Aenean vitae
            mauris bibendum, tempor nunc a, vestibulum mi. Aenean sollicitudin
            leo nec egestas pulvinar. Morbi rutrum iaculis blandit. Maecenas
            dolor metus, egestas sit amet lectus eu, pretium commodo tellus.
            Maecenas eget justo varius, cursus odio sed, interdum purus. Fusce a
            sollicitudin urna. Curabitur pharetra commodo posuere. Sed quis mi
            vitae urna dictum dignissim. Suspendisse et facilisis felis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
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
