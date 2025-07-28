import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar } from 'react-icons/fa';

const BirthdayCard = ({ scrollToFinal }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100 px-4 py-8 relative"
  >
    {/* Floating elements background */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-40"
          style={{
            fontSize: `${Math.random() * 25 + 15}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.4, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        >
          {i % 4 === 0 ? '❤️' : i % 4 === 1 ? '🌸' : i % 4 === 2 ? '✨' : '💖'}
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ scale: 0.8, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl text-center max-w-2xl mx-auto relative border border-pink-200/50"
    >
      {/* Decorative corner hearts */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="absolute -top-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl shadow-lg"
      >
        <FaHeart />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl shadow-lg"
      >
        <FaStar />
      </motion.div>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-pink-700 dancing-script"
      >
        To My Dearest Anshu 🌹
      </motion.h2>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed space-y-4"
      >
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="italic font-medium text-pink-600"
        >
          From someone who still smiles thinking of you 😊
        </motion.p>
        
        <motion.p
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-medium"
        >
          You were more than love — you were everything beautiful in this world 🌍
        </motion.p>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-pink-600 font-semibold"
        >
          This is my way of saying, Happy Birthday — wherever you are, you're deeply loved 💕
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 150 }}
        className="flex justify-center mb-8"
      >
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="text-pink-500 text-xl"
            >
              💖
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToFinal}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 15px 30px rgba(236, 72, 153, 0.4)",
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center mx-auto text-base sm:text-lg font-medium"
      >
        Forever in My Heart <FaHeart className="ml-2 animate-pulse" />
      </motion.button>
    </motion.div>
  </motion.div>
);

export default BirthdayCard;