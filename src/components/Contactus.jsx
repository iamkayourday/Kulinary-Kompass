import React, { useState } from 'react';

function Contactus() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitted(true); // Show the thank you page

    // Hide the thank you page after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
          <h1 className="text-3xl font-semibold text-[#bca067] mb-4">Thank You!</h1>
          <p className="text-gray-600">
            Your message has been sent successfully. We will get back to you shortly!
          </p>
        </div>
      ) : (
        <>
          {/* Heading */}
          <h1 className="text-3xl font-semibold text-center text-[#bca067] mb-6">
            Contact Us
          </h1>

          {/* Intro Text */}
          <p className="text-center text-gray-600 mb-8 leading-6">
            We'd love to hear from you. <br />
            We offer full-service catering for any event, large or small. We
            understand your needs and will cater the food to satisfy the biggest
            criteria of them all—both look and taste. Do not hesitate to contact us.
          </p>
          <p className="text-center text-gray-600 mb-6">
            You can also contact us by phone at{' '}
            <a href="tel:00553123-2323" className="text-[#bca067] underline">
              00553123-2323
            </a>{' '}
            or email{' '}
            <a
              href="mailto:kazeembalogun12@hotmail.com"
              className="text-[#bca067] underline"
            >
              kazeembalogun12@hotmail.com
            </a>
            .
          </p>
          <p className="text-center text-gray-600 mb-8">
            Or you can send us a message here:
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-xl shadow-lg border border-[#bca067]"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#bca067]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#bca067]"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#bca067]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message / Special Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#bca067]"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#bca067] text-white px-6 py-3 rounded-md font-medium shadow hover:bg-[#a48b5c] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Contactus;
