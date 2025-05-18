import React from "react";

const PortfolioRobot = () => {
  return (
    <div className="w-full h-[50%] relative [perspective:1000px] [perspective-origin:center] flex justify-center items-center ">
      <div className="relative w-[300px] h-[300px]">
        {/* Gambar Robot */}
        <img
          src="/robot.png"
          alt="robot"
          className="absolute inset-0 mx-auto my-auto h-full animate-float z-20"
        />
        {/* Gambar Circle */}
        <img
          src="/circle.png"
          alt="circle"
          className="absolute mx-auto -bottom-30 h-full animate-spin-tilted z-10 opacity-80"
        />
      </div>
    </div>
  );
};

export default PortfolioRobot;
