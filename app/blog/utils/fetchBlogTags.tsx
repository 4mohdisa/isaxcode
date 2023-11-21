import axios from 'axios';

// Define an interface for Tag if you are using TypeScript
export interface Tag {
  id: number;
  name: string;
  slug: string;
  // Add any other relevant fields you need
}

export async function fetchAllTags(): Promise<Tag[]> {
  try {
    const response = await axios.get('https://wp.isaxcode.com/wp-json/wp/v2/tags');
    return response.data.map((tag: any) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      // Map other fields as needed
    }));
  } catch (error) {
    console.error('Error fetching tags:', error);
    return []; // Return an empty array in case of an error
  }
}
