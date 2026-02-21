import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { products } from '../data/products';

export default function Shop() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <SEO title="Shop | Loafy" description="Browse Loafy high protein artisan bread loaves." />
      <h1 className="font-heading text-5xl">Shop Loafy</h1>
      <p className="mt-3 max-w-3xl">Choose your naturally fermented bread lineup. Each loaf is crafted as protein bread that tastes good with balanced macros.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="rounded-2xl border border-cream/20 p-5">
            <div className="h-36 rounded-xl" style={{ background: product.images[0] }} />
            <h2 className="mt-4 font-heading text-2xl">{product.name}</h2>
            <p>{product.description}</p>
            <div className="mt-4 flex gap-4 text-coral">
              <Link to={`/product/${product.slug}`}>View Product</Link>
              <Link to="/science">Read Science</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
