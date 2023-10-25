import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer: React.FC = () => {
  return (
    <footer className="min-h-full flex flex-wrap gap-8 items-center text-2xl justify-center bg-black text-white px-4 py-20 font-semibold">
      <Image alt="test"src="/assets/logo.svg" height={38} width={38} />
      <Link href="https://github.com/4mohdisa" target="_blank" rel="noreferrer">Github</Link>
      <Link href="https://www.fiverr.com/xcodrr?up_rollout=true" target="_blank" rel="noreferrer">Fiverr</Link>
      <Link href="https://www.upwork.com/freelancers/~016866133a6fd56dfe" target="_blank" rel="noreferrer">
        Upwork
      </Link>
      <Link href="https://www.freelancer.com/u/mohdisa233" target="_blank" rel="noreferrer">
        Freelancer
      </Link>
      <Link href="https://www.etsy.com/au/shop/TechSolutionsHub?ref=l2-about-shopname" target="_blank" rel="noreferrer">
        Etsy
      </Link>
    </footer>
  );
};

export default Footer;
