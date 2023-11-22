import Image from 'next/image';
import Link from 'next/link';

// Define a type for the props
interface BlogCardProps {
  id: number;
  title: string;
  featuredImage: string;
  slug: string;
  publishedDate: string;
}

const BlogCard = ({ title, featuredImage, slug, publishedDate }: BlogCardProps) => {
  return (


<Link href={`/blog/${slug}`} className="max-w-sm bg-black hover:bg-black/90 border-solid border-2 border-white/10 transition duration-500 ease-in-out rounded-md overflow-hidden">
<div className="relative">
    <Image width={400} height={200} objectFit='cover' className="w-full h-52 object-cover transition duration-500 ease-in-out transform hover:scale-105" src={featuredImage} alt="" />
</div>
<div className="p-5">
    <ul className="flex items-center justify-between flex-wrap mb-3">
        <li>
            <a className="text-gray-400 text-sm font-medium cursor-pointer" >{publishedDate}</a>
        </li>
        
    </ul>
    <h4 className="text-white text-xl font-semibold mb-0">
        <a className="cursor-pointer" >{title}</a>
    </h4>
    
</div>
</Link>

  );
};

export default BlogCard;


