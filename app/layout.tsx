import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/ui/Navbar';
import ToastProvider from './components/toaster/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TravelEase - Your Perfect Travel Companion',
  description:
    'Discover amazing destinations, book hotels, flights, and tours with ease.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
