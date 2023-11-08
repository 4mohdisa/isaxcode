import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomDialog from "@/components/CustomDialog";
import Image from "next/image";

type Props = {};

export default function Posterdesign({ }) {
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
                Poster{" "}
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
                I can create custom posters that are both visually appealing and effective in achieving your goals.
              </motion.p>
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Logo Designing Work" loading="lazy" width={600} height={300} src={"/graphic-designs/Poster-Design-1.jpg"} />
          </article>
          <article className="flex md:pt-10 flex-col text-left items-center justify-evenlymx-auto space-y-10" itemScope itemType="https://schema.org/Article">
            <Image alt="Logo Designing Work" loading="lazy" width={600} height={300} src={"/graphic-designs/Poster-Design-2.jpg"} />
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
                Custom Design{" "}
                <span> for your needs</span>{" "}
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
                I will work closely with you to understand your needs and develop a poster that is perfectly aligned with your brand identity.
              </motion.p>
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>

          </article>
          <article className="flex flex-col md:flex-row text-left items-center justify-evenlymx-auto space-x-10" itemScope itemType="https://schema.org/Article">
            <Image alt="Logo Designing Work" loading="lazy" width={600} height={300} src={"/graphic-designs/Poster-Design-3.jpg"} />
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
                Promotional Posters
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
                Promote your products, services, or events with captivating posters that grab attention and drive engagement.
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
                Informative 
                <span> Posters</span>{" "}
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
                Educate your audience about important topics or provide clear instructions with informative posters that are visually engaging and easy to understand.
              </motion.p>
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Logo Designing Work" loading="lazy" width={600} height={300} src={"/graphic-designs/Poster-Design-4.jpg"} />
          </article>

          <article className="flex flex-col md:flex-row text-left items-center justify-evenlymx-auto space-x-10" itemScope itemType="https://schema.org/Article">
            <Image alt="Logo Designing Work" loading="lazy" width={600} height={300} src={"/graphic-designs/Poster-Design-5.jpg"} />
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
                Event Posters
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
                Announce your upcoming events with stylish posters that generate excitement and encourage attendance.
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
                Motivational 
                <span> Posters</span>{" "}
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
Inspire and motivate your audience with uplifting posters that feature powerful quotes, eye-catching imagery, and positive messaging.
              </motion.p>
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
            <Image alt="Logo Designing Work" loading="lazy" width={600} height={300} src={"/graphic-designs/Poster-Design-4.jpg"} />
          </article>
          <article className="flex md:pt-10 flex-col text-center items-center justify-center mx-auto space-y-10" itemScope itemType="https://schema.org/Article">
            
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
                Invest in Effective Visual Communication
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
Posters are a versatile and cost-effective way to reach a wide audience and make a lasting impact. With my expertise in poster design, I can help you create posters that effectively communicate your message, enhance your brand image, and achieve your marketing goals.

</motion.p>
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>

          </article>
        </motion.div>
      </div>
    </motion.div>
  );
}