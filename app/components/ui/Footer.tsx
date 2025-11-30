'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SanatanConnect</h2>
          <p className="text-sm leading-relaxed">
            Authentic Vedic rituals, Bhagwat Katha, spiritual consultations,
            online interviews, all activities performed with devotion and
            purity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Bhagwat Katha</li>
            <li>Online Interview</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={16} /> +91 7895860469
            </li>
            <li>Email: suniyal141@gmail.com</li>
          </ul>

          <div className="flex items-center gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/one_step_towards_godliness?igsh=MTRuYzEya3puY2t3ag=="
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
