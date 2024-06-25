import axios from 'axios';

// Define an interface for Author if you are using TypeScript
export interface Author {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    24: string;
    48: string;
    96: string;
  };
}

// Function to fetch all authors
export async function fetchAllAuthors(): Promise<Author[]> {
  try {
    const response = await axios.get('https://next.isaxcode.com/wp-json/wp/v2/users');
    const authors = response.data.map((author: any) => ({
      id: author.id,
      name: author.name,
      url: author.url,
      description: author.description,
      link: author.link,
      slug: author.slug,
      avatar_urls: author.avatar_urls,
    }));
    console.log('Fetched authors:', authors);
    return authors;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw new Error('Failed to fetch authors. Please try again later.');
  }
}

// Example usage of the fetchAllAuthors function
fetchAllAuthors()
  .then(authors => {
    console.log('Authors:', authors);
  })
  .catch(error => {
    console.error('Error:', error);
  });