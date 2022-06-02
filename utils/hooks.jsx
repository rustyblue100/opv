import { useAnimation } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Context } from "../components/Context";
import { Geo } from "../utils/geoMetrical";

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

export const useSequence = () => {
  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;

  const [animate, setAnimate] = useState("");

  const controls = useAnimation();

  const width = useMedia();

  const mobile = 768;

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  const defaultTransition = {
    type: "tween",
    ease: [0.19, 1, 0.22, 1],
    duration: 1,
  };

  useEffect(() => {
    async function sequenceClicked() {
      await controls.start({
        x: width > mobile ? 212 : 0,
        transition: defaultTransition,
      });
      await controls.start({
        x: width > mobile ? 0 : 0,
        transition: defaultTransition,
      });
    }

    async function sequenceHovered() {
      await controls.start({ x: width > mobile ? 212 : 0 });
      controls.stop();
    }

    async function sequenceNotHovered() {
      await controls.start({ x: width > mobile ? 0 : 0 });
      controls.stop();
    }

    console.log({ linkMenuClicked });

    switch (true) {
      case linkMenuClicked && menuHover:
        sequenceClicked();
        break;
      /*       case !linkMenuClicked && menuHover:
        sequenceHovered();
        break; */
      default:
        /*   sequenceHovered(); */
        break;
    }
  }, [width, controls, linkMenuClicked, menuHover, rectangle]);

  return controls;
};
