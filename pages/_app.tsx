import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => storePathValues, [router.asPath]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    const prevPath: any = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  return (
    <Layout>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence initial={true} exitBeforeEnter={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  );
}

export default MyApp;
