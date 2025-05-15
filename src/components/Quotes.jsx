import React from "react";
import Slider from "react-slick";

const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

const Quotes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index}>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-gray-700 italic mb-4">"{quote.text}"</p>
              <p className="text-sm font-medium text-gray-500">
                - {quote.author}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Quotes;
