import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import SmoothScroll from '@/components/SmoothScroll';
import Loader from '@/components/Loader';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://www.akvid.com'),
  title: 'AKVID - Premium Sanitary Products Manufacturer',
  description: 'Leading manufacturer of premium sanitary products including wash basins, toilets, faucets, showers, bathtubs and bathroom accessories. Quality, innovation, and excellence in every product.',
  keywords: 'sanitary products, wash basins, toilets, faucets, showers, bathtubs, bathroom accessories, AKVID',
  authors: [{ name: 'AKVID' }],
  openGraph: {
    title: 'AKVID - Premium Sanitary Products Manufacturer',
    description: 'Leading manufacturer of premium sanitary products. Quality, innovation, and excellence in every product.',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKVID - Premium Sanitary Products',
    description: 'Leading manufacturer of premium sanitary products',
    images: [
      {
        url: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className}>
        <Loader />
        <SmoothScroll>
          <PageTransition>
            <Header />

            <main className="min-h-screen">
              {children}
            </main>

            <Footer />
            <WhatsAppButton />
          </PageTransition>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
