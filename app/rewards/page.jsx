"use client";

// modules
import React, { useState } from "react";

// components
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import RewardCard from "@/components/RewardCard";

// constants
import { rewardData } from "@/constants";

// remove category duplicates
const uniqueCategories = [
  "all",
  ...new Set(rewardData.map((item) => item.category)),
];

const Rewards = () => {
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState(uniqueCategories);

  const filterCertificates = rewardData.filter((certificate) => {
    return category === "all" ? certificate : certificate.category === category;
  });
  return (
    <section className='mt-20'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Rewards
        </h2>

        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-3 lg:mx-w-[640px] mb-12 mx-auto'>
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
          <div className='text-lg xl:mt-8 grid grid-cols 1 2xl:grid-cols-2 gap-4'>
            {filterCertificates.map((certificate, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <RewardCard certificate={certificate} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Rewards;
