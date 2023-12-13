"use client"

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogPost, fetchAllBlogPosts } from './utils/fetchBlogPost';
import Masthead from '@/components/Masthead';
import HustleCard from './components/BlogCard';
import Loader from '@/components/Loader';


const BlogPostsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchPosts = async () => {
      let posts;
        posts = await fetchAllBlogPosts();
      setBlogPosts(posts);
      setIsLoading(false);
    };

    fetchPosts();
  }, [category]);
  




  return (
    <>

      <Masthead
        backgroundImage="/assets/bg.png"
        headline="What I do"
        arrow={false}
        height='Small'
        imageAltText="Web design, web development, user interface (UI) design, user experience (UX) design, responsive web design, mobile web design, e-commerce web design, website development for small businesses, website development for startups, website development for businesses, website development for agencies, website development for IT companies, graphic designer, copywriter, logo design, branding material, poster designer, freelancer, visual communication, freelance graphic design services, logo design specialists, branding consultants, packaging design artists, illustration experts, web design professionals, UI/UX design aficionados, motion graphics specialists, photo editing masters, digital marketing strategists, social media marketing gurus, custom logo design services, innovative logo redesign experts, logo branding specialists, creative logo creation experts, logo development professionals, logo concept pioneers, logo sketching artists, logo iteration masters, logo finalization experts, logo file providers, comprehensive logo guidelines creators, logo usage consultants, branding material design consultants, transformative branding services, brand identity design specialists, comprehensive brand guidelines creators, detailed brand style guide experts, brand voice specialists, impactful brand messaging experts, brand personality consultants, effective brand positioning experts, strategic brand development experts, brand consistency consultants, brand management gurus, brand awareness experts, brand equity enhancers, brand loyalty specialists, custom poster design experts, creative poster creation artists, innovative poster development professionals, conceptual poster design pioneers, skilled poster sketching artists, masterful poster iteration experts, finalization-ready poster specialists, professional poster printing consultants, effective poster distribution experts, strategic poster marketing consultants, impactful poster advertising specialists, talented freelancers, freelance graphic design specialists, skilled freelance copywriters, expert freelance logo designers, knowledgeable freelance branding consultants, creative freelance poster designers, proficient freelance website design and development experts, experienced freelance digital marketing strategists, savvy freelance social media marketing experts, engaging freelance content marketing specialists, effective freelance SEO copywriters, persuasive freelance web copywriters, creative freelance social media copywriters, compelling freelance email copywriters, impactful freelance advertising copywriters, innovative freelance creative copywriters, technical freelance copywriters, business-oriented freelance copywriters, legal freelance copywriters, medical freelance copywriters, social media graphic design, freelance social media post creation, eye-catching social media visual design, engaging social media story design, innovative social media banner creation, skilled social media thumbnail creation, captivating social media profile picture design, reel editor freelancer, freelance reel editing services, expert reel cutting and splicing, skilled reel lighting and framing, effective reel sound design and mixing, creative reel transition and effects, engaging reel music and soundtrack, knowledgeable reel optimization and exporting, web design and development, copywriting, graphic design, social media graphic and post designer, reel editor freelancer, branding, logo design, branding materials, poster design, digital marketing, social media marketing, content marketing, SEO copy, website branding, website layout, website templates, website themes, WordPress themes, Shopify themes, graphic design templates, graphic design themes, graphic design kits, social media kits, content creation, Wix, Adobe Illustrator, Squarespace, landing page, UI graphics, app design, Figma, Webflow, digital design, motion graphics, explainer animations, Instagram reels, videos, GIFs, product design, print design, eCommerce platforms, merchandise graphic design, website analytics, website"
      />
      <div className='p-5 md:p-10 lg:p-20 bg-black flex items-center justify-center'>
      <div className='card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2'>

        
      {isLoading ? (
            <Loader/>
          ) : (
            blogPosts.map(post => (
              <HustleCard
              key={post.id}
              id={post.id}
              title={post.title}
              featuredImage={post.featuredImage}
              slug={post.slug}
            />
            ))
          )}
          </div>
      </div>
    </>
  );
};

export default BlogPostsPage;