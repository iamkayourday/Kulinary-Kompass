import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // menus array
  const menus = [
    "img/menu_1.jpg",
    "img/menu_2.jpg",
    "img/menu_3.jpg",
    "img/menu_4.jpg",
    "img/menu_5.jpg",
    "img/menu_6.jpg",
    "img/menu_7.jpg",
    "img/menu_8.jpg",
    "img/menu_9.jpg",
    "img/menu_10.jpg",
    "img/menu_11.jpg",
    "img/menu_12.jpg",
    "img/menu_13.jpg",
    "img/menu_14.jpg",
    "img/menu_15.jpg",
    "img/menu_16.jpg",
    "img/menu_17.jpg",
    "img/menu_18.jpg",
    "img/menu_19.jpg",
    "img/menu_20.jpg",
    "img/menu_21.jpg",
    "img/menu_22.jpg",
    "img/menu_23.jpg",
    "img/menu_24.jpg",
    "img/menu_26.jpg",
    "img/menu_27.jpg",
    "img/menu_25.jpg",
  ];

  return (
    <section id="gallery">
      <div className="space-y-8 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <motion.h1
            className="text-3xl font-semibold text-[#bca067] mb-8 mt-8 border-b-4 border-[#bca067] inline-block pb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Menu Gallery
          </motion.h1>
        </div>

        {/* Menu Grid with Fade-in and Staggered Animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Dynamically rendering menus with hover animation */}
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              className="transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-xl shadow-lg border border-[#bca067] overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Staggering the animation for each image
              }}
            >
              <img
                src={menu}
                alt={`Dish ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
