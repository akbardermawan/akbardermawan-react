import { motion, useScroll, useTransform } from "framer-motion";

import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";
import Experiences from "../components/Experiences";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";
import TypeWriter from "../components/TypeWriter";
import InfiniteScroll from "../components/InfiniteScroll";
import IntroductionVidio from "../components/IntroductionVidio";
import SingleCard from "../components/SingleCard";
import CanvasCursor from "../components/CanvasCursor";
import FlowChart from "../components/FlowChart";
import PhotoAbout from "../components/PhotoAbout";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { scrollY } = useScroll();

  // Saat scrollY > 500px, turunkan z-index agar tidak menutupi konten
  const zIndex = useTransform(scrollY, [0, 500], [30, -10]);

  // Efek animasi fade-in dari kiri saat scroll
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-left").forEach((el) => {
        gsap.from(el, {
          x: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            // untuk sekali jalan:
            // toggleActions: "play none none none"
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  // Efek animasi zoom-in saat scroll
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".zoom-in").forEach((el) => {
        gsap.from(el, {
          scale: 0.5,
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            // hanya sekali jalan:
            // toggleActions: "play none none none"
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <CanvasCursor />
      {/* Bagian Sticky Cover */}

      <div className="flex-row justify-center items-center text-[#0a1a2f] bg-black/95">
        <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
          <img
            src="/about.jpg"
            alt="about"
            className="w-full h-full object-cover object-bottom"
          />

          {/* overlay hitam semi-transparan */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* teks dan efek hover */}
          <div
            className="relative z-10 inline-block 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-full after:h-[2px] after:bg-sky-400 
             after:scale-x-0 after:origin-left 
              after:transition-transform after:duration-300 
              hover:after:scale-x-100 zoom-in
              bottom-8 left-6 md:bottom-24 xl:bottom-32 md:left-20"
          >
            <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-light">
              About <span className="font-bold text-sky-400">Me</span>
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-1 mb-15 lg:mb-20  flex flex-col md:flex-row items-center md:items-center justify-center gap-6 px-4">
          <div className="w-full md:w-[45%] h-[320px] flex justify-center items-center">
            <div className="relative top-45">
              <PhotoAbout />
            </div>
          </div>
          <div className="w-full md:w-[55%] text-center md:text-left xl:pt-8 md:pr-2 ">
            <div>
              <TypeWriter
                text="Akbar Dermawan Mahbubillah"
                speed={80}
                pause={80}
              />
            </div>
            <div className="mt-2 md:mt-4 mx-auto px-1 zoom-in ">
              <p
                className="max-w-2xl mx-auto text-justify text-sky-300 
             indent-8 first-letter:text-2xl first-letter:font-bold first-letter:mr-1
             md:text-2xl md:first-letter:text-3xl md:pr-4"
              >
                I am a website developer with an educational background in
                Agricultural Engineering from the University of Jember,
                Indonesia. Although my career path slightly deviates from my
                academic background, I chose to focus on enhancing my
                programming skills, particularly in web development. Check out
                <a href="https://github.com/akbardermawan">
                  <span className="text-gray-600 underline decoration-gray-400 decoration-2">
                    {" "}
                    My Github
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* skill */}
        <div className="max-w-7xl w-full px-8 lg:px-12 mx-auto mb-5 md:mt-5">
          <div
            className="zoom-in relative inline-block 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] after:bg-sky-400 
            after:scale-x-0 after:origin-left 
            after:transition-transform after:duration-300 
            hover:after:scale-x-100"
          >
            <h3 className="text-4xl text-sky-400">SKILLS</h3>
          </div>
          <br />

          <span className="text-2xl text-gray-700 mb-5">WHAT I CAN DO</span>
          <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%] p-1 flex items-center justify-center">
              <SingleCard />
            </div>
            <div className="w-[100%] md:w-[50%] grid grid-cols-1  gap-6 px-2 pt-2 md:pt-0">
              {services.map((service, index) => (
                <ServiceCard key={index} index={index} service={service} />
              ))}
            </div>
          </div>
          <div className="mt-2">
            <InfiniteScroll />
          </div>
        </div>

        {/* experience */}
        <div className="w-full">
          <div>
            <Experiences />
          </div>
          <div className="relativ z-10">
            <FlowChart />
          </div>
        </div>

        {/* Introduction vidio  */}
        <div className="max-w-7xl w-full px-8 lg:px-12 mx-auto mb-5 mt-5 md:mt-10 lg:mt-20 zoom-in ">
          <IntroductionVidio />
        </div>
        <div className="zoom-in max-w-7xl mx-auto mt-17 mb-15 lg:mb-20  px-8 ">
          <div
            className="relative inline-block 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-full after:h-[2px] after:bg-sky-400 
            after:scale-x-0 after:origin-left 
            after:transition-transform after:duration-300 
            hover:after:scale-x-100"
          >
            <h3 className=" text-3xl xl:text-4xl font-bold text-sky-400">
              QUOTES
            </h3>
          </div>
          <br />
          <span className="text-m  text-gray-600">Words that inspire me</span>
          <div>
            <Quotes />
          </div>
        </div>
        <div className=" max-w-7xl mx-auto  mb-15 lg:mb-20  ">
          <div className="mt-5 hidden md:flex">{/* <Technologies /> */}</div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
