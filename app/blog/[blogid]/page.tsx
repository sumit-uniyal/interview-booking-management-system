'use client';

import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Destinations to Visit in 2025',
    desc: 'Explore the most breathtaking locations for your next adventure and plan your perfect itinerary with ease.',
    img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
    date: 'Nov 15, 2025',
    longDesc:
      'This is a full detailed blog about the top 10 places to explore in 2025. You will learn what to pack, best season to visit, and insider travel hacks.',
  },
  {
    id: 2,
    title: 'How to Travel on a Budget',
    desc: 'Discover smart tips to save money while traveling without compromising on comfort or experience.',
    img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
    date: 'Nov 10, 2025',
    longDesc:
      'A complete guide on how to plan a budget-friendly trip, from affordable stays to food and transport hacks.',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Solo Travel',
    desc: 'Learn how to make the most of your solo trips with safety tips, planning hacks, and inspiration.',
    img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
    date: 'Nov 5, 2025',
    longDesc:
      'Solo traveling can be life-changing. This blog covers how to stay safe, meet new people, and plan stress-free journeys.',
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Solo Travel',
    desc: 'Learn how to make the most of your solo trips with safety tips, planning hacks, and inspiration.',
    img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
    date: 'Nov 5, 2025',
    longDesc:
      'Another version of the solo travel guide with different tips and practical examples.',
  },
];

export default function BlogDetails() {
  const { blogid } = useParams();
  const blog = blogPosts.find((b) => String(b.id) === blogid);

  if (!blog) return notFound();

  return (
    <div>
      {/* Hero Image */}
      <section className="relative w-full h-[60vh]">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-xl">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-gray-500 mb-4">{blog.date}</p>

        <p className="text-xl text-gray-700 leading-relaxed mb-10">
          {blog.desc}
        </p>

        <p className="text-lg leading-loose text-gray-800">{blog.longDesc}</p>
      </section>
    </div>
  );
}
