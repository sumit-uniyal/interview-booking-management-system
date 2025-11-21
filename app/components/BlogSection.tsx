'use client';

import Image from 'next/image';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Spiritual Significance of Bhagwat Katha',
      description:
        'Explore how Bhagwat Katha purifies the mind, strengthens devotion, and brings harmony into your life.',
      image:
        'https://images.pexels.com/photos/10595516/pexels-photo-10595516.jpeg',
      date: 'March 2025',
    },
    {
      id: 2,
      title: 'How to Prepare Your Home for Griha Pravesh Puja',
      description:
        'A simple and clear guide for families performing their first Griha Pravesh ceremony.',
      image:
        'https://images.pexels.com/photos/10595516/pexels-photo-10595516.jpeg',
      date: 'March 2025',
    },
    {
      id: 3,
      title: 'Why Online Puja Booking Is Growing Rapidly',
      description:
        'Learn why thousands of devotees prefer booking pujas online for convenience and authenticity.',
      image:
        'https://images.pexels.com/photos/10595516/pexels-photo-10595516.jpeg',
      date: 'March 2025',
    },
  ];

  return (
    <section className="w-full py-20 bg-linear-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Premium Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              Latest From Our Blog
            </h2>
            <p className="mt-3 text-gray-600 text-center">
              Insights, spiritual knowledge & important updates
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40" />

                  {/* Date */}
                  <span className="absolute bottom-3 left-3 text-white text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    {blog.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.description}
                  </p>

                  <button className="mt-4 text-orange-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
