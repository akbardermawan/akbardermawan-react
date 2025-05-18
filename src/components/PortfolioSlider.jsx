import React, { useState, useRef, useEffect } from "react";

const images = ["./img/9a1.JPG", "./img/9a.JPG", "./img/9b.png"];

const PortfolioSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const slidesRef = useRef(null);

  // Fungsi update posisi slide
  const updateSlide = (index) => {
    setCurrent(index);
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const prevSlide = () => updateSlide((current - 1 + total) % total);
  const nextSlide = () => updateSlide((current + 1) % total);

  // Auto-slide setiap 1 menit
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 60 detik = 60000ms

    return () => clearInterval(interval); // bersihkan saat unmount
  }, [current]); // jalankan ulang saat current berubah

  // Inisialisasi posisi slide saat mount
  useEffect(() => {
    updateSlide(current);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        ref={slidesRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white bg-black/50 hover:bg-black/70 px-2 rounded-full z-10"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white bg-black/50 hover:bg-black/70 px-2 rounded-full z-10"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => updateSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider;
