import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { cn } from "../../utils/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header>
      {/* Mobile Header */}
      <div className="flex md:hidden fixed top-0 w-full h-[78px] justify-between items-center pl-6 pr-6 z-50 text-gray-600 overflow-hidden">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="w-[50px]" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="pr-4"
        >
          {mobileMenuOpen ? (
            <IoMdClose size={32} />
          ) : (
            <GiHamburgerMenu size={32} />
          )}
        </button>
      </div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex h-screen w-[78px] lg:w-[86px] xl:w-[92px]  fixed top-0 left-0 z-50 pl-4 xl:pl-6">
        <div className="md:flex md:flex-col h-screen md:-mx-4 md:pb-6">
          <div className="hidden md:flex pt-2 pl-1">
            <Link to={"/"}>
              <img src="/logo.png" alt="logo" className="w-[80px]" />
            </Link>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="hidden md:flex md:flex-col  items-center ">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={
                    cn(
                      "text-xl rotate-270 font-medium transition-colors hover:text-sky-500 relative my-6 py-3",
                      location.pathname === link.href
                        ? "text-sky-500 after:scale-x-100 font-extrabold"
                        : "text-gray-300 dark:text-gray-300 after:scale-x-0 font-extrabold",
                      "after:absolute after:bottom-[-1px] after:-left-0 after:top-6 after:w-full after:h-[4px] after:bg-sky-500",
                      "after:origin-left after:transition-transform after:duration-300",
                      "hover:after:scale-x-100"
                    ) // Add hover effect for the underline
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pl-4 flex flex-col gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-7 h-7 hover:text-sky-500 hover:scale-110 transition-transform text-gray-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-7 h-7 hover:text-sky-500 hover:scale-110 transition-transform text-gray-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-7 h-7 hover:text-sky-500 dark:text-gray-200 hover:scale-110 transition-transform text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <nav
        className={cn(
          "md:hidden fixed inset-0 z-40 backdrop-blur-2xl backdrop-saturate-150 bg-white/70 dark:bg-gray-900/70 transition-all duration-1000 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="w-full h-[95%] flex flex-col justify-between pb-4">
          <div className="flex flex-col items-center space-y-4 py-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-lg font-medium transition-colors w-full text-center",
                  location.pathname === link.href
                    ? "bg-sky-100 text-gray-300 dark:bg-sky-900/40"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800/80 hover:text-sky-500"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pl-4 flex  gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-7 h-7 hover:text-sky-500 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-7 h-7 hover:text-sky-500 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-7 h-7 hover:text-sky-500 dark:text-gray-200 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
