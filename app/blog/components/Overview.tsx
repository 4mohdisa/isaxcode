import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, fetchLatestPostFromEachCategory } from '../utils/fetchBlogPost';

export default function Overview() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const latestPosts = await fetchLatestPostFromEachCategory();
      setBlogPosts(latestPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-black p-8 w-full md:max-w-[80%] m-auto">
      <h1 className="text-5xl font-bold text-center mb-12 text-white">Overview</h1>
      <div className="grid grid-cols-3 gap-2">
        {blogPosts.map((post, index) => (
          
          <div
            key={post.id}
            className={`${index === 0 ? 'col-span-2 row-span-2 h-[410px]' : 'h-[200px]'} relative bg-cover bg-center rounded-lg overflow-hidden`}
            style={{
              backgroundImage: `url(${post.featuredImage || '/placeholder.jpg'})`,
            }}
          >
            <div className="flex flex-col justify-between h-full p-4 bg-none">
            <div className="absolute top-0 left-0 p-3">
            <span className="text-white text-md font-medium">{post.categories}</span>
            <span className="text-white text-md font-medium"> • </span>
            <span className="text-white text-md font-medium">{post.publishedDate}</span>
          </div>
              <Link href={`/blog/${post.slug}`} passHref>
                <div className={`bg-none p-2 rounded text-left text-white`}>
                  <span className="font-bold text-lg">{post.title}</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
