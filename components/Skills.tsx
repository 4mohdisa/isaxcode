"use client";

import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-oberver";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;

  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 4;

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 1.6;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-6xl mx-auto px-10 lg:px-16 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-6xl md:text-8xl lg:text-9xl tracking-tight font-bold">
        <div className="leading-[1.15] flex flex-col gap-y-10 md:gap-y-5 lg:gap-y-10">
          <div
            className={s.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            Hi, I'm Mohammed Isa
          </div>
          <span
            className={`${s.skillText} inline-block after:content-[&#x27;_&#x27;]`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            Pursuing Bachelors of IT in Adelaide
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Passionate About 💸
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 3),
            }}
          >
            Helping clients with..
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
