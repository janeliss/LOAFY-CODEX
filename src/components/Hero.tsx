import { lazy, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import FlourParticles from './FlourParticles';

type Dust = { id: number; x: number; y: number };

const Toast3D = lazy(() => import('./Toast3D'));

export default function Hero() {
  const [dust, setDust] = useState<Dust[]>([]);

  const canWebGL = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
  }, []);

  const emitDust = (x: number, y: number) => {
    const id = Date.now() + Math.random();
    setDust((prev) => [...prev.slice(-24), { id, x, y }]);
    window.setTimeout(() => {
      setDust((prev) => prev.filter((item) => item.id !== id));
    }, 900);
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_15%_20%,#600F15_0%,#472F0B_45%,#2f1e07_100%)] px-6 py-16"
      onMouseMove={(event) => emitDust(event.clientX, event.clientY)}
    >
      <FlourParticles count={28} />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      {dust.map((particle) => (
        <span
          key={particle.id}
          className="pointer-events-none fixed h-2 w-2 animate-dust rounded-full bg-cream/70"
          style={{ left: particle.x, top: particle.y }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-heading text-6xl lowercase text-cream md:text-8xl">
            loafy
          </motion.p>
          <h1 className="mt-6 font-heading text-4xl leading-tight md:text-5xl">Where Real Sourdough Meets Real Protein.</h1>
          <p className="mt-4 max-w-xl text-cream/90">Fermented the right way. Fueled the smart way.</p>
          <motion.a
            href="#fermentation"
            whileHover={{ boxShadow: '0 0 30px rgba(255, 153, 153, 0.55)' }}
            className="mt-8 inline-block rounded-full bg-coral px-7 py-3 font-semibold text-brown"
          >
            Enter the Oven
          </motion.a>
          <div className="mt-6 h-2 w-44 overflow-hidden rounded-full bg-cream/20">
            <motion.div className="h-full rounded-full bg-coral" animate={{ width: ['12%', '80%', '35%'] }} transition={{ duration: 5, repeat: Infinity }} />
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute -inset-8 rounded-full bg-coral/25 blur-3xl"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          {canWebGL ? <Toast3D /> : <div className="h-[380px] rounded-3xl border border-cream/20 bg-gradient-to-br from-coral/40 to-cream/20" />}
        </div>
      </div>
    </section>
  );
}
