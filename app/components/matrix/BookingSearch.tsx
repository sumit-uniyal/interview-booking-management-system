'use client';

import { motion } from 'framer-motion';
import { Input, Button } from '@heroui/react';

const BookingSearch = () => {
  return (
    <section className="w-full py-24 bg-linear-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden 
            bg-white 
            shadow-2xl 
            rounded-4xl 
            border border-gray-100 
            p-8 sm:p-12 
            backdrop-blur-xl
          "
        >
          {/* Background Glow Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Booking Search Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Track Your Booking
            </h2>

            <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
              Enter your booking reference number to check updated booking
              details.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input
                placeholder="Enter Reference Number"
                radius="lg"
                size="lg"
                className="w-full text-lg"
              />

              <Button
                radius="lg"
                size="lg"
                className="
                  w-full md:w-auto
                  bg-blue-600 text-white 
                  font-semibold px-10 py-6 
                  rounded-2xl shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  transition-all
                "
              >
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSearch;
