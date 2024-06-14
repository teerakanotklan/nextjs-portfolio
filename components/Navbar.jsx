"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import ModeToggle from "./theme/mode-toggle";

// constants
import { navLinks } from "@/constants";

const ACTIVE_ROUTE = "text-primary";
const INACTIVE_ROUTE = "text-muted-foreground hover:text-primary";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 bg-background shadow-sm dark:bg-background dark:shadow-sm sticky top-0 z-30">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}

          {/* Center Nav */}
          <div className="flex items-center gap-x-6">
            <nav className="hidden xl:flex gap-x-8 items-center">
              {navLinks.map((link, index) => {
                return (
                  <Link
                    href={link.route}
                    key={index}
                    className={
                      pathname === link.route ? ACTIVE_ROUTE : INACTIVE_ROUTE
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-x-6">
            <ModeToggle />

            {/* MobileNave */}
            <div className="xl:hidden">
              <MobileNav
                containerStyles="flex flex-col items-center h-full text-xl gap-y-8"
                linkStyles="relative transition-all"
                underlineStyles="absolute top-full h-[2px] bg-primary w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
