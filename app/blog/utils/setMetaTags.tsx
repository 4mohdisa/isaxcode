import { BlogPost } from './fetchBlogPost';

function decodeHtmlEntities(str: string): string {
    return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
      const num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    }).replace(/&[a-z]+;/gi, function(match) {
      const translate_re = /&(nbsp|amp|quot|lt|gt);/g;
      const translate: { [key: string]: string } = { // Add index signature to the translate object
        'nbsp': ' ',
        'amp': '&',
        'quot': '"',
        'lt': '<',
        'gt': '>',
        '&#8211;': '–',
      };
      return translate[match.substring(1, match.length - 1)];
    });
  }
// Utility function to set or update a meta tag
const setOrUpdateMetaTag = (attrName: string, attrValue: string, content: string) => {
    let metaTag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (metaTag) {
      metaTag.setAttribute('content', content);
    } else {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attrName, attrValue);
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  };
  const setMetaTags = (post: BlogPost) => {
    const siteName = 'IsaxCode.com';
    const twitterHandle = '@4mohdisa';
    const keywords = 'AI News, Software Development, website development, LLM development, AI development';
    const canonicalUrl = `https://isaxcode.com/blog/${post.slug}`;
    const articlePublisher = 'Mohammed Isa';
    const ThemeColors = '#000000, #ffffff';
  
    const author = post.author || "Mohammed Isa";
    const title = decodeHtmlEntities(post.title);
    const description = post.excerpt;
    const url = post.link;
    const image = post.featuredImage;
    const publishedDate = post.publishedDate;
    const modifiedDate = post.modifiedDate;
  
    // Set the document title
    document.title = title;
  
    // Set the meta tags
    setOrUpdateMetaTag('name', 'description', description);
    setOrUpdateMetaTag('name', 'keywords', keywords);
    setOrUpdateMetaTag('name', 'theme-color', ThemeColors);
    setOrUpdateMetaTag('name', 'robots', '');
    setOrUpdateMetaTag('property', 'og:site_name', siteName);
    setOrUpdateMetaTag('property', 'og:title', title);
    setOrUpdateMetaTag('property', 'og:description', description);
    setOrUpdateMetaTag('property', 'og:type', 'article');
    setOrUpdateMetaTag('property', 'og:url', url);
    setOrUpdateMetaTag('property', 'og:image', image);
    setOrUpdateMetaTag('property', 'og:image:alt', title);
    setOrUpdateMetaTag('property', 'og:locale', 'en');
    setOrUpdateMetaTag('property', 'article:publisher', articlePublisher);
    setOrUpdateMetaTag('property', 'article:published_time', publishedDate);
    setOrUpdateMetaTag('property', 'article:modified_time', modifiedDate);
    setOrUpdateMetaTag('property', 'article:author', author);
    setOrUpdateMetaTag('name', 'twitter:card', 'summary_large_image');
    setOrUpdateMetaTag('name', 'twitter:title', title);
    setOrUpdateMetaTag('name', 'twitter:description', description);
    setOrUpdateMetaTag('name', 'twitter:url', url);
    setOrUpdateMetaTag('name', 'twitter:image', image);
    setOrUpdateMetaTag('name', 'twitter:site', twitterHandle);
    setOrUpdateMetaTag('name', 'twitter:creator', twitterHandle);
  
    // Set canonical link
    let linkTag = document.querySelector('link[rel="canonical"]');
    if (linkTag) {
      linkTag.setAttribute('href', canonicalUrl);
    } else {
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', 'canonical');
      linkTag.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkTag);
    }
  };
  
  export default setMetaTags;
