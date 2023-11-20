"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BlogPost, fetchBlogPostBySlug } from '../../utils/fetchBlogPost';

const SingleBlogPost = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlogPostBySlug(slug).then(setPost);
    }
  }, [slug]);

  if (!post) {
    return <div>Moye Moye</div>;
  }


return (
  <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
  <div className="text-lg mb-4">Published on: {post.publishedDate}</div>
  <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
</div>
);
};

export default SingleBlogPost;
