import { useState, useEffect, useContext } from "react";
import useLayoutEffect from "./use-isomorphic-layout-effect";
import { Context } from "../components/Context";

export function useWindowSize() {
  const clicked = useContext(Context)?.clicked;

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}
