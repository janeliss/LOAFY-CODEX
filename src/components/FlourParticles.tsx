import { useMemo } from 'react';

type FlourParticlesProps = {
  count?: number;
};

export default function FlourParticles({ count = 20 }: FlourParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 8,
        size: 2 + Math.random() * 4,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-cream/60"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            animation: `floatUp ${particle.duration}s linear ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
