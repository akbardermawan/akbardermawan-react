import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "Junior Backend",
    date: "Juni 2020 - April 2021",
    company: "PT Lorem1",
    description: [
      "Building web apps with React.js and related tech.",
      "Working with designers, PMs, and developers.",
    ],
    image: "/expbg2.png",
  },
  {
    title: "Senior Frontend",
    date: "April 2021 - Agustus 2023",
    company: "PT Lorem2",
    description: [
      "Building web apps with React.js and related tech.",
      "Working with designers, PMs, and developers.",
    ],
    image: "/exp1.jpg",
  },
  {
    title: "Senior Frontend",
    date: "April 2021 - Agustus 2023",
    company: "PT Lorem3",
    description: [
      "Building web apps with React.js and related tech.",
      "Working with designers, PMs, and developers.",
    ],
    image: "/exp2.png",
  },
  {
    title: "Senior UI",
    date: "April 2021 - Agustus 2023",
    company: "PT Lorem4",
    description: [
      "Building web apps with React.js and related tech.",
      "Working with designers, PMs, and developers.",
    ],
    image: "/exp3.jpg",
  },
];

const FlowChart = () => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const [currentImage, setCurrentImage] = useState(timelineData[0].image);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".timeline-item");
    const isMobile = window.innerWidth < 768;

    items.forEach((el, idx) => {
      const line = lineRefs.current[idx];

      if (isMobile) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        if (line) {
          line.style.opacity = "1";
          line.style.transform = "scaleY(1)";
        }

        if (idx === 0) {
          setCurrentImage(timelineData[0].image);
        }
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top center",
              toggleActions: "play none none reverse",
            },
          },
        );

        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0, opacity: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "restart reverse restart reverse",
              },
            },
          );
        }
      }
    });
  }, []);

  return (
    <section id="story" className="relative py-15 md:pb-32" ref={containerRef}>
      {/* Background fade transition */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-transparent" />
      </div>

      {/* Konten timeline */}
      <div className="max-w-7xl w-full px-6 lg:px-10 mx-auto mb-5 relative z-10">
        <div className="max-w-4xl mx-auto px-2 text-center" />
        <div className="relative mt-1 md:mt-5 px-2 md:px-10">
          <ul className="space-y-16">
            {timelineData.map((item, idx) => (
              <li
                key={idx}
                className={`timeline-item relative flex flex-col md:flex-row md:mb-50 md:items-start ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Garis vertikal */}
                <div
                  ref={(el) => (lineRefs.current[idx] = el)}
                  className="absolute left-1/2 -translate-x-1/2 w-1 bg-black/5 md:bg-gray-300 h-[140%] md:h-200p top-0 z-0"
                  style={{
                    opacity: 0,
                    transform: "translateX(-50%) scaleY(0)",
                    transformOrigin: "top center",
                  }}
                ></div>

                {/* Garis horizontal */}
                <div
                  className={`hidden md:block absolute top-1/2 w-10 lg:w-14 h-1 bg-gray-300 left-1/2 transform -translate-y-1/2 ${
                    idx % 2 === 0 ? "" : "-translate-x-full"
                  }`}
                />

                {/* Box konten */}
                <div
                  className={`hidden md:flex md:flex-col bg-white border border-gray-300 p-1 rounded-lg shadow-lg w-full md:w-1/2 md:min-h-[350px] lg:min-h-[450px] mt-4 md:mt-6 md:mb-12 z-10 transform md:translate-y-12 lg:translate-y-12 ${
                    idx % 2 !== 0
                      ? " md:mr-auto md:ml-30 lg:ml-50"
                      : " md:ml-auto md:mr-30 lg:mr-50"
                  }`}
                >
                  <div className="w-full md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 text-center mt-1">
                    {item.company}
                  </h3>
                </div>

                <div
                  className={`bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full md:w-2/5 mt-4 md:mt-6 md:mb-12 z-10 transform md:translate-y-6 lg:translate-y-18  ${
                    idx % 2 !== 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-blue-800">
                      {item.title}
                    </h3>
                    <span className="text-sm text-black">{item.company}</span>
                    <br />
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FlowChart;
