import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState(null);

  const openTab = (categoryId) => {
    setSelectedTab(selectedTab === categoryId ? null : categoryId);
  };

  return (
    <div className='bg-gray-600 h-screen w-screen overflow-hidden'>
      <AnimatePresence>
        <motion.div layout layoutRoot className='group flex flex-row w-full h-full'>
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              selectedTab={selectedTab}
              openTab={openTab}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const Category = ({ category, selectedTab, openTab }) => {
  const isSelected = selectedTab === category.id;

  return (
    <motion.div
      layout
      initial={{ width: "100%" }}
      animate={{
        width: isSelected ? "100%" : selectedTab === null ? "100%" : "10%",
      }}
      transition={{
        ease:'easeOut'
      }}
      className={`relative p-12 text-white bg-wardrobe-1 bg-center bg-cover bg-no-repeat`}
      onClick={() => openTab(category.id)}
    >
      <motion.div
        initial={{ width: "100%" }}
        animate={{
          width: isSelected ? "25%" : "100%",
        }}
        className={`absolute flex justify-center items-center top-0 left-0 h-full ${isSelected ? "bg-gradient-to-r from-default-pink to-transparent" : "bg-default-pink"}`}>
          <p className='font-bold rotate-90 text-9xl tracking-wider w-full text-center'>
            {category.name}
          </p>
      </motion.div>

      {isSelected && (
        <div className='absolute top-0 right-0 h-full w-[10%] bg-gradient-to-l from-default-pink to-transparent'></div>
      )}
    </motion.div>
  );
  
};

const categories = [
  {
    id: 1,
    name: 'Shorts',
  },
  {
    id: 2,
    name: 'Jeans',
  },
  {
    id: 3,
    name: 'Shirts',
  },
  {
    id: 4,
    name: 'Jackets',
  },
];

export default App;
