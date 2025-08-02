import { motion, useScroll, useTransform } from "framer-motion";

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
import CoverAbout from "../components/CoverAbout";
import IntroductionVidio from "../components/IntroductionVidio";
import SingleCard from "../components/SingleCard";
import CanvasCursor from "../components/CanvasCursor";
import FlowChart from "../components/FlowChart";
import LanyardCanvas from "./../components/Lanyard/LanyardCanvas";
import PhotoAbout from "../components/PhotoAbout";

const About = () => {
  const { scrollY } = useScroll();

  // Saat scrollY > 500px, turunkan z-index agar tidak menutupi konten
  const zIndex = useTransform(scrollY, [0, 500], [30, -10]);

  return (
    <div className="relative">
      <CanvasCursor />
      {/* Bagian Sticky Cover */}
      <motion.div style={{ zIndex }} className="sticky top-0 w-full h-[50vh]">
        <CoverAbout />
      </motion.div>

      <div className="flex-row justify-center items-center text-[#0a1a2f] bg-gray-200">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
          <img
            src="/about.jpg"
            alt="about"
            className=" w-full h-full object-cover object-bottom"
          />
          <p className="absolute text-white bottom-1 left-4 md:bottom-3 md:left-6 md:text-6xl lg:bottom-16 lg:left-20 lg:text-8xl">
            About <span className="font-bold text-blue-600">Me</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-1 mb-15 lg:mb-20  flex flex-col md:flex-row items-center md:items-center justify-center gap-6 px-4">
          <div className="w-full md:w-[45%] h-[320px] flex justify-center items-center">
            <div className="relative top-45">
              <PhotoAbout />
            </div>
          </div>
          <div className="w-full md:w-[55%] text-center md:text-left xl:pt-8 md:pr-2">
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
                  <span
                    className={`text-blue-500 md:text-sm ${
                      p.id === 8 ? "font-thin text-xs" : "font-semibold"
                    }`}
                  >
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

        {/* skill */}
        <div className="max-w-7xl w-full px-8 lg:px-12 mx-auto mb-5 md:mt10">
          <h3 className="text-xl text-gray-700">SKILLS</h3>

          <span className="text-2xl text-black mb-5">WHAT I CAN DO</span>
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
        <div className="w-full ">
          <div>
            <Experiences />
          </div>
          <div className="relativ z-10">
            <FlowChart />
          </div>
        </div>

        {/* Introduction vidio  */}
        <div className="max-w-7xl w-full px-8 lg:px-12 mx-auto mb-5 mt-5 md:mt-10 lg:mt-20">
          <IntroductionVidio />
        </div>
        <div className=" max-w-7xl mx-auto mt-15 mb-15 lg:mb-20  px-8">
          <h3 className="text-2xl font-bold text-black">QUOTES</h3>
          <span className="text-sm  text-gray-600">Words that inspire me</span>
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
