import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ b }) => {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Gambar */}
      <img
        src={b.image}
        alt={b?.title || "Blog Image"}
        className="w-full h-48 lg:h-56 object-cover"
      />

      {/* Konten */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {b?.title || "Untitled Blog"}
        </h2>
        <p className="text-sm text-gray-500">{b?.creatAt}</p>
        <Link
          to={b.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          Read Article &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
