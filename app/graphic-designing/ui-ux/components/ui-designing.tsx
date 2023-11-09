import React from "react";
import { motion } from "framer-motion";
import CustomDialog from "@/components/CustomDialog";
import Image from "next/image";

type Props = {};

export default function Uidesign({ }) {
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
              User{" "}
              <span>Friendly</span>{" "}
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
               I can translate your app idea into a reality that captivates users and drives engagement.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Logo Designing Work | User research, user testing, user interviews, user surveys, card sorting, usability testing, eye-tracking, A/B testing, user personas, user journey maps, empathy mapping, information architecture, user flows, wireframing, prototyping, mockups, interaction design, visual design, typography, color theory, layout, iconography, illustration, animation, motion graphics, micro-interactions, accessibility, inclusivity, responsive design, cross-platform design, mobile-first design, progressive enhancement, design systems, design patterns, design guidelines, design language, design thinking, human-centered design, user-centered design, lean UX, agile UX, iterative design, design sprints, design for conversion, design for engagement, design for trust, design for loyalty, design for emotion, design for persuasion, design storytelling, design ethics, design principles, design values, design culture, design education, design community, Buttons, menus, forms, search bars, input fields, navigation bars, breadcrumbs, tabs, accordions, drop-down menus, carousels, sliders, modals, tooltips, popovers, progress bars, loading spinners, error messages, success messages, warning messages, empty states, call-to-action buttons, social media sharing buttons, chat widgets, live chat widgets, progressive disclosure, progressive web apps, single-page applications, multi-page applications, web components, native apps, hybrid apps, adaptive apps, universal apps, responsive web design, responsive UI design, mobile UI design, touch target design, eye-tracking design, gesture-based design, voice-based design, AR/VR UI design, augmented reality UI design, virtual reality UI design, emerging technologies, future of UX/UI design" loading="lazy" width={600} height={300} src={"/graphic-designs/UI-UX-Design-1.jpg"} />
          </article>
          
          <article className="flex flex-col md:flex-row text-left items-center justify-evenlymx-auto space-x-10" itemScope itemType="https://schema.org/Article">
          <Image alt="Logo Designing Work | User research, user testing, user interviews, user surveys, card sorting, usability testing, eye-tracking, A/B testing, user personas, user journey maps, empathy mapping, information architecture, user flows, wireframing, prototyping, mockups, interaction design, visual design, typography, color theory, layout, iconography, illustration, animation, motion graphics, micro-interactions, accessibility, inclusivity, responsive design, cross-platform design, mobile-first design, progressive enhancement, design systems, design patterns, design guidelines, design language, design thinking, human-centered design, user-centered design, lean UX, agile UX, iterative design, design sprints, design for conversion, design for engagement, design for trust, design for loyalty, design for emotion, design for persuasion, design storytelling, design ethics, design principles, design values, design culture, design education, design community, Buttons, menus, forms, search bars, input fields, navigation bars, breadcrumbs, tabs, accordions, drop-down menus, carousels, sliders, modals, tooltips, popovers, progress bars, loading spinners, error messages, success messages, warning messages, empty states, call-to-action buttons, social media sharing buttons, chat widgets, live chat widgets, progressive disclosure, progressive web apps, single-page applications, multi-page applications, web components, native apps, hybrid apps, adaptive apps, universal apps, responsive web design, responsive UI design, mobile UI design, touch target design, eye-tracking design, gesture-based design, voice-based design, AR/VR UI design, augmented reality UI design, virtual reality UI design, emerging technologies, future of UX/UI design" loading="lazy" width={600} height={300} src={"/graphic-designs/UI-UX-Design-2.jpg"} />
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
              User-Centered Design                          </motion.h4>
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
              I prioritize understanding user needs and behaviors to create an interface that is intuitive and easy to use.
            </motion.p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
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
              Invest in a User-Friendly and Visually Captivating App
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
A well-designed UI is crucial for your app&apos;s success. It can enhance user satisfaction, increase engagement, and drive positive reviews. With my expertise in UI design, I can transform your app idea into a reality that users love to use.
</motion.p>
            
            </div>
            
          </article>
        </motion.div>
      </div>
    </motion.div>
  );
}