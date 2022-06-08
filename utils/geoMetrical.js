import { useWindowSize } from "./hooks";
import { use100vh } from "react-div-100vh";
import { useEffect, useState } from "react";

export function Geo() {
  const [shape, setShape] = useState("");
  const width = useWindowSize().width;

  console.log(width);

  useEffect(() => {
    function mediaSize() {
      switch (true) {
        case width >= 1536:
          return "polygon(0 0, 0 100vh, 56% 100vh, 26% 0)";
        case width > 900 && width < 1535:
          return "polygon(0 0, 0 100vh, 45vw 100vh, 20vw 0)";
        case width > 480 && width < 899:
          return "polygon(0 0, 0 100vh, 58vw 100vh, 36vw 0)";
        case width > 220 && width < 479:
          return "polygon(0 0, 0 100vh, 67vw 100vh, 40vw 0)";
        default:
          return "polygon(0 0, 0 100vh, 66% 100vh, 36% 0)";
      }
    }

    setShape(mediaSize());

    if (width) {
      setShape(mediaSize());
    }
  }, [width]);

  return {
    rectangle: "polygon(0 0, 0 100vh, 100% 100vh, 100% 0)",
    rectangleFirstLoad: "polygon(0 0, 0 100vh, 47vw 100vh, 45vw 0)",
    polygon: shape,
  };
}

//return `polygon(0 0, 0 ${heightVH ? heightVH : "100vh" }, 45vw ${heightVH ? heightVH : "100vh"}, 20vw 0)`;
