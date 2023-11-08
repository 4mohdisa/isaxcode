"use client;"

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
  <TileWrapper numOfPages={4}>
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
                  alt="Stori"
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
                <div className="w-full relative flex items-center justify-center">
                <div className="absolute w-[400px] lg:w-full xl:w-full ">
                  <video
                    id="coinbase-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                  >
                    <source src="/assets/works/website-dev.mp4" type="video/mp4" />
                  </video>
                </div>
                </div>
           
            </WorkRight>
          </div>
        )}
      ></Tile>
      <Tile
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
      ></Tile>
      <Tile
        page={3}
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

                width={840}
                height={1620}
                alt="Showtime"
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
