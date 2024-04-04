import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiBriefcase4Fill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-20 2xl:py-28">
      <div className="container mx-auto">
        <div className="flex justify-center gap-x-8">
          {/* text */}
          <div className="flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              IT Support
            </div>
            <h1 className="h1 mb-4">Hello, my name is Teerakan Otklan</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I'm an IT Support professional with a comprehensive understanding
              of networks and computer hardware.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href="/resume/Teerakan_RESUME.pdf" target="_blank">
                <Button
                  variant="primary"
                  className="bg-tertiary dark:bg-secondary/20 gap-x-2"
                >
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden 2xl:flex lg:pt-20 absolute left-2/4 bottom-44 2xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
