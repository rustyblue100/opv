import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
