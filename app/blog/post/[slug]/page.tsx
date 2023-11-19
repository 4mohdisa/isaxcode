import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BlogPost, fetchBlogPostBySlug } from '../../utils/fetchBlogPost'; // Adjust the path as needed

const SingleBlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (typeof slug === 'string') {
      fetchBlogPostBySlug(slug).then((data) => {
        setPost(data);
      });
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-lg mb-4">Published on: {post.publishedDate}</div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default SingleBlogPost;
