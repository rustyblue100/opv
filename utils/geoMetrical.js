import { useEffect, useState, useLayoutEffect } from "react";

export function Geo() {
  const [width, setWidth] = useState(1536);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  console.log(width);

  return {
    rectangle: "polygon(0 0, 0 100vh, 100vw 100vh, 100vw 0)",
    rectangleFirstLoad: "polygon(0 0, 0 100vh, 47vw 100vh, 45vw 0)",
    polygon:
      width >= 1536
        ? "polygon(0 0, 0 100vh, 56% 100vh, 26% 0)"
        : "polygon(0 0, 0 100vh, 47vw 100vh, 28vw 0)",
  };
}
