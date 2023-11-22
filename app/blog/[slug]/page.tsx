// app/blog/[slug].tsx
"use client"

import React, { Suspense, useState, useEffect } from 'react';
import { BlogPost, fetchBlogPostBySlug } from '../utils/fetchBlogPost'; // Adjust the path as necessary
import { Button } from '@/shadcn-ui/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  slug: string;
}

function BlogPost({ slug }: BlogPostProps) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetchBlogPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='bg-black flex items-center justify-center w-full py-20'>
      <Link href="javascript:history.back()">
      <Button className="fixed top-0 left-10 mt-10 w-auto h-auto !rounded-full"><Image width={50} height={50} alt="back-icon" src="/assets/back.svg" /></Button>
      </Link>
      <div className='w-[50%] blog-content-container text-white text-xl text-left flex flex-col items-center justify-center'>
      <h1 className='text-white font-bold text-5xl '>{post.title}</h1>
      <div className='blog-content text-2xl' dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
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
    </Suspense>
  );
}
