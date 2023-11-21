import React, { useEffect, useState } from 'react';
import { Tag, fetchAllTags } from '../utils/fetchBlogTags';

const TagsComponent = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    fetchAllTags().then(fetchedTags => {
      setTags(fetchedTags);
    });
  }, []);

  return (
    <div className="single-widgets bg-cover bg-no-repeat border border-gray-800/10 p-8 rounded-md" style={{ backgroundImage: "url('../img/home-4/pricing-bg-3.png')" }}>
      <div className="widget-title mb-6 border-b border-gray-800/10">
        <h4 className="text-2xl font-medium text-indigo-600 pb-1">All Tag</h4>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map(tag => (
          <a key={tag.id} href={`/blog?tag=${tag.slug}`} className="text-white hover:text-indigo-500 border border-gray-800/10 px-3 py-1 rounded-md">{tag.name}</a>
        ))}
      </div>
    </div>
  );
};

export default TagsComponent;
