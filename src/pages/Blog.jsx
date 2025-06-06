import React from "react";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { blog } from "../constants";

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-[#0a1a2f]">
      <header className="flex justify-center items-center pt-16">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">
          My <span className="font-extrabold text-blue-600">Article</span>
        </h1>
      </header>

      <main className="w-full max-w-7xl px-4 md:px-8 lg:px-12 mx-auto mt-6 md:mt-12 mb-10 flex-grow ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blog.map((b, index) => (
            <BlogCard key={index} b={b} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
