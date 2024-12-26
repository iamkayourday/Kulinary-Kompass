import React from "react";
import AboutUs from "./AboutUs";
import SetUsApart from "./SetUsApart";
import Gallery from "./Gallery";
import Header from "./Header"
import Contactus from "./Contactus";
import BackToTop from "./BackToTop";

const Home = () => {
  return (
    <div>
    <Header />
      <AboutUs />
      <SetUsApart />
      <Gallery />
      <Contactus />
      <BackToTop />
    </div>
  );
};

export default Home;
