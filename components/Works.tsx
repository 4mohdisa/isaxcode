"use client";

import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./Work";
import { Button } from "../shadcn-ui/components/ui/button";
import Link from "next/link";


const Works = () => (
  <TileWrapper numOfPages={1}>
    <div className="absolute h-full w-full">
      <WorkBackground />
    </div>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>

              <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose">
                <WorkLink href="/website-development"><span>Web</span><span>Development</span></WorkLink>
              </div>
              <Link href="/website-development"><Button className="text-4xl lg:!text-5xl font-bold px-8 mt-10 w-52 h-16">View</Button></Link>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/web-design.png"
                width={840}
                height={1620}
                alt="Visual communication experts, freelance graphic design services, logo design specialists, branding consultants, packaging design artists, illustration experts, web design professionals, UI/UX design aficionados, motion graphics specialists, photo editing masters, digital marketing strategists, social media marketing gurus, custom logo design services, innovative logo redesign experts, logo branding specialists, creative logo creation experts, logo development professionals, logo concept pioneers, logo sketching artists, logo iteration masters, logo finalization experts, logo file providers, comprehensive logo guidelines creators, logo usage consultants, branding material design consultants, transformative branding services, brand identity design specialists, comprehensive brand guidelines creators, detailed brand style guide experts, brand voice specialists, impactful brand messaging experts, brand personality consultants, effective brand positioning experts, strategic brand development experts, brand consistency consultants, brand management gurus, brand awareness experts, brand equity enhancers, brand loyalty specialists, custom poster design experts, creative poster creation artists, innovative poster development professionals, conceptual poster design pioneers, skilled poster sketching artists, masterful poster iteration experts, finalization-ready poster specialists, professional poster printing consultants, effective poster distribution experts, strategic poster marketing consultants, impactful poster advertising specialists, talented freelancers, freelance graphic design specialists, skilled freelance copywriters, expert freelance logo designers, knowledgeable freelance branding consultants, creative freelance poster designers, proficient freelance website design and development experts, experienced freelance digital marketing strategists, savvy freelance social media marketing experts, engaging freelance content marketing specialists, effective freelance SEO copywriters, persuasive freelance web copywriters, creative freelance social media copywriters, compelling freelance email copywriters, impactful freelance advertising copywriters, innovative freelance creative copywriters, technical freelance copywriters, business-oriented freelance copywriters, legal freelance copywriters, medical freelance copywriters

"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />

            </WorkRight>
          </div>
        )}
      ></Tile>
    
    </TileContent>
  </TileWrapper>
);

export default Works;
