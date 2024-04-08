"use client";

// modules
import React, { useState } from "react";

// components
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

// constants
import { projectData } from "@/constants";

// remove category duplicates
const uniqueCategories = [
  "all",
  ...new Set(projectData.map((item) => item.category)),
];

const Project = () => {
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState(uniqueCategories);

  const filterProjects = projectData.filter((project) => {
    return category === "all" ? project : project.category === category;
  });

  return (
    <section className='mt-20'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>

        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:mx-w-[640px] mb-12 mx-auto'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols 1 xl:grid-cols-3 gap-4'>
            {filterProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Project;
