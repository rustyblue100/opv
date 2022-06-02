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

  const controls = useAnimation();

  const width = useMedia();

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  useEffect(() => {
    const defaultTransition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.6,
    };

    async function sequenceClicked() {
      await controls.start({
        x: 0,
      });
    }

    async function sequenceHovered() {
      await controls.start({
        x: 212,
        transition: defaultTransition,
      });
    }

    async function sequenceNotHovered() {
      await controls.start({ x: 0, transition: defaultTransition });
    }

    /*  console.log({ menuHover });
    console.log({ linkMenuClicked });
 */
    switch (true) {
      case linkMenuClicked && !menuHover:
        console.log("linkMenuClicked");
        sequenceClicked();
        break;
      case !linkMenuClicked && menuHover:
        sequenceHovered();
        break;
      case linkMenuClicked && menuHover:
        sequenceHovered();
        break;
      default:
        sequenceNotHovered();
        break;
    }
  }, [controls, linkMenuClicked, menuHover, rectangle, polygon]);

  return controls;
};
