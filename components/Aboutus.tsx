import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-black text-white py-20 text-3xl md:text-4xl aboutus_section__xSPZD`}
    >
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong> Our team
          of expert engineers has created the best user experiences in some of
          the most popular apps worldwide. <br />
          <br />
          Our services:
          <br />- <b>From Idea to AppStore</b>: Full App Design and Development{" "}
          <br />- <b>Performance Optimization</b>: Startup-time, Animation and
          overall smoothness optimization for existing apps
          <br />- <b>Custom Module Development</b>: Development of specific UIs,
          animations, gestures or native modules for existing apps
          <br />- <b>Consulting</b>: One-on-one consulting with a React Native,
          iOS or Android expert and bug fixing
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
