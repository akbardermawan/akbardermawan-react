import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Intro from "../components/home/Intro";
import Project from "../components/home/Project";

// import { ComputersCanvas } from "../components/canvas";

const Home = () => {
  return (
    <div>
      <Intro />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
