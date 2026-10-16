import React from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="w-full bg-[#F7F3EC] pb-24">
      
      {/* Hero Narrative Header */}
      <section className="border-b border-[#E6DDD0] bg-[#FCFAF6] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block">
            Our Story & Manifesto
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#29251F] leading-tight tracking-tight">
            Fashion Has More Than One Life.
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#575249] max-w-2xl mx-auto">
            “Your Next Favourite Was Loved Before.”
          </p>
        </div>
      </section>

      {/* Narrative Section 1: The Origin & Purpose */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-[#575249] text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#29251F]">
              Why We Started Rewear
            </h2>
            <p>
              Contemporary fast fashion teaches us to consume in hyper-speed cycles: wear an outfit twice, discard it, and buy into the next fleeting micro-trend. But somewhere in that constant churn, fashion lost its tactile magic, character, and durability.
            </p>
            <p>
              Rewear was born from an obsession with the beauty of what already exists. We believe the most interesting outfits aren't hanging in mass-retail chain stores — they are waiting in forgotten archives, independent closets, and vintage racks.
            </p>
            <p>
              Heavyweight ring-spun denim that has softened over thirty years; pure Shetland wool hand-knitted with lanolin warmth; tailored blazers with real cupro linings and horn buttons. These are garments made to outlive seasons.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-[#E6DDD0] overflow-hidden border border-[#E6DDD0] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
                alt="Vintage fashion studio inspection"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[11px] text-[#575249] mt-2 italic text-center">
              Our studio curation process: examining weave density, seam integrity, and natural patina.
            </p>
          </div>

        </div>
      </section>

      {/* Visual Quote Banner */}
      <section className="py-16 bg-[#EFE9DF] border-y border-[#E6DDD0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <p className="font-serif text-2xl sm:text-3xl text-[#29251F] italic leading-relaxed">
            “When you wear second-hand, you don't just put on an outfit. You carry a piece of craftsmanship that has survived time and is ready to make memories with you.”
          </p>
          <span className="text-xs uppercase tracking-widest text-[#777A55] font-semibold block">
            — The Rewear Curators
          </span>
        </div>
      </section>

      {/* Narrative Section 2: Our Curatorial Standards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
            The Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#29251F]">
            How We Curate Every Drop
          </h2>
          <p className="text-xs sm:text-sm text-[#575249] mt-2">
            Thrifting shouldn’t feel like rummaging through endless cluttered bins. We do the meticulous work so your shopping experience feels editorial and seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-[#E6DDD0] p-8 space-y-3">
            <span className="font-serif text-3xl font-light text-[#777A55] block">01</span>
            <h3 className="font-serif text-xl font-medium text-[#29251F]">
              Daylight Inspection
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
              Every garment is inspected under 5000K daylight lamps to evaluate fabric weave, check pocket linings, and document any authentic wear or gentle marks.
            </p>
          </div>

          <div className="bg-white border border-[#E6DDD0] p-8 space-y-3">
            <span className="font-serif text-3xl font-light text-[#777A55] block">02</span>
            <h3 className="font-serif text-xl font-medium text-[#29251F]">
              Professional Sanitization
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
              Garments undergo non-toxic dry cleaning and high-temperature steam sanitation to refresh natural fibers without damaging vintage dyes.
            </p>
          </div>

          <div className="bg-white border border-[#E6DDD0] p-8 space-y-3">
            <span className="font-serif text-3xl font-light text-[#777A55] block">03</span>
            <h3 className="font-serif text-xl font-medium text-[#29251F]">
              Flat-Lay Measurement
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
              Vintage tag sizes are notoriously unreliable. We measure chest, shoulder, sleeve, and inseam down to the half-inch so you get the exact fit you expect.
            </p>
          </div>

        </div>

        {/* CTA to browse */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigateTo('shop')}
            className="px-8 py-3.5 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-medium transition-colors inline-flex items-center gap-2"
          >
            <span>Explore Current Curation</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

    </div>
  );
};
