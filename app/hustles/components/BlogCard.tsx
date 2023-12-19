import Image from 'next/image';
import Link from 'next/link';

interface HustleCardProps {
  id: number;
  title: string;
  featuredImage: string;
  slug: string;
}

const HustleCard = ({ id, title, featuredImage, slug}: HustleCardProps) => {
  return (
    <Link key={id} href={`/hustles/${slug}`} className="card group w-full hover:shadow-lg lg:max-w-sm bg-black border-solid border-1 border-white/10 transition duration-500 ease-in-out rounded-md overflow-hidden first:row-span-2 odd:row-span-3 even:row-span-5">
        <img className="w-full h-full object-cover" src={featuredImage} alt="image" />
        <h4 className="p-5 text-white text-3xl font-bold cursor-pointer group-hover:text-white z-10">
            {title}
        </h4>
</Link>

  );
};


export default HustleCard;
