'use client';
import Image from 'next/image';
import { FaHeart, FaComment, FaRegBookmark } from 'react-icons/fa';
import { useState } from 'react';

interface BlogProps {
  data: any[];
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  if (!data?.length) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="w-full h-96 bg-gray-200 animate-pulse rounded-xl"
          ></div>
        ))}
      </div>
    );
  }

  const cleanCaption = (caption: string) =>
    caption?.replace(/#[a-zA-Z0-9_]+/g, '').trim() || '';

  const limitWords = (text: string, limit = 20) => {
    const words = text.split(' ');
    return words.length <= limit
      ? text
      : words.slice(0, limit).join(' ') + '...';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-6">
      {data.map((item) => {
        const cleaned = cleanCaption(item.caption);
        const isLong = cleaned.split(' ').length > 20;
        const [showMore, setShowMore] = useState(false);

        return (
          <div
            key={item.id}
            className="
              max-w-md mx-auto
              bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              border border-gray-200 overflow-hidden
            "
          >
            <div className="relative w-full h-[420px] bg-gray-100">
              {item.media_type === 'IMAGE' && (
                <Image
                  src={item.media_url}
                  alt="Instagram post"
                  fill
                  unoptimized
                  className="object-cover"
                />
              )}

              {item.media_type === 'VIDEO' && (
                <video
                  src={item.media_url}
                  controls
                  className="w-full h-[420px] object-cover"
                />
              )}
            </div>

            <div className="flex justify-between items-center px-4 py-3">
              <div className="flex items-center gap-4 text-2xl">
                <FaHeart
                  className="
                  text-red-500 
                    cursor-pointer 
                    hover:scale-125 
                    transition 
                  hover:text-red-600
                    drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]"
                />

                <FaComment
                  className="
                  text-blue-500 
                    cursor-pointer 
                    hover:scale-125 
                    transition 
                  hover:text-blue-600
                    drop-shadow-[0_0_6px_rgba(0,110,255,0.6)]
                  "
                />
              </div>
            </div>

            <div className="px-4 text-sm font-semibold text-gray-900">
              {item.like_count || 0} likes
            </div>

            <div className="px-4 py-2 text-sm text-gray-800 leading-relaxed">
              <span className="font-semibold mr-2">
                {item.username || 'username'}
              </span>
              {showMore ? cleaned : limitWords(cleaned, 25)}

              {isLong && (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-gray-500 ml-2 text-xs hover:underline"
                >
                  {showMore ? 'less' : 'more'}
                </button>
              )}
            </div>

            <div className="px-4 pb-4 text-xs text-gray-400 uppercase tracking-wide">
              {new Date(item.timestamp).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
