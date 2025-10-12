import React, { useRef, useLayoutEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { projects } from "../constants";
import Single from "../components/Single";
import Shuffle from "../components/project/Shuffle";

import gsap from "gsap";

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
    <div className="h-screen w-full flex flex-col bg-white  relative">
      {/* Header */}
      <header className="w-full absolute top-0 z-10 bg-black/0 pt-17  text-center">
        <div className="md:hidden">
          <h1 className="font-bold md:font-extrabold text-sky-600 text-4xl pt-2 zoom-in">
            Project
          </h1>
        </div>
        <div className="hidden md:flex md:justify-center">
          <Shuffle
            text="Projects"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            className="font-bold md:font-extrabold text-sky-600 text-base md:text-6xl lg:text-8xl"
          />
        </div>

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
