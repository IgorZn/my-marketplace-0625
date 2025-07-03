import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface NavbarProps {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function NavbarSidebar({ items, open, onOpenChange }: NavbarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className={'p-0 translate-none'}>
        <SheetHeader className="flex flex-col p-4 border-b">
          <div className={'flex items-center'}>
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className={'flex flex-col overflow-y-auto w-full'}></ScrollArea>
        {items.map(item => (
          <Link
            href={item.href}
            key={item.href}
            className={'flex items-center w-full p-1 pl-4 text-left text-base font-medium '}
            onClick={() => onOpenChange(false)}
          >
            {item.children}
          </Link>
        ))}
        <div className={'border-t gap-y-2 pt-4 w-full'}>
          <Link
            href={'/login'}
            className={'flex items-center p-1 pl-4 text-left text-base font-medium'}
            onClick={() => onOpenChange(false)}
          >
            Login
          </Link>
          <Link
            href={'/register'}
            className={'flex items-center p-1 pl-4 text-left text-base font-medium'}
            onClick={() => onOpenChange(false)}
          >
            Register
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarSidebar;
