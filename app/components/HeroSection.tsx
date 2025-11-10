'use client';

import Container from './Container';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div className="relative flex items-center justify-center z-10 py-10">
      <Container>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
            {subtitle}
          </p>
          {buttonText && (
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              {buttonText}
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
