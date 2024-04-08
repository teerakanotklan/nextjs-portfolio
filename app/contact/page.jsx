import { MailIcon, PhoneCall } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

// components
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className='container mx-auto pt-12'>
      {/* text & illustration */}
      <div className='grid xl:grid-cols-2 xl:h-[480px] mb-6 xl:mb-40'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            <div>Say Hello 👋</div>
          </div>
          <h1 className='h1'>Get in touch.</h1>
        </div>

        {/* info text & form */}
        <div className='grid xl:pt-20'>
          {/* info text */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
