import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="space-y-8">
      {/* Full-Width Image with Motion */}
      <motion.div
        className="w-full mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="menu.jpg"
          alt="About Us"
          className="w-full h-auto object-cover rounded-xl shadow-lg border border-[#bca067]"
        />
      </motion.div>

      {/* Section with Image on the Left and Text on the Right (What We Do) */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl border border-[#bca067] mx-auto w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Left Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="What.jpg"
            alt="What We Do"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-[#bca067] mb-4 border-b-4">What We Do</h2>
          <p className="text-lg text-gray-700">
            Welcome to Your Kulinary Kompass, where we understand that embarking on a journey into the world of cooking can be both exciting and challenging, especially for young adults in care navigating their path to independence. Our mission is to empower young people to embark on a flavorful adventure in the kitchen, even on a budget.
          </p>

          <div className="flex flex-col justify-center mt-8">
          <h2 className="text-2xl font-semibold text-[#bca067] mb-4">Our Commitment</h2>
          <p className="text-lg text-gray-700">
            At Your Kulinary Kompass, we are committed to promoting self-sufficiency through the joy of cooking. We believe that by mastering basic culinary skills and developing an understanding of budget-friendly ingredients, you can not only save money but also enjoy the gratification of creating delicious meals for yourself.
          </p>
        </div>
        </div>

        
      </motion.div>
    </div>
  );
};

export default AboutUs;