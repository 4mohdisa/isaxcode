"use client";

import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-oberver";


interface MastheadProps {
  backgroundImage: string;
  headline: string;
  subHeadline: string;
  imageAltText: string;
}

const Masthead: React.FC<MastheadProps> = ({ backgroundImage, headline, subHeadline, imageAltText }) => {
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
          <Image className="absolute w-full h-full object-cover -z-10 opacity-40"
             alt={imageAltText}
             src={backgroundImage}
             layout="fill"
             objectFit="cover"
             loading="lazy"
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
          loading="lazy"
          alt="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, copywriting services, copywriting for social media, copywriting for business, copywriting for marketing, copywriting for advertising, website copywriting, landing page copywriting, email copywriting, social media ad copywriting, blog post copywriting, article copywriting, product description copywriting, content writing, content marketing, SEO copywriting, copyediting, proofreading, logo design services, custom logo design, logo redesign, logo branding, logo creation, logo development, logo concept, logo sketches, logo iterations, logo finals, logo files, logo guidelines, logo usage, branding material design, branding services, brand identity design, brand guidelines, brand style guide, brand voice, brand messaging, brand personality, brand positioning, brand strategy, brand development, brand consistency, brand management, brand awareness, brand equity, brand loyalty, poster design services, custom poster design, poster creation, poster development, poster concept, poster sketches, poster iterations, poster finals, poster printing, poster distribution, poster marketing, poster advertising, web design, web development, user interface (UI) design, user experience (UX) design, responsive web design, mobile web design, e-commerce web design, website development for small businesses, website development for startups, website development for businesses, website development for freelancers, freelancing, freelance graphic design, freelance copywriting, freelance logo design, freelance branding, freelance poster design, freelance website design and development, freelance digital marketing, freelance social media marketing, freelance content marketing, freelance SEO copywriting, freelance web copywriting, freelance social media copywriting, freelance email copywriting, freelance advertising copywriting, freelance creative copywriting, freelance technical copywriting, freelance business copywriting, freelance legal copywriting, freelance medical copywriting.
"
        />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
      <h1 className="mb-6 text-4xl xl:text-5xl">{headline}</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>{subHeadline}</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
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

export default Masthead;
