"use client";
import { motion, useReducedMotion } from "framer-motion";
export function HeroArt() {
  const r = useReducedMotion();
  const f = (d: number) => r ? {} : { animate: { y: [0, -10, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: d } };
  return (<svg viewBox="0 0 480 420" role="img" aria-label="Abstract illustration of a browser window, a chart and a checkmark" className="h-auto w-full">
    <motion.g {...f(0)}><rect x="60" y="60" width="300" height="210" rx="18" fill="#111" /><rect x="60" y="60" width="300" height="34" rx="18" fill="#222" />
      {[0, 1, 2].map((i) => <circle key={i} cx={82 + i * 16} cy="77" r="4" fill={i === 0 ? "#2166D0" : "#555"} />)}
      <rect x="84" y="118" width="150" height="12" rx="6" fill="#2166D0" /><rect x="84" y="144" width="220" height="8" rx="4" fill="#444" /><rect x="84" y="162" width="190" height="8" rx="4" fill="#444" /><rect x="84" y="196" width="90" height="28" rx="14" fill="#2166D0" /></motion.g>
    <motion.g {...f(1.2)}><rect x="270" y="210" width="160" height="110" rx="16" fill="#fff" stroke="#E5E5E5" />
      {[40, 64, 52, 84].map((h, i) => <rect key={i} x={290 + i *32} y={300 - h} width="18" height={h} rx="5" fill={i === 3 ? "#2166D0" : "#D4D4D4"} />)}</motion.g>
    <motion.g {...f(2.4)}><circle cx="110" cy="330" r="44" fill="#2166D0" opacity=".12" /><circle cx="110" cy="330" r="24" fill="none" stroke="#2166D0" strokeWidth="3" /><path d="M100 330l8 8 14-16" fill="none" stroke="#2166D0" strokeWidth="3" strokeLinecap="round" /></motion.g>
  </svg>);
}
