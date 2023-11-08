'use client';

import ContactUs from '@/components/contactus';
import Header from './components/Header';
import Footer from '@/components/Footer';
import Uidesign from './components/ui-designing';


export default function Uidesigning() {

  return (
    <>
      <main>
        <Header />
        <Uidesign />
      </main>
      <ContactUs />
      <Footer />
    </>
  )
}
