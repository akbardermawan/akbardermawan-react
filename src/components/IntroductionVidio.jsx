import React from "react";

const IntroductionVidio = () => {
  return (
    <div>
      <div className="mb-4 ">
        <h3 className="text-xl md:text-4xl font-semibold text-gray-700 mb-5 md:mb-10 lg:mb-20">
          Introduction
        </h3>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4 ">
        <div className="relative w-full pb-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow"
            src="https://www.youtube.com/embed/QfR4-QYKXEM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default IntroductionVidio;
