'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiUser, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                height={40}
                width={40}
                src="/logo.jpg"
                alt="logo"
                className="rounded-md"
              />
              <div className="text-2xl font-bold text-[#028768]">Holidays</div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <FiUser className="text-xl" />
              </button>
              <button
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(true)}
              >
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {isAccountOpen && (
          <div className="hidden md:block absolute right-8 top-16 bg-white border border-gray-200 shadow-lg rounded-md w-40">
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Profile
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Login
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <FiX className="text-2xl text-gray-600 hover:text-blue-600" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <button className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            Profile
          </button>
          <button className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            Login
          </button>
          <button className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            Logout
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
