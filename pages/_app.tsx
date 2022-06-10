import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence
        initial={router.asPath === "/" ? false : true}
        exitBeforeEnter
        /*    onExitComplete={() => window.scrollTo(0, 0)} */
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
