import { useState } from "react";
import useLayoutEffect from "./use-isomorphic-layout-effect";

export const useMedia = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width;
};
