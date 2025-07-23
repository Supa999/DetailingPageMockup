'use client'
import React from "react";
import usePackagesContext from "../hooks/usePackagesContext";

type PackageTypes = {
  name: string;
  description: string;
  price: string;
  duration: string;
}

const packages: PackageTypes[] = [
  {
    name: "Exterior Detail",
    description:
      "Thorough cleaning and polishing of the exterior surfaces, including paint correction and waxing.",
    price: "$150",
    duration: "2-3 hours",
  },
  {
    name: "Interior Detail",
    description:
      "Comprehensive cleaning of the interior, including vacuuming, shampooing carpets, and conditioning leather.",
    price: "$120",
    duration: "2-3 hours",
  },
  {
    name: "Full Detail",
    description:
      "Complete detailing service that includes both exterior and interior detailing",
    price: "$250",
    duration: "4-5 hours",
  },
];

export default function Packages() {
  const packagesRef = usePackagesContext();

  function renderPackages() {
    return packages.map(pkg => {
      return (
        <li key={pkg.name} className="text-center my-5">
          <h3 className="text-2xl font-bold">{pkg.name}</h3>
          <p className="text-lg">{pkg.description}</p>
          <p className="text-lg font-semibold">{pkg.price}</p>
          <p className="text-sm text-gray-400">Duration: {pkg.duration}</p>
        </li>
      );
    })
  }

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-white gap-5 w-80 mx-auto mt-60 scroll-mt-25" ref={packagesRef}>
      <h2 className="text-7xl text-center">Packages</h2>
      <p className="text-xl text-center">
        We offer a variety of detailing packages to suit your needs, from basic
        washes to full detailing services. Each package is designed to provide
        the best care for your vehicle.
      </p>
      <ul>
        {renderPackages()}
      </ul>
    </section>
  );
}
