import { Skeleton } from "@/shadcn-ui/components/ui/skeleton";


const SkeletonBlogCard = () => {
  return (


<div className="max-w-sm bg-black hover:bg-black/90 border-solid border-2 border-white/10 transition duration-500 ease-in-out rounded-md overflow-hidden">
      <div className="relative">
        <Skeleton className="w-full h-52" /> {/* Adjust width and height as needed */}
      </div>
      <div className="p-5">
        <ul className="flex items-center justify-between flex-wrap mb-3">
          <li>
            <Skeleton className="w-24 h-4" /> {/* Placeholder for date */}
          </li>
        </ul>
        <Skeleton className="w-3/4 h-6 mb-0" /> {/* Placeholder for title */}
      </div>
    </div>

  );
};

export default SkeletonBlogCard;


