import { useState, useEffect } from 'react';
import { BlogPost, fetchBlogPostBySlug } from '../utils/fetchBlogPost';
import setMetaTags from './setMetaTags';


export const useFetchBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPost = await fetchBlogPostBySlug(slug);
        setPost(fetchedPost);

        if (fetchedPost) {
          setMetaTags(fetchedPost);
        }
      } catch (err) {
        setError('Failed to fetch the blog post.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  return { post, loading, error };
};
