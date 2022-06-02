import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { useEffect } from "react";

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
        <AnimatePresence initial={true} exitBeforeEnter>
          <motion.div
            key={router.asPath}
            className="fixed top-0 left-0 z-10 will-change-auto overflow-hidden"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  );
}

export default MyApp;
