'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './../.././styles/app-page.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import Footer from '@/components/Footer';
import ContactUs from '@/components/contactus';
import Header from './components/Header';
import AppDev from './components/app-dev';

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

interface ColumnProps {
  images: string[];
  y: MotionValue<number> | string | number;  // Adjust the type based on your use case
}

export default function Appdevelopment() {
  
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
    <main className={styles.main}>
      
      <div className={styles.spacer}>
        <Header/>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      {/* <div className={styles.spacer}></div> */}
      <AppDev/>

    </main>
    <ContactUs/>
      <Footer/>
    </>
  )
}

const Column = ({images, y}: ColumnProps) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src: any, i: any) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/applications/${src}`}
              alt='image'
              fill
              style={{objectFit:"contain"}}
              loading="lazy"
            />
          </div>
        })
      }
    </motion.div>
  )
}
