
import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  // WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./Work";
import { Button } from "../shadcn-ui/components/ui/button";
import Link from "next/link";


type Props = {};

const Works = () => (
  <TileWrapper numOfPages={3}>
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
                <WorkLink href="/graphic-designing"><span>Graphic</span><span>Designing</span></WorkLink>
              </div>
              <Link href={"/graphic-designing"}>
              <Button className="text-4xl lg:!text-5xl font-bold px-8 mt-10 w-52 h-16">View</Button>
              </Link>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image
                  src="/assets/works/graphic.png"
                  width={840}
                  height={1620}
                  alt="Visual communication experts, freelance graphic design services, logo design specialists, branding consultants, packaging design artists, illustration experts, web design professionals, UI/UX design aficionados, motion graphics specialists, photo editing masters, digital marketing strategists, social media marketing gurus, custom logo design services, innovative logo redesign experts, logo branding specialists, creative logo creation experts, logo development professionals, logo concept pioneers, logo sketching artists, logo iteration masters, logo finalization experts, logo file providers, comprehensive logo guidelines creators, logo usage consultants, branding material design consultants, transformative branding services, brand identity design specialists, comprehensive brand guidelines creators, detailed brand style guide experts, brand voice specialists, impactful brand messaging experts, brand personality consultants, effective brand positioning experts, strategic brand development experts, brand consistency consultants, brand management gurus, brand awareness experts, brand equity enhancers, brand loyalty specialists, custom poster design experts, creative poster creation artists, innovative poster development professionals, conceptual poster design pioneers, skilled poster sketching artists, masterful poster iteration experts, finalization-ready poster specialists, professional poster printing consultants, effective poster distribution experts, strategic poster marketing consultants, impactful poster advertising specialists, talented freelancers, freelance graphic design specialists, skilled freelance copywriters, expert freelance logo designers, knowledgeable freelance branding consultants, creative freelance poster designers, proficient freelance website design and development experts, experienced freelance digital marketing strategists, savvy freelance social media marketing experts, engaging freelance content marketing specialists, effective freelance SEO copywriters, persuasive freelance web copywriters, creative freelance social media copywriters, compelling freelance email copywriters, impactful freelance advertising copywriters, innovative freelance creative copywriters, technical freelance copywriters, business-oriented freelance copywriters, legal freelance copywriters, medical freelance copywriters

"
loading="lazy"
                  style={{objectFit:"cover"}}
                />
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
        page={1}
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
                  style={{objectFit:"cover"}}
                />
           
            </WorkRight>
          </div>
        )}
      ></Tile>
      {/* <Tile
        page={2}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose">
                <WorkLink href="/app-development"><span>App</span><span>Development</span></WorkLink>
              </div>
              <Link href={"/app-development"}>

              <Button className="text-4xl lg:!text-5xl font-bold px-8 mt-10 w-52 h-16">View</Button>
              </Link>
            </WorkLeft>
            <WorkRight progress={progress}>
            <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
            <div className="relative">
                <div className="absolute rounded-[6%] w-[84.5%] left-[7.7%] top-[2.7%] overflow-hidden">
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
            </WorkRight>
          </div>
        )}
      ></Tile> */}
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
            <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose">
                <WorkLink href="https://pinkpanda.io/"><span>Copy</span><span>Writing</span></WorkLink>
              </div>
              <Link href={"/copy-writing"}><Button className="text-4xl lg:!text-5xl font-bold px-8 mt-10 w-52 h-16">View</Button></Link>
            </WorkLeft>
            
            <WorkRight progress={progress}>
            <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
              <Image
                src="/assets/works/CopyWriting.svg"
                loading="lazy"
                width={840}
                height={1620}
                alt="Persuasive copywriters, freelance copywriting services, compelling website copy specialists, engaging blog post writers, skilled social media content creators, effective email marketing copywriters, impactful advertising copywriters, creative SEO copywriting experts, experienced copyediting and proofreading professionals, talented freelance blog writers, captivating blog post creators, engaging content strategists, informative article writers, knowledgeable blog topic researchers, skilled blog post optimizers, effective blog promotion experts, social media-savvy blog writers, experienced freelancers, freelance copywriting specialists, expert blog writers, creative content marketers, SEO-savvy content creators, social media management experts, email marketing gurus, digital marketing strategists, skilled web designers and developers.

                "
              />
              </div>
            </WorkRight>
          </div>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
