import axios from 'axios';
import decodeHtmlEntities from './decodeHTML';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;
  content: string;
  publishedDate: string;
  publishedDateGmt: string;
  modifiedDate: string;
  modifiedDateGmt: string;
  excerpt: string;
  link: string;
  author: string;
  categories: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Fetch all categories
export async function fetchAllCategories(): Promise<Category[]> {
  try {
    const response = await axios.get('https://next.isaxcode.com/wp-json/wp/v2/categories');
    return response.data.map((category: any) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      count: category.count,
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return []; // Return an empty array in case of an error
  }
}

function formatDate(publishedDate: string | number | Date) {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  const date = new Date(publishedDate);
  return date.toLocaleDateString('en-US', options);
}

// Fetch posts by category
export async function fetchPostsByCategory(categoryId: number): Promise<BlogPost[]> {
  try {
    const response = await axios.get(`https://next.isaxcode.com/wp-json/wp/v2/posts?categories=${categoryId}`);
    const posts = response.data;

    const categories = await fetchAllCategories();

    return await Promise.all(posts.map(async (post: any) => {
      let featuredImage = '';
      if (post._links && post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'][0]) {
        const mediaUrl = post._links['wp:featuredmedia'][0].href;
        try {
          const mediaResponse = await axios.get(mediaUrl);
          featuredImage = mediaResponse.data.guid.rendered;
        } catch (error) {
          console.error(`Error fetching featured image for post ${post.id}:`, error);
        }
      }

      let author = '';
      if (post._links && post._links.author && post._links.author[0]) {
        const authorUrl = post._links.author[0].href;
        try {
          const authorResponse = await axios.get(authorUrl);
          author = authorResponse.data.name;
          console.log(`Fetched author for post ${post.id}: ${author}`);
        } catch (error) {
          console.error(`Error fetching author for post ${post.id}:`, error);
        }
      }

      const postCategories = post.categories.map((categoryId: number) => {
        const category = categories.find((cat: Category) => cat.id === categoryId);
        return category ? category.name : '';
      });
      console.log(`Fetched categories for post ${post.id}: ${postCategories.join(', ')}`);

      const imageMatch = post.content.rendered.match(/<img.*?src=["'](.*?)["']/);
      const contentImage = imageMatch ? imageMatch[1] : '';

      const metaDescription = post.rank_math_description 
        ? decodeHtmlEntities(post.rank_math_description)
        : decodeHtmlEntities(post.excerpt.rendered.replace(/<\/?p>/g, ''));

      return {
        id: post.id,
        slug: post.slug,
        title: decodeHtmlEntities(post.title.rendered),
        content: decodeHtmlEntities(post.content.rendered),
        publishedDate: formatDate(post.date),
        publishedDateGmt: post.date_gmt,
        modifiedDate: post.modified,
        modifiedDateGmt: post.modified_gmt,
        featuredImage: featuredImage || contentImage,
        excerpt: metaDescription,
        link: post.link,
        author,
        categories: postCategories,
      };
    }));
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return []; // Return an empty array in case of an error
  }
}

// Fetch all blog slugs
export async function fetchAllBlogSlugs(): Promise<string[]> {
  try {
    const response = await axios.get('https://next.isaxcode.com/index.php?rest_route=/wp/v2/posts');
    const posts = response.data;
    return posts.map((post: { slug: string }) => post.slug);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    throw new Error('Failed to fetch blog slugs. Please try again later.');
  }
}

// Fetch all blog posts
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const [postsResponse, categories] = await Promise.all([
      axios.get('https://next.isaxcode.com/wp-json/wp/v2/posts/?per_page=100'),
      fetchAllCategories()
    ]);

    const posts = postsResponse.data;

    return await Promise.all(posts.map(async (post: any) => {
      let featuredImage = '';
      if (post._links && post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'][0]) {
        const mediaUrl = post._links['wp:featuredmedia'][0].href;
        try {
          const mediaResponse = await axios.get(mediaUrl);
          featuredImage = mediaResponse.data.guid.rendered;
        } catch (error) {
          console.error(`Error fetching featured image for post ${post.id}:`, error);
        }
      }

      let author = '';
      if (post._links && post._links.author && post._links.author[0]) {
        const authorUrl = post._links.author[0].href;
        try {
          const authorResponse = await axios.get(authorUrl);
          author = authorResponse.data.name;
          console.log(`Fetched author for post ${post.id}: ${author}`);
        } catch (error) {
          console.error(`Error fetching author for post ${post.id}:`, error);
        }
      }

      const postCategories = post.categories.map((categoryId: number) => {
        const category = categories.find((cat: Category) => cat.id === categoryId);
        return category ? category.name : '';
      });
      console.log(`Fetched categories for post ${post.id}: ${postCategories.join(', ')}`);

      const imageMatch = post.content.rendered.match(/<img.*?src=["'](.*?)["']/);
      const contentImage = imageMatch ? imageMatch[1] : '';

      const metaDescription = post.rank_math_description 
        ? decodeHtmlEntities(post.rank_math_description)
        : decodeHtmlEntities(post.excerpt.rendered.replace(/<\/?p>/g, ''));

      return {
        id: post.id,
        slug: post.slug,
        title: decodeHtmlEntities(post.title.rendered),
        content: decodeHtmlEntities(post.content.rendered),
        publishedDate: formatDate(post.date),
        publishedDateGmt: post.date_gmt,
        modifiedDate: post.modified,
        modifiedDateGmt: post.modified_gmt,
        featuredImage: featuredImage || contentImage,
        excerpt: metaDescription,
        link: post.link,
        author,
        categories: postCategories,
      };
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw new Error('Failed to fetch blog posts. Please try again later.');
  }
}

// Fetch blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  console.log("Fetching post for slug:", slug);
  try {
    const response = await axios.get(`https://next.isaxcode.com/wp-json/wp/v2/posts?slug=${slug}`);
    const post = response.data[0];

    if (!post) return null;

    let featuredImage = '';
    if (post._links && post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'][0]) {
      const mediaUrl = post._links['wp:featuredmedia'][0].href;
      try {
        const mediaResponse = await axios.get(mediaUrl);
        featuredImage = mediaResponse.data.guid.rendered;
      } catch (error) {
        console.error(`Error fetching featured image for post ${post.id}:`, error);
      }
    }

    let author = '';
    if (post._links && post._links.author && post._links.author[0]) {
      const authorUrl = post._links.author[0].href;
      console.log(authorUrl)
      try {
        const authorResponse = await axios.get(authorUrl);
        author = authorResponse.data.name;
        console.log(`Fetched author for post ${post.id}: ${author}`);
      } catch (error) {
        console.error(`Error fetching author for post ${post.id}:`, error);
      }
    }

    let categories: string[] = [];
    if (post.categories && post.categories.length > 0) {
      try {
        const categoryPromises = post.categories.map(async (categoryId: number) => {
          const categoryUrl = `https://next.isaxcode.com/wp-json/wp/v2/categories/${categoryId}`;
          const categoryResponse = await axios.get(categoryUrl);
          return categoryResponse.data.name;
        });
        categories = await Promise.all(categoryPromises);
        console.log(`Fetched categories for post ${post.id}: ${categories.join(', ')}`);
      } catch (error) {
        console.error(`Error fetching categories for post ${post.id}:`, error);
      }
    }

    const imageMatch = post.content.rendered.match(/<img.*?src=["'](.*?)["']/);
    const contentImage = imageMatch ? imageMatch[1] : '';

    const rawExcerpt = post.excerpt.rendered || '';
    const excerpt = post.rank_math_description
      ? decodeHtmlEntities(post.rank_math_description)
      : decodeHtmlEntities(rawExcerpt.replace(/<\/?p>/g, ''));

    return {
      id: post.id,
      slug: post.slug,
      title: decodeHtmlEntities(post.title.rendered),
      content: decodeHtmlEntities(post.content.rendered),
      publishedDate: post.date,
      publishedDateGmt: post.date_gmt,
      modifiedDate: post.modified,
      modifiedDateGmt: post.modified_gmt,
      featuredImage: featuredImage || contentImage,
      excerpt: excerpt,
      link: post.link,
      author,
      categories,
    };
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    throw new Error(`Failed to fetch blog post with slug "${slug}". Please try again later.`);
  }
}

// Fetch posts by search query
export async function fetchPostsBySearchQuery(query: string): Promise<BlogPost[]> {
  try {
    const response = await axios.get(`https://next.isaxcode.com/wp-json/wp/v2/posts?search=${query}`);
    const posts = response.data;

    const categories = await fetchAllCategories();

    return await Promise.all(posts.map(async (post: any) => {
      let featuredImage = '';
      if (post._links && post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'][0]) {
        const mediaUrl = post._links['wp:featuredmedia'][0].href;
        try {
          const mediaResponse = await axios.get(mediaUrl);
          featuredImage = mediaResponse.data.guid.rendered;
        } catch (error) {
          console.error(`Error fetching featured image for post ${post.id}:`, error);
        }
      }

      let author = '';
      if (post._links && post._links.author && post._links.author[0]) {
        const authorUrl = post._links.author[0].href;
        try {
          const authorResponse = await axios.get(authorUrl);
          author = authorResponse.data.name;
          console.log(`Fetched author for post ${post.id}: ${author}`);
        } catch (error) {
          console.error(`Error fetching author for post ${post.id}:`, error);
        }
      }

      const postCategories = post.categories.map((categoryId: number) => {
        const category = categories.find((cat: Category) => cat.id === categoryId);
        return category ? category.name : '';
      });
      console.log(`Fetched categories for post ${post.id}: ${postCategories.join(', ')}`);

      const imageMatch = post.content.rendered.match(/<img.*?src=["'](.*?)["']/);
      const contentImage = imageMatch ? imageMatch[1] : '';

      const metaDescription = post.rank_math_description 
        ? decodeHtmlEntities(post.rank_math_description)
        : decodeHtmlEntities(post.excerpt.rendered.replace(/<\/?p>/g, ''));

      return {
        id: post.id,
        slug: post.slug,
        title: decodeHtmlEntities(post.title.rendered),
        content: decodeHtmlEntities(post.content.rendered),
        publishedDate: formatDate(post.date),
        publishedDateGmt: post.date_gmt,
        modifiedDate: post.modified,
        modifiedDateGmt: post.modified_gmt,
        featuredImage: featuredImage || contentImage,
        excerpt: metaDescription,
        link: post.link,
        author,
        categories: postCategories,
      };
    }));
  } catch (error) {
    console.error('Error searching posts:', error);
    throw new Error('Failed to search posts. Please try again later.');
  }
}
