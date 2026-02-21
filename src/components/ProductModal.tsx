import { AnimatePresence, motion } from 'framer-motion';
import type { Product } from '../data/products';
import { useCart } from '../hooks/useCart';

type Props = { product: Product | null; onClose: () => void };

export default function ProductModal({ product, onClose }: Props) {
  const { addItem } = useCart();

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div className="fixed inset-0 z-40 bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-cream p-8 text-brown shadow-2xl">
            <h3 className="font-heading text-3xl">{product.name}</h3>
            <p className="mt-2">{product.description}</p>
            <p className="mt-4 text-sm">{product.fermentationProcess}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>Protein: {product.macros.protein}g</div><div>Sugar: {product.macros.sugar}g</div>
              <div>Fiber: {product.macros.fiber}g</div><div>Calories: {product.macros.calories}</div>
            </div>
            <p className="mt-4 text-sm">Ingredients: {product.ingredients.join(', ')}</p>
            <button onClick={() => addItem(product.id)} className="mt-6 rounded-full bg-coral px-5 py-2 font-semibold text-brown">Add to cart — ${product.price}</button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
