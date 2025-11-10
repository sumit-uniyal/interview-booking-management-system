'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            <Image
              src={url}
              alt={`banner-${index}`}
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
