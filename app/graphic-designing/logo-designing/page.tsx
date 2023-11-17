'use client';

import ContactUs from '@/components/contactus';
import Footer from '@/components/Footer';
import Logodesign from './components/logo-designing';
import Masthead from '@/components/Masthead';


export default function Logodesigning() {

  return (
    <>
    <main>
    <Masthead 
      backgroundImage="/graphic-designs/Logo-Designing-Banner.jpg"
      headline="Logo Designing"
      subHeadline="Done right."
      imageAltText="Custom logo design services, creative logo design freelancers, innovative logo redesign freelancers, freelance logo branding specialists, freelance logo creation experts, logo development freelancers, logo concept pioneers, freelance logo sketching artists, logo iteration masters, freelance logo finalization experts, logo file providers, comprehensive logo guidelines creators, freelance logo usage consultants, professional logo design freelancers, affordable logo design freelancers, cheap logo design freelancers, logo design for small businesses, logo design for startups, logo design for businesses, logo design for agencies, logo design for designers, freelance logo design for branding agencies, freelance logo design for marketing agencies, freelance logo design for advertising agencies, freelance logo design for tech companies, freelance logo design for startups, freelance logo design for small businesses, freelance logo design for entrepreneurs, freelance logo design for social media, freelance logo design for websites, freelance logo design for print, freelance logo design for packaging, freelance logo design for branding, freelance logo design for marketing, freelance logo design for advertising"
      /> 

      <Logodesign/>

    </main>
    <ContactUs/>
      <Footer/>
    </>
  )
}
