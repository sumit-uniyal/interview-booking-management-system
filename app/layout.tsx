import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import HeroWrapper from './components/HeroWrapper'; // client component

const nunito = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Holidays',
  description: 'Plan your trip',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased bg-gray-50`}>
        <HeroWrapper>
          <Navbar />
          <main className="pt-16">{children}</main>
        </HeroWrapper>
      </body>
    </html>
  );
}
