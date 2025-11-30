import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/ui/Navbar';
import ToastProvider from './components/toaster/ToastProvider';
import Footer from './components/ui/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Sanatan Connect',
  description:
    'A spiritual platform to explore Sanatan Dharma, divine knowledge, Vedic teachings, temples, rituals, and devotion. Stay connected with spirituality and ancient wisdom.',
  icons: {
    icon: '/image/om.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
