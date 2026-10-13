"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Btn, Lines, Photo, Reveal } from "./ui";
import { IMG } from "@/lib/config";
export function AboutSection() {
  const r = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: r, offset: ["start end", "end start"] });
  const y = useTransform(p, [0, 1], ["-8%", "8%"]);
  return (
    <section id="about" className="section-space bg-char"><div ref={r} className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
      <motion.div initial={{ clipPath: "inset(12% 12% 12% 12%)", opacity: 0 }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[4/5] overflow-hidden border border-line">
        <motion.div style={{ y, scale: 1.18 }} className="absolute inset-0"><Photo src={IMG.about} alt="Luxury car inside a professional detailing studio" className="size-full" sizes="50vw" /></motion.div>
        <i className="absolute bottom-0 left-0 h-1 w-24 bg-neon" />
      </motion.div>
      <div><span className="mb-5 block text-xs font-semibold uppercase tracking-[.2em] text-neon">The Detailing Cartel</span>
        <Lines lines={["More than detailing.", "A standard of", "excellence."]} className="text-[clamp(2.2rem,5vw,4.6rem)]" />
        <Reveal delay={0.2}><p className="mt-6 max-w-lg">Your vehicle deserves attention beyond the ordinary. The Detailing Cartel brings together premium car care solutions, professional application, and a commitment to maintaining your vehicle&apos;s appearance.</p>
          <p className="mt-4 max-w-lg">From paint protection film and advanced coatings to paint correction and premium washing, explore a complete range of services designed around your vehicle&apos;s care.</p></Reveal>
        <ul className="my-8 border-t border-line">{["Premium Products", "Professional Application", "Long-Lasting Vehicle Protection"].map((t, i) => (
          <motion.li key={t} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7 }} className="group flex items-center gap-5 border-b border-line py-4 text-sm font-semibold uppercase tracking-[.08em] text-white transition-colors hover:text-neon"><b className="text-neon">0{i + 1}</b>{t}</motion.li>))}</ul>
        <Btn href="#services">Explore our services</Btn></div>
    </div></section>
  );
}
