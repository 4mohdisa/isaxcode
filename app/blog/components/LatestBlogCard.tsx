
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../utils/fetchBlogPost';
import { Skeleton } from '@/shadcn-ui/components/ui/skeleton';
import SkeletonBlogCard from './BlogCardSkeleton';
import BlogCard from './BlogCard';
import { truncateText } from '../utils/textUtils';

// Define a type for the props
interface BlogCardProps {
    id: number;
    title: string;
    featuredImage: string;
    slug: string;
    publishedDate: string;
}

const LatestPostsCard = () => {
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
        <div className="bg-black flex justify-center w-full">
            <div className='flex flex-col items-center px-5 lg:px-0 w-full md:w-[65%]'>
            <div className="mb-6 border-b w-full md:w-[83%]">
                <h4 className="text-2xl font-medium text-white pb-1">Newest Posts</h4>
            </div>
            <div className="grid grid-cols-1 mt-10  md:grid-cols-2 items-center justify-center gap-8 mx-auto">
                {isLoading ? (

                Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonBlogCard key={index} />
                    ))
                ) : (
                    latestPosts.map((post) => (
                 <BlogCard
                  key={post.id}
                  publishedDate={post.publishedDate}
                  title={truncateText(post.title, 8)}
                  featuredImage={post.featuredImage}
                  slug={post.slug}
                  id={post.id}
                />
                    ))
                )}
            </div>
            </div>
        </div>
    );

};

export default LatestPostsCard;