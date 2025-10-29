import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";

const Single = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // masuk layar sampai ke tengah
  });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center snap-start px-4 md:px-8 md:pt-10"
    >
      <div className="w-full h-full max-w-7xl flex flex-col md:flex-row items-center gap-5 overflow-hidden">
        {/* Gambar */}
        <div className="w-full md:w-1/2 h-64 md:h-[50%] lg:h-[40%] pt-10 lg:pt-32 lg:mr-10">
          <img
            src={item.img}
            alt="image"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Konten */}
        <motion.div className="w-full h-full md:w-1/2 flex flex-col text-center md:text-left">
          <div className="mb-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
              {item.title}
            </h2>
            <h5 className="text-sm text-white">{item.tec}</h5>
          </div>

          {/* Tombol GitHub */}
          <div
            className="relative inline-block mb-2
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-[45%] after:h-[2px] after:bg-sky-400 
              after:scale-x-0 after:origin-left 
              after:transition-transform after:duration-300 
              hover:after:scale-x-100"
          >
            <a
              href={item.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2  py-1 text-white transition-colors duration-300 hover:text-sky-400"
            >
              <FaCodeBranch className="text-xl text-white" />
              <span className="text-white">Explore the Code</span>
            </a>
          </div>

          <p className="text-sky-300 text-sm md:text-base mt-1">{item.desc}</p>
          <div>
            <a href={item.url}>
              <button className="bg-sky-700 text-white rounded-2xl py-2 px-6 w-full md:w-48 transition hover:bg-sky-400 hover:text-black mt-10 m-1">
                See Demo
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Single;
