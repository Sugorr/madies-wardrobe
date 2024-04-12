import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import CategorySection from './components/CategorySection';

function App() {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    // Simulating a 5-second delay before setting preloaded to true
    const timeout = setTimeout(() => {
      setPreloaded(true);
    }, 2000);

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []); // Run this effect only once, similar to componentDidMount

  return (
    <>
      {!preloaded && (
        <motion.div initial={{ opacity: 1}} animate={{ opacity: 0, transition: {duration: 8} }} className='h-screen w-screen bg-black'></motion.div>
      )}
      <div className='group transition-all absolute flex flex-col z-10 bottom-0 text-white w-full font-bold text-2xl text-center'>
        <span>HOW TO ORDER</span>
        <div className='transition-all w-full h-full group-hover:h-[10dvh] bg-black'></div>
      </div>
      {preloaded && <CategorySection />}
    </>
  );
}

export default App;
