import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
        <div className="w-full md:w-1/2 h-64 md:h-[50%] lg:h-[40%] pt-10 lg:pt-30 lg:mr-10">
          <img
            src={item.img}
            alt="image"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Konten */}
        <motion.div className="w-full h-full md:w-1/2 flex flex-col text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
          <div>
            <button className="bg-blue-700 text-white rounded-2xl py-2 px-6 w-full md:w-48 transition hover:bg-blue-800 mt-10">
              See Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Single;
