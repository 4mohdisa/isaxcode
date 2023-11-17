"use client";

import type {Metadata, NextPage } from "next";
import Masthead from "../components/Masthead";
import Skills from "../components/Skills";
import React from "react";
import dynamic from "next/dynamic";

const TrustedBy = dynamic(() => import('../components/Trustedby'), {
  loading: () => <p>Loading...</p>,
})


const ContactUs = dynamic(() => import('../components/contactus'), {
  loading: () => <p>Loading...</p>,
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading...</p>,
})

const Works = dynamic(() => import('../components/Works'), {
  loading: () => <p>Loading...</p>,
})

const Home: NextPage = () => {
  return (
    <>
      <Masthead /> 
      <Skills />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
