import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section  className="space-y-16">
      {/* Full-Width Image with Motion */}
      <motion.div
        className="w-full mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src="menu_2.png"
          alt="Home Menu"
          className="w-full h-auto object-cover rounded-xl shadow-lg border border-[#bca067]"
        />
      </motion.div>

      {/* Section with Image on the Left and Text on the Right */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl border border-[#bca067] mx-auto w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileHover={{
          boxShadow: "0px 10px 20px rgba(188, 160, 103, 0.3)",
        }}
      >
        {/* Left Image Section */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="What.jpg"
            alt="What We Do"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
          id="about"
            className="text-3xl font-semibold text-[#bca067] mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>

          <motion.p
            className="text-lg text-white dark:text-white border border-[#bca067] p-4 rounded-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Your Kulinary Kompass, where we understand that embarking on a journey into the world of cooking can be both exciting and challenging, especially for young adults in care navigating their path to independence. Our mission is to empower young people to embark on a flavorful adventure in the kitchen, even on a budget.
          </motion.p>

          <div className="space-y-6">
            <motion.h2
              className="text-3xl font-semibold text-[#bca067] mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our Commitment
            </motion.h2>

            <motion.p
              className="text-lg text-white dark:text-white border border-[#bca067] p-4 rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              At Your Kulinary Kompass, we are committed to promoting self-sufficiency through the joy of cooking. We believe that by mastering basic culinary skills and developing an understanding of budget-friendly ingredients, you can not only save money but also enjoy the gratification of creating delicious meals for yourself.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
