"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import CertificateCard from "@/components/CertificateCard";

const certificateData = [
  {
    image: "/certificates/2024/img-1.png",
    category: "2024",
    name: "1st Runner-up, Cloud Computing Management Skills at High Vocational Certificate Level",
    description:
      "33rd Professional Skills Competition and Basic Skills Academic Conference of the Future Professional Organization of Thailand, Northeastern Region.",
  },
  {
    image: "/certificates/2024/img-2.png",
    category: "2024",
    name: "1st Runner-up, Cloud Computing Management Skills at High Vocational Certificate Level",
    description:
      "33rd Professional Skills Competition and Basic Skills Academic Conference of the Future Professional Organization of Thailand, National Region.",
  },
  {
    image: "/certificates/2023/img-1.png",
    category: "2023",
    name: "Participated, Cloud Computing Management Skills at High Vocational Certificate Level",
    description:
      "32nd Professional Skills Competition and Basic Skills Academic Conference of the Future Professional Organization of Thailand, Northeastern Region.",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all",
  ...new Set(certificateData.map((item) => item.category)),
];

const Certificates = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all");

  const filterCertificate = certificateData.filter((certificate) => {
    // if category is 'all' return all, else filter by category
    return category === "all" ? certificate : certificate.category === category;
  });
  return (
    <section className="mt-20">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Certificates
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:mx-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols 1 xl:grid-cols-2 gap-4">
            {filterCertificate.map((certificate, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <CertificateCard certificate={certificate} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Certificates;
