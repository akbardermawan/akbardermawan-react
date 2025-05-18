import { div } from "framer-motion/client";
import React from "react";

import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";
import Experiences from "../components/Experiences";
import Technologies from "../components/Technologies";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";
import Resume from "../components/Resume";

const About = () => {
  return (
    <div>
      <div className="fixed bottom-12 right-8 z-[1000] flex ">
        <Resume />
      </div>
      <div className="flex-row justify-center items-center text-[#0a1a2f] bg-gray-100">
        <div className="h-[500px] lg:h-[550px] w-full overflow-hidden">
          <img
            src="/about.jpg"
            alt="about"
            className=" w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="max-w-7xl mx-auto mt-12 mb-15 lg:mb-20  flex flex-col md:flex-row items-center md:items-start justify-center gap-6 px-4">
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
            <h2 className="text-2xl lg:text-4xl font-bold hover:underline">
              Akbar Dermawan Mahbubillah
            </h2>
            <span className="text-sm  text-purple-950">
              Full Stack Web Developer
            </span>
            <p className="text-gray-700 leading-relaxed text-sm lg:text-xl md:text-base text-justify indent-8 p-1 mt-2">
              I am a website developer with an educational background in
              Agricultural Engineering. I graduated from one of the universities
              in Indonesia in 2020. Although my career path slightly deviates
              from my academic background, I chose to focus on improving my
              skills in programming, specifically in web development. I decided
              to pursue a career as a website developer because of my interest
              in programming, animation, and design. Additionally, I enjoy
              working with computers more than doing other types of work. I
              gained my skills through self-learning via online tutorials and
              also through an intensive three-month training program at one of
              the well-known training institutions.
            </p>
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
