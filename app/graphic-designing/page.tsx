'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './../.././styles/app-page.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import Masthead from '@/components/Masthead';
import Footer from '@/components/Footer';
import ContactUs from '@/components/contactus';
import Header from './components/Header';
import Works from './components/Works';

const images = [
  "app1.png",
  "app2.png",
  "app3.png",
  "app4.png",
  "app5.png",
  "app6.png",
  "app7.png",
  "app8.png",
  "app9.png",
  "app10.png",
  "app11.png",
  "app12.png",
]


export default function GraphicDesigning() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <>
    <div>
        <Header/>
        <Works/>
    </div>
    <ContactUs/>
      <Footer/>
    </>
  )
}

