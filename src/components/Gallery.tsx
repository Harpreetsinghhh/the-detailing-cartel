"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Lines, Photo, Reveal } from "./ui";
import { IMG } from "@/lib/config";
const T = [["g1", "Glossy black sports car under studio lighting", "md:col-span-2 md:row-span-2"], ["g2", "Paint protection film installation", ""], ["g3", "Close-up of polished automotive paint", ""], ["g4", "Professional machine polishing", "md:col-span-2"], ["g5", "Detailed alloy wheels", ""], ["g6", "Premium car inside a detailing studio", ""]] as const;
function Tile({ k, alt, c, i }: { k: string; alt: string; c: string; i: number }) {
  const r = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: r, offset: ["start end", "end start"] });
  const y = useTransform(p, [0, 1], [i % 2 ? "-9%" : "9%", i % 2 ? "9%" : "-9%"]);
  return (
    <motion.figure ref={r} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, delay: (i % 3) * 0.08 }} className={`group relative min-h-[240px] overflow-hidden border border-line ${c}`}>
      <motion.div style={{ y, scale: 1.2 }} className="absolute inset-0 transition-transform duration-700 group-hover:!scale-[1.28]"><Photo src={IMG[k]} alt={alt} className="size-full" sizes="(min-width:768px) 40vw, 100vw" /></motion.div>
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/50" />
      <ArrowUpRight className="absolute bottom-4 right-4 translate-y-3 text-neon opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
    </motion.figure>
  );
}
export function GallerySection() {
  return (
    <section id="work" className="section-space mx-auto max-w-[1320px] px-6">
      <div className="mb-10 max-w-xl"><span className="mb-4 block text-xs font-semibold uppercase tracking-[.2em] text-neon">The finish speaks</span><Lines lines={["Crafted to shine."]} className="text-[clamp(2.4rem,6vw,5.5rem)]" />
        <Reveal delay={0.2}><p className="mt-5 text-lg">Explore the details, finishes, and automotive craftsmanship behind premium vehicle care.</p></Reveal></div>
      <div className="grid grid-cols-2 auto-rows-[150px] gap-2.5 sm:auto-rows-[190px] md:grid-cols-4 md:auto-rows-[260px] md:gap-3">{T.map(([k, a, c], i) => <Tile key={k} k={k} alt={a} c={c} i={i} />)}</div>
      <p className="mt-4 text-sm text-mute">Illustrative imagery only — not completed projects by The Detailing Cartel.</p>
    </section>
  );
}
