import React from 'react';

const MenuGallery = () => {
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
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#bca067] mb-8 mt-8 border-b-4 border-[#bca067] inline-block pb-2">
          Menu Gallery
        </h1>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Dynamically rendering menus */}
        {menus.map((menu, index) => (
          <div
            key={index}
            className="transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-xl shadow-lg border border-[#bca067] overflow-hidden"
          >
            <img
              src={menu}
              alt={`Dish ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGallery;
