// app/blog/[slug].tsx
"use client"

import React, { Suspense, useState, useEffect } from 'react';
import { BlogPost, fetchBlogPostBySlug } from '../utils/fetchBlogPost'; // Adjust the path as necessary
import BackButton from '@/components/backButton';
import { generateMetadata } from '../utils/metaData';
import dynamic from "next/dynamic";
import useDynamicScript from '../utils/useDynamicScript';
import Loader from '@/components/Loader';


const LatestPostsCard = dynamic(() => import('../components/LatestBlogCard'), {
  loading: () => <Loader/>,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <Loader/>,
})

interface BlogPostProps {
  slug: string;
}

function BlogPost({ slug }: BlogPostProps) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPost = await fetchBlogPostBySlug(slug);
      setPost(fetchedPost);
      if (fetchedPost) {
        const metadata = await generateMetadata({ params: { slug: fetchedPost.slug } });
        document.title = fetchedPost.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', metadata.description);
        }
      }
    };
    fetchData();
  }, [slug]);


  useDynamicScript([
    "https://platform.twitter.com/widgets.js",
  ]);

  if (!post) {
    return ( 
      <Loader/>
    )
  }

  return (
    <article className='bg-black flex items-center justify-center w-full py-20' itemScope itemType="https://schema.org/Article">
      <BackButton/>
      <div className='px-5 lg:px-0 w-full lg:w-[50%] blog-content-container text-white text-xl text-left flex flex-col items-center justify-center'>
      <h1 className='text-white font-bold  lg:text-5xl  leading-relaxed text-left w-full'>{post.title}</h1>
      <div className='blog-content text-2xl' dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <Suspense fallback={<Loader/>}>
      <BlogPost slug={slug} />
      <LatestPostsCard/>
      <Footer/>
    </Suspense>
  );
}

