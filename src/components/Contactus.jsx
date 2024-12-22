import React, { useState } from "react";
import { motion } from "framer-motion";

function Contactus() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/xvggprjr", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json", // Ensures the response is parsed as JSON
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          form.reset(); // Reset the form fields
          setErrorMessage(""); // Clear any previous error message
          setTimeout(() => setIsSubmitted(false), 5000); // Hide "Thank You" message after 5 seconds
        } else {
          response.json().then((data) => {
            setErrorMessage(
              data.error || "Failed to submit the form. Please try again."
            );
          });
        }
      })
      .catch(() => {
        setErrorMessage(
          "Failed to submit the form. Please check your network or try again later."
        );
      });
  };

  return (
    <section id="contact">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {isSubmitted ? (
          <motion.div
            className="flex flex-col items-center justify-center min-h-[300px] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-semibold text-[#bca067] mb-4 dark:text-white">
              Thank You!
            </h1>
            <p className="text-white dark:text-white">
              Your message has been sent successfully. We will get back to you
              shortly!
            </p>
          </motion.div>
        ) : (
          <>
            {errorMessage && (
              <motion.div
                className="mb-4 text-red-500 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {errorMessage}
              </motion.div>
            )}

            <h1 className="text-3xl font-semibold text-center text-[#bca067] mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-1/2 w-36 h-1 bg-[#bca067] transform -translate-x-1/2"></span>
            </h1>
            <div className="border border-[#bca067] rounded-3xl mb-8">
              <p className="text-center text-white mb-8 leading-6 dark:text-white ">
                We'd love to hear from you. <br />
                We offer full-service catering for any event, large or small. We
                understand your needs and will cater the food to satisfy the
                biggest criteria of them all—both look and taste. Do not
                hesitate to contact us.
              </p>
              <p className="text-center text-white mb-6 dark:text-white">
                You can also contact us by phone at{" "}
                <a
                  href="tel:00553123-2323"
                  className="text-[#bca067] underline"
                >
                  00553123-2323
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:kazeembalogun12@hotmail.com"
                  className="text-[#bca067] underline "
                >
                  hello@kulinarykompass.co.uk
                </a>
                .
              </p>
              <p className="text-center text-white mb-8 dark:text-white">
                Or you can send us a message here:
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-6 rounded-xl shadow-lg border border-[#bca067]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
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
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  type="submit"
                  className="bg-[#bca067] text-white px-6 py-3 rounded-md font-medium shadow hover:bg-[#a48b5c] transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default Contactus;
