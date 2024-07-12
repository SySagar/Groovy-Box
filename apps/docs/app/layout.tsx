import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ParentLayout from '@layouts/Rootlayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Groovy-Box',
  description: 'My conmponent library',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ParentLayout>{children}</ParentLayout>
      </body>
    </html>
  );
}
