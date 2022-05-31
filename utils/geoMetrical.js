import { useEffect, useState } from "react";

export function geo() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  console.log(width);

  return {
    rectangle: "polygon(0 0, 0 100vh, 100vw 100vh, 100vw 0)",
    polygon:
      width > 1440
        ? "polygon(0 0, 0 100vh, 56% 100vh, 26% 0)"
        : "polygon(0 0, 0 100vh, 47vw 100vh, 24vw 0)",
  };
}
