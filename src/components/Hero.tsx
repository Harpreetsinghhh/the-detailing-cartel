"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Btn, Lines, Photo } from "./ui";
import { IMG, wa } from "@/lib/config";
export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]), s = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]), o = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return (
    <section id="home" ref={ref} className="grain relative flex min-h-svh items-end overflow-hidden pb-20 pt-36">
      <motion.div style={{ y, scale: s }} className="absolute inset-0"><Photo src={IMG.hero} alt="Glossy black sports car in a detailing studio" priority className="size-full" /></motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#090A09_5%,rgba(9,10,9,.6)_50%,rgba(9,10,9,.25)),linear-gradient(0deg,#090A09,transparent_40%)]" />
      <motion.div style={{ opacity: o }} className="relative mx-auto w-full max-w-[1320px] px-6">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-6 block text-xs font-semibold uppercase tracking-[.2em] text-neon">Premium automotive care · Zirakpur</motion.span>
        <Lines as="h1" lines={["Precision detailing.", "Ultimate protection."]} accent={1} className="text-[clamp(2.6rem,8.4vw,8rem)]" delay={0.3} animateOnMount />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-8 max-w-md text-[17px]">Premium car detailing and advanced surface protection designed to preserve your vehicle&apos;s finish, enhance its gloss, and elevate its presence.</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-5 text-xs font-semibold tracking-[.2em] text-white">PROTECTION. PERFECTION. PRESTIGE.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-8 flex flex-col gap-3 sm:flex-row"><Btn href="#services">Explore our services</Btn><Btn href={wa} v="s" ext>Chat on WhatsApp</Btn></motion.div>
      </motion.div>
      <motion.div aria-hidden animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-6 left-1/2 hidden text-neon sm:block"><ChevronDown /></motion.div>
    </section>
  );
}
export function BrandHighlights() {
  const items = ["Premium products", "Professional application", "Complete car care"];
  return (
    <div className="overflow-hidden border-y border-line bg-char py-5" aria-label="Brand highlights">
      <div className="mq flex w-max">{[0, 1].map((k) => <div key={k} className="flex shrink-0" aria-hidden={k === 1}>{[...items, ...items].map((t, i) => <span key={i} className="flex items-center gap-8 pr-8 text-[13px] font-semibold uppercase tracking-[.16em] text-white"><i className="size-2 rotate-45 bg-neon" />{t}</span>)}</div>)}</div>
    </div>
  );
}
