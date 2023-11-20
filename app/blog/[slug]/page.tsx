"use client"

import React, { Suspense } from 'react';
import { BlogPost } from '../utils/fetchBlogPost';
import axios from 'axios';

// Assuming fetchBlogPostBySlug is an async function
async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  console.log("Fetching post for slug:", slug);
    try {
      const response = await axios.get(`https://wp.isaxcode.com/wp-json/wp/v2/posts?slug=${slug}`);
      const post = response.data[0]; // Assuming the API returns an array
  
      if (!post) return null;
  
      // Assuming the featured image URL is directly available or processed similarly
      const featuredImage = post.featured_media ? 'URL to the featured image' : ''; 
  
      return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        content: post.content.rendered,
        publishedDate: post.date,
        featuredImage,
      };
    } catch (error) {
      console.error('Error fetching blog post by slug:', error);
      return null;
    }
}

interface BlogPostProps {
  slug: string;
}

function BlogPost({ slug }: BlogPostProps) {
  // Use a state hook to store the fetched post
  const [post, setPost] = React.useState<BlogPost | null>(null);

  // Fetch the post when the component mounts
  React.useEffect(() => {
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
