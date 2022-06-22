import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence
        initial={router.asPath === "/" ? true : true}
        exitBeforeEnter
        /*    onExitComplete={() => window.scrollTo(0, 0)} */
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
