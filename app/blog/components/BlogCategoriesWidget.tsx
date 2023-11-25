import React, { useEffect, useState } from 'react';
import { Category, fetchAllCategories } from '../utils/fetchBlogCategories';
import { Skeleton } from '@/shadcn-ui/components/ui/skeleton';

const CategoriesComponent = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllCategories().then(fetchedCategories => {
      setCategories(fetchedCategories);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="border-2 border-white/10 py-4 px-8 rounded-xl">
      <div className="widget-title mb-6 border-b border-gray-800/10">
        <h4 className="text-2xl font-medium text-white pb-1">Category</h4>
      </div>
      {isLoading ? (

        [...Array(3)].map((_, index) => (
          <Skeleton key={index} className="h-6 w-full mb-4 last:mb-0 " />
        ))
      ) : (
        categories.map(category => (
          <a key={category.id} href={`/blog?category=${category.id}`} className="text-lg flex justify-between items-center mb-4 last:mb-0 text-white/80 hover:text-white">
            <span>{category.name}</span>
            <span>({category.count})</span>
          </a>
        ))
      )}
    </div>
  );
};

export default CategoriesComponent;
