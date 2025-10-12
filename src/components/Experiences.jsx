import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitText from "./SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Experiences = () => {
  const containerRef = useRef(null);
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  useGSAP(
    () => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="about" className="min-h-screen w-screen ">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-3xl md:text-6xl font-bold">
          <SplitText
            text=" Experience Work"
            className="text-3xl md:text-6xl  font-semibold text-center text-sky-400"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h2>

        <div className="about-subtext text-center px-4 max-w-xl">
          <p className="text-sky-800">Modern, Functional, and Responsive</p>
          <p className="text-gray-500">
            One sip of coffee, a stream of elegant code
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative overflow-hidden">
          <img
            src="/expbg1.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
