'use client';

import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import NavbarSidebar from '@/app/(home)/navbar-sidebar';
import { MenuIcon } from 'lucide-react';

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
];

function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <nav className={'h-20 flex border-b justify-between font-medium bg-white'}>
      <Link href={'/'} className={'pl-6 flex items-center'}>
        <span className={cn('text-5xl font-semibold', poppins.className)}>funroad</span>
      </Link>

      <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className={'items-center gap-4 hidden lg:flex pr-6'}>
        {navbarItems.map(item => (
          <NavbarItem key={item.href} {...item} isActive={item.href === pathname}></NavbarItem>
        ))}
      </div>
      <div className={'hidden lg:flex'}>
        <Button
          asChild
          variant={'secondary'}
          className={
            'border-l border-t-0 border-b-0 px-12 h-full bg-white hover:bg-amber-400 transition-colors text-lg'
          }
        >
          <Link href={'/login'}>Login</Link>
        </Button>
        <Button
          asChild
          variant={'secondary'}
          className={
            'border-l border-t-0 border-b-0 px-12 h-full bg-emerald-200 hover:bg-amber-400 hover:text-black transition-colors text-lg'
          }
        >
          <Link href={'/register'}>Start selling</Link>
        </Button>
      </div>

      <div className={'flex items-center justify-center lg:hidden'}>
        <Button variant={'ghost'} className={'size-12 border-transparent'} onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
