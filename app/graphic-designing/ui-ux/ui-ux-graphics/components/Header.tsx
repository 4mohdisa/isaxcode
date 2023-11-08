"use client";

import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../../../../utils/scroll-oberver";


const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10 overflow-x-hidden bg-black"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <Image 
      src="/graphic-designs/Social-Media-Graphics-banner.png"
      className="absolute w-full h-full -z-10 object-cover opacity-40"
      width={7000}
      loading="lazy"
      height={7000}
      objectFit="cover"
      alt="logo"
      />
      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 
      
      ${imageLoaded ? "opacity-100" : "opacity-0"}
      `}
      >
        <Image
          src="/assets/logo.svg"
          width={128 / 2}
          height={114 / 2}
          alt="logo"
        />
      </div>
      <div className="p-12 font-bold   z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
        <h1 className="mb-6 text-6xl tracking-wider lg:text-7xl ">Social Media Designs</h1>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/assets/arrow-down.webp"
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Header;
