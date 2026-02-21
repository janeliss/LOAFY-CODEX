import SEO from '../components/SEO';
import { buildCheckoutPayload } from '../data/products';
import { useCart } from '../hooks/useCart';

export default function Checkout() {
  const { items, total } = useCart();
  const payload = buildCheckoutPayload(items);

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <SEO title="Checkout | Loafy" description="Checkout placeholder for Loafy secure purchase flow." />
      <h1 className="font-heading text-5xl">Checkout (Placeholder)</h1>
      <p className="mt-3">Stripe-ready payload prepared on client. No secret keys included.</p>
      <p className="mt-4">Order total: ${total.toFixed(2)}</p>
      <pre className="mt-6 overflow-x-auto rounded-xl bg-black/30 p-4 text-xs">{JSON.stringify(payload, null, 2)}</pre>
    </main>
  );
}
