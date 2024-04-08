/* ========= modules ========= */
import { RiGithubFill, RiFacebookFill, RiLineFill } from "react-icons/ri";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { Network, Laptop, Wrench } from "lucide-react";

/* ========= constants ========= */

export const navLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Certificates",
    route: "/certificates",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export const socialIcons = [
  {
    path: "https://github.com/teerakanotklan",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/teerakan.otklan",
    name: <RiFacebookFill />,
  },
  {
    path: "https://line.me/ti/p/nmyUN_t-fE",
    name: <RiLineFill />,
  },
];

export const infoData = [
  {
    label: "Teerakan Otklan",
    icon: <User2 size={20} />,
  },
  {
    label: "+668 8626 3064",
    icon: <PhoneCall size={20} />,
  },
  {
    label: "teerakan.otk@gmail.com",
    icon: <MailIcon size={20} />,
  },
  {
    label: "Born on 5 July, 2003",
    icon: <Calendar size={20} />,
  },
  {
    label: "High vocational certificate of Computer Technology",
    icon: <GraduationCap size={20} />,
  },
  {
    label:
      "31 Moo 5, Samrong Subdistrict, Mueang Surin District, Surin 32000, Thailand",
    icon: <HomeIcon size={20} />,
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        academy: "Surin Technical College",
        qualification: "High vocational certificate of Computer Technology",
        years: "May. 2022 - Mar. 2024",
      },
      {
        academy: "Surin Technical College",
        qualification: "Vocational certificate of Computer Technology",
        years: "May. 2019 - Mar. 2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Surindra Rajabhat University (ARIT) - Surin, Thailand",
        role: "IT Support",
        years: "Mar. 2023 - May. 2023",
      },
      {
        company: "Ruampaet Dr.ANAN Hospital - Surin, Thailand",
        role: "IT Support",
        years: "Mar. 2021 - Sep. 2021",
      },
    ],
  },
];

export const skillData = [
  {
    title: "Network",
    label: "TCP/IPv4, VLAN, LAN, WLAN, DHCP",
    icon: <Network size={72} strokeWidth={0.8} />,
  },
  {
    title: "Computer",
    label:
      "Basic hardware and software computer knowledge, Window 10, Window 11, Linux(Ubuntu) ",
    icon: <Laptop size={72} strokeWidth={0.8} />,
  },
  {
    title: "Tools",
    label: "VS code, Putty, VMware Workstation",
    icon: <Wrench size={72} strokeWidth={0.8} />,
  },
];

export const projectData = [
  {
    category: "React JS",
    title: "Nexa Website",
    label: "React Project",
    image: "/work/1.png",
    route: "/",
    github: "/",
  },
  {
    category: "Next JS",
    title: "Lumina Website",
    label: "Next Project",
    image: "/work/2.png",
    route: "/",
    github: "/",
  },
  {
    category: "FullStack",
    title: "Nexa Website",
    label: "FullStack Project",
    image: "/work/3.png",
    route: "/",
    github: "/",
  },
  {
    category: "Next JS",
    title: "Nexa Website",
    label: "Next Project",
    image: "/work/4.png",
    route: "/",
    github: "/",
  },
  {
    category: "React JS",
    title: "Nexa Website",
    label: "React Project",
    image: "/work/1.png",
    route: "/",
    github: "/",
  },
  {
    category: "Next JS",
    title: "Evolve Website",
    label: "Next Project",
    image: "/work/3.png",
    route: "/",
    github: "/",
  },
];

export const certificateData = [
  {
    category: "2024",
    title:
      "1st Runner-up, Cloud Computing Management Skills at High Vocational Certificate Level",
    label:
      "33rd Professional Skills Competition and Basic Skills Academic Conference of the Future Professional Organization of Thailand, Northeastern Region.",
    image: "/certificates/2024/img-1.png",
  },
  {
    category: "2024",
    title:
      "1st Runner-up, Cloud Computing Management Skills at High Vocational Certificate Level",
    label:
      "33rd Professional Skills Competition and Basic Skills Academic Conference of the Future Professional Organization of Thailand, National Region.",
    image: "/certificates/2024/img-2.png",
  },
  {
    category: "2023",
    title:
      "1st Runner-up, Cloud Computing Management Skills at High Vocational Certificate Level",
    label:
      "33rd Professional Skills Competition and Basic Skills Academic Conference of the Future Professional Organization of Thailand, Northeastern Region.",
    image: "/certificates/2023/img-1.png",
  },
];
