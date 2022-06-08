import { useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { Context } from "../components/Context";
import { Geo } from "./geoMetrical";
import { useWindowSize } from "./hooks";
import { useRouter } from "next/router";

export const AnimationSlider = () => {
  const appContext = useContext(Context);

  const controls = useAnimation();
  const storage = globalThis?.sessionStorage;
  const prevPath = storage && storage.getItem("prevPath");
  const route = useRouter().asPath;

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  useEffect(() => {
    const defaultTransition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    };

    async function sequenceClicked() {
      await controls.start({
        x: appContext?.distanceFromLeftBorderWindow,
        /*         clipPath: rectangle, */

        transition: defaultTransition,
      });

      await controls.start({
        /*    clipPath: polygon, */
        x: 0,
        transition: defaultTransition,
      });
    }

    async function sequenceHovered() {
      await controls.start({
        x: appContext?.distanceFromLeftBorderWindow,
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.6,
        },
      });
    }

    async function sequenceNotHovered() {
      await controls.start({
        x: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
      });
    }

    switch (true) {
      case appContext?.clicked && !appContext?.menuHover:
        sequenceClicked();
        break;
      case !appContext?.clicked && appContext?.menuHover:
        sequenceHovered();
        break;
      case appContext?.clicked && appContext?.menuHover:
        sequenceHovered();
        break;
      default:
        sequenceNotHovered();
        break;
    }
  }, [controls, appContext, rectangle, polygon, prevPath, route]);

  return controls;
};

export const AnimationFullBody = () => {
  const appContext = useContext(Context);

  const controls = useAnimation();
  const storage = globalThis?.sessionStorage;

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  useEffect(() => {
    const defaultTransition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    };

    async function sequenceClicked() {
      await controls.start({
        x: appContext?.distanceFromLeftBorderWindow,
        transition: defaultTransition,
      });
      await controls.start({
        x: 0,
        transition: defaultTransition,
      });
    }

    async function sequenceHovered() {
      await controls.start({
        x: appContext?.distanceFromLeftBorderWindow,
        transition: defaultTransition,
      });
    }

    async function sequenceNotHovered() {
      await controls.start({ x: 0, opacity: 1, transition: { duration: 0.3 } });
    }

    switch (true) {
      case appContext?.clicked && !appContext?.menuHover:
        sequenceClicked();
        break;
      case !appContext?.clicked && appContext?.menuHover:
        sequenceHovered();
        break;
      case appContext?.clicked && appContext?.menuHover:
        sequenceHovered();
        break;
      default:
        sequenceNotHovered();
        break;
    }
  }, [appContext, controls, rectangle, polygon]);

  return controls;
};
