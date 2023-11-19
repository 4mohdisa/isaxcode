"use client"

import { useEffect, useState } from 'react';
import { BlogPost, fetchAllBlogPosts } from './utils/fetchBlogPost';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

const BlogPostsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchAllBlogPosts().then(setBlogPosts);
  }, []);

  if (!blogPosts.length) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-8">
          <Link href={`/post/${post.slug}`}>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          </Link>
          {post.featuredImage && (
            <img src={post.featuredImage} alt="Featured" className="mb-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPostsPage;