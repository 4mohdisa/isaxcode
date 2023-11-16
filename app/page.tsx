"use client";

import type {Metadata, NextPage } from "next";
// import ContactUs from "../components/contactus";
// import Footer from "../components/Footer";
import Masthead from "../components/Masthead";
import Skills from "../components/Skills";
// import TrustedBy from "../components/Trustedby";
import Works from "../components/Works";
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
