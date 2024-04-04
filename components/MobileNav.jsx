// link (next js)
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

// components
import Logo from "./Logo";
import Socials from "./Socials";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/certificates", name: "certificates" },
  { path: "/contact", name: "contact" },
];

const MobileNav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <div className={`${containerStyles}`}>
              {links.map((link, index) => {
                return (
                  <Link
                    href={link.path}
                    key={index}
                    className={`capitalize ${linkStyles}`}
                  >
                    {link.path === path && (
                      <motion.span
                        initial={{ y: "-100%", x: "-100%" }}
                        animate={{ y: 0, x: 0 }}
                        transition={{ type: "tween" }}
                        layoutId="underline"
                        className={`${underlineStyles}`}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
