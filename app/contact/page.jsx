import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      {/* text & illustration */}
      <div className="grid xl:grid-cols-2 xl:h-[480px] mb-6 xl:mb-40">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            <div>Say Hello 👋</div>
          </div>
          <h1 className="h1 max-w-md mb-8">Get in touch.</h1>
        </div>
        {/* illustration */}
        <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        {/* icon */}
        <div className="hidden 2xl:flex lg:pt-20 absolute left-2/4 bottom-44 2xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
      {/* info text & form */}
      <div className="grid xl:grid-cols-2 mb-24">
        {/* info text */}
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-18 xl:mb-24 text-base">
          {/* mail */}
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary" />
            <div>teerakan.otk@gmail.com</div>
          </div>
          {/* phone */}
          <div className="flex items-center gap-x-8">
            <PhoneCall size={18} className="text-primary" />
            <div>+668 862 63064</div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
