'use client'
import React from 'react'
import useContactContext from '../hooks/useContactContext'




export default function Hero() {
  const contactRef = useContactContext();

  function scroll() {
    contactRef.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className="min-h-[90vh] bg-[url(/images/Hero2.jpg)] bg-cover bg-center flex flex-col items-center justify-center">
      <div className="mx-10 text-white flex flex-col items-center justify-center gap-5">
        <h2 className="text-center text-wrap text-5xl md:text-6xl lg:text-8xl">Taking your car from <span className="italic text-8xl md:text-9xl tracking-widest leading-15" id="grime"><br/>Grime</span> <br/>to <span className="italic text-6xl md:text-7xl lg:text-8xl tracking-widest" id="shine"><br/>Shine</span></h2>
      </div>
      <button className="bg-white text-neutral-900 rounded-4xl p-3 text-4xl font-extrabold" onClick={() => scroll()}>Book Now</button>
    </section>
  )
}
