import { useWindowSize } from "./hooks";
import { use100vh } from "react-div-100vh";
import { useEffect, useState } from "react";

export function Geo() {
  const [shape, setShape] = useState("");
  const width = useWindowSize().width;
  const height = useWindowSize().height;

  useEffect(() => {
    function mediaSize() {
      switch (true) {
        case width >= 900:
          return "polygon(0 0, 0 100vh, 47vw 100vh, 22vw 0)";
        case width > 480 && width < 899:
          return "polygon(0 0, 0 100vh, 58vw 100vh, 36vw 0)";
        case width > 220 && width < 479:
          return "polygon(0 0, 0 100vh, 62vw 100vh, 34vw 0)";
        default:
          return "polygon(0 0, 0 100vh, 66% 100vh, 36% 0)";
      }
    }

    setShape(mediaSize());

    if (width || height) {
      setShape(mediaSize());
    }
  }, [width, height]);

  return {
    rectangle: "polygon(0 0, 0 100vh, 100% 100vh, 100% 0)",
    rectangleFirstLoad: "polygon(0 0, 0 100vh, 47vw 100vh, 45vw 0)",
    polygon: shape,
  };
}
