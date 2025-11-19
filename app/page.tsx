'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/ui/Navbar';
import SearchMatrix from '@/app/components/matrix/SearchMatrix';
import WhoWeAre from './components/WhoWeAre';
import BlogSection from './components/BlogSection';
import Footer from './components/ui/Footer';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [tripType, setTripType] = useState<'hotel' | 'flight'>('hotel');

  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        <div
          className="w-full bg-cover bg-center flex flex-col items-center p-6 pt-28 pb-20"
          style={{ backgroundImage: 'url("/banner/bg.webp")' }}
        >
          <Navbar />

          <SearchMatrix />
        </div>

        <div className="w-full flex flex-col items-center gap-10 py-10 bg-gray-50">
          <WhoWeAre />
          <BlogSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
