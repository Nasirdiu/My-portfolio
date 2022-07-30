import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Service from "../Service/Service";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "./Contact";
import Experience from "../Experience/Experience";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Service></Service>
      <Portfolio></Portfolio>
      <Contact></Contact>
      
    </div>
  );
};

export default Home;
