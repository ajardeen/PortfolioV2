import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function ContactForm() {
  const [result, setResult] = React.useState("");
  const [showPopup, setShowPopup] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "4c7d01cb-0aec-4499-9f56-429702cf385c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setIsSubmitting(false);
    if (data.success) {
      setResult("Thank you! I'm so glad you reached out to me!");
      setShowPopup(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setShowPopup(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center my-10 text-white px-4 sm:px-6 md:px-8 w-full max-w-lg mx-aut text-[9px] lg:text-base"
    >
      <form
        onSubmit={onSubmit}
        className="w-full space-y-6 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-black"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label className="block font-semibold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Name"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label className="block font-semibold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Email"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label className="block font-semibold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="w-full py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition duration-300 flex justify-center items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"
              viewBox="0 0 24 24"
            ></svg>
          ) : (
            "Submit Form"
          )}
        </motion.button>
      </form>

      {/* Pop-up Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed flex justify-start items-center gap-2 top-4 right-4 bg-white text-black rounded-lg shadow-lg p-4 sm:p-6 text-xs lg:text-lg"
          >
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
            >
              <MdOutlineMarkEmailRead className="text-green-500 text-2xl lg:text-4xl" />
            </motion.span>
            <div className="flex justify-between items-center w-fit">
              <span className="w-40 lg:w-60">{result}</span>
              <button
                onClick={() => setShowPopup(false)}
                className="text-black hover:text-red-700 text-4xl"
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
