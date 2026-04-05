import React from 'react';

export default function ServicesPage() {
  const WHATSAPP_LINK = "https://wa.me/923335539381";

  const serviceCategories = [
    {
      category: "Signature Cakes",
      tagline: "Bespoke designs for life's golden milestones.",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      services: [
        { name: "Custom Birthdays", detail: "Hand-sculpted themes tailored to your unique celebration." },
        { name: "Anniversary Tiers", detail: "Elegant, minimalist designs for timeless love stories." },
        { name: "Themed Fondant", detail: "Intricate sugar artistry and character modeling." },
        { name: "Gender Reveals", detail: "Surprise-filled centers with delicate exterior styling." },
        { name: "Luxury Cheesecakes", detail: "Baked New York style with premium fruit compotes." }
      ]
    },
   {
  category: "Celebration & Weddings",
  tagline: "Handcrafted centerpieces from my kitchen to your table.",
  // A warmer, more intimate wedding cake shot that feels artisanal rather than factory-made
  image: "https://plus.unsplash.com/premium_photo-1704830496405-8b1d54c0d88c?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  services: [
    { 
      name: "Bespoke Wedding Tiers", 
      detail: "Elegant multi-layered cakes baked from scratch with a personal, home-style touch." 
    },
    { 
      name: "Nikkah & Engagement", 
      detail: "Delicate designs tailored specifically for your traditional family ceremonies." 
    },
    { 
      name: "Hand-Painted Details", 
      detail: "Artistic, edible illustrations and patterns painted directly onto your cake." 
    },
    { 
      name: "Homemade Fillings", 
      detail: "Signature fruit preserves and rich curds made in Kalsoom's own kitchen." 
    },
    { 
      name: "Personalized Toppers", 
      detail: "Customized elements that reflect the unique story of the couple." 
    }
  ]
},
    {
      category: "Gourmet Patisserie",
      tagline: "Small bites, immense flavor.",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200",
      services: [
        { name: "Artisanal Cupcakes", detail: "Gourmet toppings on a cloud-like sponge base." },
        { name: "Dessert Tables", detail: "A curated spread of tarts, eclairs, and brownies." },
        { name: "French Macarons", detail: "Delicate almond shells with ganache and buttercream." },
        { name: "Couture Cookies", detail: "Hand-painted royal icing cookies for gifting." },
        { name: "Corporate Gifting", detail: "Premium boxed treats with custom brand detailing." }
      ]
    },
    {
      category: "Savory & Bakes",
      tagline: "The perfect balance of salt and spice.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200",
      services: [
        { name: "Artisan Breads", detail: "Freshly baked sourdough and herb-infused focaccia." },
        { name: "Mini Savory Platters", detail: "Bite-sized quiches, puffs, and gourmet sliders." },
        { name: "Tea-Time Boxes", detail: "A classic selection of savory and sweet pairings." },
        { name: "Stuffed Croissants", detail: "Flaky, buttery pastry with premium savory fillings." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FCFAFB]">
      
      {/* 1. Artisanal Header */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 text-center border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <span className="text-amber-800 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-6 block">
            The Standard
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-stone-900 mb-8 italic tracking-tighter">
            Full Menu
          </h1>
          <p className="text-stone-500 font-light leading-relaxed text-lg md:text-xl max-w-2xl mx-auto italic">
            "Creating perfect harmony between premium ingredients and breathtaking design, one slice at a time."
          </p>
        </div>
      </section>

      {/* 2. Services Listing - Alternating Editorial Layout */}
      <section className="py-20 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32 md:gap-48">
          
          {serviceCategories.map((cat, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-start`}
            >
              
              {/* Category Visual */}
              <div className="w-full lg:w-5/12">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100 shadow-2xl group">
                  <img 
                    src={cat.image} 
                    alt={cat.category} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-[15px] border-amber-900/5 m-4"></div>
                </div>
              </div>

              {/* Category Details */}
              <div className="w-full lg:w-7/12 flex flex-col pt-4">
                <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-4 italic">
                  {cat.category}
                </h2>
                <p className="text-amber-900 text-[11px] tracking-[0.3em] uppercase font-bold mb-12">
                  {cat.tagline}
                </p>
                
                {/* Expanded Service Menu */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {cat.services.map((item, idx) => (
                    <div key={idx} className="group border-b border-stone-100 pb-6">
                      <h3 className="text-lg font-serif text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-stone-500 font-light text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="inline-flex items-center text-stone-900 text-[10px] tracking-[0.4em] uppercase font-bold group"
                  >
                    Customize Your Order
                    <span className="ml-4 h-[1px] w-12 bg-stone-900 group-hover:w-20 transition-all duration-500"></span>
                  </a>
                </div>
              </div>
              
            </div>
          ))}

        </div>
      </section>

      {/* 3. Luxury Call to Action */}
      <section className="bg-stone-900 py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 italic">
            Ready for a slice of luxury?
          </h2>
          <p className="text-stone-400 font-light mb-12 text-sm md:text-base tracking-wide">
            From Rawalpindi’s finest kitchens to your celebration table.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            className="px-12 py-5 bg-white text-stone-950 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-amber-800 hover:text-white transition-all duration-500"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </section>
      
    </main>
  );
}
