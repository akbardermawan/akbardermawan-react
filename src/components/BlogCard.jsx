import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";

const BlogCard = ({ b }) => {
  return (
    <div className=" w-[320px] md:w-[300px] h-[200px] mx-auto bg-white shadow-lg rounded-2xl overflow-hidden relative m-1 md:2">
      <img className="w-full  object-cover" src={b.image} alt="Card Image" />
      <div className="absolute inset-0 md:bg-black/70 md:hover:bg-black/0 flex flex-col justify-end p-4 transition duration-500 ease-in-out text-blue-600 hover:text-blue-400">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            {b?.title || "Judul Card"}
          </h2>
          <p className="text-sm text-blue-200 hidden md:flex">{b.creatAt}</p>
        </div>
        <div className="flex space-x-2 ">
          <a href={b.code} className="">
            <CodeIcon />
          </a>
          <a href={b.url} className="ml-1">
            <WebIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
