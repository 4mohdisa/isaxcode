import { useEffect } from 'react';

const useDynamicScript = (urls: any) => {
  useEffect(() => {
    // Create and append script elements for each URL
    const scripts = urls.map((url: string) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.head.appendChild(script);
      return script;
    });

    // Cleanup: remove all scripts on unmount
    return () => {
      scripts.forEach((script: any) => {
        document.head.removeChild(script);
      });
    };
  }, [urls]); // Dependency array ensures effect runs when URLs change
};

export default useDynamicScript;
