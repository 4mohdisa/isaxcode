// app/blog/[slug].tsx
"use client"

import React, { Suspense, useState, useEffect } from 'react';
import { BlogPost, fetchBlogPostBySlug } from '../utils/fetchBlogPost'; // Adjust the path as necessary

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
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
