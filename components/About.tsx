import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Playfair } from "@next/font/google";

const playfair = Playfair({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
});

export default function About({ }) {
  return (
    <div className="bg-black text-white min-h-screen text-center w-full pt-20 px-4 sm:px-10 md:px-20 lg:px-40 m-auto">
    <div className="text-center">
      <h1 className={`${playfair.className} text-white text-5xl`}>
        About
      </h1>
    </div>
  
    <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 text-center md:text-left px-0 md:px-10 mx-auto gap-y-10">
      <Link href="/about">
        <Image
          width={800}
          height={800}
          loading="lazy"
          alt="s"
          src="/assets/IMG.jpeg"
          className="w-full lg:max-w-lg xl:max-w-xl mx-auto h-auto object-cover rounded-2xl"
        />
      </Link>
      <div className="px-0 md:px-10 w-full md:w-2/4 flex flex-col items-start gap-10">
        <h1 className="h-tag">
          Here is a little Background
        </h1>
        <p className="p-tag">
          Adaptable student with knowledge of development, configuration management, and database. Aiming to leverage my abilities to successfully fill the vacancy on your team. Frequently praised for communication by my peers, I can be relied upon to help your team achieve its goals.
        </p>
        <Link href="/about">
        <button className="button bg-white text-black hover:bg-transparent hover:text-white">view more</button>
        </Link>
      </div>
    </div>
  </div>
  
  );
}