import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: [0, 1, 0],
    y: [10, 0, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Loader Dots */}
        <div className="flex justify-center items-center w-20 h-20">
          <div className="flex flex-wrap w-[44px]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 m-0.5 bg-white rounded-full loader-glow"
                style={{ animationDelay: `${(i + 1) * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="text-white text-xl font-semibold"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Loading...
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
