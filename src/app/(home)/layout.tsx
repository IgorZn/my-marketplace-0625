import React from 'react';
import Navbar from '@/app/(home)/navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
