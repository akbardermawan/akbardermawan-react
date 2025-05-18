import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { projects } from "../constants";
import Single from "../components/Single";

const Portfolio = () => {
  const scrollRef = useRef();

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    layoutScroll: true,
    offset: ["end end", "start start"], // Full bar at top, 0 at bottom
  });

  const reversed = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="h-screen w-full flex flex-col bg-white  relative">
      {/* Header */}
      <header className="w-full absolute top-0 z-10 bg-black/0 pt-17  text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent bg-[length:100%_300%] pb-2">
          Portfolio
        </h1>

        {/* Center-shrinking progress bar */}
        <motion.div
          style={{ scaleX: reversed }}
          className="h-2 bg-black mx-auto mt-2"
          // Custom style to shrink from center
          initial={{ scaleX: 1 }}
          animate={{ originX: 0.5 }} // This makes it shrink toward center
        />
      </header>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory  scrollbar-hidden"
      >
        {projects.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
