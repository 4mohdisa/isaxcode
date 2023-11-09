import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomDialog from "@/components/CustomDialog";
import { Button } from "@/shadcn-ui/components/ui/button";
import Image from "next/image";

type Props = {};

export default function Logodesign({ }) {
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
              Logo{" "}
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
              I will design a meaningful logo for your business according to your requirements.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, copywriting services, copywriting for social media, copywriting for business, copywriting for marketing, copywriting for advertising, website copywriting, landing page copywriting, email copywriting, social media ad copywriting, blog post copywriting, article copywriting, product description copywriting, content writing, content marketing, SEO copywriting, copyediting, proofreading, logo design services, custom logo design, logo redesign, logo branding, logo creation, logo development, logo concept, logo sketches, logo iterations, logo finals, logo files, logo guidelines, logo usage, branding material design, branding services, brand identity design, brand guidelines, brand style guide, brand voice, brand messaging, brand personality, brand positioning, brand strategy, brand development, brand consistency, brand management, brand awareness, brand equity, brand loyalty, poster design services, custom poster design, poster creation, poster development, poster concept, poster sketches, poster iterations, poster finals, poster printing, poster distribution, poster marketing, poster advertising, web design, web development, user interface (UI) design, user experience (UX) design, responsive web design, mobile web design, e-commerce web design, website development for small businesses, website development for startups, website development for businesses, website development for freelancers, freelancing, freelance graphic design, freelance copywriting, freelance logo design, freelance branding, freelance poster design, freelance website design and development, freelance digital marketing, freelance social media marketing, freelance content marketing, freelance SEO copywriting, freelance web copywriting, freelance social media copywriting, freelance email copywriting, freelance advertising copywriting, freelance creative copywriting, freelance technical copywriting, freelance business copywriting, freelance legal copywriting, freelance medical copywriting.

" loading="lazy" width={600} height={300} src={"/graphic-designs/Logo-Designing-1.jpg"} />
          </article>
          <article className="flex md:pt-10 flex-col text-left items-center justify-evenlymx-auto space-y-10" itemScope itemType="https://schema.org/Article">
          <Image alt="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, copywriting services, copywriting for social media, copywriting for business, copywriting for marketing, copywriting for advertising, website copywriting, landing page copywriting, email copywriting, social media ad copywriting, blog post copywriting, article copywriting, product description copywriting, content writing, content marketing, SEO copywriting, copyediting, proofreading, logo design services, custom logo design, logo redesign, logo branding, logo creation, logo development, logo concept, logo sketches, logo iterations, logo finals, logo files, logo guidelines, logo usage, branding material design, branding services, brand identity design, brand guidelines, brand style guide, brand voice, brand messaging, brand personality, brand positioning, brand strategy, brand development, brand consistency, brand management, brand awareness, brand equity, brand loyalty, poster design services, custom poster design, poster creation, poster development, poster concept, poster sketches, poster iterations, poster finals, poster printing, poster distribution, poster marketing, poster advertising, web design, web development, user interface (UI) design, user experience (UX) design, responsive web design, mobile web design, e-commerce web design, website development for small businesses, website development for startups, website development for businesses, website development for freelancers, freelancing, freelance graphic design, freelance copywriting, freelance logo design, freelance branding, freelance poster design, freelance website design and development, freelance digital marketing, freelance social media marketing, freelance content marketing, freelance SEO copywriting, freelance web copywriting, freelance social media copywriting, freelance email copywriting, freelance advertising copywriting, freelance creative copywriting, freelance technical copywriting, freelance business copywriting, freelance legal copywriting, freelance medical copywriting.

" loading="lazy" width={600} height={300} src={"/graphic-designs/Logo-Design-3.svg"} />
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
              Custom logo{" "}
              <span> for your business</span>{" "}
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
             I can create a unique and professional mascot logo for your business that is both visually appealing and meaningful. My logos are available for commercial use and come with unlimited revisions until you are happy with the result.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            
          </article>
          <article className="flex flex-col md:flex-row text-left items-center justify-evenlymx-auto space-x-10" itemScope itemType="https://schema.org/Article">
          <Image alt="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, copywriting services, copywriting for social media, copywriting for business, copywriting for marketing, copywriting for advertising, website copywriting, landing page copywriting, email copywriting, social media ad copywriting, blog post copywriting, article copywriting, product description copywriting, content writing, content marketing, SEO copywriting, copyediting, proofreading, logo design services, custom logo design, logo redesign, logo branding, logo creation, logo development, logo concept, logo sketches, logo iterations, logo finals, logo files, logo guidelines, logo usage, branding material design, branding services, brand identity design, brand guidelines, brand style guide, brand voice, brand messaging, brand personality, brand positioning, brand strategy, brand development, brand consistency, brand management, brand awareness, brand equity, brand loyalty, poster design services, custom poster design, poster creation, poster development, poster concept, poster sketches, poster iterations, poster finals, poster printing, poster distribution, poster marketing, poster advertising, web design, web development, user interface (UI) design, user experience (UX) design, responsive web design, mobile web design, e-commerce web design, website development for small businesses, website development for startups, website development for businesses, website development for freelancers, freelancing, freelance graphic design, freelance copywriting, freelance logo design, freelance branding, freelance poster design, freelance website design and development, freelance digital marketing, freelance social media marketing, freelance content marketing, freelance SEO copywriting, freelance web copywriting, freelance social media copywriting, freelance email copywriting, freelance advertising copywriting, freelance creative copywriting, freelance technical copywriting, freelance business copywriting, freelance legal copywriting, freelance medical copywriting.

" loading="lazy" width={600} height={300} src={"/graphic-designs/Logo-2.jpg"} />
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
              Promotional Graphics
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
              I can create professional and engaging promotional graphics for your brand or business.
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
              Graphic 
              <span> Assets</span>{" "}
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
              In addition to creating custom graphics for your brand, I can also share the underlying graphic assets, fonts, and layers with you.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, copywriting services, copywriting for social media, copywriting for business, copywriting for marketing, copywriting for advertising, website copywriting, landing page copywriting, email copywriting, social media ad copywriting, blog post copywriting, article copywriting, product description copywriting, content writing, content marketing, SEO copywriting, copyediting, proofreading, logo design services, custom logo design, logo redesign, logo branding, logo creation, logo development, logo concept, logo sketches, logo iterations, logo finals, logo files, logo guidelines, logo usage, branding material design, branding services, brand identity design, brand guidelines, brand style guide, brand voice, brand messaging, brand personality, brand positioning, brand strategy, brand development, brand consistency, brand management, brand awareness, brand equity, brand loyalty, poster design services, custom poster design, poster creation, poster development, poster concept, poster sketches, poster iterations, poster finals, poster printing, poster distribution, poster marketing, poster advertising, web design, web development, user interface (UI) design, user experience (UX) design, responsive web design, mobile web design, e-commerce web design, website development for small businesses, website development for startups, website development for businesses, website development for freelancers, freelancing, freelance graphic design, freelance copywriting, freelance logo design, freelance branding, freelance poster design, freelance website design and development, freelance digital marketing, freelance social media marketing, freelance content marketing, freelance SEO copywriting, freelance web copywriting, freelance social media copywriting, freelance email copywriting, freelance advertising copywriting, freelance creative copywriting, freelance technical copywriting, freelance business copywriting, freelance legal copywriting, freelance medical copywriting.

" loading="lazy" width={600} height={300} src={"/graphic-designs/Logo-3.jpg"} />
          </article>

        </motion.div>
      </div>
    </motion.div>
  );
}