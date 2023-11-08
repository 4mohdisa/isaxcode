import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomDialog from "@/components/CustomDialog";
import { Button } from "@/shadcn-ui/components/ui/button";

type Props = {};

export default function Copywrite({ }) {
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

          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
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
              Website{" "}
              <span>Content</span>{" "}
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
              I will write content for website with High SEO performing keywords and eye Catching CTA.
            </motion.p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
              
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
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
              Blog{" "}
              <span>Writing</span>{" "}
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
              High-quality, informative content that drives engagement and results.
            </motion.p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
             
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
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
              Report{" "}
              <span> Writing</span>{" "}
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
              I will write an technical report for any software as in field of IT  I have good technical knowledge.
            </motion.p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
              
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
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
              Assignment{" "}
              <span>Reports</span>{" "}
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
              I will write reports for your assignments in any field, with better wordings and without plagiarism.

            </motion.p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
              
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article>            <motion.h4
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
            className="mt-10 mb-20 text-center text-5xl lg:text-7xl font-bold text-white"
          >
            {" "}

            <span>Have an Idea? </span>{" "}
          </motion.h4></article>


        </motion.div>
      </div>
    </motion.div>
  );
}