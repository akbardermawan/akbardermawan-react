import { div } from "framer-motion/client";
import React from "react";

const About = () => {
  return (
    <div className="flex-row justify-center items-center text-[#0a1a2f] bg-gray-100">
      <div className="h-[500px] lg:h-[550px] w-full overflow-hidden">
        <img
          src="/about.jpg"
          alt="about"
          className=" w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="max-w-7xl mx-auto mt-10  flex flex-col md:flex-row items-center md:items-start justify-center gap-6 px-4">
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <div className="w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[240px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-4xl md:rounded-full overflow-hidden shadow-lg">
            <img
              src="/pf.jpg"
              alt="profile"
              className="w-full h-full object-cover object-center "
            />
          </div>
        </div>
        <div className="w-full md:w-[60%] text-center md:text-left xl:pt-8 md:pr-2">
          <h2 className="text-2xl font-bold hover:underline">
            Akbar Dermawan Mahbubillah
          </h2>
          <span className="text-sm  text-purple-950">
            Full Stack Web Developer
          </span>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify indent-8 p-1 mt-2">
            I am a website developer with an educational background in
            Agricultural Engineering. I graduated from one of the universities
            in Indonesia in 2020. Although my career path slightly deviates from
            my academic background, I chose to focus on improving my skills in
            programming, specifically in web development. I decided to pursue a
            career as a website developer because of my interest in programming,
            animation, and design. Additionally, I enjoy working with computers
            more than doing other types of work. I gained my skills through
            self-learning via online tutorials and also through an intensive
            three-month training program at one of the well-known training
            institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
