"use client";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Lenis from "lenis";
import { wa } from "@/lib/config";
const E = [0.16, 1, 0.3, 1] as const;
export function Smooth() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const l = new Lenis({ anchors: { offset: -72 } }); let id = 0;
    const raf = (t: number) => { l.raf(t); id = requestAnimationFrame(raf); }; id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); l.destroy(); };
  }, []);
  return null;
}
export function Photo({ src, alt, className = "", priority = false, sizes = "100vw" }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  const [bad, setBad] = useState(!src);
  return (
    <div className={`relative overflow-hidden bg-card ${className}`}>
      {bad ? <div role="img" aria-label={alt + " (placeholder)"} className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_120%,rgba(183,255,0,.22),transparent),repeating-linear-gradient(115deg,#171a17_0_3px,#0c0e0c_3px_18px)]" />
        : <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setBad(true)} className="object-cover" />}
    </div>
  );
}
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 40, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay, ease: E }}>{children}</motion.div>;
}
export function Lines({ lines, accent = -1, as: T = "h2", className = "", delay = 0, animateOnMount = false }: { lines: string[]; accent?: number; as?: "h1" | "h2"; className?: string; delay?: number; animateOnMount?: boolean }) {
  return <T className={`display ${className}`}>{lines.map((l, i) => {
    const reveal = animateOnMount ? { animate: "visible" } : { whileInView: "visible", viewport: { once: true } };
    return <motion.span key={i} initial="hidden" {...reveal} className="block overflow-hidden pb-[.08em]">
      <motion.span variants={{ hidden: { y: "115%" }, visible: { y: 0 } }} className={`block ${i === accent ? "text-neon" : ""}`} transition={{ duration: 1.1, delay: delay + i * 0.12, ease: E }}>{l}</motion.span>
    </motion.span>;
  })}</T>;
}
function WhatsAppUnavailable({ className }: { className: string }) {
  return <span role="note" aria-disabled="true" title="Add the business number to CONFIG.whatsappNumber in src/lib/config.ts." aria-label="WhatsApp unavailable: the business phone number is not configured" className={`cursor-not-allowed opacity-60 ${className}`}>WhatsApp not configured</span>;
}
export function Btn({ href, v = "p", children, ext }: { href: string | null; v?: "p" | "s"; children: ReactNode; ext?: boolean }) {
  const x = useMotionValue(0), y = useMotionValue(0), sx = useSpring(x, { stiffness: 220, damping: 16 }), sy = useSpring(y, { stiffness: 220, damping: 16 });
  const className = `inline-flex min-h-12 items-center justify-center gap-2 px-7 text-[13px] font-bold uppercase tracking-[.1em] transition-colors ${v === "p" ? "bg-neon text-black hover:bg-neon2" : "border border-white/70 text-white hover:border-neon hover:text-neon"}`;
  if (!href) return <WhatsAppUnavailable className={className} />;
  return <motion.a href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ x: sx, y: sy }} whileTap={{ scale: 0.97 }}
    onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.22); y.set((e.clientY - r.top - r.height / 2) * 0.3); }}
    onMouseLeave={() => { x.set(0); y.set(0); }}
    className={className}>{children}</motion.a>;
}
export function WhatsAppLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  if (!wa) return <WhatsAppUnavailable className={className} />;
  return <a href={wa} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}
