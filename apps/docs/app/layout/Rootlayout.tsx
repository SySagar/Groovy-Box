'use client';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ParentLayoutProps {
  children: React.ReactNode;
}

export default function ParentLayout({ children }: ParentLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
