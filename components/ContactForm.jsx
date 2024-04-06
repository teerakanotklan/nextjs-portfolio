'use client'

import React, { useRef } from 'react'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'
import emailjs from '@emailjs/browser'

// components
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const ContactForm = () => {
  const form = useRef()

  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const publicKEY = process.env.NEXT_PUBLIC_KEY

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKEY,
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

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
    </form>
  )
}

export default ContactForm
