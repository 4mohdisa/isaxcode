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
    categories: string[];
}

const LatestPostsCard = () => {
    const [latestPosts, setLatestPosts] = useState<BlogCardProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchAllBlogPosts()
            .then(posts => {
                const sortedPosts = posts.sort((a, b) =>
                    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
                );
                setLatestPosts(sortedPosts.slice(0, 3)); // Get the top 3 latest posts
                setIsLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch blog posts');
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="bg-black flex justify-center w-full">
            <div className='flex flex-col items-center px-5 lg:px-0 w-full md:w-[65%]'>
                <div className="w-full py-10 ">
                    <h1 className="text-4xl font-medium text-white">Related articles</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 mx-auto pb-5">
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <SkeletonBlogCard key={index} />
                        ))
                    ) : error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                        latestPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                publishedDate={post.publishedDate}
                                title={truncateText(post.title, 8)}
                                featuredImage={post.featuredImage}
                                slug={post.slug}
                                categories={[]}
                                id={post.id} content={''} excerpt={''}                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default LatestPostsCard;
