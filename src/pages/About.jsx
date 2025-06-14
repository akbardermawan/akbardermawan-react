import { div } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";

import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";
import Experiences from "../components/Experiences";
import Technologies from "../components/Technologies";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";
import TypeWriter from "../components/TypeWriter";
import { personalInfo } from "../constants/data";
import { FiDownload } from "react-icons/fi";
import InfiniteScroll from "../components/InfiniteScroll";

const About = () => {
  return (
    <div>
      <div className="fixed bottom-12 right-8 z-[1000] flex "></div>
      <div className="flex-row justify-center items-center text-[#0a1a2f] bg-gray-100">
        <div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full overflow-hidden">
          <img
            src="/about.jpg"
            alt="about"
            className=" w-full h-full object-cover object-bottom"
          />
          <p className="absolute text-white bottom-1 left-4 md:bottom-3 md:left-6 md:text-6xl lg:bottom-16 lg:left-20 lg:text-8xl">
            About <span className="font-bold text-blue-600">Me</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-12 mb-15 lg:mb-20  flex flex-col md:flex-row items-center md:items-center justify-center gap-6 px-4">
          <div className="w-full md:w-[40%] flex justify-center items-center">
            <div className="w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[240px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-4xl md:rounded-full overflow-hidden shadow-lg">
              <img
                src="/pf.jpg"
                alt="profile"
                className="w-full h-full object-cover object-center grayscale-0 md:grayscale md:hover:grayscale-0 "
              />
            </div>
          </div>
          <div className="w-full md:w-[60%] text-center md:text-left xl:pt-8 md:pr-2">
            <div>
              <TypeWriter
                text="Akbar Dermawan Mahbubillah"
                speed={80}
                pause={80}
              />
            </div>
            <span className="text-sm  text-purple-950">
              Full Stack Web Developer
            </span>
            <div className="grid grid-cols-2 gap-2 mt-5 mx-auto">
              {personalInfo.map((p, i) => (
                <div key={i} className="text-left text-sm  lg:text-xl">
                  {p.title}{" "}
                  <span className="font-bold text-blue-500">
                    {p.description}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex mt-3">
              <a
                href="/files/CV_Akbar.pdf"
                download
                aria-label="Download Resume"
              >
                <motion.button
                  whileHover={{ backgroundColor: "#2563eb" }} // Tailwind blue-600
                  transition={{ duration: 0.3 }}
                  className="flex w-[140px] lg:w-[160px] h-[25px] lg:h-[30px] rounded-full pl-1 lg:pl-3 border-2 border-blue-600 justify-between items-center"
                >
                  <span className="text-black">Download CV</span>
                  <div className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px] rounded-full bg-blue-600 flex justify-center items-center">
                    <FiDownload className="text-black" />
                  </div>
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full px-8 lg:px-12 mx-auto mb-5">
          <h3 className="text-xl text-gray-700">SKILLS</h3>

          <span className="text-2xl text-black">WHAT I CAN DO</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} service={service} />
            ))}
          </div>
          <div className="mt-2">
            <InfiniteScroll />
          </div>
        </div>
        <div className=" max-w-7xl mx-auto mt-12 mb-15 lg:mb-20  ">
          <div className="px-8">
            <h3 className="text-xl text-black">Experiences</h3>
          </div>

          <div>
            <Experiences />
          </div>
          <div className="mt-5 hidden md:flex">
            <Technologies />
          </div>
        </div>
        <div className=" max-w-7xl mx-auto mt-15 mb-15 lg:mb-20  px-8">
          <h3 className="text-2xl font-bold text-black">QUOTES</h3>
          <span className="text-sm  text-gray-600">Words that inspire me</span>
          <div>
            <Quotes />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
