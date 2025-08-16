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
          <div className="w-[50%] rounded-full overflow-hidden mt-[-300px]">
            <img
              src="pf.jpg"
              alt="Lanyard Placeholder"
              className="w-full h-auto object-cover"
            />
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
