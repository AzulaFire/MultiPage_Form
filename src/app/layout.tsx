import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Multi-Page Form in NextJS',
  description:
    'Multi-page form in Next.js using Server Actions, Zod for validation, and Local Storage to maintain user state as they fill out a form.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='min-h-screen px-8 max-w-7xl mx-auto py-20'>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
