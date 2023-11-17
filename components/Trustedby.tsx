"use client";

import React from "react";
import dynamic from "next/dynamic";

const ClientLogos = dynamic(() => import('./client-logos'), {
  loading: () => <p>Loading...</p>,
})

const Testimonials = dynamic(() => import('./Testimonials'), {
  loading: () => <p>Loading...</p>,
})

const TrustedBy: React.FC = () => {
  return (
    <section
      className={`bg-black min-h-screen flex flex-col justify-center gap-16 md:gap-20 `}
    >
      <div className="flex-1 bg-black"></div>
      
      <h3 className=" bg-black text-white font-bold text-3xl lg:text-5xl tracking-loos text-center px-10 !leading-[5rem]">
        Trusted by Clients
        </h3>

      <div className="flex bg-black flex-col justify-center items-center">
        <ClientLogos />
      </div>
      <Testimonials />
      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default TrustedBy;
