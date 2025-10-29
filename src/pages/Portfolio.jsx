import React, { useRef, useLayoutEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { projects } from "../constants";
import Single from "../components/Single";
import Shuffle from "../components/project/Shuffle";

const Portfolio = () => {
  const scrollRef = useRef();

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    layoutScroll: true,
    offset: ["end end", "start start"], // Full bar at top, 0 at bottom
  });

  const reversed = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
  });

  return (
    <div className="h-screen w-full flex flex-col bg-black/95  relative">
      {/* Header */}
      <header className="w-full absolute top-0 z-10 bg-black/0 pt-16 md:pt-12 xl:pt-16  text-center">
        <div className="md:hidden">
          <h1 className="font-extrabold md:font-extrabold text-sky-500 text-5xl pt-2">
            PROJECTS
          </h1>
        </div>
        <div className="hidden md:flex md:justify-center">
          <Shuffle
            text="Projects"
            shuffleDirection="right"
            duration={0.4}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            className="font-bold md:font-extrabold text-sky-500 text-base md:text-6xl lg:text-8xl"
          />
        </div>

        {/* Center-shrinking progress bar */}
        <motion.div
          style={{ scaleX: reversed }}
          className="h-2 bg-sky-400 mx-auto mt-2"
          // Custom style to shrink from center
          initial={{ scaleX: 1 }}
          animate={{ originX: 0.5 }} // This makes it shrink toward center
        />
      </header>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory  scrollbar-hidden scroll-smooth"
      >
        {projects.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
