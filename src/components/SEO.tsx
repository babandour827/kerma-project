
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'KĒRMA Developments - Promoteur Immobilier d\'Excellence',
  description = 'Découvrez nos projets immobiliers d\'exception à Dakar. KĒRMA Developments crée des espaces de vie pensés pour votre confort et votre avenir.',
  keywords = 'immobilier, Dakar, Sénégal, promotion immobilière, appartements, investissement',
  image = '/lovable-uploads/8a248a4e-db11-46c5-aa58-42e802640f3c.png',
  url = 'https://kerma-developments.com',
  type = 'website'
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KĒRMA Developments",
      "description": description,
      "url": url,
      "logo": image,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service"
      }
    };

    let scriptTag = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
