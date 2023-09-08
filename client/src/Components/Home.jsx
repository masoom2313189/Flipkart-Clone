import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Home.scss";
import Navlist from "./Pages/Home/Navlist";
import Slider from "./Pages/Home/Slider";
import BestOfElectronics from "./Pages/Home/BestOfElectronics";

const Home = () => {
  return (
    <>
      <Navlist />
      <Slider />
      <BestOfElectronics />
    </>
  );
};

export default Home;
