import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { NextPage } from "next";

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
