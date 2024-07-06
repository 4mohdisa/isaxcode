import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/shadcn-ui/components/ui/button";


export default function About({ }) {
  return (
    <main className="min-h-screen w-full py-20 bg-black m-auto flex justify-center">
    <div className="w-full md:3/6 lg:w-2/6 px-5 md:px-0 h-full text-white w-2/5 flex flex-col items-start justify-center">
    <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm leerob 👋
      </h1>
        <div className="flex flex-col items-start justify-center gap-7">
        <p>
        I'm a frontend developer, optimist, and community builder. I currently work as the VP of Product at Vercel, where I help teach the Next.js logomarkNext.js community, an open-source web framework built with React.
        </p>
        <p>
        I'm a frontend developer, optimist, and community builder. I currently work as the VP of Product at Vercel, where I help teach the Next.js logomarkNext.js community, an open-source web framework built with React.
        </p>
      </div>
  </div>
    </main>
    
  
  );
}