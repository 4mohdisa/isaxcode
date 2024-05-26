// app/blog/[slug].tsx
"use client"

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import useDynamicScript from '../utils/useDynamicScript';
import BackButton from '@/components/backButton';
import Loader from '@/components/Loader';
import "./../../../styles/news.css";
import "./../../../styles/style.min.css";
import "./../../../styles/globals.css";
import { useFetchBlogPost } from '../utils/useFetchBlogPost';

const LatestPostsCard = dynamic(() => import('../components/LatestBlogCard'), {
  loading: () => <Loader />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <Loader />,
});

interface BlogPostProps {
  slug: string;
}

function BlogPost({ slug }: BlogPostProps) {
  const { post, loading, error } = useFetchBlogPost(slug);

  useDynamicScript([
    "https://platform.twitter.com/widgets.js",
  ]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <article className='bg-white flex items-center justify-center w-full py-20' itemScope itemType="https://schema.org/Article">
      <BackButton />
      <div className='blog-content-container px-5 lg:px-0 w-full lg:w-[60%] text-black text-xl flex flex-col items-center justify-center'>
        <h1 className='title text-black font-semibold text-center lg:text-5xl mb-5'>{post?.title}</h1>
        <h1 className='title text-black font-semibold text-center lg:text-5xl mb-5'>{post?.author}</h1>
        <div className='blog-content px-0 lg:px-5 lg:max-w-[800px]' dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
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
    <Suspense fallback={<Loader />}>
      <BlogPost slug={slug} />
      <LatestPostsCard />
      <Footer />
    </Suspense>
  );
}
