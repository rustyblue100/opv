import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodySlider from "../components/BodySlider";
import Head from "next/head";
import { useContext } from "react";
import { Context } from "../contexts/Context";

const Home: NextPage = () => {
  const meta = useContext(Context)?.meta;

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BodySlider />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [])),
    },
  };
};
