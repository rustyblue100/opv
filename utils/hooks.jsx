import { useEffect, useState } from "react";

export const useMedia = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width;
};
