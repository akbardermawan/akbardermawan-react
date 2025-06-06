import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Akbar Dermawan M",
          from_email: form.email,
          to_email: "akbardermawan@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div>
      <div className="bg-white max-w-7xl pt-16 px-4 sm:px-6 lg:px-8 mx-auto">
        <header className="flex justify-center items-center ">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">
            My <span className="font-extrabold text-blue-600">Contact</span>
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Bagian EarthCanvas */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto">
            <EarthCanvas />
          </div>
          <div className="flex justify-center items-center flex-col  mt-10 p-6   mx-auto">
            <h2 className="text-xl font-semibold  text-gray-800">
              Don't be Shy
            </h2>
            <p>
              Feel free get in touch with me. I am always open to discussing new
              project, create ideas or opporties to be part of your visions.
            </p>

            <div className=" w-full">
              <div>
                <div className="flex items-center">
                  <FaWhatsapp className="w-[25px] h-[25px] text-blue-600" />
                  <div className="ml-3">
                    <p>Call me</p>
                    <p className=" text-gray-800">082337528525</p>
                  </div>
                </div>

                <a
                  href="mailto:akbardermawan27@gmail.com"
                  className="flex items-center "
                >
                  <MdEmail className="w-[25px] h-[25px] text-blue-600" />
                  <div className="ml-3">
                    <span>Mail me</span>
                    <p className=" text-gray-800">akbardermawan27@gmail.com</p>
                  </div>
                </a>
              </div>
              <div className=" mt-10 w-full flex ">
                <a
                  href="https://www.linkedin.com/in/akbar-dermawan-30bb6a210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mr-2"
                >
                  <FaLinkedin className="w-[25px] h-[25px] text-blue-600" />
                </a>
                <a
                  href="https://github.com/akbardermawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mr-2"
                >
                  <FaGithub className="w-[25px] h-[25px] text-blue-600" />
                </a>
                <a
                  href="https://github.com/akbardermawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mr-2"
                >
                  <FaYoutube className="w-[25px] h-[25px] text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full  mt-8 md:mt-12 flex flex-col gap-6 bg-gradient-to-b from-blue-500 to-black p-6 sm:p-7 rounded-xl"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none ring-2 ring-blue-400/50 focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none ring-2 ring-blue-400/50 focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none ring-2 ring-blue-400/50 focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 hover:text-black py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md transition duration-300 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.6)] self-center"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
