import { useEffect, useState } from 'react';

export default function EasterEgg() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let sequence = '';
    const onKey = (event: KeyboardEvent) => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 120;
      if (!nearBottom) return;
      sequence = (sequence + event.key.toLowerCase()).slice(-4);
      if (sequence === 'loaf') setShow(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-cream p-3 text-brown shadow-xl animate-bounceTiny">
      <p>🥖 Tiny loaf unlocked!</p>
      <button className="text-xs text-redAccent" onClick={() => setShow(false)}>dismiss</button>
    </div>
  );
}
