"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function BridalPage() {
 const portfolio = [
  {
    src: "https://plus.unsplash.com/premium_photo-1669649154593-b13dcf9d12ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Ivory Grandeur",
    type: "Classic 5-Tier",
    description: "Hand-piped lace detailing inspired by vintage bridal veils."
  },
  {
  src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "The Sculpted Swan",
  type: "Contemporary Ruffles",
  description: "Hand-folded fondant waves creating a movement-inspired architectural silhouette."
},
  {
    src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
    title: "Gilded Sophistication",
    type: "Gold Leaf Accents",
    description: "24k edible gold leaf marbled across velvet fondant."
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1680172800885-61c5f1fc188e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nikkah Pearl",
    type: "Minimalist Chic",
    description: "Purity in design with a single statement sugar orchid."
  },
  {
    src: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop",
    title: "Royal Crimson",
    type: "Traditional Barat",
    description: "Deep hues and intricate patterns for the modern bride."
  },
  {
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
    title: "Velvet Harmony",
    type: "Walima Elegance",
    description: "Soft textures meeting contemporary structural design."
  },
];

  const ORDER_LINK = "https://wa.me/923335539381";

  return (
    <main className="min-h-screen bg-[#FDFCFB] pt-24 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Editorial Header */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-800 text-[10px] md:text-xs tracking-[0.8em] font-bold uppercase mb-8 block"
        >
          Established in Excellence
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-[10rem] font-serif text-stone-900 mb-10 italic leading-[0.8] tracking-tighter"
        >
          The Bridal <br/> Collection
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-20 h-[1px] bg-amber-800 mx-auto mb-10"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-stone-500 font-light text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed italic"
        >
          "Where tradition meets the avant-garde. We don't just bake cakes; we architect memories in sugar."
        </motion.p>
      </section>

      {/* Luxury Masonry-Style Grid */}
      <section className="px-6 lg:px-20 max-w-[1600px] mx-auto py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {portfolio.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-none"
            >
              <div className="relative overflow-hidden bg-stone-100 shadow-sm border border-stone-50">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 backdrop-blur-[2px]">
                  <p className="text-amber-200 text-[10px] tracking-[0.4em] uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.type}
                  </p>
                  <h3 className="text-white text-3xl font-serif italic mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                    {item.title}
                  </h3>
                  <p className="text-stone-200 text-sm font-light italic opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-150">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bespoke Process Section */}
      <section className="py-32 bg-stone-50 mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm tracking-[0.5em] uppercase text-stone-400 mb-12">The Bespoke Journey</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <span className="text-2xl font-serif italic text-amber-800">01. Consultation</span>
              <p className="text-stone-500 text-sm mt-4 font-light">A private session to discuss your vision, flavors, and venue aesthetics.</p>
            </div>
            <div>
              <span className="text-2xl font-serif italic text-amber-800">02. Design</span>
              <p className="text-stone-500 text-sm mt-4 font-light">Sketching your masterpiece, from architectural tiers to sugar floristry.</p>
            </div>
            <div>
              <span className="text-2xl font-serif italic text-amber-800">03. Realization</span>
              <p className="text-stone-500 text-sm mt-4 font-light">Hand-delivered and styled at your venue for a seamless experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12 italic tracking-tight">
            Reserve Your Date <br/> 
            <span className="text-xl md:text-2xl font-light text-stone-400 block mt-4">Limited commissions accepted annually</span>
          </h2>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={ORDER_LINK}
            target="_blank"
            className="inline-block px-16 py-6 bg-stone-950 hover:bg-amber-950 text-white text-[10px] tracking-[0.5em] uppercase font-bold transition-all duration-500 shadow-2xl"
          >
            Order Now
          </motion.a>
        </div>
      </section>

      {/* Refined Footer */}
      <footer className="pb-20 text-center border-t border-stone-100 pt-12 mx-12">
        <p className="text-[9px] tracking-[0.6em] uppercase text-stone-400">
          {process.env.NAME} <span className="mx-4 text-stone-200">|</span> 
          Rawalpindi / Islamabad <span className="mx-4 text-stone-200">|</span> 
          By Appointment Only
        </p>
      </footer>
    </main>
  );
}