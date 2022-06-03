import { useLayoutEffect, useState } from "react";

export const useMedia = () => {
  const [width, setWidth] = useState(null);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width;
};
