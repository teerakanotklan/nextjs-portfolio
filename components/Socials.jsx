'use client';

import Link from 'next/link';
import { RiGithubFill, RiFacebookFill, RiLineFill } from 'react-icons/ri';

const icons = [
  {
    path: 'https://github.com/teerakanotklan',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/teerakan.otklan',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://line.me/ti/p/nmyUN_t-fE',
    name: <RiLineFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
