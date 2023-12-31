import Image from 'next/image';
import Link from 'next/link';
import { truncateText } from '../utils/textUtils';

// Define a type for the props
interface BlogCardProps {
  id: number;
  title: string;
  featuredImage: string;
  slug: string;
  publishedDate: string;
}

const BlogCard = ({ title, featuredImage, slug, publishedDate }: BlogCardProps) => {
  const truncatedTitle = truncateText(title, 7);
  
  return (


<Link href={`/blog/${slug}`} className="group w-full hover:shadow-lg hover:shadow-white/5 lg:max-w-sm bg-black hover:border-white/20 border-solid border-2 border-white/10 transition duration-500 ease-in-out rounded-md overflow-hidden">
<div className="relative">
    <Image width={400} height={200} objectFit='cover' className="w-full h-52 object-cover transition duration-500 ease-in-out transform group-hover:scale-105" src={featuredImage} alt="Featured Blog Image" />
</div>
<div className="p-5">
    <ul className="flex items-center justify-between flex-wrap mb-3">
        <li>
            <a className="text-gray-400 text-sm font-medium cursor-pointer" >{publishedDate}</a>
        </li>
        
    </ul>
    <h4 className="group-hover:text-white text-white/90 text-xl font-semibold mb-0 cursor-pointer">
    {truncatedTitle}
    </h4>
    
</div>
</Link>

  );
};

export default BlogCard;


