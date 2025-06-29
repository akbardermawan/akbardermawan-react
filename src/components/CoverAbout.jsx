import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CoverAboutGlitch from "./CoverAboutGlitch";

const CoverAbout = () => {
  const { scrollYProgress } = useScroll();

  // Gerakan vertikal saat scroll
  const topY = useTransform(scrollYProgress, [0, 0.3], [0, -300]);
  const bottomY = useTransform(scrollYProgress, [0, 0.3], [0, 300]);

  // Fade out background container (bukan teks)
  const fadeOut = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Bagian atas ADM */}
      <motion.div
        style={{ y: topY, opacity: fadeOut }}
        className=" absolute top-0 left-0 w-full h-1/2 overflow-hidden flex justify-center items-end bg-black"
      >
        {/* contain */}
        <CoverAboutGlitch
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          className="custom-class font-black leading-none translate-y-1/2 "
        >
          ADM
        </CoverAboutGlitch>
      </motion.div>

      {/* Bagian bawah ADM */}
      <motion.div
        style={{ y: bottomY, opacity: fadeOut }}
        className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden flex justify-center items-start bg-black"
      >
        <CoverAboutGlitch
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          className="custom-class font-black leading-none -translate-y-1/2 "
        >
          ADM
        </CoverAboutGlitch>
      </motion.div>
    </div>
  );
};

export default CoverAbout;
