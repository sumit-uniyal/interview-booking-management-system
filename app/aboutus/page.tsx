'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div>
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://images.pexels.com/photos/3860091/pexels-photo-3860091.jpeg"
          alt="About hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-xl">
            About Us
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a modern travel platform built to simplify every aspect of
            your journey. From booking your flights to planning personalized
            tour experiences, our mission is to deliver seamless travel
            solutions backed by innovation and expertise.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg">
              To redefine travel by blending technology, trust, and transparent
              pricing — helping people travel smoothly across the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
              width={600}
              height={400}
              alt="Mission"
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold mb-10 text-gray-900 text-center">
          Our Values
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Trust & Reliability',
              desc: 'Secure bookings and honest pricing with no hidden surprises.',
            },
            {
              title: 'Customer First',
              desc: 'Support available whenever you need us, wherever you go.',
            },
            {
              title: 'Innovation',
              desc: 'Smart tools and features that make travel planning effortless.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 shadow-lg rounded-2xl bg-white"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
