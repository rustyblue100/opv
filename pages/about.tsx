import React from "react";
import { useRouter } from "next/router";

const About = () => {
  const { locale } = useRouter();

  return <div>{locale === "fr-CA" ? "À propos" : "About"}</div>;
};

export default About;
