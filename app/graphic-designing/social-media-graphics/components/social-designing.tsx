import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomDialog from "@/components/CustomDialog";
import { Button } from "@/shadcn-ui/components/ui/button";
import Image from "next/image";

type Props = {};

export default function Socialdesign({ }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="min-h-screen bg-black flex flex-col items-center justify-center text-center"
    >

      <div className="flex mt-10 flex-col text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-start">
        <motion.div
          transition={{
            duration: 1.2,
          }}
          exit={{
            x: 1000,
            opacity: 0,
          }}
          className="space-y-3 md:space-y-10 px-0 md:px-10"
        >

          <article className="flex flex-col md:flex-row text-left items-center justify-evenlymx-auto space-x-10" itemScope itemType="https://schema.org/Article">
            <div className="flex flex-col text-left items-start justify-between">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Posts{" "}
              <span>Designing</span>{" "}
            </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
              I can create engaging and visually appealing posts that will capture attention, drive engagement, and achieve your marketing goals.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Creative social media graphic designers, freelance social media post creators, eye-catching social media visual experts, engaging social media story designers, innovative social media banner specialists, skilled social media thumbnail creators, captivating social media profile picture designers
" loading="lazy" width={600} height={300} src={"/graphic-designs/Social-Media-Graphics-1.jpg"} />
          </article>
          
          <article className="flex flex-col md:flex-row text-left items-center justify-evenlymx-auto space-x-10" itemScope itemType="https://schema.org/Article">
          <Image alt="Talented reel editors, freelance reel editing services, expert reel cutting and splicing specialists, skilled reel lighting and framing professionals, effective reel sound design and mixing experts, creative reel transition and effects specialists, engaging reel music and soundtrack experts, knowledgeable reel optimization and exporting professionals
" loading="lazy" width={600} height={300} src={"/graphic-designs/Social-Media-Graphics-2.jpg"} />
            <div className="flex flex-col text-left items-start justify-between">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Creative Content
                          </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
              I&apos;ll craft compelling and shareable social media content that resonates with your audience.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>

          </article>
          <article className="flex md:pt-10 flex-col text-left items-center justify-evenlymx-auto space-y-10" itemScope itemType="https://schema.org/Article">
          <Image alt="Social media graphic design experts, freelance social media graphics creation services, social media visual specialists, social media story design professionals, social media banner creation experts, social media thumbnail design consultants, social media profile picture design specialists
" loading="lazy" width={1000} height={600} src={"/graphic-designs/Social-Media-Graphics-3.png"} />
            <div className="flex flex-col text-left items-start justify-between">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Consistent Brand{" "}
              <span>Identity</span>{" "}
            </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
             I&apos;ll maintain a consistent brand identity across all your social media platforms, ensuring your brand is recognized and remembered.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            
          </article>
          <article
      className={`flex flex-col bg-black text-white py-20 text-3xl md:text-4xl aboutus_section__xSPZD`}
    >
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>Types of Social Media Posts I Create:</strong> <br />
          <br />- <b>Image Posts</b>: Share visually captivating images that showcase your products, services, or brand story. <br />
          <br />- <b>Video Posts</b>: Engage your audience with dynamic and informative videos that highlight your brand&apos;s unique offerings. <br />
          <br />- <b>Infographics</b>: Present complex information in an easily digestible and visually appealing format. <br />
          <br />- <b>Interactive Posts</b>: Encourage audience participation and engagement with interactive posts, such as quizzes, polls, and contests.
        </p>
      </div>
    </article>
    <article className="flex md:pt-10 flex-col text-left items-center justify-evenlymx-auto space-y-10" itemScope itemType="https://schema.org/Article">
          
            <div className="flex flex-col text-center items-center justify-between">
            <motion.h4
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Invest in Effective {" "}
              <span>Social Media Marketing</span>{" "}
            </motion.h4>
            <motion.p
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              className="text-2xl mt-5 text-white font-normal"
            >
Social media is a powerful tool for building brand awareness, driving traffic to your website, and generating leads. With my expertise in social media design and content creation, I can help you create a strong social media presence that will achieve your marketing goals.

</motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            
          </article>
        </motion.div>
      </div>
    </motion.div>
  );
}