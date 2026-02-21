import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';

export default function Product() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const { addItem } = useCart();

  if (!product) return <main className="p-8">Not found.</main>;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: 'Loafy',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <SEO title={`${product.name} | Loafy`} description={product.description} schema={schema} />
      <h1 className="font-heading text-5xl">{product.name}</h1>
      <p className="mt-3 text-lg">{product.description}</p>
      <p className="mt-2 text-cream/90">high protein sourdough • high protein artisan bread • low sugar bread</p>

      <section className="mt-8 grid gap-6 rounded-2xl border border-cream/20 p-6 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl">Nutrition Facts</h2>
          <ul className="mt-3 space-y-2">
            <li>Protein: {product.macros.protein}g</li>
            <li>Sugar: {product.macros.sugar}g</li>
            <li>Fiber: {product.macros.fiber}g</li>
            <li>Calories: {product.macros.calories}</li>
          </ul>
          <button onClick={() => addItem(product.id)} className="mt-6 rounded-full bg-coral px-5 py-2 font-semibold text-brown">Add to cart — ${product.price}</button>
        </div>
        <div>
          <h2 className="font-heading text-2xl">Ingredients & Fermentation</h2>
          <p className="mt-2">{product.ingredients.join(', ')}</p>
          <p className="mt-3 text-cream/90">{product.fermentationProcess}</p>
          <div className="mt-4 flex gap-4 text-coral">
            <Link to="/science">Learn the science</Link>
            <Link to="/shop">Back to shop</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
