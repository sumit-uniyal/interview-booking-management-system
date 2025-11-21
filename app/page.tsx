'use client';

import { useRef } from 'react';
import Navbar from '@/app/components/ui/Navbar';
import SearchMatrix from '@/app/components/matrix/SearchMatrix';
import WhoWeAre from './components/WhoWeAre';
import BlogSection from './components/BlogSection';
import Footer from './components/ui/Footer';
import ImageGallery from './components/gallery/ImageGallery';
import BookingSearch from './components/matrix/BookingSearch';

export default function HomePage() {
  const bookingRef = useRef<HTMLDivElement | null>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const images = [
    { src: '/banner/1.jpg', alt: 'Img 1' },
    { src: '/banner/2.webp', alt: 'Img 2' },
    { src: '/banner/3.webp', alt: 'Img 3' },
    { src: '/banner/bg.webp', alt: 'Img 4' },
    { src: '/banner/bg1.jpg', alt: 'Img 5' },
    { src: '/banner/bg1.jpg', alt: 'Img 6' },
  ];

  return (
    <>
      <Navbar onSearchClick={scrollToBooking} />
      <SearchMatrix />
      <WhoWeAre />

      <div ref={bookingRef}>
        <BookingSearch />
      </div>

      <BlogSection />
      <ImageGallery
        images={images}
        position="left"
        description="Experience moments captured during events, kathas, cultures and rituals."
      />
      <Footer />
    </>
  );
}
