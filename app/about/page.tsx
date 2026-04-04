"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-20 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Editorial Header */}
      <section className="bg-stone-950 text-stone-200 py-32 px-4 text-center relative overflow-hidden">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8 italic tracking-tighter"
          >
            The Heart of the Oven
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto font-light leading-relaxed text-stone-400 text-lg md:text-xl italic"
          >
            Discover the artistry behind Rawalpindi's premier luxury patisserie.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* High-Reliability Editorial Image - Representative of Craft */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[700px] w-full overflow-hidden shadow-2xl group bg-stone-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1000" 
              alt="The Art of Baking" 
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 m-6"></div>
          </motion.div>

          {/* Brand Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start"
          >
            <h4 className="text-amber-900 text-[11px] tracking-[0.3em] uppercase font-bold mb-4">
              The {process.env.NAME} Philosophy
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 italic leading-tight">
              Flavor, Texture & <br/> Artistic Vision
            </h2>
            
            <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
              <p>
                {process.env.NAME} is an exclusive boutique kitchen where we focus on the intersection of fine art and high-end baking. We believe every celebration deserves a centerpiece that tastes as extraordinary as it looks.
              </p>
              <p>
                From the delicate placement of hand-crafted sugar flowers to the rich, balanced profiles of our signature sponges, our process is defined by patience and panache. We don't just bake; we design edible legacies for your most cherished moments.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-8 items-center">
              <Link 
                href="/weddings" 
                className="px-10 py-4 bg-stone-900 hover:bg-amber-900 text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-500 shadow-xl"
              >
                View The Collection
              </Link>
              <span className="text-[9px] tracking-widest uppercase text-stone-400">
                Crafted in <span className="text-stone-900 font-bold uppercase">Rawalpindi</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="bg-stone-100 py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif italic text-stone-900 leading-relaxed mb-8"
          >
            "A cake is more than a dessert—it is the final note of a beautiful story."
          </motion.p>
          <span className="text-[10px] tracking-[0.5em] uppercase text-amber-900 font-bold">{process.env.NAME}’s Promise</span>
        </div>
      </section>
    </main>
  );
}