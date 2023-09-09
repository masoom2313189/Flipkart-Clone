import React from "react";
import { NavLink } from "react-router-dom";
import "../Sass/Home.scss";
import Navlist from "./Pages/Home/Navlist";
import Slider from "./Pages/Home/Slider";
import BestOfElectronics from "./Pages/Home/BestOfElectronics";
import BeautyFoodToys from "./Pages/Home/BeautyFoodToys";
import GiftsForYourLovedOnes from "./Pages/Home/GiftsForYourLovedOnes";
import HomeDecorFurnishings from "./Pages/Home/HomeDecorFurnishings";

const Home = () => {
  return (
    <>
      <Navlist />
      <Slider />
      <BestOfElectronics />
      <BeautyFoodToys />
      <GiftsForYourLovedOnes />
      <HomeDecorFurnishings />
    </>
  );
};

export default Home;
