"use client";
import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";


const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);


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
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center sticky top-0 -z-10 overflow-x-hidden bg-black"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
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
      <div className="pt-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
      <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose">
                <h1><span>Website </span><span>Development</span></h1>
              </div>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <Image
          src="/web-development/website-design.svg"
          width={1300}
          height={600}
          loading="lazy"
          className="relative top-44 right-0 left-0 bottom-0"
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Header;
