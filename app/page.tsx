'use client';

import Carousel from './components/carousel/Carousel';
import HeroSection from './components/HeroSection';
import SearchMatrix from './components/matrix/SearchMatrix';

const Page = () => {
  const bannerImages = ['/banner/1.jpg', '/banner/2.webp', '/banner/3.webp'];

  return (
    <div className="relative w-full ">
      <Carousel images={bannerImages} />

      <div className="absolute inset-0 z-10 flex flex-col items-center  justify-center space-y-10 h-[70vh]">
        <HeroSection
          title="Plan Your Dream Trip"
          subtitle="Discover luxury hotels, unique tours, and unforgettable experiences."
        />

        <div className="w-full flex justify-center">
          <SearchMatrix />
        </div>
      </div>
    </div>
  );
};

export default Page;
