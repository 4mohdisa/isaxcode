import axios from 'axios';


// Updated interface to include the featured image URL
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;  // URL of the first image
  content: string;
  publishedDate: string;
  
}

function formatDate(publishedDate: string | number | Date) {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: '2-digit' };
  const date = new Date(publishedDate);
  return date.toLocaleDateString('en-US', options);
}


export async function fetchAllBlogSlugs(): Promise<BlogPost[]> {
  try {
    const response = await axios.get('https://wp.isaxcode.com/index.php?rest_route=/wp/v2/posts');
    const posts = response.data;
    return posts.map((post: { slug: any; }) => post.slug); // Ensure post.slug is a string
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await axios.get('https://wp.isaxcode.com/index.php?rest_route=/wp/v2/posts');
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
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

  export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    console.log("Fetching post for slug:", slug);
    try {
      const response = await axios.get(`https://wp.isaxcode.com/wp-json/wp/v2/posts?slug=${slug}`);
      const post = response.data[0]; // Assuming the API returns an array
  
      if (!post) return null;
  
      // Assuming the featured image URL is directly available or processed similarly
      const featuredImage = post.featured_media ? 'URL to the featured image' : ''; 
  
      return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        content: post.content.rendered,
        publishedDate: formatDate(post.date),
        featuredImage,
      };
    } catch (error) {
      console.error('Error fetching blog post by slug:', error);
      return null;
    }
  }

  export async function fetchPostsBySearchQuery(query: string): Promise<BlogPost[]> {
    try {
      const response = await axios.get(`https://wp.isaxcode.com/wp-json/wp/v2/posts?search=${query}`);
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
      console.error('Error searching posts:', error);
      return []; // Return an empty array in case of an error
    }
  }
  
  