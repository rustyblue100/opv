import { useWindowSize } from "./hooks";
import { use100vh } from "react-div-100vh";

export function Geo() {
  const width = useWindowSize().width;
  const heightVH = use100vh();

  function mediaSize() {
    switch (true) {
      case width >= 1536:
        return "polygon(0 0, 0 100vh, 56% 100vh, 26% 0)";
      case width > 900 && width < 1535:
        return "polygon(0 0, 0 100vh, 45vw 100vh, 20vw 0)";
      case width > 480 && width < 899:
        return "polygon(0 0, 0 100vh, 56vw 100vh, 34vw 0)";
      case width > 375 && width < 479:
        return "polygon(0 0, 0 100vh, 54vw 100vh, 28vw 0)";
      case width > 220 && width < 374:
        return "polygon(0 0, 0 100vh, 64vw 100vh, 32vw 0)";
      default:
        return "polygon(0 0, 0 100vh, 54vw 100vh, 28vw 0)";
    }
  }

  return {
    rectangle: "polygon(0 0, 0 100vh, 100% 100vh, 100% 0)",
    rectangleFirstLoad: "polygon(0 0, 0 100vh, 47vw 100vh, 45vw 0)",
    polygon: mediaSize(),
  };
}

//return `polygon(0 0, 0 ${heightVH ? heightVH : "100vh" }, 45vw ${heightVH ? heightVH : "100vh"}, 20vw 0)`;
