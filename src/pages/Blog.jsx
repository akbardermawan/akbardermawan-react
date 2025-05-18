import React from "react";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { blog } from "../constants";

const Blog = () => {
  return (
    <div className="flex-row justify-center items-center text-[#0a1a2f] bg-gray-100">
      <div className="h-[500px] lg:h-[550px] w-full overflow-hidden">
        <img
          src="/resume.jpg"
          alt="about"
          className=" w-full h-full object-cover object-bottom"
        />
      </div>
      <div className=" w-full px-8 lg:px-12 mx-auto mt-5 mb-5">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {blog.map((b, index) => (
            <BlogCard key={index} b={b} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
