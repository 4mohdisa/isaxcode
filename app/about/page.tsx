'use client';
import styles from './../.././styles/web-page.module.css'
import Image from 'next/image';
import Footer from '././.././../components/Footer';
import ContactUs from '@/components/contactus';
import Masthead from '@/components/Masthead';
import About from './components/About';


export default function Websitedevelopment() {


    return (
        <>


            <Masthead backgroundImage="/assets/bg.png"
                headline="Mohammed Isa"
                subHeadline="Everything Done right."
                imageAltText="Web design, web development" />

<About/>
            <ContactUs />
            <Footer />
        </>
    )
}


