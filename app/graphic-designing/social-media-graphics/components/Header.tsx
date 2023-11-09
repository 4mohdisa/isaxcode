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
      alt="Creative social media graphic designers, freelance social media post creators, eye-catching social media visual experts, engaging social media story designers, innovative social media banner specialists, skilled social media thumbnail creators, captivating social media profile picture designers, talented reel editors, freelance reel editing services, expert reel cutting and splicing specialists, skilled reel lighting and framing professionals, effective reel sound design and mixing experts, creative reel transition and effects specialists, engaging reel music and soundtrack experts, knowledgeable reel optimization and exporting professionals.

      "
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
          alt="Visual communication experts, freelance graphic design services, logo design specialists, branding consultants, packaging design artists, illustration experts, web design professionals, UI/UX design aficionados, motion graphics specialists, photo editing masters, digital marketing strategists, social media marketing gurus, custom logo design services, innovative logo redesign experts, logo branding specialists, creative logo creation experts, logo development professionals, logo concept pioneers, logo sketching artists, logo iteration masters, logo finalization experts, logo file providers, comprehensive logo guidelines creators, logo usage consultants, branding material design consultants, transformative branding services, brand identity design specialists, comprehensive brand guidelines creators, detailed brand style guide experts, brand voice specialists, impactful brand messaging experts, brand personality consultants, effective brand positioning experts, strategic brand development experts, brand consistency consultants, brand management gurus, brand awareness experts, brand equity enhancers, brand loyalty specialists, custom poster design experts, creative poster creation artists, innovative poster development professionals, conceptual poster design pioneers, skilled poster sketching artists, masterful poster iteration experts, finalization-ready poster specialists, professional poster printing consultants, effective poster distribution experts, strategic poster marketing consultants, impactful poster advertising specialists, talented freelancers, freelance graphic design specialists, skilled freelance copywriters, expert freelance logo designers, knowledgeable freelance branding consultants, creative freelance poster designers, proficient freelance website design and development experts, experienced freelance digital marketing strategists, savvy freelance social media marketing experts, engaging freelance content marketing specialists, effective freelance SEO copywriters, persuasive freelance web copywriters, creative freelance social media copywriters, compelling freelance email copywriters, impactful freelance advertising copywriters, innovative freelance creative copywriters, technical freelance copywriters, business-oriented freelance copywriters, legal freelance copywriters, medical freelance copywriters

"
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
          loading="lazy"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Header;
