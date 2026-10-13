"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/config";
import { WhatsAppLink } from "./ui";
export function Navbar() {
  const [hide, setHide] = useState(false), [solid, setSolid] = useState(false), [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => { setHide(y > (scrollY.getPrevious() ?? 0) && y > 300); setSolid(y > 40); });
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <motion.header animate={{ y: hide && !open ? "-100%" : 0 }} transition={{ duration: 0.4 }} className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${solid ? "border-line bg-ink/80 backdrop-blur-xl" : "border-transparent"}`}>
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6">
          <a href="#home" aria-label="The Detailing Cartel home" className="flex items-center gap-3 text-sm font-bold leading-[1.05] tracking-[.16em] text-white"><i className="h-7 w-1 bg-neon" /><span>THE DETAILING<br /><b className="text-neon">CARTEL.</b></span></a>
          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {NAV.map(([n, h]) => <a key={h} href={h} className="group relative py-2 text-[13px] uppercase tracking-[.1em] text-silver transition-colors hover:text-white">{n}<span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-neon transition-transform duration-300 group-hover:scale-x-100" /></a>)}
            <WhatsAppLink className="inline-flex min-h-10 items-center justify-center bg-neon px-5 py-2.5 text-[12px] font-bold uppercase tracking-[.1em] text-black transition-colors hover:bg-neon2">Enquire now</WhatsAppLink>
          </nav>
          <button className="grid size-11 place-items-center border border-line text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && <motion.nav aria-label="Mobile navigation" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-40 flex flex-col justify-center gap-2 overflow-y-auto bg-ink px-6 pb-8 pt-24 md:hidden">
          {NAV.map(([n, h], i) => <motion.a key={h} href={h} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.06 }} className="display py-1 text-[clamp(2.2rem,10vw,3rem)]">{n}</motion.a>)}
          <WhatsAppLink className="mt-6 inline-flex min-h-12 items-center justify-center bg-neon px-5 py-3 text-center text-sm font-bold uppercase tracking-[.1em] text-black">Enquire now</WhatsAppLink>
        </motion.nav>}
      </AnimatePresence>
    </>
  );
}
