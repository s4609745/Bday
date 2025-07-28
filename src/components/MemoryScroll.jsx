import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaPlay, FaPause } from 'react-icons/fa';

const MemoryScroll = ({ scrollToCard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const memories = [
    { text: "The Day You Were Born — July 28, 2000", image: "/images/IMG-20201228-WA0000.jpg" },
    { text: "You were full of life, laughter, and light.", image: "/images/IMG-20221013-WA0021.jpg" },
    { text: "Our virtual laughs and real emotions.", image: "/images/received_291728971735716.jpeg" },
    { text: "You looked like poetry in motion.", image: "/images/received_395726577943816.jpeg" },
    { text: "Even in rest, you were beauty personified.", image: "/images/received_461249184451801.jpeg" },
    { text: "Your mischief, your spark — unforgettable.", image: "/images/received_834482910225079.jpeg" },
    { text: "That smile could melt every worry.", image: "/images/Screenshot_20200730-185227_WhatsApp.jpg" },
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev === memories.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, memories.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex flex-col items-center justify-center px-4 py-8">
      {/* Memory Display */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <img
            src={memories[currentIndex].image}
            alt="Memory"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover border-4 border-white"
            style={{ height: '400px' }}
          />
          <div className="absolute -top-3 -right-3 bg-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg font-bold">
            {currentIndex + 1}
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 dancing-script leading-relaxed">
          {memories[currentIndex].text}
        </h2>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-4 " style={{ marginBottom: '1rem', gap: '0.5rem' }}>
          <button
            onClick={() => goToSlide(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-full font-medium transition-all ${currentIndex === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
          >
            Previous
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            onClick={() => goToSlide(Math.min(memories.length - 1, currentIndex + 1))}
            disabled={currentIndex === memories.length - 1}
            className={`px-4 py-2 rounded-full font-medium transition-all ${currentIndex === memories.length - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
          >
            Next
          </button>
        </div>

        {/* Dots Navigation */}
        {/* <div className="flex justify-center space-x-2 mb-8">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                ? 'bg-pink-600 w-4 h-4'
                : 'bg-pink-300 hover:bg-pink-400'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div> */}

        {/* Progress Bar */}
        <div className="w-full bg-pink-200 rounded-full h-2 mb-8">
          <div
            className="bg-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / memories.length) * 100}%` }}
          />
        </div>

        {/* Continue Button */}
        {currentIndex === memories.length - 1 && (
          <button
            onClick={scrollToCard}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center mx-auto text-lg font-medium"
          >
            Continue to Birthday Card <FaArrowDown className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MemoryScroll;