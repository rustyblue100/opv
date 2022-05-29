import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence initial={true} exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
