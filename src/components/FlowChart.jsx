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
  const [prevImage, setPrevImage] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const changeImage = (newImage) => {
    if (newImage === currentImage) return;
    setPrevImage(currentImage);
    setCurrentImage(newImage);
    setIsFading(true);

    setTimeout(() => {
      setPrevImage(null);
      setIsFading(false);
    }, 700); // sesuai durasi CSS
  };

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
              onEnter: () => changeImage(timelineData[idx].image),
              onEnterBack: () => changeImage(timelineData[idx].image),
              toggleActions: "play none none reverse",
            },
          }
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
            }
          );
        }
      }
    });
  }, []);

  return (
    <section id="story" className="relative py-20 md:pb-32" ref={containerRef}>
      {/* Background fade transition */}
      <div className="absolute inset-0 z-0">
        {prevImage && (
          <img
            src={prevImage}
            alt="Previous Background"
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700 opacity-0"
          />
        )}
        <img
          src={currentImage}
          alt="Current Background"
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${
            isFading ? "opacity-100" : "opacity-100"
          }`}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Konten timeline */}
      <div className="max-w-7xl w-full px-8 lg:px-12 mx-auto mb-5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center" />
        <div className="relative mt-1 md:mt-5 px-2 md:px-10">
          <ul className="space-y-16">
            {timelineData.map((item, idx) => (
              <li
                key={idx}
                className={`timeline-item relative flex flex-col md:flex-row md:mb-50 ${
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
                  className={`hidden md:block absolute top-1/2 w-8 h-1 bg-gray-300 left-1/2 transform -translate-y-1/2 ${
                    idx % 2 === 0 ? "" : "-translate-x-full"
                  }`}
                />

                {/* Box konten */}
                <div
                  className={`bg-white border border-gray-300 p-6 rounded-lg shadow-lg w-full md:w-2/5 mt-4 md:mt-6 md:mb-12 z-10 ${
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
