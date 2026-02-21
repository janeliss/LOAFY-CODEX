import { Suspense, lazy, useEffect } from 'react';
import Lenis from 'lenis';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import SiteHeader from './components/SiteHeader';

const Home = lazy(() => import('./routes/Home'));
const Shop = lazy(() => import('./routes/Shop'));
const Product = lazy(() => import('./routes/Product'));
const Science = lazy(() => import('./routes/Science'));
const Checkout = lazy(() => import('./routes/Checkout'));

export default function App() {
  useEffect(() => {
    document.title = 'Loafy | High-Protein Sourdough Bread';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const lenis = new Lenis({ smoothWheel: true, duration: 1.1 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-brown text-cream font-body">
        <SiteHeader />
        <Suspense fallback={<div className="p-10">Preheating the oven...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/science" element={<Science />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
