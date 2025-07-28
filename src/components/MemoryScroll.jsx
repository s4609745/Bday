import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowDown } from 'react-icons/fa';

const MemorySection = ({ item, index, isActive }) => {
  const bgColors = [
    'from-pink-50 to-rose-100',
    'from-purple-50 to-pink-100', 
    'from-rose-50 to-pink-100',
    'from-pink-100 to-purple-100',
    'from-violet-50 to-pink-100',
    'from-pink-50 to-violet-100',
    'from-rose-100 to-pink-50'
  ];

  return (
    <motion.section
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 relative bg-gradient-to-br ${bgColors[index % bgColors.length]} ${isActive ? '' : 'pointer-events-none'}`}
    >
      {isActive && (
        <>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 max-w-lg mx-auto"
          >
            <div className="relative mb-8">
              <img
                src={item.image}
                alt="Memory"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl object-cover border-4 border-white/80"
                style={{ aspectRatio: '4/5', maxHeight: '400px' }}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg font-bold text-lg"
              >
                {index + 1}
              </motion.div>
            </div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 px-4 leading-relaxed dancing-script"
            >
              {item.text}
            </motion.h2>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
              className="flex justify-center space-x-1"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="text-pink-500 text-lg"
                >
                  💖
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaHeart className="text-pink-500 text-2xl" />
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.section>
  );
};

const MemoryScroll = ({ scrollToCard }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { text: "The Day You Were Born — July 28, 2000", image: "/images/IMG-20201228-WA0000.jpg" },
    { text: "You were full of life, laughter, and light.", image: "/images/IMG-20221013-WA0021.jpg" },
    { text: "Our virtual laughs and real emotions.", image: "/images/received_291728971735716.jpeg" },
    { text: "You looked like poetry in motion.", image: "/images/received_395726577943816.jpeg" },
    { text: "Even in rest, you were beauty personified.", image: "/images/received_461249184451801.jpeg" },
    { text: "Your mischief, your spark — unforgettable.", image: "/images/received_834482910225079.jpeg" },
    { text: "That smile could melt every worry.", image: "/images/Screenshot_20200730-185227_WhatsApp.jpg" },
  ];

  const nextSection = () => {
    setActiveIndex(prev => Math.min(prev + 1, sections.length - 1));
  };

  const prevSection = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative">
      {sections.map((item, index) => (
        <MemorySection
          key={index}
          item={item}
          index={index}
          isActive={index === activeIndex}
        />
      ))}

      {/* Navigation buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
        <button
          onClick={prevSection}
          disabled={activeIndex === 0}
          className={`px-4 py-2 rounded-full shadow-lg font-medium transition-all ${
            activeIndex === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-pink-500 text-white hover:bg-pink-600'
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextSection}
          disabled={activeIndex === sections.length - 1}
          className={`px-4 py-2 rounded-full shadow-lg font-medium transition-all ${
            activeIndex === sections.length - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-pink-500 text-white hover:bg-pink-600'
          }`}
        >
          Next
        </button>
      </div>

      {/* Continue button */}
      {activeIndex === sections.length - 1 && (
        <button
          onClick={scrollToCard}
          className="fixed bottom-8 right-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center z-50 text-sm sm:text-base active:scale-95"
        >
          Continue <FaArrowDown className="ml-2" />
        </button>
      )}

      {/* Progress indicator */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-3">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 hover:scale-110 active:scale-90 ${
                index === activeIndex 
                  ? 'bg-pink-600 w-4 h-4 shadow-lg' 
                  : 'bg-pink-300 w-3 h-3 hover:bg-pink-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-pink-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
          initial={{ width: '0%' }}
          animate={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default MemoryScroll;