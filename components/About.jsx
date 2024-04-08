// modules
import { GraduationCap, Briefcase } from "lucide-react";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// constants
import { infoData, qualificationData } from "@/constants";

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>

        {/* tabs */}
        <div className='flex items-center justify-center'>
          <Tabs defaultValue='personal'>
            <TabsList className='flex items-center justify-center xl:w-auto'>
              <TabsTrigger value='personal'>Personal Info</TabsTrigger>
              <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
            </TabsList>
            {/* tabs content */}
            <div className='text-lg mt-12 xl:mt-8'>
              {/* personal */}
              <TabsContent value='personal'>
                <div className='text-center xl:text-left'>
                  <h3 className='h3 text-center xl:text-center mb-8'>
                    You're never a loser until you quit trying
                  </h3>

                  {/* icon */}
                  <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className='flex items-center gap-x-4 mx-0 text-left'
                          key={index}
                        >
                          <div className='text-primary'>{item.icon}</div>
                          <div>{item.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* language */}
                  <div className='flex flex-col gap-y-2'>
                    <div className='text-primary'>Language Skill</div>
                    <div className='border-b border-border'></div>
                    <div>Thai (native), English (basic)</div>
                  </div>
                </div>
              </TabsContent>

              {/* qualification */}
              <TabsContent value='qualifications'>
                <div>
                  <div className='h3 mb-8 text-center xl:text-center'>
                    My Awesome Journey
                  </div>
                  {/* experience & education wrapper */}
                  <div className='grid lg:grid-cols-2 gap-x-8 gap-y-8'>
                    {/* experience */}
                    <div className='flex flex-col gap-y-6'>
                      <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                        <Briefcase />
                        <h4 className='captalize font-medium'>
                          {getData(qualificationData, "experience").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className='flex flex-col gap-y-8'>
                        {getData(qualificationData, "experience").data.map(
                          (item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px]'></div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>
                                    {company}
                                  </div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>
                                    {role}
                                  </div>
                                  <div className='text-base font-medium'>
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* education */}
                    <div className='flex flex-col gap-y-6'>
                      <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                        <GraduationCap />
                        <h4 className='captalize font-medium'>
                          {getData(qualificationData, "education").title}
                        </h4>
                      </div>
                      {/* list */}
                      <div className='flex flex-col gap-y-8'>
                        {getData(qualificationData, "education").data.map(
                          (item, index) => {
                            const { academy, qualification, years } = item;
                            return (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px]'></div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>
                                    {academy}
                                  </div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>
                                    {qualification}
                                  </div>
                                  <div className='text-base font-medium'>
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
