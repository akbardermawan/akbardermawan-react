import React from "react";
import { useEffect, useState } from "react";
import LanyardCanvas from "./Lanyard/LanyardCanvas";

const PhotoAbout = () => {
  const [showLanyard, setShowLanyard] = useState(false);

  useEffect(() => {
    // Tunggu sampai browser idle, baru tunjukkan Lanyard (bisa diganti delay juga)
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        setShowLanyard(true);
      });
    } else {
      // fallback untuk browser yang tidak support
      setTimeout(() => setShowLanyard(true), 10000);
    }
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

      <div style={{ display: showLanyard ? "block" : "none" }}>
        <LanyardCanvas />
      </div>
    </div>
  );
};

export default PhotoAbout;
