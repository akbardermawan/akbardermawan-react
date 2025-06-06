import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black/30 backdrop-blur-md fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 ">
        <div className="flex justify-between h-16">
          <div className="flex items-center ">
            <img src="/logo.png" alt="" className="h-16" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {["HOME", "ABOUT", "BLOG", "PORTFOLIO", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                className="text-gray-100 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-md shadow-md"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {["HOME", "ABOUT", , "BLOG", "PORTFOLIO", "CONTACT"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-100 rounded hover:bg-gray-800"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
