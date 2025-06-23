import React from "react";
import Slider from "react-slick";

const quotes = [
  {
    text: "Bring God into your life, and everything will be just fine",
    author: "Anonymus",
  },
  {
    text: "Hargailah orang lain jika kamu ingin dihargai",
    author: "Anonymous",
  },
  {
    text: "Don't be afraid to start creating, even if your work isn't great.",
    author: "Anonymous",
  },
  {
    text: "Meskipun belajar merupakan sesuatu yang pahit tapi yakinlah itu akan berbuah manis",
    author: "Anonymous",
  },
  {
    text: "Kalimat motifasi adalah sampah yang kamu perlukan adalah disiplin dan pantang menyerah",
    author: "Anonymus",
  },
  {
    text: "Jangan hidup seperti lilin, tapi hiduplah seperti Lampu",
    author: "Anonymus",
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
