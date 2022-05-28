import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Nav from "../components/Navigation";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import BodySlider from "../components/BodySlider";
import SpotLights from "../components/SpotLights";

const Home: NextPage = () => {
  return (
    <div className="">
      <BodySlider />
    </div>
  );
};

export default Home;
