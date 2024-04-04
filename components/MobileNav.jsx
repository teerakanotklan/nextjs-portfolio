import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

// components
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = ({
  containerStyles,
  linkStyles,
  initial,
  animate,
  transition,
  underlineStyles,
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles={`${containerStyles}`}
              linkStyles={`${linkStyles}`}
              initial={`${initial}`}
              animate={`${animate}`}
              transition={`${transition}`}
              underlineStyles={`${underlineStyles}`}
            />
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
