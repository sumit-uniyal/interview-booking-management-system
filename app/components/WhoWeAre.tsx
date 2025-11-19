import React from 'react';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image Section */}
      <div className="rounded-2xl overflow-hidden shadow-lg h-[350px]">
        <Image
          src="/image/homeabout.jpeg"
          alt="Pandit Ji"
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>

        <p className="text-gray-600 leading-relaxed text-lg">
          We provide authentic Vedic services including Bhagwat Katha, online
          interviews, spiritual consultations, and personalized puja bookings.
          With years of experience in scriptures and rituals, Pandit Ji ensures
          every ceremony is performed with complete devotion and correctness.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg">
          Our mission is to connect devotees with pure and meaningful spiritual
          guidance, whether in-person or online, making it easier for families
          to perform traditional ceremonies with trust and convenience.
        </p>
      </div>
    </section>
  );
}
