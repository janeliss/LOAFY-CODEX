import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/science', label: 'Science' },
  { to: '/checkout', label: 'Checkout' },
];

export default function SiteHeader() {
  const { items, open } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/20 bg-brown/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-heading text-2xl lowercase">loafy</Link>
        <div className="flex items-center gap-4 text-sm">
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'text-coral' : 'text-cream/80')}>
              {item.label}
            </NavLink>
          ))}
          <button onClick={open} className="rounded-full bg-coral px-3 py-1 font-semibold text-brown">Cart ({count})</button>
        </div>
      </nav>
    </header>
  );
}
