// app/blog/[slug].tsx
"use client"

import React, { Suspense, useState, useEffect } from 'react';
import { BlogPost, fetchBlogPostBySlug } from '../utils/fetchBlogPost'; // Adjust the path as necessary
import Footer from '@/components/Footer';
import LatestPostsCard from '../components/LatestBlogCard';
import Loader from '@/components/Loader';
import BackButton from '@/components/backButton';

interface BlogPostProps {
  slug: string;
}

function BlogPost({ slug }: BlogPostProps) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchBlogPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) {
    return ( 
      <Loader/>
    )
  }

  return (
    <article className='bg-black flex items-center justify-center w-full py-20' itemScope itemType="https://schema.org/Article">
      <BackButton/>
      <div className='px-5 lg:px-0 w-full lg:w-[50%] blog-content-container text-white text-xl text-left flex flex-col items-center justify-center'>
      <h1 className='text-white font-bold text-4xl lg:text-5xl  leading-snug'>{post.title}</h1>
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
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPost slug={slug} />
      <LatestPostsCard/>
      <Footer/>
    </Suspense>
  );
}

