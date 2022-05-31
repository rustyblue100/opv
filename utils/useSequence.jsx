import { useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { Context } from "../components/Context";

export const useSequence = () => {
  const menuHover = useContext(Context).menuHover;
  const linkMenuClicked = useContext(Context).clicked;

  const controls = useAnimation();

  useEffect(() => {
    async function sequenceClicked() {
      await controls.start({ x: 312 });
      controls.start({ x: 100 });
    }

    async function sequenceHovered() {
      await controls.start({ x: 312 });
      controls.stop();
    }

    async function sequenceNotHovered() {
      await controls.start({ x: 100 });
      controls.stop();
    }

    switch (true) {
      case linkMenuClicked && linkMenuClicked:
        sequenceClicked();
        break;
      case menuHover && menuHover:
        sequenceHovered();
        break;
      case linkMenuClicked && linkMenuClicked && menuHover:
        sequenceClicked();
        break;
      case linkMenuClicked && !linkMenuClicked && menuHover:
        sequenceHovered();
        break;
      default:
        sequenceNotHovered();
        break;
    }
  }, [controls, linkMenuClicked, menuHover]);

  return controls;
};
