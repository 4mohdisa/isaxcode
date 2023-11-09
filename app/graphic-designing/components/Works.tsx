"use client;"

import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  // WorkContainer,
  WorkLeft,
  WorkRight,
} from "./Work";
import { Button } from "../../../shadcn-ui/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/shadcn-ui/components/ui/dialog";
import CustomDialog from "@/components/CustomDialog";


type Props = {};

const Works = () => (
  <TileWrapper numOfPages={5}>
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
              <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose text-center lg:text-left">
                <Link className="flex flex-col lg:flex-row gap-x-5" href="/graphic-designing/logo-designing"><span>Logo </span><span>Designing</span></Link>
              </div>
              <div className="flex gap-x-5 items-center justify-center lg:justify-start">
                <Link href={"/graphic-designing/logo-designing"}>
                <Button className="text-xl lg:!text-2xl font-bold px-8 mt-10 w-32 h-12">View</Button>
                </Link>
                <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-xl lg:!text-2xl font-bold px-8 mt-10 w-48 lg:w-56 h-12"/>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image
                  src="/graphic-designs/Logo-Designing-1.jpg"
                  width={900}
                  height={40}
                  loading="lazy"
                  alt="Logo design, logo creation, brand identity design, visual branding, graphic logo, logo design services, custom logo design, freelance logo design, cheap freelance logo design, affordable freelance logo design, logo design for small businesses, logo design for startups, logo design for businesses, custom logo design, professional logo design, logo design for non-profits, logo design for organizations, logo design for websites, logo design for apps, logo design for print, logo design for social media, logo design for branding                  "
                  style={{objectFit:"contain", width: "auto"}}
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
              <div className="text-5xl md:text-5xl lg:text-[4.2rem] font-bold tracking-loose text-center lg:text-left">
                <Link href="/graphic-designing/branding-material"><span>Branding </span><span>Materials</span></Link>
              </div>
              <div className="flex gap-x-5 items-center justify-center lg:justify-start">
                <Link href={"/graphic-designing/branding-material"}>

                <Button className="text-xl lg:!text-2xl font-bold px-8 mt-10 w-32 h-12">View</Button>
                </Link>
                <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-xl lg:!text-2xl font-bold px-8 mt-10 w-48 lg:w-56 h-12"/>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image
                  src="/graphic-designs/Branding-Material-1.jpg"
                  width={900}
                  height={40}
                  alt="Graphic design, branding, brand identity, visual communication, brand guidelines, style guides, brand standards, brand manual, corporate identity, business branding, logo design, typography, color palette, design elements, brand positioning, brand messaging, brand strategy, brand personality, brand voice, brand experience, brand storytelling, brand awareness, brand equity, brand reputation, brand loyalty, brand advocacy, brand ambassador, brand management, brand marketing, brand development, brand revitalization, brand rebranding, brand expansion, brand extension, brand protection, brand licensing, brand franchising, brand architecture, brand portfolio, brand strategy, brand management.
                  loafin"
                  loading="lazy"
                  style={{objectFit:"contain"}}
                />  
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose text-center lg:text-left">
                <Link href="/graphic-designing/poster-designing"><span>Poster </span><span>Design</span></Link>
              </div>
              <div className="flex gap-x-5 items-center justify-center lg:justify-start">
                <Link href={"/graphic-designing/poster-designing"}>
                <Button className="text-xl lg:!text-2xl font-bold px-8 mt-10 w-32 h-12">View</Button>
                </Link>
                <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-xl lg:!text-2xl font-bold px-8 mt-10 w-48 lg:w-56 h-12"/>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image
                  src="/graphic-designs/Poster-Design-1.jpg"
                  width={900}
                  height={40}
                  loading="lazy"
                  alt="Poster design, graphic design, visual communication, marketing, advertising, typography, layout, colors, images, illustrations, photo editing, creative concept, targeted audience, visual hierarchy, eye-catching visuals, call to action, branding, messaging, print design, digital design, social media, storytelling, engagement, impact, promotional posters, informative posters, educational posters, event posters, product posters, brand awareness posters, artistic posters, retro posters, vintage posters, minimalist posters, modern posters, conceptual posters"
                  style={{objectFit:"contain"}}
                />  
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
        page={3}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose text-center lg:text-left">
                <Link className="flex flex-col items-start justify-center" href="/graphic-designing/social-media-graphics"><span>Social Media </span><span>Graphics</span></Link>
              </div>
              <div className="flex gap-x-5 items-center justify-center lg:justify-start">
                <Link href={"/graphic-designing/social-media-graphics"}>

                <Button className="text-xl lg:!text-2xl font-bold px-8 mt-10 w-32 h-12">View</Button>
                </Link>
                <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-xl lg:!text-2xl font-bold px-8 mt-10 w-48 lg:w-56 h-12"/>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image
                  src="/graphic-designs/Social-Media-Graphics-1.jpg"
                  width={900}
                  height={40}
                  loading="lazy"
                  alt="Social media graphics, social media design, social media marketing, social media content, visual content creation, social media management, social media strategy, social media engagement, social media advertising, social media analytics, social media platforms, social media trends, social media best practices, social media marketing tools, Graphic design, visual communication, typography, layout, colors, images, illustrations, photo editing, creative concept, branding, storytelling, graphic design software, graphic design tools, graphic design resources, graphic design inspiration, graphic design trends, graphic design tips, graphic design tutorials, graphic design critiques, graphic design communities, Video editing, motion graphics, video production, video marketing, social media video, reels, instagram reels, tiktok reels, short-form video, vertical video, mobile video, video storytelling, video engagement, video advertising, video analytics, video editing software, video editing tools, video editing resources, video editing inspiration, video editing trends, video editing tips, video editing tutorials, video editing critiques, video editing communities"
                  style={{objectFit:"contain"}}
                />  
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
        page={4}
        renderContent={({ progress }) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
            <WorkLeft progress={progress}>
              <div className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-loose text-center lg:text-left">
                <Link href="/graphic-designing/ui-ux"><span>UI UX </span><span>Design</span></Link>
              </div>
              <div className="flex gap-x-5 items-center justify-center lg:justify-start">
                <Link href={"/graphic-designing/ui-ux"}>
                <Button className="text-xl lg:!text-2xl font-bold px-8 mt-10 w-32 h-12">View</Button>
                </Link>
                <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-xl lg:!text-2xl font-bold px-8 mt-10 w-48 lg:w-56 h-12"/>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
            <Image
                  src="/graphic-designs/UI-UX-Design-1.jpg"
                  width={900}
                  height={40}
                  alt="User experience (UX) design, user interface (UI) design, information architecture (IA), user research, wireframing, prototyping, usability testing, visual design, interaction design, user-centered design, human-centered design, design thinking, empathy, iteration, accessibility, inclusivity, mobile design, responsive design, cross-platform design, design systems, design patterns, design guidelines, design language"
                  loading="lazy"
                  style={{objectFit:"contain"}}
                />  
            </WorkRight>
          </div>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
