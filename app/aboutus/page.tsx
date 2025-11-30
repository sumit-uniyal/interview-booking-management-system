'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
      <section className="relative w-full h-[60vh]">
        <Image
          src="/image/abtbg.jpg"
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
            We are a modern spiritual platform designed to bring devotion closer
            to every home. From booking a Bhagwat Katha to connecting with
            Pandit Ji through online spiritual interviews, our mission is to
            offer seamless, authentic guidance backed by tradition and trust.
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
              To bring devotion closer by blending tradition, trust, and
              accessibility — helping every devotee connect with authentic
              spiritual guidance wherever they are.
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
          Contact Us
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Call Us',
              phone: '+91 7895860469',
            },
            {
              title: 'Email Us',
              email: 'suniyal141@gmail.com',
            },
            {
              title: 'Follow on Instagram',
              instaLinks:
                'https://www.instagram.com/one_step_towards_godliness?igsh=MTRuYzEya3puY2t3ag==',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 shadow-lg rounded-2xl bg-white text-center"
            >
              <h4 className="text-xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h4>

              {/* Phone Card */}
              {item.phone && (
                <div className="flex flex-col items-center gap-2 text-gray-700">
                  <FaPhone className="text-2xl text-blue-600" />
                  <p>{item.phone}</p>
                </div>
              )}

              {/* Email Card */}
              {item.email && (
                <div className="flex flex-col items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-2xl text-green-600" />
                  <p>{item.email}</p>
                </div>
              )}

              {/* Instagram Links */}
              {item.instaLinks && (
                <div className="flex justify-center gap-5 mt-4">
                  <a
                    key={item.instaLinks}
                    href={item.instaLinks}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 text-2xl hover:scale-110 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
