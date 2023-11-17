'use client';

import ContactUs from '@/components/contactus';
import Footer from '@/components/Footer';
import Uidesign from './components/ui-designing';
import Masthead from '@/components/Masthead';


export default function Uidesigning() {

  return (
    <>
      <main>
      <Masthead 
      backgroundImage="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a0baf0180531245.650c2efd7ac19.jpg"
       headline="Ui Ux"
      subHeadline="Done right."
      imageAltText="User interface design, user experience design, UI/UX design services, UX research, UI prototyping, wireframing, interaction design, visual design, information architecture, usability testing, UI/UX design for mobile apps, UI/UX design for websites, UI/UX design for web applications, UI/UX design for software products, UI/UX design for e-commerce, UI/UX design for enterprise applications, UI/UX design for startups, UI/UX design agencies, UI/UX design consultants, UI/UX design freelancers, UI/UX design for accessibility, UI/UX design for user persona, UI/UX design for user journey, UI/UX design for user flow, UI/UX design for user interface elements, UI/UX design for user interface patterns, UI/UX design for user interface best practices, UI/UX design for user interface trends, UI/UX design for user interface colors, UI/UX design for user interface typography, UI/UX design for user interface layouts, UI/UX design for user interface responsiveness, UI/UX design for user interface animation, UI/UX design for user interface microinteractions, UI/UX design for user interface emotion, UI/UX design for user interface storytelling, UI/UX design for user interface personalization, UI/UX design for user interface dark mode, UI/UX design for user interface light mode, UI/UX design for user interface augmented reality, UI/UX design for user interface virtual reality, UI/UX design for user interface artificial intelligence, UI/UX design for user interface machine learning, UI/UX design for user interface big data, UI/UX design for user interface blockchain, UI/UX design for user interface internet of things, UI/UX design for user interface future technologies."
      /> 
        <Uidesign />
      </main>
      <ContactUs />
      <Footer />
    </>
  )
}
