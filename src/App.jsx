import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Landing from './components/Landing';
import MemoryScroll from './components/MemoryScroll';
import BirthdayCard from './components/BirthdayCard';
import FinalScreen from './components/FinalScreen';

function App() {
  const [currentSection, setCurrentSection] = useState('landing');

  const scrollToMemories = () => {
    setCurrentSection('memories');
    window.scrollTo(0, 0);
  };

  const scrollToCard = () => {
    setCurrentSection('card');
    window.scrollTo(0, 0);
  };

  const scrollToFinal = () => {
    setCurrentSection('final');
    window.scrollTo(0, 0);
  };

  return (
    <div className="overflow-x-hidden">
      <AnimatePresence>
        {currentSection === 'landing' && (
          <Landing scrollToMemories={scrollToMemories} />
        )}

        {currentSection === 'memories' && (
          <MemoryScroll scrollToCard={scrollToCard} />
        )}

        {currentSection === 'card' && (
          <BirthdayCard scrollToFinal={scrollToFinal} />
        )}

        {currentSection === 'final' && (
          <FinalScreen />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;