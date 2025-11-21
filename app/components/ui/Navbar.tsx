'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar = ({ onSearchClick }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer">
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
            <a className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer">
              Home
            </a>

            <a className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer">
              About Us
            </a>

            <a className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer">
              Blogs
            </a>

            <a className="text-gray-700 font-medium text-lg hover:text-blue-600 transition-all cursor-pointer">
              Contact Us
            </a>

            <button
              onClick={onSearchClick}
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
            <a className="block text-gray-700 text-lg font-medium">Home</a>
            <a className="block text-gray-700 text-lg font-medium">Services</a>
            <a className="block text-gray-700 text-lg font-medium">Blogs</a>
            <a className="block text-gray-700 text-lg font-medium">Contact</a>

            <button
              onClick={() => {
                onSearchClick();
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
