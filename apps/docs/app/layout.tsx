import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en' className={inter.className} suppressHydrationWarning>
        <head>
          <link rel='icon' />
          <title>Groovy-Box/ui</title>
        </head>
        <body>
          <RootProvider>{children}</RootProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
