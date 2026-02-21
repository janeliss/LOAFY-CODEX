import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';

export default function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQuantity, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 z-40 bg-black/40" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-cream p-6 text-brown">
            <h3 className="font-heading text-2xl">Your Loaves</h3>
            <div className="mt-4 space-y-3">
              {items.length === 0 && <p>Your basket is empty.</p>}
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id);
                if (!product) return null;
                return (
                  <div key={item.id} className="rounded-xl border border-brown/20 p-3">
                    <p className="font-semibold">{product.name}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="ml-auto text-redAccent" onClick={() => removeItem(item.id)}>remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 font-semibold">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" onClick={close} className="mt-4 inline-block rounded-full bg-brown px-5 py-2 text-cream">Checkout</Link>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
