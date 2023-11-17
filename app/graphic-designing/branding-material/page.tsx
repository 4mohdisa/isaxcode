'use client';

import ContactUs from '@/components/contactus';
import Footer from '@/components/Footer';
import Materials from './components/branding-material';
import Masthead from '@/components/Masthead';


export default function BrandingMaterials() {

  return (
    <>
    <main>
      
    <Masthead 
      backgroundImage="/graphic-designs/Branding-Material-Banner.jpg"
      headline="Branding Materials"
      subHeadline="Done right."
      imageAltText="Visual communication, graphic design services, logo design, branding, packaging design, illustration, web design, UI/UX design, motion graphics, photo editing, digital marketing, social media marketing, content marketing, SEO copywriting, web copywriting, social media copywriting, email copywriting, advertising copywriting, creative copywriting, technical copywriting, business copywriting, legal copywriting, medical copywriting, web design, web development, web hosting, e-commerce development, mobile app development, software development, WordPress development, Shopify development, SEO, SEM, PPC, social media marketing"
      /> 
      

      <Materials/>

    </main>
    <ContactUs/>
      <Footer/>
    </>
  )
}
