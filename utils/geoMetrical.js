import { useState, useLayoutEffect } from "react";

export function Geo() {
  const [width, setWidth] = useState(null);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  function mediaSize() {
    switch (true) {
      case width >= 1536:
        return "polygon(0 0, 0 100vh, 56% 100vh, 26% 0)";
      case width > 660 && width < 1535:
        return "polygon(0 0, 0 100vh, 48vw 100vh, 20vw 0)";
      default:
        return "polygon(0 0, 0 100vh, 54vw 100vh, 30vw 0)";
    }
  }

  return {
    rectangle: "polygon(0 0, 0 100vh, 100vw 100vh, 100vw 0)",
    rectangleFirstLoad: "polygon(0 0, 0 100vh, 47vw 100vh, 45vw 0)",
    polygon: mediaSize(),
  };
}
