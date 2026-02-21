import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { products } from '../data/products';

const posts = [
  { title: 'Is Sourdough Actually Healthier?', slug: 'is-sourdough-healthier' },
  { title: 'How Protein Impacts Blood Sugar', slug: 'protein-blood-sugar' },
  { title: 'Why Fermentation Matters', slug: 'why-fermentation-matters' },
];

const faqs = [
  {
    q: 'Is Loafy a gut friendly bread?',
    a: 'Yes. The 72-hour natural fermentation process helps break down difficult compounds and supports digestibility.',
  },
  {
    q: 'Is this protein bread that tastes good?',
    a: 'Loafy focuses on soft crumb and real sourdough flavor, while boosting protein and fiber with low sugar balance.',
  },
];

export default function Science() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    ...posts.map((post) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      author: { '@type': 'Organization', name: 'Loafy' },
    })),
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SEO title="Science | Loafy" description="Learn the science of naturally fermented high protein sourdough." schema={schema} />
      <h1 className="font-heading text-5xl">The Science Behind Loafy</h1>
      <p className="mt-4">Our high protein sourdough strategy blends artisan fermentation, blood sugar-aware nutrition, and texture engineering.</p>

      <section className="mt-12 space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-cream/20 p-4">
            <h2 className="font-heading text-2xl">{post.title}</h2>
            <p className="mt-1 text-cream/90">Educational preview article linked to products and shop journeys.</p>
            <div className="mt-3 flex gap-4 text-coral">
              <Link to="/shop">Shop Loaves</Link>
              <Link to={`/product/${products[0].slug}`}>View Product</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-3xl">FAQ</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-cream/20 p-4">
              <summary className="cursor-pointer font-semibold">{faq.q}</summary>
              <p className="mt-2 text-cream/90">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
