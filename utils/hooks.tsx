import { useEffect, useState } from "react";
import useIsomorphicLayoutEffect from "./use-isomorphic-layout-effect";

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowSize = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined,
  });

  useIsomorphicLayoutEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
