'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogPage = () => {
  // Blog posts with ID
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Destinations to Visit in 2025',
      desc: 'Explore the most breathtaking locations for your next adventure and plan your perfect itinerary with ease.',
      img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      date: 'Nov 15, 2025',
    },
    {
      id: 2,
      title: 'How to Travel on a Budget',
      desc: 'Discover smart tips to save money while traveling without compromising on comfort or experience.',
      img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      date: 'Nov 10, 2025',
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Solo Travel',
      desc: 'Learn how to make the most of your solo trips with safety tips, planning hacks, and inspiration.',
      img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      date: 'Nov 5, 2025',
    },
    {
      id: 4,
      title: 'The Ultimate Guide to Solo Travel',
      desc: 'Learn how to make the most of your solo trips with safety tips, planning hacks, and inspiration.',
      img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      date: 'Nov 5, 2025',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
          alt="Blog hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-xl">Blog</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Our Latest Insights
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Stay updated with travel tips, destination guides, and expert
            insights to make every journey memorable. Explore our blog for
            inspiration and practical advice.
          </p>
        </motion.div>
      </section>

      {/* Blog Cards */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl shadow-lg bg-white overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
                <p className="text-sm text-gray-400">{post.date}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
