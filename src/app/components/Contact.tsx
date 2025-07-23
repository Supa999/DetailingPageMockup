'use client'
import React from 'react'
import useContactContext from '../hooks/useContactContext';


export default function Contact() {
  const contactRef = useContactContext();
  return (
    <section className="flex flex-col items-center justify-center w-80 mx-auto min-h-[90vh] text-white" id="contact" ref={contactRef}>
      <h2 className="text-7xl text-center">Contact </h2>
      <p className="text-2xl text-center">Have a question or ready to book an appointment? Feel free to reach out!</p>
        <address className="flex flex-col items-center justify-center gap-3 mt-10">
          <a href="mailto:ssAutoDetail@outlook.com" className="text-3xl underline underline-offset-5">Send me an Email</a>
          <a href="tel:+1234567890" className="text-3xl underline underline-offset-5">Call Me</a>
          <p className="text-3xl text-center">Or</p>
          <a href="sms:+1234567890" className="text-3xl underline underline-offset-5">Shoot me a Text</a>
        </address>
    </section>
  )
}
