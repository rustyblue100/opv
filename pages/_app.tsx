import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/GeneralLayout";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  const PreviousRoute = () => {
    const { asPath } = router;

    const ref = useRef<string | null>(null);

    useEffect(() => {
      ref.current = asPath;
    }, [asPath]);

    return ref.current;
  };

  return (
    <Layout previousRoute={PreviousRoute}>
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
