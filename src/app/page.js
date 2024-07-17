"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import axios from "axios";
import Data from "./components/Data";
import Footer from "./components/Footer";
const Properties = () => {
 

  return (
    <div>
      <Hero2 />
       <Data /> 
       <Footer />
    </div>
  );
};

export default Properties;
