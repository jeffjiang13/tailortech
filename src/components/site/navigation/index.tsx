import { ModeToggle } from '@/components/global/mode-toggle';
import { UserButton } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image src={'/assets/code.png'} width={40} height={40} alt="logo" />
        <span className="text-xl font-bold">TailorTech.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={'#'}><a className="font-bold">Pricing</a></Link>
          <Link href={'#'}><a className="font-bold">About</a></Link>
          <Link href={'#'}><a className="font-bold">Documentation</a></Link>
          <Link href={'#'}><a className="font-bold">Features</a></Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        {/* Conditional rendering based on user's login status */}
        {!user ? (
          <Link href={'/login'}><a className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80">Login</a></Link>
        ) : (
          <Link href={'/dashboard'}><a className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80">Dashboard</a></Link>
        )}
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
