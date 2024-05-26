"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogPost, fetchAllBlogPosts, fetchPostsBySearchQuery, fetchPostsByCategory } from './utils/fetchBlogPost';
import BlogCard from './components/BlogCard';
import SkeletonBlogCard from './components/BlogCardSkeleton';
import "../../styles/style.min.css";
import Overview from './components/Overview';

const BlogPostsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let posts;
      const categoryId = category ? parseInt(category, 10) : null;
      if (categoryId !== null && !isNaN(categoryId)) {
        posts = await fetchPostsByCategory(categoryId);
      } else {
        posts = await fetchAllBlogPosts();
      }

      setBlogPosts(posts);
      setIsLoading(false);
    };

    fetchPosts();
  }, [category]);

  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center'>
      <Overview />
      <div className='w-full md:max-w-[70%] m-auto'>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 2xl:grid-cols-4 items-center justify-center gap-4 mx-auto w-full">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlogCard key={index} />
            ))
          ) : (
            blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                publishedDate={post.publishedDate}
                title={post.title}
                featuredImage={post.featuredImage}
                slug={post.slug}
                id={post.id}
                categories={post.categories} 
                content={''} excerpt={''}              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostsPage;
