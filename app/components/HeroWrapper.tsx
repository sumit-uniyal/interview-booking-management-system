'use client';

import { HeroUIProvider } from '@heroui/react'; // Correct import
import { ReactNode } from 'react';

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default HeroWrapper;
