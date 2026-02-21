import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

type CountUpProps = {
  value: number;
  suffix?: string;
};

export default function CountUp({ value, suffix = '' }: CountUpProps) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.8, ease: 'easeOut' });
    return () => controls.stop();
  }, [mv, value]);

  return <motion.span>{rounded}{suffix}</motion.span>;
}
