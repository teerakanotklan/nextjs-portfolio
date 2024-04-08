"use client";

// modules
import Link from "next/link";

// constants
import { socialIcons } from "@/constants";

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialIcons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
