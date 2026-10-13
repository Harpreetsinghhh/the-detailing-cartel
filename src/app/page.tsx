"use client";
import { MotionConfig } from "framer-motion";
import { Smooth } from "@/components/ui";
import { Navbar } from "@/components/Navbar";
import { HeroSection, BrandHighlights } from "@/components/Hero";
import { ServicesSection } from "@/components/Services";
import { AboutSection } from "@/components/About";
import { GallerySection } from "@/components/Gallery";
import { WhyChooseUs, BrandStatement, ContactSection, FinalCTA, Footer } from "@/components/Rest";
export default function Page() {
  return <MotionConfig reducedMotion="user"><Smooth /><Navbar /><main><HeroSection /><BrandHighlights /><ServicesSection /><AboutSection /><GallerySection /><WhyChooseUs /><BrandStatement /><ContactSection /><FinalCTA /></main><Footer /></MotionConfig>;
}
