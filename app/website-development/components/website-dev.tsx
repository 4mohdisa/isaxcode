import React from "react";
import CustomDialog from "@/components/CustomDialog";

type Props = {};

export default function WebDev({ }) {
  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center text-center"
    >

      <div className="flex mt-10 flex-col text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-start">
        <div
          className="space-y-3 md:space-y-10 px-0 md:px-10"
        >
          <article>            <h4
            className="mt-10 mb-20 text-center text-5xl lg:text-7xl font-bold text-white"
          >
            {" "}

            <span>Website Development</span>{" "}
          </h4></article>
          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Agency{" "}
              <span>Website Development</span>{" "}
            </h4>
            <p
              className="text-2xl mt-5 text-white font-normal"
            >
              I will create a modern and high lead generation website for your business, with SEO optimization.
            </p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Real Estate{" "}
              <span>Website Development</span>{" "}
            </h4>
            <p
              className="text-2xl mt-5 text-white font-normal"
            >
              I will develop a real estate website that can be integrated with your CRM, automatically syncing listings from your CRM to the website, and is SEO-optimized and user-friendly.
            </p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
          </article>

          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              E-Commerce{" "}
              <span> Development</span>{" "}
            </h4>
            <p
              className="text-2xl mt-5 text-white font-normal"
            >
              I can help you create a website that is easy to use, visually appealing, and equipped with all the features you need to run a successful online business.
            </p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
          </article>

          <article className="flex flex-col text-right items-end justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Blog{" "}
              <span>Website Development</span>{" "}
            </h4>
            <p
              className="text-2xl mt-5 text-white font-normal"
            >
              I can help you create a blog that is both visually appealing and easy to navigate, allowing you to express your individuality and attract a loyal following.
            </p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
          </article>

          <article className="flex flex-col text-left items-start justify-between" itemScope itemType="https://schema.org/Article">
            <h4
              className="text-3xl lg:text-5xl font-bold text-white"
            >
              {" "}
              Portfolio{" "}
              <span> Development</span>{" "}
            </h4>
            <p
              className="text-2xl mt-5 text-white font-normal"
            >
              I can help you create a portfolio that is both visually compelling and informative, effectively highlighting your unique strengths and capabilities.
            </p>
            <CustomDialog buttonLabel="Get in Touch" buttonClassName="text-2xl lg:!text-3xl font-bold px-8 mt-10 w-auto h-auto" />
          </article>
          <article>            <h4

            className="mt-10 mb-20 text-center text-5xl lg:text-7xl font-bold text-white"
          >
          

            <span>Have an Idea? </span>{" "}
          </h4></article>


        </div>
      </div>
    </div>
  );
}