'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`
        w-full fixed top-0 left-0 z-50
        bg-[#f8f8f8]  /* off-white */
        transition-all duration-300
        ${isScrolled ? 'shadow-md' : 'shadow-sm'}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-3xl font-bold text-gray-900">Shri Badrinath Ji</h1>

        <div className="flex gap-x-8 text-lg font-medium text-gray-800">
          <Link href="/about" className="hover:text-black">
            About Us
          </Link>
          <Link href="/blogs" className="hover:text-black">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
