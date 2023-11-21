"use client"

import { useEffect, useState } from 'react';
import { BlogPost, fetchAllBlogPosts } from './utils/fetchBlogPost';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import BlogCard from './components/BlogCard';
import { title } from 'process';
import LatestPostsWidget from './components/LatestPostWidget';
import CategoriesComponent from './components/BlogCategoriesWidget';
import TagsComponent from './components/BlogTagsWidget';

const BlogPostsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchAllBlogPosts().then(setBlogPosts);
  }, []);

  if (!blogPosts.length) return <div>Loading...</div>;

  return (
<div className='flex flex-row gap-10 p-20 justify-center bg-black'>
<div className='min-w-[60%]'>
<div className="grid grid-cols-2 justify-center gap-8 mx-auto">
      {blogPosts.map((post) => (
        <BlogCard
        publishedDate={post.publishedDate} 
        title={post.title}
        featuredImage={post.featuredImage} 
        slug={post.slug}
        id={post.id}
      />
      ))}
    </div>
</div>
    <div className="w-auto">
    <div className="widget-area space-y-9">
        <div className="single-widgets bg-cover bg-no-repeat border border-gray-800/10 p-8 rounded-md" style={{ backgroundImage: "url('../img/home-4/pricing-bg-3.png')" }}>
            <form>
                <div className="flex items-center">
                    <input type="search" id="wp-block-search__input-1" className="flex-grow bg-transparent border border-gray-800/20 rounded-l-md p-2.5 text-white placeholder-gray-400" name="s" placeholder="Search Here" />
                    <button type="submit" className="w-30 bg-indigo-600 rounded-r-md p-2.5 text-white transition duration-500">
                        Search
                    </button>
                </div>
            </form>
        </div>

        <CategoriesComponent/>

        <LatestPostsWidget/>

        <TagsComponent/>
    </div>
</div>
</div>
  );
};

export default BlogPostsPage;