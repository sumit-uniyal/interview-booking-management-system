'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const goToBooking = () => {
    router.push('/#booking');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a
              onClick={() => router.push('/')}
              className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer"
            >
              Home
            </a>

            <a
              onClick={() => router.push('/aboutus')}
              className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer"
            >
              About Us
            </a>

            <a
              onClick={() => router.push('/blog')}
              className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer"
            >
              Blogs
            </a>

            <a
              onClick={() => router.push('/contact')}
              className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer"
            >
              Contact Us
            </a>

            <button
              onClick={goToBooking}
              className="px-6 py-2.5 rounded-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300"
            >
              Search Booking
            </button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={30} /> : <FiMenu size={28} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 bg-white rounded-2xl shadow-xl p-6 space-y-5 animate-fadeIn">
            <a
              onClick={() => router.push('/')}
              className="block text-gray-700 text-lg font-medium cursor-pointer"
            >
              Home
            </a>
            <a className="block text-gray-700 text-lg font-medium cursor-pointer">
              Services
            </a>
            <a className="block text-gray-700 text-lg font-medium cursor-pointer">
              Blogs
            </a>
            <a className="block text-gray-700 text-lg font-medium cursor-pointer">
              Contact
            </a>

            <button
              onClick={() => {
                goToBooking();
                setOpen(false);
              }}
              className="w-full py-3 rounded-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              Search Booking
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
