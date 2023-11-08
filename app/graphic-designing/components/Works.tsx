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
                  alt="Stori"
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
                  alt="Stori"
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
                  alt="Stori"
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
                  alt="Stori"
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
                  alt="Stori"
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
