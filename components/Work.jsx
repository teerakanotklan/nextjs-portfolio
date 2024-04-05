'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// components
import { Button } from './ui/button';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Solistic Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'react js',
    name: 'Lumina Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'react js',
    name: 'Ignite Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Serenity Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Nova Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'fullstack',
    name: 'Zanith Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam?',
    link: '/',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto  text-center  mb-12  flex flex-col justify-center items-center">
          <h2 className="section-title">Latest Projects</h2>
        </div>
        {/* slides */}
        <div className="right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex items-center justify-center my-2">
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
