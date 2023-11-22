import axios from 'axios';
import { BlogPost } from './fetchBlogPost';
import { formatDate } from './formatDate';

// Define an interface for Category if you are using TypeScript
export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  // Add any other relevant fields you need
}

export async function fetchAllCategories(): Promise<Category[]> {
  try {
    const response = await axios.get('https://wp.isaxcode.com/wp-json/wp/v2/categories');
    return response.data.map((category: any) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      count: category.count,
      // Map other fields as needed
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return []; // Return an empty array in case of an error
  }
}

export async function fetchPostsByCategory(categoryId: number): Promise<BlogPost[]> {
  try {
    const response = await axios.get(`https://wp.isaxcode.com/wp-json/wp/v2/posts?categories=${categoryId}`);
    const posts = response.data;

    return posts.map((post: any) => {
      const imageMatch = post.content.rendered.match(/<img.*?src=["'](.*?)["']/); // Regex to find the first image
      const featuredImage = imageMatch ? imageMatch[1] : ''; // Extract the image URL

      return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        publishedDate: formatDate(post.date),
        featuredImage,
      };
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return an empty array in case of an error
  }
}


