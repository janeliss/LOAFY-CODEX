import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { products } from '../data/products';
import { useReveal } from '../hooks/useReveal';
import { useCart } from '../hooks/useCart';
import EasterEgg from '../components/EasterEgg';
import CountUp from '../components/CountUp';

const ProductModal = lazy(() => import('../components/ProductModal'));

export default function Home() {
  const [showDiff, setShowDiff] = useState(false);
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const { addItem } = useCart();

  const fermentation = useReveal<HTMLElement>();
  const texture = useReveal<HTMLElement>();

  return (
    <main>
      <SEO title="Loafy | High-Protein Sourdough Bread" description="Real sourdough. Naturally fermented. High in protein. Soft, flavorful, and functional." />
      <Hero />

      <section id="fermentation" ref={fermentation.ref} className="bg-cream px-6 py-24 text-brown">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={fermentation.isVisible ? { opacity: 1, y: 0 } : {}} className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl">72-Hour Natural Fermentation.</h2>
            <ul className="mt-4 space-y-2 text-lg">
              <li>• Better digestion</li>
              <li>• Lower glycemic response</li>
              <li>• Real flavor</li>
            </ul>
          </div>
          <div>
            <p className="leading-relaxed">Loafy uses natural starter cultures instead of accelerated commercial yeast schedules. This naturally fermented bread process supports a more gut friendly bread experience with artisan flavor complexity.</p>
            <Link to="/science" className="mt-6 inline-block rounded-full bg-brown px-5 py-2 text-cream">Learn Why It Matters</Link>
          </div>
        </motion.div>
      </section>

      <section className="bg-olive px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl">Bread That Actually Fuels You.</h2>
          <button onClick={() => setShowDiff((v) => !v)} className="mt-5 rounded-full bg-coral px-5 py-2 font-semibold text-brown">See the Difference</button>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { label: 'Protein', loafy: 15, regular: 4 },
              { label: 'Sugar', loafy: 2, regular: 6 },
              { label: 'Fiber', loafy: 5, regular: 1 },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl bg-cream/10 p-5">
                <p className="text-sm uppercase tracking-wider">{metric.label}</p>
                <p className="mt-2 text-lg">Loafy: <span className="font-heading text-4xl"><CountUp value={showDiff ? metric.loafy : 0} suffix="g" /></span></p>
                <p className="text-cream/80">Traditional: <CountUp value={showDiff ? metric.regular : 0} suffix="g" /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={texture.ref} className="bg-brown px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl">High Protein. Still Soft.</h2>
          <p className="mt-4">Most protein breads sacrifice texture. We refused.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div key={item} initial={{ scale: 0.94, opacity: 0.2 }} animate={texture.isVisible ? { scale: 1, opacity: 1 } : {}} transition={{ delay: item * 0.08 }} className="h-44 rounded-2xl bg-gradient-to-br from-cream/10 to-coral/30" />
            ))}
          </div>
          <Link to="/science" className="mt-6 inline-block text-coral">See How We Did It</Link>
        </div>
      </section>

      <section className="bg-sky px-6 py-24 text-brown">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-4xl">Social Proof Constellation</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['Best protein bread I’ve ever tasted.', 'Finally a bread that doesn’t feel fake.', 'My digestion is so much better.'].map((quote, index) => (
              <article key={quote} className="rounded-2xl bg-cream p-5 shadow-xl" style={{ transform: `translateY(${index % 2 === 0 ? '-8px' : '8px'})` }}>
                {quote}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 text-brown">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl">The Product Portal</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="rounded-2xl border border-brown/20 bg-white p-5 shadow-sm">
                <div className="h-36 rounded-xl" style={{ background: product.images[0] }} />
                <h3 className="mt-4 font-heading text-2xl">{product.name}</h3>
                <p className="text-sm">Protein {product.macros.protein}g · Sugar {product.macros.sugar}g · Fiber {product.macros.fiber}g</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setSelected(product)} className="rounded-full border border-brown px-4 py-1">View Loaf</button>
                  <button onClick={() => addItem(product.id)} className="rounded-full bg-brown px-4 py-1 text-cream">Add</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-redAccent to-brown px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl">The Science Behind Loafy.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {['Is Sourdough Actually Healthier?', 'How Protein Impacts Blood Sugar', 'Why Fermentation Matters'].map((post) => (
              <Link key={post} to="/science" className="rounded-xl bg-cream/10 p-4">{post}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-olive to-brown px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-4xl">Join the Loaf Club.</h2>
          <p className="mt-3">Early access. Recipes. Nutrition guides.</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => {
            event.preventDefault();
            setStatus(/\S+@\S+\.\S+/.test(email) ? 'ok' : 'error');
          }}>
            <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="flex-1 rounded-full px-4 py-3 text-brown" />
            <button className="rounded-full bg-coral px-6 py-3 font-semibold text-brown shadow-glow transition hover:brightness-105">Get Fresh Drops</button>
          </form>
          {status === 'ok' && <p className="mt-3 text-cream">You’re in the inner circle.</p>}
          {status === 'error' && <p className="mt-3 text-coral">Please enter a valid email.</p>}
        </div>
      </section>

      <footer className="bg-brown px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-heading text-2xl">loafy</p>
            <p className="text-xs text-cream/70">Rooted & Real</p>
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/science">Science</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/science">Recipes</Link>
            <a href="mailto:hello@loafy.com">Contact</a>
          </div>
          <p>🌾</p>
        </div>
      </footer>

      <Suspense fallback={null}>
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      </Suspense>
      <EasterEgg />
    </main>
  );
}
