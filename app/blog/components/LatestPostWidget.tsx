
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../utils/fetchBlogPost';
import { Skeleton } from '@/shadcn-ui/components/ui/skeleton';

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
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetchAllBlogPosts().then(posts => {
        const sortedPosts = posts.sort((a, b) => 
          new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
        );
        setLatestPosts(sortedPosts.slice(0, 3)); // Get the top 3 latest posts
        setIsLoading(false);
      });
    }, []);
  
    return (
      <div className="single-widgets bg-cover bg-no-repeat border border-gray-800/10 p-8 rounded-md" style={{ backgroundImage: "url('../img/home-4/pricing-bg-3.png')" }}>
        <div className="widget-title mb-6 border-b border-gray-800/10">
          <h4 className="text-2xl font-medium text-white pb-1">Newest Posts</h4>
        </div>
        <div className="space-y-5">
        {isLoading ? (

[...Array(3)].map((_, index) => (
<div className="flex items-center space-x-4">
      <Skeleton className="h-20 w-28 rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
        ))
        ) : (
          latestPosts.map((post) => (
            <div key={post.id} className="flex gap-4">
              <div className="w-28">
                <Link href={`/blog/${post.slug}`}>
                  <Image width={400} height={200} objectFit='cover' src={post.featuredImage || 'default-placeholder-image-url'} alt="image" className="w-full h-20 rounded-md object-cover"/>
                </Link>
              </div>
              <div>
                <h6 className="text-white text-lg mb-1 hover:text-white/80">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h6>
                <Link href={`/blog/${post.slug}`} className="text-gray-400 text-sm">{post.publishedDate}</Link>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    );
    
  };
  
  export default LatestPostsWidget;