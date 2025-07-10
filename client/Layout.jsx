import React, { useEffect } from "react";
import Header from "./src/Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./src/Components/Footer";
import Topvar from "./src/Components/Topvar";
import Cards from "./src/Components/Cards";
import Imagesec from "./src/Components/Imagesec";
import BackEndUrl from "./src/utils/BackEndUrl";
import axios from "axios";
import Home from "./src/Components/Home";
import VideoCards from "./src/Components/VideoCards";
import Imageslide from "./src/Components/imageslide";

const Layout = () => {
  return (
    <>
      <Header />
      <Topvar />
      <Cards />
      <Imageslide/>
      <VideoCards/>
      <Home />
      <Imagesec />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
