"use client";

// modules
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// components
import Logo from "../Logo";
import MobileNav from "./MobileNav";
import ThemeToggler from "../ThemeToggler";

// constants
import { navLinks } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='navbar'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Logo />

          {/* Center Nav */}
          <div className='flex items-center gap-x-6'>
            <nav className='hidden xl:flex gap-x-8 items-center'>
              {navLinks.map((link, index) => {
                return (
                  <Link
                    href={link.route}
                    key={index}
                    className='capitalize relative hover:text-primary transition-all'
                  >
                    {link.route === pathname && (
                      <motion.span
                        initial={{ y: "-100%" }}
                        layoutId='underline'
                        className='absolute top-full h-[2px] bg-primary w-full'
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className='flex items-center gap-x-6'>
            <ThemeToggler />

            {/* MobileNave */}
            <div className='xl:hidden'>
              <MobileNav
                containerStyles='flex flex-col items-center h-full text-xl gap-y-8'
                linkStyles='relative transition-all'
                underlineStyles='absolute top-full h-[2px] bg-primary w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
