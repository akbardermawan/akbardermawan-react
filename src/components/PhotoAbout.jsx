import React from "react";
import { useEffect, useState, Suspense } from "react";

// Lazy load LanyardCanvas
const LanyardCanvas = React.lazy(() => import("./Lanyard/LanyardCanvas"));

const PhotoAbout = () => {
  const [showLanyard, setShowLanyard] = useState(false);

  useEffect(() => {
    // Tunggu 15 detik sebelum load komponen
    const timer = setTimeout(() => {
      setShowLanyard(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!showLanyard && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="w-[65%] xl:w-[55%] rounded-xl overflow-hidden mt-[-300px]  ">
              <img
                src="img/pf1.JPG"
                alt="Lanyard Placeholder"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute z-10 -left-10 md:-left-18 xl:-left-24 bottom-26">
              <div className="rotate-270">
                <p className="text-6xl md:text-7xl xl:text-8xl  text-white md:text-black font-bold drop-shadow-lg ">
                  アクバル
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLanyard && (
        <Suspense fallback={<div>Loading animation...</div>}>
          <LanyardCanvas />
        </Suspense>
      )}
    </div>
  );
};

export default PhotoAbout;
