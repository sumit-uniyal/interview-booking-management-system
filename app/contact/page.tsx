'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Contact hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Reach out to us via email, phone, or visit us at our office. We are
            here to assist you and answer all your queries.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>support@travelplatform.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+91 98765 43210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123 Travel Street, City, Country</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;
