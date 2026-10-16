import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CURATED_COLLECTIONS_DATA, MOODS_DATA } from '../data/products';

export const CollectionsPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="w-full bg-[#F7F3EC] pb-24">
      
      {/* Editorial Header */}
      <div className="border-b border-[#E6DDD0] bg-[#FCFAF6] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
            Archival Groupings
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#29251F]">
            Curated Collections & Moods
          </h1>
          <p className="text-xs sm:text-sm text-[#575249] mt-3">
            Every collection is organized by era, material, silhouette, or styling intention. 
            Choose the aesthetic direction that fits your wardrobe narrative.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        
        {/* Curated Categories */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-6 h-[1px] bg-[#777A55]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#29251F]">
              Signature Collections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CURATED_COLLECTIONS_DATA.map((col) => (
              <div
                key={col.id}
                onClick={() => navigateTo('shop', { collection: col.categoryFilter })}
                className="group cursor-pointer flex flex-col bg-white border border-[#E6DDD0] overflow-hidden hover:border-[#777A55] transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E6DDD0]">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 right-3 bg-[#F7F3EC]/90 text-[#29251F] text-[10px] uppercase tracking-wider px-2 py-0.5 font-medium">
                    {col.count} Garments
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 bg-[#FCFAF6]">
                  <div>
                    <h3 className="font-serif text-2xl text-[#29251F] group-hover:text-[#777A55] transition-colors font-medium">
                      {col.name}
                    </h3>
                    <p className="text-xs text-[#575249] mt-2 leading-relaxed">
                      {col.tagline}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#E6DDD0] flex items-center justify-between text-xs uppercase tracking-widest text-[#777A55] font-semibold">
                    <span>View All {col.name}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop by Mood Section */}
        <section className="pt-8 border-t border-[#E6DDD0]">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-6 h-[1px] bg-[#777A55]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#29251F]">
              Explore by Personal Mood
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MOODS_DATA.map((mood) => (
              <div
                key={mood.id}
                onClick={() => navigateTo('shop', { mood: mood.tag })}
                className="group relative cursor-pointer overflow-hidden aspect-[3/4] bg-[#29251F] border border-[#E6DDD0]"
              >
                <img
                  src={mood.image}
                  alt={mood.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-[#F7F3EC] flex flex-col justify-end">
                  <span className="font-serif text-lg font-medium tracking-wide">
                    {mood.name}
                  </span>
                  <p className="text-[11px] text-[#E6DDD0]/80 line-clamp-2 mt-1 leading-snug">
                    {mood.description}
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[#C99C91] mt-3 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Shop Mood <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};
