"use client";

import type {Metadata, NextPage } from "next";
import Masthead from "../components/Masthead";
import Skills from "../components/Skills";
import React from "react";
import dynamic from "next/dynamic";
import About from "@/components/About";

const TrustedBy = dynamic(() => import('../components/Trustedby'), {
  loading: () => <p>Loading...</p>,
})


const ContactUs = dynamic(() => import('../components/contactus'), {
  loading: () => <p>Loading...</p>,
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading...</p>,
})


const Home: NextPage = () => {
  return (
    <>
      <Masthead 
      backgroundImage="/assets/bg.png"
      headline="Mohammed Isa"
      subHeadline="Everything Done right."
      imageAltText="Mohammed Isa is a freelance web designer and developer based in Australia.Specializes in building websites and web applications for businesses and individuals."
      /> 
      <Skills />
      <About/>
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
