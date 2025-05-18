import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Akbar. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex"
          >
            <GitHubIcon />
            <p className="hidden md:flex md:ml-1">Github</p>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex"
          >
            <LinkedInIcon />
            <p className="hidden md:flex md:ml-1">LinkedIn</p>
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-400 transition flex"
          >
            <EmailIcon />
            <p className="hidden md:flex md:ml-1">Email</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
