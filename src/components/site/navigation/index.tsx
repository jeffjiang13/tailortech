"use client"
import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

type Props = {
  user?: null | User
}

const Navigation = ({ user }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 shadow-sm">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <nav className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md p-4 flex-col items-start`}>
        <Link href="/pricing" className="block font-bold hover:text-primary hover:underline p-2">Pricing</Link>
        <Link href="/about" className="block font-bold hover:text-primary hover:underline p-2">About</Link>
        <Link href="/documentation" className="block font-bold hover:text-primary hover:underline p-2">Documentation</Link>
        <Link href="/features" className="block font-bold hover:text-primary hover:underline p-2">Features</Link>
      </nav>

      {/* Desktop Links */}
      <nav className="hidden md:flex absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center justify-center gap-16">
          <li><Link href="/pricing" className="font-bold hover:text-primary hover:underline">Pricing</Link></li>
          <li><Link href="/about" className="font-bold hover:text-primary hover:underline">About</Link></li>
          <li><Link href="/documentation" className="font-bold hover:text-primary hover:underline">Documentation</Link></li>
          <li><Link href="/features" className="font-bold hover:text-primary hover:underline">Features</Link></li>
        </ul>
      </nav>

      {/* Logo and TailorTech text hidden on mobile */}
        <Link href={'/'} className="md:flex hidden items-center gap-2">
        <Image src={'/assets/code.png'} width={40} height={40} alt="logo" />
        <span className="text-xl font-bold">TailorTech.</span>
        </Link>

      {/* Login and ModeToggle always visible */}
      <aside className="flex gap-2 items-center">
        <Link href={'/agency'} className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80">Login</Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
