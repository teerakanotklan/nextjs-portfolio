'use client';

import { useState } from 'react';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

// components
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <form className="flex flex-col gap-y-4 xl:py-0 py-8">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="text" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message here."
          className="outline-none resize-none"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
