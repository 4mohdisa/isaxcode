import React from "react";
import CustomDialog from "@/components/CustomDialog";

type Props = {};

export default function Copywrite({ }) {
  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center text-center"
    >

      <div className="flex mt-10 flex-col text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-start">
        <div
          className="space-y-3 md:space-y-10 px-0 md:px-10"
        >

          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Website{" "}
              <span>Content</span>{" "}
            </h4>
            <p
              className="text-2xl mt-5 text-white font-normal"
            >
              I will write content for website with High SEO performing keywords and eye Catching CTA.
            </p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
              
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Blog{" "}
              <span>Writing</span>{" "}
            </h4>
            <p
            className="text-2xl mt-5 text-white font-normal"
            >
              High-quality, informative content that drives engagement and results.
            </p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
             
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Report{" "}
              <span> Writing</span>{" "}
            </h4>
            <p
              className="text-2xl mt-5 text-white font-normal"
            >
              I will write an technical report for any software as in field of IT  I have good technical knowledge.
            </p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
              
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
            <h4

              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Assignment{" "}
              <span>Reports</span>{" "}
            </h4>
            <p
             
              className="text-2xl mt-5 text-white font-normal"
            >
              I will write reports for your assignments in any field, with better wordings and without plagiarism.

            </p>
            <div className="flex gap-x-5 items-center justify-center lg:justify-start">
              
              <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
            </div>
          </article>

          <article>            <h4

            className="mt-10 mb-20 text-center text-5xl lg:text-7xl font-bold text-white"
          >
            {" "}

            <span>Have an Idea? </span>{" "}
          </h4></article>


        </div>
      </div>
    </div>
  );
}