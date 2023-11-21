import axios from 'axios';

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
