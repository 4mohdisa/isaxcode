import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomDialog from "@/components/CustomDialog";
import { Button } from "@/shadcn-ui/components/ui/button";
import Image from "next/image";

type Props = {};

export default function Materials({ }) {
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
              Branding{" "}
              <span>Materials</span>{" "}
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
              I will create a cohesive and professional brand identity that resonates with your target audience.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Logo Designing Work | Logo design, logo creation, brand identity design, visual branding, graphic logo, logo design services, custom logo design, freelance logo design, cheap freelance logo design, affordable freelance logo design, logo design for small businesses, logo design for startups, logo design for businesses, custom logo design, professional logo design, logo design for non-profits, logo design for organizations, logo design for websites, logo design for apps, logo design for print, logo design for social media, logo design for branding" loading="lazy" width={600} height={300} src={"/graphic-designs/Branding-Material-1.jpg"} />
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
              className="text-3xl lg:text-5xl font-bold text-center text-white"
            >
              {" "}
              Comprehensive Branding Package
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
             Make a lasting impression with premium branding materials that capture the essence of your business.
            </motion.p>
            
            </div>
            
          </article>
          <article className="flex flex-col md:flex-row text-left items-center justify-evenlymx-auto space-x-10" itemScope itemType="https://schema.org/Article">
          <Image  alt="Graphic design, branding, brand identity, visual communication, brand guidelines, style guides, brand standards, brand manual, corporate identity, business branding, logo design, typography, color palette, design elements, brand positioning, brand messaging, brand strategy, brand personality, brand voice, brand experience, brand storytelling, brand awareness, brand equity, brand reputation, brand loyalty, brand advocacy, brand ambassador, brand management, brand marketing, brand development, brand revitalization, brand rebranding, brand expansion, brand extension, brand protection, brand licensing, brand franchising, brand architecture, brand portfolio, brand strategy, brand management" loading="lazy" width={600} height={300} src={"/graphic-designs/Branding-Material-2.jpg"} />
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
              Business Cards
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
              Sleek and stylish business cards that leave a lasting impression.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>

          </article>
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
              Letter  
              <span> Templates</span>{" "}
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
              Professional letter templates for a polished and consistent brand voice.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, freelance graphic design, cheap freelance web design, affordable freelance copywriting, freelance website development, freelance digital marketing, freelance social media marketing, freelance content marketing, freelance SEO copywriting, freelance web copywriting, freelance social media copywriting, freelance email copywriting, freelance advertising copywriting, freelance creative copywriting, freelance technical copywriting, freelance business copywriting, freelance legal copywriting, freelance medical copywriting" loading="lazy" width={600} height={300} src={"/graphic-designs/Logo-3.jpg"} />
          </article>
          <article className="flex flex-col text-left items-start justify-center space-y-10" itemScope itemType="https://schema.org/Article">
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
              Email  
              <span> Templates</span>{" "}
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
              Elevate your email communication with branded email templates.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
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
              LinkedIn   
              <span> Profile Covers</span>{" "}
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
              Eye-catching LinkedIn profile covers that showcase your brand&apos;s personality.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
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
              And More   
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
              Additional branding materials tailored to your specific needs.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>
          <article className="flex md:pt-10 flex-col text-left items-center justify-evenlymx-auto space-y-10" itemScope itemType="https://schema.org/Article">
            <div className="flex flex-col text-center items-center justify-between">
            <Image alt="Logo design, logo creation, brand identity design, visual branding, graphic logo, logo design services, custom logo design, freelance logo design, cheap freelance logo design, affordable freelance logo design, logo design for small businesses, logo design for startups, logo design for businesses, custom logo design, professional logo design, logo design for non-profits, logo design for organizations, logo design for websites, logo design for apps, logo design for print, logo design for social media, logo design for branding.

" loading="lazy" width={600} height={300} src={"/graphic-designs/Branding-Material-3.jpg"} />
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
              className="text-3xl lg:text-5xl mt-8 font-bold text-center text-white"
            >
              {" "}
              Invest in Your Brand&apos;s Success</motion.h4>
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
             Premium branding materials are an investment in your business&apos;s reputation and success. They help establish your brand as a leader in your industry and attract new customers.
            </motion.p>
            
            </div>
            
          </article>
        </motion.div>
      </div>
    </motion.div>
  );
}