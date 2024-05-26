import Image from 'next/image';
import Link from 'next/link';
import { truncateText } from '../utils/textUtils';

// Define a type for the props
interface BlogCardProps {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;  // URL of the first image
  content: string;
  publishedDate: string;
  excerpt: string;
  categories: string[];
}

const BlogCard = ({ title, featuredImage, slug, publishedDate, categories }: BlogCardProps) => {
  const truncatedTitle = truncateText(title, 7);
  const cardHeight = 400; // Set the desired height of the card
  const cardWidth = 300; // Set the desired width of the card

  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="group overflow-hidden rounded-lg" style={{ height: `${cardHeight}px`, width: `${cardWidth}px` }}>
        <div className="relative h-full">
          <Image
            fill
            sizes="100vw"
            className="object-cover rounded-lg"
            src={featuredImage}
            alt={`Image for ${title}`}
          />
          <div className="absolute top-0 left-0 p-3">
            <span className="text-white text-md font-medium">{categories}</span>
            <span className="text-white text-md font-medium"> • </span>
            <span className="text-white text-md font-medium">{publishedDate}</span>
          </div>
          <div className="absolute bottom-0 left-0 p-3">
            <h4 className="text-white text-xl font-semibold mb-0">
              {truncatedTitle}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;