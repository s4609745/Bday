import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar } from 'react-icons/fa';

const FinalScreen = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFireworks(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-center px-4 py-8 relative overflow-hidden"
    >
      {/* Starry background */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Fireworks effect */}
      {showFireworks && [...Array(15)].map((_, i) => (
        <motion.div
          key={`firework-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 2, 0],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            repeatDelay: Math.random() * 5 + 3,
          }}
        >
          <div className="relative">
            {[...Array(8)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute w-1 h-1 bg-pink-400 rounded-full"
                style={{
                  transform: `rotate(${j * 45}deg) translateY(-20px)`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: j * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Birthday cake emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 150 }}
          className="text-6xl sm:text-7xl md:text-8xl mb-6"
        >
          🎂
        </motion.div>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white dancing-script leading-tight"
        >
          Happy Birthday,
          <br />
          <span className="text-pink-300">Sweet Anshu</span>
          <span className="text-yellow-400 ml-2">🎆</span>
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-8 space-y-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-pink-200 font-medium">
            Always in my heart. Forever cherished.
          </p>
          <p className="text-base sm:text-lg text-pink-300">
            May your spirit continue to shine bright wherever you are ✨
          </p>
        </motion.div>

        {/* Animated heart */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-5xl sm:text-6xl md:text-7xl text-pink-400"
          >
            💖
          </motion.div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/30"
        >
          <p className="text-white text-base sm:text-lg italic font-light leading-relaxed">
            "Some people come into our lives and leave footprints on our hearts,
            <br className="hidden sm:block" />
            and we are never the same."
          </p>
          <div className="flex justify-center items-center mt-4 space-x-2">
            <FaHeart className="text-pink-400 animate-pulse" />
            <span className="text-pink-300 text-sm">With endless love</span>
            <FaHeart className="text-pink-400 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex space-x-4 text-2xl">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            🌸
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            🌸
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinalScreen;