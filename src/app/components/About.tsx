'use client'
import React from "react";
import usePackagesContext from "../hooks/usePackagesContext";

export default function About() {

  const packagesRef = usePackagesContext();

  function scroll() {
    packagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <article className="flex flex-col items-center justify-center text-white gap-10 w-80 md:w-100 lg:w-120 mx-auto">
      <section className="flex flex-col items-center justify-center gap-5 min-h-[90vh]">
        <h2 className="text-6xl md:text-7xl lg:text-8xl text-center font-extrabold">Who Am I?</h2>
        <p className="text-2xl text-center">
          My name is Kevin Steele. I am based in Rancho Cucamonga but have
          traveled all around the IE do perform details on different clients
          cars. I have been detailing for 2.5 years and have loved every part of
          it
        </p>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 min-h-[90vh]">
        <h2 className="text-6xl md:text-7xl lg:text-8xl text-center font-extrabold">My Mission</h2>
        <p className="text-2xl text-center">
          My goal with every car I detail is to make it look as clean as it did
          when it first left the dealership. With meticulous care and a sharp
          attention-to-detail, your car will not only be spotless, smell
          amazing, and look brand new. It will be protected and leave you
          speechless
        </p>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 min-h-[90vh]">
        <h2 className="text-6xl md:text-7xl lg:8xl text-center font-extrabold">Why Me?</h2>
        <p className="text-2xl text-center">
          My love for cars and perfectionist nature will ensure your car is
          detailed to perfection. When I am done, you<span className="italic"> will</span> be satisfied with the work I have
          done.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center gap-5 min-h-[90vh]">
        <h2 className="text-6xl md:text-7xl text-center font-extrabold">
          Ready to give your car the care it deserves?
        </h2>
        <button className="text-5xl text-center underline underline-offset-10 leading-15" onClick={scroll}>Check Out My Packages</button>
      </section>
    </article>
  );
}
