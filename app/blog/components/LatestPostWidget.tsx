
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../utils/fetchBlogPost';

// Define a type for the props
interface BlogCardProps {
  id: number;
  title: string;
  featuredImage: string;
  slug: string;
  publishedDate: string;
}

const  LatestPostsWidget = () => {
    const [latestPosts, setLatestPosts] = useState<BlogCardProps[]>([]);
  
    useEffect(() => {
      fetchAllBlogPosts().then(posts => {
        const sortedPosts = posts.sort((a, b) => 
          new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
        );
        setLatestPosts(sortedPosts.slice(0, 3)); // Get the top 3 latest posts
      });
    }, []);
  
    return (
      <div className="single-widgets bg-cover bg-no-repeat border border-gray-800/10 p-8 rounded-md" style={{ backgroundImage: "url('../img/home-4/pricing-bg-3.png')" }}>
        <div className="widget-title mb-6 border-b border-gray-800/10">
          <h4 className="text-2xl font-medium text-indigo-600 pb-1">Newest Posts</h4>
        </div>
        <div className="space-y-5">
          {latestPosts.map((post) => (
            <div key={post.id} className="flex gap-4">
              <div className="w-28">
                <a href={`/blog-details/${post.slug}`}>
                  <Image width={400} height={200} objectFit='cover' src={post.featuredImage || 'default-placeholder-image-url'} alt="image" className="w-full h-20 rounded-md object-cover"/>
                </a>
              </div>
              <div>
                <h6 className="text-white text-lg mb-1 hover:text-indigo-500">
                  <a href={`/blog-details/${post.slug}`}>{post.title}</a>
                </h6>
                <a href={`/blog/${post.slug}`} className="text-gray-400 text-sm">{post.publishedDate}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    
  };
  
  export default LatestPostsWidget;