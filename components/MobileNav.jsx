"use client";

// modules

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AlignJustify } from "lucide-react";

// components
import Logo from "../Logo";
import Socials from "../Socials";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// constants
import { navLinks } from "@/constants";

const MobileNav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            {/* Logo */}
            <Logo />

            {/* MobileNav */}
            <div className={`${containerStyles}`}>
              {navLinks.map((link, index) => {
                return (
                  <Link
                    href={link.route}
                    key={index}
                    className={`capitalize ${linkStyles}`}
                  >
                    {link.route === pathname && (
                      <motion.span
                        initial={{ y: "-100%", x: "-100%" }}
                        animate={{ y: 0, x: 0 }}
                        transition={{ type: "tween" }}
                        layoutId='underline'
                        className={`${underlineStyles}`}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Socials */}
            <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
