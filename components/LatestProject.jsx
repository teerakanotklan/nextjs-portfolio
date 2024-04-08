"use client";

// modules
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// components
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

// constants
import { projectData } from "@/constants";

const LatestProject = () => {
  return (
    <section className='relative py-20'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto  text-center  mb-12  flex flex-col justify-center items-center'>
          <h2 className='section-title'>Latest Projects</h2>
        </div>
        {/* slides */}
        <div className='right-0 top-0'>
          <Swiper
            className='h-[480px]'
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
        <div className='flex items-center justify-center my-2'>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
