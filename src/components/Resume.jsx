import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";

const Resume = () => {
  return (
    <div className="fixed bottom-12 md:bottom-16 right-8 md:right-12 ">
      <a
        href="/files/CV_Akbar.pdf"
        download
        aria-label="Download Resume"
        className="w-12  h-12  flex items-center justify-center bg-blue-600 hover:bg-blue-300  rounded-full shadow-lg transition duration-300"
      >
        <DescriptionIcon
          sx={{ width: { xs: 36 }, height: { xs: 36 } }}
          className="text-white hover:text-black"
        />
      </a>
    </div>
  );
};

export default Resume;
