'use client';

import React, { useRef, useState } from 'react';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

// components
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setSuccess(true);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-y-4 xl:py-0 py-8"
    >
      {/* input */}
      <div className="relative flex items-center">
        <Input type="text" placeholder="Name" name="user_name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" placeholder="Email" name="user_email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message here"
          className="outline-none resize-none"
          name="message"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button
        type="submit"
        value="Send"
        className="flex items-center gap-x-1 max-w-[166px]"
      >
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
      {success && (
        <span className="text-green-600 font-semibold">
          Your message has been sent successfully!
        </span>
      )}
      {error && (
        <span className="text-red-600 font-semibold">
          Something went wrong!
        </span>
      )}
    </form>
  );
};

export default ContactForm;
