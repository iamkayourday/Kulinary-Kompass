import React from 'react';

const SetUsApart = () => {
  return (
    <div className="space-y-8">
      {/* Heading: What Sets Us Apart */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-[#bca067] mb-8 mt-8 border-b-4 border-[#bca067] inline-block pb-2">What Sets Us Apart</h1>
      </div>

      {/* Single Section with Image on the Left and Text on the Right */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl border border-[#bca067] mx-auto w-full max-w-6xl"
        style={{
          borderTopWidth: '2px',
          borderBottomWidth: '4px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Left Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="Apart.jpg" 
            alt="What Sets Us Apart"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          {/* Tailored to Your Needs */}
          <div className="border border-[#bca067] p-4 rounded-xl mb-4">
            <h2 className="text-2xl font-semibold text-[#bca067] mb-4">Tailored to Your Needs</h2>
            <p className="text-lg text-gray-700 dark:text-white">
              We understand that everyone's kulinary journey is unique. Whether you're a novice cook or looking to expand your repertoire, your kulinary kompass adapts to your skill level, preferences, and dietary requirements all on budget. Our goal is to make cooking a personalized and enjoyable experience for you.
            </p>
          </div>

          {/* Budget-Friendly Recipes */}
          <div className="border border-[#bca067] p-4 rounded-xl mb-4">
            <h2 className="text-2xl font-semibold text-[#bca067] mb-4">Budget-Friendly Recipes</h2>
            <p className="text-lg text-gray-700 dark:text-white">
              We believe that delicious and nutritious meals shouldn't break the bank. Our team curates a collection of budget-friendly recipes that prioritize affordability without compromising on taste or nutritional value. Learn to cook meals that are not only satisfying but also easy on your wallet.
            </p>
          </div>

          {/* Assisted Cooking Support */}
          <div className="border border-[#bca067] p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#bca067] mb-4">Assisted Cooking Support</h2>
            <p className="text-lg text-gray-700 dark:text-white">
              Our assisted cooking service provides step-by-step guidance, ensuring you feel confident and capable in the kitchen. From creating a shopping list of basic knife skills to mastering the perfect pasta, we're here to assist you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUsApart;
