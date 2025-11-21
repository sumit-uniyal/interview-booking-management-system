'use client';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface CommonGalleryProps {
  position?: 'left' | 'right';
  title?: string;
  description?: string;
  images: { src: string; alt: string }[];
}

export default function CommonGallery({
  position = 'left',
  title,
  description,
  images,
}: CommonGalleryProps) {
  const showText = title || description;

  return (
    <section className="w-full bg-gray-50 py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 xl:p-16">
          {/* SIMPLE GALLERY */}
          {!showText && (
            <LightGallery
              plugins={[lgThumbnail, lgZoom]}
              elementClassNames="
                grid grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-4 sm:gap-5
              "
            >
              {images.map((item, index) => (
                <a key={index} href={item.src} className="block group w-full">
                  <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </a>
              ))}
            </LightGallery>
          )}

          {/* GALLERY WITH TEXT + POSITION */}
          {showText && (
            <div
              className={`
                grid 
                grid-cols-1 
                md:grid-cols-2 
                gap-10 lg:gap-14 
                items-center
                ${
                  position === 'right'
                    ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1'
                    : ''
                }
              `}
            >
              {/* Left gallery block */}
              <div>
                <LightGallery
                  plugins={[lgThumbnail, lgZoom]}
                  elementClassNames="
                    grid 
                    grid-cols-2 
                    gap-4 sm:gap-5
                  "
                >
                  {images.slice(0, 4).map((item, index) => (
                    <a
                      key={index}
                      href={item.src}
                      className="block group w-full"
                    >
                      <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </a>
                  ))}
                </LightGallery>
              </div>

              {/* Right text block */}
              <div className="space-y-3 sm:space-y-4">
                {title && (
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
