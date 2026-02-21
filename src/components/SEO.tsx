import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  schema?: object | object[];
};

export default function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector("meta[name='description']");
    if (meta) meta.setAttribute('content', description);

    const id = 'loafy-schema';
    const old = document.getElementById(id);
    if (old) old.remove();
    if (schema) {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => {
      const script = document.getElementById(id);
      if (script) script.remove();
    };
  }, [title, description, schema]);

  return null;
}
