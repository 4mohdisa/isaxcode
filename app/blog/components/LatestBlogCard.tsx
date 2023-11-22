
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchAllBlogPosts } from '../utils/fetchBlogPost';
import { Skeleton } from '@/shadcn-ui/components/ui/skeleton';
import SkeletonBlogCard from './BlogCardSkeleton';

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
                        <Link href={`/blog/${post.slug}`} className="w-full lg:max-w-sm bg-black hover:bg-black/90 border-solid border-2 border-white/10 transition duration-500 ease-in-out rounded-md overflow-hidden">
                            <div className="relative">
                                <Image width={400} height={200} objectFit='cover' className="w-full h-52 object-cover transition duration-500 ease-in-out transform hover:scale-105 !z-0" src={post.featuredImage} alt="" />
                            </div>
                            <div className="p-5">
                                <ul className="flex items-center justify-between flex-wrap mb-3">
                                    <li>
                                        <a className="text-gray-400 text-sm font-medium cursor-pointer" >{post.publishedDate}</a>
                                    </li>

                                </ul>
                                <h4 className="text-white text-xl font-semibold mb-0">
                                    <a className="cursor-pointer" >{post.title}</a>
                                </h4>

                            </div>
                        </Link>
                    ))
                )}
            </div>
            </div>
        </div>
    );

};

export default LatestPostsCard;