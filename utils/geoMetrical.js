import { useWindowSize } from "./hooks";

export function Geo() {
  const width = useWindowSize().width;

  function mediaSize() {
    switch (true) {
      case width >= 1536:
        return "polygon(0 0, 0 100vh, 56% 100vh, 26% 0)";
      case width > 900 && width < 1535:
        return "polygon(0 0, 0 100vh, 45vw 100vh, 20vw 0)";
      case width > 480 && width < 899:
        return "polygon(0 0, 0 100vh, 56vw 100vh, 34vw 0)";
      case width > 319 && width < 479:
        return "polygon(0 0, 0 100vh, 54vw 100vh, 28vw 0)";
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
