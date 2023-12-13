import { fetchBlogPostBySlug } from "./fetchBlogPost";

export async function generateMetadata({ params,
}: {
  params: {
    slug: string;
  };
}) {
  try {
    const post = await fetchBlogPostBySlug(params.slug);
    if (!post) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, 'text/html');
    const paragraphs = Array.from(doc.querySelectorAll('p')); // Convert NodeList to Array

    let description = '';

    for (const paragraph of paragraphs) {
      const textContent = paragraph.textContent?.trim();
      if (textContent) {
        description = textContent;
        break; // Exit the loop once text content is found
      }
    }

    if (!description) {
      description = 'No description available'; // Fallback if no content is found
    }

    return {
      title: post.title,
      description,
      alternates: {
        canonical: `/post/${post.slug}`,
      },
    };
  } catch (error) {
    console.error("Error in generateMetadata:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching the post.",
    };
  }
}
