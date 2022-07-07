import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodySlider from "../components/BodySlider";

const Home: NextPage = () => {
  return <BodySlider />;
};

export default Home;

/* export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string)),
    },
  };
};
 */
