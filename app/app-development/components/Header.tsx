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
        className={`flex-grow-0 pt-10 transition-opacity duration-1000`}
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
                <h1><span>Application </span><span>Development</span></h1>
              </div>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 mt-10 `}
      >
                    <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
            <div className="relative">
                <div className="absolute rounded-[6%] w-[84.5%] left-[7.7%] top-[2.7%] overflow-hidden -z-10">
                  <video
                    id="coinbase-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                  >
                    <source
                      src="/assets/works/coinbase-wallet.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <Image
                  src="/assets/iphone-bezels.webp"
                  width={840}
                  height={1620}
                  alt="Stori"
                />
              </div>
              </div>
      </div>
    </div>
  );
};

export default Header;
