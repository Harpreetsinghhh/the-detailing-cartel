"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Lines, Photo, Reveal } from "./ui";
import { IMG, SERVICES } from "@/lib/config";
export function ServicesSection() {
  const [a, setA] = useState(0);
  return (
    <section id="services" className="section-space mx-auto max-w-[1320px] px-6">
      <div className="mb-12 max-w-2xl"><span className="mb-4 block text-xs font-semibold uppercase tracking-[.2em] text-neon">Our expertise</span>
        <Lines lines={["Precision care.", "Premium protection."]} className="text-[clamp(2.4rem,6vw,5.5rem)]" />
        <Reveal delay={0.3}><p className="mt-5 text-lg">Comprehensive detailing solutions for those who expect more from their vehicles.</p></Reveal></div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
        <ul className="border-t border-line">
          {SERVICES.map(([t, d], i) => (
            <li key={t} className="border-b border-line">
              <button onMouseEnter={() => setA(i)} onFocus={() => setA(i)} onClick={() => setA(i)} aria-expanded={a === i} className="group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left">
                <span className={`display text-[clamp(1.35rem,2.6vw,2.2rem)] !leading-none transition-colors duration-300 ${a === i ? "!text-neon" : "!text-white/45 group-hover:!text-white"}`}>{t}</span>
                <ArrowUpRight className={`shrink-0 transition-all duration-300 ${a === i ? "rotate-0 text-neon" : "-rotate-45 text-mute"}`} />
              </button>
              <motion.div initial={false} animate={{ height: a === i ? "auto" : 0, opacity: a === i ? 1 : 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                <p className="max-w-lg pb-6 text-[15px]">{d}</p>
                <div className="relative mb-6 aspect-[16/10] lg:hidden"><Photo src={IMG[SERVICES[i][2]]} alt={t} className="size-full" sizes="90vw" /></div>
              </motion.div>
            </li>))}
        </ul>
        <div className="sticky top-28 hidden aspect-[4/5] self-start lg:block">
          <AnimatePresence mode="popLayout">
            <motion.div key={a} initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.1 }} animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 border border-line">
              <Photo src={IMG[SERVICES[a][2]]} alt={`${SERVICES[a][0]} illustration`} className="size-full" sizes="40vw" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
