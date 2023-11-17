'use client';

import ContactUs from '@/components/contactus';
import Footer from '@/components/Footer';
import Socialdesign from './components/social-designing';
import Masthead from '@/components/Masthead';


export default function Logodesigning() {

  return (
    <>
    <main>
    <Masthead 
      backgroundImage="/graphic-designs/Social-Media-Graphics-banner.png"
       headline="Social Media Designing"
      subHeadline="Done right."
      imageAltText="Creative social media post designers, freelance social media post creation freelancers, eye-catching social media visual experts, engaging social media story designers, innovative social media banner specialists, skilled social media thumbnail creators, captivating social media profile picture designers, talented freelance reel editors, expert reel editing freelancers, professional reel cutting and splicing consultants, skilled reel lighting and framing experts, effective reel sound design and mixing freelancers, creative reel transition and effects consultants, engaging reel music and soundtrack experts, knowledgeable reel optimization and exporting freelancers, freelance social media graphic and post designer, freelance graphic designing freelancer, freelance reel editor freelancer, freelance visual expert, freelance social media visual designer, freelance content creator, freelance content marketer, freelance influencer, freelance entrepreneur, freelance storyteller, freelance social media strategist"
      /> 

      <Socialdesign/>

    </main>
    <ContactUs/>
      <Footer/>
    </>
  )
}
