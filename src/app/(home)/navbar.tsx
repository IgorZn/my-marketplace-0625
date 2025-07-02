'use client';

import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={'neutral'}
      className={cn(
        'bg-transparent hover:bg-transparent full-rounded hover:border-primary',
        isActive ? 'border-green-500 bg-emerald-100' : '',
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: '/', children: 'Home' },
  { href: '/about', children: 'About' },
  { href: '/contact', children: 'Contact' },
  { href: '/login', children: 'Login' },
  { href: '/register', children: 'Register' },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={'h-20 flex border-b justify-between font-medium bg-white'}>
      <Link href={'/'} className={'pl-6 flex items-center'}>
        <span className={cn('text-5xl font-semibold', poppins.className)}>funroad</span>
      </Link>
      <div className={'items-center gap-4 hidden lg:flex pr-6'}>
        {navbarItems.map(item => (
          <NavbarItem key={item.href} {...item} isActive={item.href === pathname}></NavbarItem>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
