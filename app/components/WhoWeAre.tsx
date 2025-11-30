'use client';

import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="rounded-3xl overflow-hidden shadow-lg h-[280px] sm:h-[350px]">
              <Image
                src="/image/homeabout1.jpg"
                alt="Pandit Ji"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                We offer authentic spiritual services centered around Bhagwat
                Katha and online spiritual interviews. With deep knowledge of
                Vedic scriptures and storytelling tradition, Pandit Ji delivers
                meaningful Kathas that inspire devotion, peace, and
                understanding of Sanatan Dharma.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                Our mission is to make spiritual guidance accessible and
                convenient for every devotee—helping families experience the
                essence of Bhagwat Katha and seek personal guidance through
                online one-to-one sessions filled with purity, trust, and
                devotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
