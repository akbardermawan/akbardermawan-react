import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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
      <div className="bg-white pt-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-black text-center pt-2 text-2xl sm:text-3xl font-bold">
          CONTACT
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Bagian EarthCanvas */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto">
            <EarthCanvas />
          </div>

          {/* Bagian Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mt-8 md:mt-12 flex flex-col gap-6 bg-gradient-to-b from-blue-500 to-black p-6 sm:p-7 rounded-xl"
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
                <span className="text-white font-medium mb-2">
                  Your Message
                </span>
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
        <div className="flex justify-center items-center flex-col  mt-16 p-6 border border-blue-500 rounded-2xl shadow-lg bg-white max-w-7xl  mx-auto">
          <h2 className="text-xl font-semibold text-center text-gray-800">
            Akbar Dermawan Mahbubillah
          </h2>

          <div className="mt-6 grid grid-cols-1  md:grid-cols-2  gap-4 w-full">
            <div className="flex items-center bg-gray-100 p-3 rounded-xl shadow">
              <img src="/WA.png" alt="WhatsApp" className="w-10 h-10" />
              <p className="ml-3 text-gray-800">082337528525</p>
            </div>

            <a
              href="https://github.com/akbardermawan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-100 p-3 rounded-xl shadow hover:bg-gray-200 transition"
            >
              <img src="/Github-Dark.svg" alt="GitHub" className="w-10 h-10" />
              <p className="ml-3 text-gray-800">akbardermawan</p>
            </a>

            <a
              href="mailto:akbardermawan27@gmail.com"
              className="flex items-center bg-gray-100 p-3 rounded-xl shadow hover:bg-gray-200 transition"
            >
              <img src="/Gmail-Dark.svg" alt="Gmail" className="w-10 h-10" />
              <p className="ml-3 text-gray-800">akbardermawan27@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/akbar-dermawan-30bb6a210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-100 p-3 rounded-xl shadow hover:bg-gray-200 transition"
            >
              <img src="/LinkedIn.svg" alt="LinkedIn" className="w-10 h-10" />
              <p className="ml-3 text-gray-800">akbar-dermawan</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
