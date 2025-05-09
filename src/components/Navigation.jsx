import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black/30 backdrop-blur-md fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-100">Akbar</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {["HOME", "ABOUT", "RESUME", "BLOG", "PORTFOLIO", "CONTACT"].map(
              (item) => (
                <a
                  key={item}
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className="text-gray-100 hover:text-blue-600"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["HOME", "ABOUT", "RESUME", "BLOG", "PORTFOLIO", "CONTACT"].map(
              (item) => (
                <a
                  key={item}
                  href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-100 hover:bg-gray-950"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
