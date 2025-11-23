'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

interface BlogProps {
  data: any[];
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  if (!data?.length) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="w-full h-64 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
          ></div>
        ))}
      </div>
    );
  }

  const cleanCaption = (caption: string) => {
    if (!caption) return '';
    return caption.replace(/#[a-zA-Z0-9_]+/g, '').trim();
  };

  const limitWords = (text: string, limit = 30) => {
    const words = text.split(' ');
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(' ') + '...';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => {
        const cleaned = cleanCaption(item.caption);
        const isLong = cleaned.split(' ').length > 30;

        const [showMore, setShowMore] = useState(false);

        return (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            {item.media_type === 'IMAGE' && (
              <div className="relative w-full h-64">
                <Image
                  src={item.media_url}
                  alt="Instagram post"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            )}

            {item.media_type === 'VIDEO' && (
              <video
                src={item.media_url}
                controls
                className="w-full h-64 object-cover"
              ></video>
            )}

            <div className="p-5 space-y-3">
              <p className="text-gray-800 text-sm leading-relaxed">
                {showMore ? cleaned : limitWords(cleaned, 30)}

                {isLong && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-500 text-sm ml-2 hover:underline"
                  >
                    {showMore ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </p>

              <p className="text-gray-500 text-xs">
                {new Date(item.timestamp).toLocaleDateString()}
              </p>

              <div className="flex items-center gap-5 pt-2 text-gray-700">
                <span className="flex items-center gap-1 text-sm">
                  <FaHeart className="text-red-500" /> {item.like_count || 0}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <FaComment className="text-blue-500" />{' '}
                  {item.comments_count || 0}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
