import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ['400', '500', '600', '700', '800', '900'] 
});

export const metadata: Metadata = {
  title: "Cakes By Kalsoom | Bespoke Luxury Cakes Rawalpindi",
  description: "Artisanal custom cakes, wedding desserts, and gourmet treats in Rawalpindi. Handcrafted with love and the finest ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans bg-[#FCFAFB] text-stone-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}