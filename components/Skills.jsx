import { Network, Laptop, Wrench } from 'lucide-react';

// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const skillData = [
  {
    icon: <Network size={72} strokeWidth={0.8} />,
    title: 'Network',
    name: 'TCP/IPv4, VLAN, LAN, WLAN, DHCP',
  },
  {
    icon: <Laptop size={72} strokeWidth={0.8} />,
    title: 'Computer',
    name: 'Basic hardware and software computer knowledge, Window 10, Window 11, Linux(Ubuntu) ',
  },
  {
    icon: <Wrench size={72} strokeWidth={0.8} />,
    title: 'Tools',
    name: 'VS code, Putty, VMware Workstation',
  },
];

const Skills = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Skills
        </h2>
        {/* grid items */}
        <div className="grid 2xl:grid-cols-3 justify-center gap-y-12 2xl:gap-y-24">
          {skillData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.name}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
