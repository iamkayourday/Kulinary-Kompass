import React from "react";
import { motion } from "framer-motion";

const SetUsApart = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading: What Sets Us Apart */}
      <div className="text-center">
        <motion.h1
          className="text-3xl font-semibold text-[#bca067] mb-8 mt-8 border-b-4 border-[#bca067] inline-block pb-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What Sets Us Apart
        </motion.h1>
      </div>

      {/* Single Section with Image on the Left and Text on the Right */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl border border-[#bca067] mx-auto w-full max-w-6xl"
        style={{
          borderTopWidth: "2px",
          borderBottomWidth: "4px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Image Section */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="Apart.jpg"
            alt="What Sets Us Apart"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          {/* Tailored to Your Needs */}
          <motion.div
            className="border border-[#bca067] p-4 rounded-xl mb-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-[#bca067] mb-4">
              Tailored to Your Needs
            </h2>
            <p className="text-lg text-gray-700 dark:text-white">
              We understand that everyone's kulinary journey is unique. Whether
              you're a novice cook or looking to expand your repertoire, your
              kulinary kompass adapts to your skill level, preferences, and
              dietary requirements all on budget. Our goal is to make cooking a
              personalized and enjoyable experience for you.
            </p>
          </motion.div>

          {/* Budget-Friendly Recipes */}
          <motion.div
            className="border border-[#bca067] p-4 rounded-xl mb-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#bca067] mb-4">
              Budget-Friendly Recipes
            </h2>
            <p className="text-lg text-gray-700 dark:text-white">
              We believe that delicious and nutritious meals shouldn't break the
              bank. Our team curates a collection of budget-friendly recipes
              that prioritize affordability without compromising on taste or
              nutritional value. Learn to cook meals that are not only
              satisfying but also easy on your wallet.
            </p>
          </motion.div>

          {/* Assisted Cooking Support */}
          <motion.div
            className="border border-[#bca067] p-4 rounded-xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-[#bca067] mb-4">
              Assisted Cooking Support
            </h2>
            <p className="text-lg text-gray-700 dark:text-white">
              Our assisted cooking service provides step-by-step guidance,
              ensuring you feel confident and capable in the kitchen. From
              creating a shopping list of basic knife skills to mastering the
              perfect pasta, we're here to assist you every step of the way.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SetUsApart;
