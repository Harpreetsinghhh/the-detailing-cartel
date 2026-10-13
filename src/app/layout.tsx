import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
const f = Instrument_Sans({ subsets: ["latin"], variable: "--font-ins", display: "swap" });
export const metadata: Metadata = { title: "The Detailing Cartel — Premium Car Detailing in Zirakpur", description: "Premium car detailing and advanced surface protection in Zirakpur, Punjab. Protection. Perfection. Prestige." };
export const viewport: Viewport = { themeColor: "#090A09", viewportFit: "cover" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={f.variable}><body className="font-sans">{children}</body></html>;
}
