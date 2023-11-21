import React, { useEffect, useState } from 'react';
import { Category, fetchAllCategories } from '../utils/fetchBlogCategories';

const CategoriesComponent = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchAllCategories().then(fetchedCategories => {
      setCategories(fetchedCategories);
    });
  }, []);

  return (
    <div className="single-widgets bg-cover bg-no-repeat border border-gray-800/10 p-8 rounded-md" style={{ backgroundImage: "url('../img/home-4/pricing-bg-3.png')" }}>
    <div className="widget-title mb-6 border-b border-gray-800/10">
        <h4 className="text-2xl font-medium text-indigo-600 pb-1">Category</h4>
    </div>
    <ul className="list-none">
    {categories.map(category => (
          <li key={category.id} className="mb-4 last:mb-0">
          <a href="/blog" className="flex justify-between items-center text-gray-400 hover:text-indigo-500">
              <span>{category.name}</span>
              <span>({category.count})</span>
          </a>
      </li>
        ))}
    </ul>
</div>
  );
};

export default CategoriesComponent;
