import { useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { Context } from "../components/Context";
import { Geo } from "./geoMetrical";
import { useMedia } from "./hooks";
import { useRouter } from "next/router";

export const AnimationSlider = () => {
  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;
  const distance = useContext(Context).distanceFromLeftBorderWindow;

  const controls = useAnimation();
  const storage = globalThis?.sessionStorage;
  const prevPath = storage && storage.getItem("prevPath");
  const route = useRouter().asPath;

  const width = useMedia();

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  useEffect(() => {
    const defaultTransition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    };

    async function sequenceClicked() {
      await controls.start({
        clipPath: prevPath !== "/en-CA" ? rectangle : polygon,
        x: prevPath !== "/en-CA" ? 0 : distance,
        transition: defaultTransition,
      });
      controls.start({
        clipPath: route === "/" ? polygon : rectangle,
        x: prevPath !== "/en-CA" ? 0 : distance,
        transition: defaultTransition,
      });
    }

    async function sequenceHovered() {
      await controls.start({
        x: distance,
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.6,
        },
      });
    }

    async function sequenceNotHovered() {
      await controls.start({ x: 0, transition: defaultTransition });
    }

    switch (true) {
      case linkMenuClicked && !menuHover:
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
  }, [
    controls,
    linkMenuClicked,
    menuHover,
    rectangle,
    polygon,
    distance,
    prevPath,
    route,
  ]);

  return controls;
};

export const AnimationFullBody = () => {
  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;
  const distance = useContext(Context).distanceFromLeftBorderWindow;

  const controls = useAnimation();
  const storage = globalThis?.sessionStorage;
  const prevPath = storage && storage.getItem("prevPath");
  const route = useRouter().asPath;

  const width = useMedia();

  const rectangle = Geo().rectangle;
  const polygon = Geo().polygon;

  useEffect(() => {
    const defaultTransition = {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    };

    async function sequenceClicked() {
      await controls.start({
        clipPath: rectangle,
        x: 0,
        transition: defaultTransition,
      });
    }

    async function sequenceHovered() {
      await controls.start({
        x: distance,
        transition: defaultTransition,
      });
    }

    async function sequenceNotHovered() {
      await controls.start({ x: 0, transition: defaultTransition });
    }

    switch (true) {
      case linkMenuClicked && !menuHover:
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
  }, [controls, linkMenuClicked, menuHover, rectangle, polygon, distance]);

  return controls;
};
