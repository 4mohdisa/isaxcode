import { fetchBlogPostBySlug } from "./fetchBlogPost";

export async function generateMetadata({
    params,
  }: {
    params: {
      slug: string;
    };
  }) {
    try {
      const post = await fetchBlogPostBySlug(params.slug);
      if (!post)
        return {
          title: "Not Found",
          description: "The page you are looking for does not exist.",
        };
        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content, 'text/html');
        const firstParagraph = doc.querySelector('p');
    
        // Ensure that firstParagraph is not null before accessing textContent
        let description = '';
        if (firstParagraph && firstParagraph.textContent) {
          description = firstParagraph.textContent.trim();
        }
  
        return {
            title: post.title,
            description: description || 'No description available',
            alternates: {
              canonical: `/post/${post.slug}`,
            },
          };
    } catch (error) {
      console.error(error);
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }
  }