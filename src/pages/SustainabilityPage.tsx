import React from 'react';
import { ArrowRight, Droplets, Sun, Wind, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SustainabilityPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="w-full bg-[#F7F3EC] pb-24">
      
      {/* Editorial Header */}
      <div className="border-b border-[#E6DDD0] bg-[#FCFAF6] py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block">
            The Circular Wardrobe
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#29251F]">
            The Most Sustainable Garment Is the One That Already Exists.
          </h1>
          <p className="text-xs sm:text-sm text-[#575249] max-w-2xl mx-auto mt-4 leading-relaxed">
            By extending the active lifespan of clothing by just nine months, overall carbon, water, and waste footprints are reduced by an estimated 20–30%.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* Core Principles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-[#E6DDD0] p-8 space-y-4">
            <div className="w-12 h-12 bg-[#777A55]/10 text-[#777A55] flex items-center justify-center">
              <Droplets size={22} />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#29251F]">
              Displacing Water Consumption
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
              Manufacturing a single new cotton t-shirt and jeans requires thousands of litres of fresh water and agricultural irrigation. Buying pre-loved denim circulates existing cotton without any virgin water withdrawal.
            </p>
          </div>

          <div className="bg-white border border-[#E6DDD0] p-8 space-y-4">
            <div className="w-12 h-12 bg-[#777A55]/10 text-[#777A55] flex items-center justify-center">
              <Sun size={22} />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#29251F]">
              Keeping Good Fabrics Out of Landfill
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
              Billions of wearable garments are incinerated or dumped in landfills each year solely due to inventory overproduction. We rescue and recirculate premium archival clothing into loving wardrobes.
            </p>
          </div>

          <div className="bg-white border border-[#E6DDD0] p-8 space-y-4">
            <div className="w-12 h-12 bg-[#777A55]/10 text-[#777A55] flex items-center justify-center">
              <HeartHandshake size={22} />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#29251F]">
              Honoring Historical Craftsmanship
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
              Vintage garments from past decades were stitched with denser thread counts, metal zippers, and natural fibers built to last for generations. Wearing them pays respect to the original makers.
            </p>
          </div>

        </section>

        {/* Practical Garment Care & Longevity Guide */}
        <section className="bg-[#EFE9DF] border border-[#E6DDD0] p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#777A55] font-semibold block mb-1">
              Rewear Care Manual
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#29251F]">
              How to Make Your Clothes Last for Decades
            </h2>
            <p className="text-xs sm:text-sm text-[#575249] mt-2">
              Gentle care is the highest form of conscious fashion. Here are our studio recommendations for keeping natural vintage fibers thriving:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-[#575249]">
            
            <div className="bg-white p-5 border border-[#E6DDD0] space-y-2">
              <strong className="text-[#29251F] font-serif text-base block">1. Wash Less, Wash Cold</strong>
              <p>
                Unless heavily soiled, airing out wool sweaters and denim in fresh air removes 90% of odors. When machine washing, use cold cycles (30°C) with mild eco-detergent to preserve fabric strength.
              </p>
            </div>

            <div className="bg-white p-5 border border-[#E6DDD0] space-y-2">
              <strong className="text-[#29251F] font-serif text-base block">2. Skip the Tumble Dryer</strong>
              <p>
                Tumble dryers break down natural fibers and shrink cottons. Flat-dry knitwear on a clean towel, and hang cotton shirts in shade to protect vibrant vintage dyes from bleaching.
              </p>
            </div>

            <div className="bg-white p-5 border border-[#E6DDD0] space-y-2">
              <strong className="text-[#29251F] font-serif text-base block">3. Depilling & Steaming</strong>
              <p>
                Natural wools and cashmeres pill occasionally from friction. A simple fabric comb or electric depiller restores them to smooth perfection in two minutes. Steam instead of harsh iron heat.
              </p>
            </div>

            <div className="bg-white p-5 border border-[#E6DDD0] space-y-2">
              <strong className="text-[#29251F] font-serif text-base block">4. Seasonal Cedar Storage</strong>
              <p>
                Store your off-season knitwear in breathable cotton garment bags with natural red cedar blocks to naturally deter moths without synthetic chemical mothballs.
              </p>
            </div>

          </div>
        </section>

        {/* Our Packaging Footprint */}
        <section className="bg-white border border-[#E6DDD0] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 bg-[#777A55]/10 text-[#777A55] rounded-full mx-auto flex items-center justify-center">
            <Wind size={22} />
          </div>
          <h3 className="font-serif text-2xl font-medium text-[#29251F]">
            100% Recycled Kraft Packaging
          </h3>
          <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
            Every Rewear parcel is wrapped in recyclable unbleached tissue paper and sealed in heavy-duty FSC-certified recycled kraft mailers. We do not include single-use plastic garment bags or promotional paper flyers.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigateTo('shop')}
              className="px-8 py-3.5 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Shop Sustainable Archives
            </button>
          </div>
        </section>

      </div>

    </div>
  );
};
