"use client";
import React from "react";

//components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 bg-background shadow-sm dark:bg-background dark:shadow-sm sticky top-0 z-30">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              initial='{{ y: "-100%" }}'
              animate="{{ y: 0 }}"
              transition='{{ type: "tween" }}'
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav
                containerStyles="flex flex-col items-center gap-y-6 text-2xl "
                linkStyles="relative"
                initial='{{ x: "-100%" }}'
                animate="{{ x: 0 }}"
                transition='{{ type: "tween" }}'
                underlineStyles="absolute right-0 top-full h-[2px] bg-primary w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
