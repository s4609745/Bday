import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaHeart } from 'react-icons/fa';

const Landing = ({ scrollToMemories }) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 text-center px-4 py-8 relative overflow-hidden"
  >
    {/* Floating hearts background */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-30"
          style={{
            fontSize: `${Math.random() * 30 + 15}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200],
            x: [0, Math.random() * 50 - 25],
            opacity: [0.3, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        >
          {i % 3 === 0 ? '💖' : i % 3 === 1 ? '🌸' : '✨'}
        </motion.div>
      ))}
    </div>

    <div className="relative z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className="mb-8"
      >
        <div className="text-6xl sm:text-7xl md:text-8xl mb-4">🎂</div>
      </motion.div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-responsive-lg dancing-script font-bold text-pink-700 mb-4 leading-tight"
      >
        Happy Birthday,
        <br />
        <span className="text-rose-600">Beautiful Anshu</span>
        <span className="text-red-500 ml-2">🎉</span>
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mb-8"
      >
        <p className="text-lg sm:text-xl md:text-2xl text-pink-600 font-medium mb-4 px-4">
          A journey through memories, made with love just for you
        </p>
        <div className="flex justify-center items-center space-x-2 text-pink-500">
          <FaHeart className="animate-pulse" />
          <span className="text-sm sm:text-base font-light">From someone who cares deeply</span>
          <FaHeart className="animate-pulse" />
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToMemories}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center mx-auto text-base sm:text-lg font-medium"
      >
        Begin the Journey <FaArrowDown className="ml-2 animate-bounce" />
      </motion.button>
    </div>

    {/* Bottom decoration */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="text-pink-400 text-2xl animate-bounce">
        💕
      </div>
    </motion.div>
  </motion.section>
);

export default Landing;