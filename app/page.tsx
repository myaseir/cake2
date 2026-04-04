import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAFB]">
      <Hero />
      
      {/* Philosophy */}
      <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h4 className="text-amber-800 text-[10px] md:text-xs tracking-[0.5em] font-bold uppercase mb-8">
            The Craft
          </h4>
          <h2 className="text-4xl md:text-7xl font-serif text-stone-900 mb-10 italic leading-tight">
            Baked with Passion. <br/> 
            Styled for Celebration.
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto italic">
            "Every cake tells a story. We use only premium organic ingredients to ensure your centerpiece tastes as breathtaking as it looks."
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        
        {/* Wedding Cakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-stone-200 text-6xl md:text-8xl font-serif mb-4">01</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic">Wedding Masterpieces</h3>
            <p className="text-stone-500 font-light leading-loose mb-8">
              Multi-tiered wonders customized to your wedding theme. From intricate sugar flowers to minimalist textures.
            </p>
            <ul className="space-y-3 text-[10px] tracking-[0.3em] uppercase text-amber-900 font-bold mb-10">
              <li className="flex items-center gap-3">Custom Consultations</li>
              <li className="flex items-center gap-3">Premium Fillings</li>
              <li className="flex items-center gap-3">Safe Venue Delivery</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden bg-stone-100 shadow-xl">
             <img src="https://cakeoclock.pk/wp-content/uploads/2021/11/bride-to-be.jpg" className="object-cover w-full h-full" alt="Wedding Cake" />
          </div>
        </div>

        {/* Custom Bday Cakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden bg-stone-100 shadow-xl">
             <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1200" className="object-cover w-full h-full" alt="Birthday Cake" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-stone-200 text-6xl md:text-8xl font-serif mb-4">02</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic">Bespoke Birthdays</h3>
            <p className="text-stone-500 font-light leading-loose mb-8">
              Turning imagination into edible art. Whether it's a child's dream or a sophisticated milestone, we bake it real.
            </p>
            <Link href="tel:03335539381" className="text-stone-900 text-[10px] tracking-[0.4em] uppercase font-bold border-b border-stone-900 pb-1">
              WhatsApp to Order
            </Link>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="bg-stone-900 py-32 px-6 text-center text-white">
        <h2 className="text-3xl md:text-6xl font-serif mb-12 italic">Let's Bake Something Special</h2>
        <a 
          href="https://wa.me/923335539381"
          className="inline-block px-12 py-5 bg-white text-stone-900 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-amber-100 transition-all shadow-2xl"
        >
          Contact {process.env.NAME}
        </a>
      </section>
    </main>
  );
}