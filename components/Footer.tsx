"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="min-h-full flex flex-wrap gap-8 items-center text-2xl justify-center bg-black text-white px-4 py-20 font-semibold">
      <Image loading="lazy" alt="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, copywriting services, copywriting for social media, copywriting for business, copywriting for marketing, copywriting for advertising, website copywriting, landing page copywriting, email copywriting, social media ad copywriting, blog post copywriting, article copywriting, product description copywriting, content writing, content marketing, SEO copywriting, copyediting, proofreading, logo design services, custom logo design, logo redesign, logo branding, logo creation, logo development, logo concept, logo sketches, logo iterations, logo finals, logo files, logo guidelines, logo usage, branding material design, branding services, brand identity design, brand guidelines, brand style guide, brand voice, brand messaging, brand personality, brand positioning, brand strategy, brand development, brand consistency, brand management, brand awareness, brand equity, brand loyalty, poster design services, custom poster design, poster creation, poster development, poster concept, poster sketches, poster iterations, poster finals, poster printing, poster distribution, poster marketing, poster advertising, web design, web development, user interface (UI) design, user experience (UX) design, responsive web design, mobile web design, e-commerce web design, website development for small businesses, website development for startups, website development for businesses, website development for freelancers, freelancing, freelance graphic design, freelance copywriting, freelance logo design, freelance branding, freelance poster design, freelance website design and development, freelance digital marketing, freelance social media marketing, freelance content marketing, freelance SEO copywriting, freelance web copywriting, freelance social media copywriting, freelance email copywriting, freelance advertising copywriting, freelance creative copywriting, freelance technical copywriting, freelance business copywriting, freelance legal copywriting, freelance medical copywriting.

"src="/assets/logo.svg" height={38} width={38} />
      <Link className="hover:underline" href="https://github.com/4mohdisa" target="_blank" rel="noreferrer">Github</Link>
      <Link className="hover:underline" href="https://www.fiverr.com/xcodrr" target="_blank" rel="noreferrer">Fiverr</Link>
      <Link className="hover:underline" href="https://www.upwork.com/freelancers/~016866133a6fd56dfe" target="_blank" rel="noreferrer">
        Upwork
      </Link>
      <Link className="hover:underline" href="https://www.freelancer.com/u/mohdisa233" target="_blank" rel="noreferrer">
        Freelancer
      </Link>
      <Link className="hover:underline" href="/blog" rel="noreferrer">
        Blog
      </Link>
    </footer>
  );
};

export default Footer;
