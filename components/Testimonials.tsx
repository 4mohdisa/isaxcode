"use client";

import React from "react";
import dynamic from "next/dynamic";

const Review = dynamic(() => import('./review'), {
  loading: () => <p>Loading...</p>,
})
const CarouselItem = dynamic(() => import('./carousel-item'), {
  loading: () => <p>Loading...</p>,
})
const Carousel = dynamic(() => import('./carousel'), {
  loading: () => <p>Loading...</p>,
})


const Testimonials: React.FC = () => {
  return (
    <Carousel className="dark:bg-black bg-white text-white py-10 lg:py-20">
      <CarouselItem index={0}>
        <Review by="Aysha">
          Isa&#x27;s work on my Ecommerce henna website was exceptional. He crafted a visually stunning and user-friendly platform, optimizing it for search engines. His professionalism and expertise ensured a smooth and fruitful collaboration. Highly recommended for any web development project!
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Robby">
          Isa&#x27;s work is excellent. He built my restaurant website, which performs well and generates numerous inquiries. I highly recommend his services.
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="John">
          I needed someone to make a  website for my real estate company, and I&#x27;m so glad I found Isa. He listened to my needs and helped me to create a website that is both informative and visually appealing. Isa also connected my CRM to the website so that all of my listings are synced automatically.
        </Review>
      </CarouselItem>
      <CarouselItem index={3}>
        <Review by="Victoria">
          I&#x27;m a marketing manager for a small business, and I often need help writing blog posts, articles, and other marketing materials. I&#x27;ve hired Isa to write for me on several occasions, and I&#x27;m always impressed with the quality of his work.
        </Review>
      </CarouselItem>
      <CarouselItem index={4}>
        <Review by="Alexander">
          I hired Isa to develop a mobile application for my company. Isa worked closely with me to understand my needs and requirements, and he delivered a product that exceeded my expectations.
        </Review>
      </CarouselItem>
      <CarouselItem index={5}>
        <Review by="Charlotte">
          I hired Isa to help me take down an unauthorized website that was misusing my company&#x27;s name and brand for phishing activities. Isa  was able to quickly identify and take the website.
        </Review>
      </CarouselItem>
      <CarouselItem index={6}>
        <Review by="Peter">
          I hired Isa to design a new logo and branding for my clothing brand. Isa is a creative and talented designer who was able to create a logo and branding that perfectly represents my brand&#x27;s values.
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
