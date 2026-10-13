"use client";
import { MouseEvent, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Crosshair, MapPin, ShieldCheck, BadgeCheck } from "lucide-react";
import { Btn, Lines, Photo, Reveal, WhatsAppLink } from "./ui";
import { IMG, LOCATION, NAV, maps, mapsEmbed, wa } from "@/lib/config";
const F = [[ShieldCheck, "Premium products", "Quality-focused vehicle care using premium products selected for their intended applications."], [Crosshair, "Professional application", "Careful application and attention to detail across our range of detailing and protection services."], [BadgeCheck, "Complete car care", "Explore detailing, coatings, paint refinement, and vehicle protection solutions in one place."]] as const;
export function WhyChooseUs() {
  const mv = (e: MouseEvent<HTMLElement>) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--x", e.clientX - r.left + "px"); e.currentTarget.style.setProperty("--y", e.clientY - r.top + "px"); };
  return (
    <section className="section-space bg-char"><div className="mx-auto max-w-[1320px] px-6">
      <span className="mb-4 block text-xs font-semibold uppercase tracking-[.2em] text-neon">The detailing standard</span>
      <Lines lines={["Care in every detail."]} className="mb-10 text-[clamp(2.4rem,6vw,5.5rem)]" />
      <div className="grid gap-4 md:grid-cols-3">{F.map(([I, t, d], i) => (
        <Reveal key={t} delay={i * 0.1} className="h-full"><article onMouseMove={mv} className="h-full border border-line bg-card p-6 sm:p-7 [background-image:radial-gradient(320px_circle_at_var(--x,50%)_var(--y,-50%),rgba(183,255,0,.10),transparent_70%)]">
          <I className="mb-7 text-neon" size={34} strokeWidth={1.5} /><h3 className="display mb-3 text-xl !leading-tight">{t}</h3><p>{d}</p></article></Reveal>))}</div>
    </div></section>
  );
}
function W({ w, p, a, b, hot }: { w: string; p: MotionValue<number>; a: number; b: number; hot?: boolean }) {
  const o = useTransform(p, [a, b], [0.15, 1]);
  return <motion.span style={{ opacity: o }} className={`mr-[.25em] inline-block ${hot ? "text-neon" : ""}`}>{w}</motion.span>;
}
export function BrandStatement() {
  const r = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: r, offset: ["start start", "end end"] });
  const words = "YOUR CAR. YOUR PRIDE. OUR PRECISION.".split(" ");
  return (
    <section ref={r} className="relative h-[150vh] sm:h-[165vh]"><div className="sticky top-0 grid h-svh place-items-center overflow-hidden">
      <Photo src={IMG.statement} alt="" className="absolute inset-0" /><div className="absolute inset-0 bg-ink/80" />
      <div className="relative px-6 text-center"><h2 className="display text-[clamp(2.8rem,10vw,9.5rem)]">{words.map((w, i) => <W key={i} w={w} p={p} a={i / words.length} b={(i + 1) / words.length} hot={w === "PRIDE." || w === "PRECISION."} />)}</h2>
        <motion.div style={{ scaleX: p }} className="mx-auto mt-8 h-[3px] w-40 origin-left bg-neon" /><p className="mt-4 text-xs font-semibold uppercase tracking-[.22em] text-white">Protection. Perfection. Prestige.</p></div>
    </div></section>
  );
}
export function ContactSection() {
  return (
    <section id="contact" className="section-space mx-auto grid max-w-[1320px] items-center gap-9 px-6 lg:grid-cols-2 lg:gap-12">
      <div><span className="mb-4 block text-xs font-semibold uppercase tracking-[.2em] text-neon">Find us</span><Lines lines={["Visit The", "Detailing Cartel."]} className="text-[clamp(2.4rem,5.5vw,5rem)]" />
        <Reveal delay={0.2}><p className="mt-5 max-w-md">Looking for premium car detailing and vehicle protection in Zirakpur? Get in touch to enquire about our services.</p>
          <address className="my-6 flex gap-3 border-l-[3px] border-neon pl-5 not-italic text-white"><MapPin className="mt-1 shrink-0 text-neon" size={20} aria-hidden="true" /><span><b className="mb-1 block tracking-[.14em]">THE DETAILING CARTEL</b>{LOCATION.address}</span></address>
          <div className="flex flex-col gap-3 sm:flex-row"><Btn href={maps} ext>Get directions</Btn><Btn href={wa} v="s" ext>Chat on WhatsApp</Btn></div></Reveal></div>
      <Reveal><div className="map-panel bg-char">
        <iframe title="Google Maps search for The Detailing Cartel in Zirakpur" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="map-frame" />
        <p className="px-1 pt-3 text-xs text-mute">Map search uses the listed Dhakoli locality. Replace the configurable location in <code>src/lib/config.ts</code> with the verified Google Maps pin for precise directions.</p>
      </div></Reveal>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="relative grid place-items-center overflow-hidden border-t border-line px-6 py-20 text-center md:py-28">
      <Photo src={IMG.cta} alt="" className="absolute inset-0" /><div className="absolute inset-0 bg-ink/85" />
      <div className="relative"><Lines lines={["Give your car", "the protection", "it deserves."]} accent={2} className="text-[clamp(2.5rem,7.5vw,7rem)]" />
        <Reveal delay={0.3}><p className="mx-auto mt-6 max-w-md text-lg">Discover detailing and surface protection solutions designed to elevate your vehicle&apos;s appearance.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Btn href={wa} ext>Enquire on WhatsApp</Btn><Btn href="#services" v="s">Explore services</Btn></div></Reveal></div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="relative border-t border-line px-6 pb-6 pt-14 sm:pt-16"><i className="absolute -top-px left-6 h-[3px] w-20 bg-neon" />
      <div className="mx-auto grid max-w-[1320px] gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-[1.6fr_1fr_1.2fr_1fr]">
        <div><p className="font-bold tracking-[.14em] text-white">THE DETAILING CARTEL</p><p className="my-3 text-xs tracking-[.16em] text-neon">PROTECTION. PERFECTION. PRESTIGE.</p><p className="max-w-xs text-[15px]">Premium car detailing and auto care solutions in Zirakpur, Punjab.</p></div>
        <nav aria-label="Footer"><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-white">Navigate</h4><ul className="space-y-2 text-[15px]">{NAV.map(([n, h]) => <li key={h}><a href={h} className="hover:text-neon">{n}</a></li>)}</ul></nav>
        <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-white">Location</h4><p className="text-[15px]">Dhakoli, Old Chandigarh–Ambala Highway,<br />Zirakpur, Punjab, India.</p></div>
        <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-white">Contact</h4><WhatsAppLink className="text-[15px] hover:text-neon">Enquire on WhatsApp</WhatsAppLink></div>
      </div>
      <p className="mx-auto mt-10 max-w-[1320px] border-t border-line pt-5 text-sm text-mute">© {new Date().getFullYear()} The Detailing Cartel. All rights reserved.</p>
    </footer>
  );
}
