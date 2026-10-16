import React, { useState } from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Heart, Repeat, Layers } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CURATED_COLLECTIONS_DATA, MOODS_DATA, STYLE_INSPIRATIONS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const { products, navigateTo, openProduct } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Get freshest items for New Arrivals section
  const newArrivals = [...products]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, 8);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    const currentSubs = JSON.parse(localStorage.getItem('rewear_newsletter_subs') || '[]');
    localStorage.setItem('rewear_newsletter_subs', JSON.stringify([...currentSubs, newsletterEmail]));
    setNewsletterSuccess(true);
    setNewsletterError('');
  };

  return (
    <div className="w-full">
      
      {/* A & C. Hero Section: Asymmetrical Editorial Campaign Layout */}
      <section className="relative border-b border-[#E6DDD0] bg-[#F7F3EC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Bold Editorial Typography & Campaign Voice */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
              
              <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase font-semibold text-[#777A55]">
                <span className="w-6 h-[1.5px] bg-[#777A55]" />
                <span>Curated Second-Hand & Archival Fashion</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#29251F] tracking-tight">
                Not New. <br />
                <span className="italic font-normal text-[#777A55]">Just New</span> to You.
              </h1>

              <p className="text-sm sm:text-base text-[#575249] leading-relaxed max-w-xl font-normal">
                Unique pre-loved pieces, waiting for their next chapter. Find your style, give clothes another life, and wear something with an authentic story.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-8 py-4 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm flex items-center justify-center gap-3 group"
                >
                  <span>Shop the Collection</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateTo('about')}
                  className="px-8 py-4 border border-[#29251F] text-[#29251F] hover:bg-[#E6DDD0]/60 text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center"
                >
                  Our Story
                </button>
              </div>

              {/* Editorial Stat / Micro Assurance */}
              <div className="pt-6 sm:pt-8 border-t border-[#E6DDD0] grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#29251F] block">100%</span>
                  <span className="text-[#575249] text-[11px] leading-tight block mt-0.5">One-of-a-kind hand-inspected</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#29251F] block">Flat</span>
                  <span className="text-[#575249] text-[11px] leading-tight block mt-0.5">Exact garment measurements</span>
                </div>
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#29251F] block">Zero</span>
                  <span className="text-[#575249] text-[11px] leading-tight block mt-0.5">Fast-fashion greenwashing</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Editorial Fashion Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden shadow-xl border border-[#E6DDD0]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                  alt="Editorial thrift styling campaign"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Aesthetic Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#F7F3EC]/90 backdrop-blur-md border border-[#E6DDD0] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#777A55] font-semibold block">
                      Look No. 04 / Editorial Drop
                    </span>
                    <span className="font-serif text-base text-[#29251F] font-medium">
                      The Relaxed Archival Layer
                    </span>
                  </div>
                  <button
                    onClick={() => navigateTo('shop', { collection: 'Statement Pieces' })}
                    className="p-2 bg-[#29251F] text-[#F7F3EC] hover:bg-[#777A55] transition-colors"
                    title="View looks"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* D. Featured Collections: "Find Your Kind of Vintage" */}
      <section className="py-20 bg-[#F7F3EC] border-b border-[#E6DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
                Curated Categories
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#29251F] tracking-tight">
                Find Your Kind of Vintage
              </h2>
            </div>
            <button
              onClick={() => navigateTo('collections')}
              className="mt-4 sm:mt-0 text-xs uppercase tracking-widest text-[#29251F] hover:text-[#777A55] font-medium flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore All Collections</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Responsive Collection Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CURATED_COLLECTIONS_DATA.map((col) => (
              <div
                key={col.id}
                onClick={() => navigateTo('shop', { collection: col.categoryFilter })}
                className="group cursor-pointer flex flex-col bg-white border border-[#E6DDD0] overflow-hidden hover:border-[#777A55] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E6DDD0]">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 right-4 bg-[#F7F3EC]/90 text-[#29251F] text-[10px] tracking-wider uppercase px-2 py-0.5 font-medium">
                    {col.count} Pieces
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
                  <div className="pt-4 mt-4 border-t border-[#E6DDD0] flex items-center justify-between text-xs uppercase tracking-widest text-[#777A55] font-semibold">
                    <span>Shop Collection</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* E. New Arrivals: "Fresh Finds, Old Stories." */}
      <section className="py-20 bg-[#FCFAF6] border-b border-[#E6DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
              Weekly Archive Drops
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#29251F] tracking-tight">
              Fresh Finds, Old Stories.
            </h2>
            <p className="text-xs sm:text-sm text-[#575249] mt-3">
              One-of-a-kind pieces that won't stay for long. Every piece is photographed, graded, and measured individually.
            </p>
          </div>

          {/* 4 to 8 Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => navigateTo('shop')}
              className="px-8 py-3.5 border border-[#29251F] hover:bg-[#29251F] hover:text-[#F7F3EC] text-xs uppercase tracking-[0.2em] font-medium text-[#29251F] transition-all"
            >
              Browse All Available Items ({products.length})
            </button>
          </div>

        </div>
      </section>

      {/* F. Shop by Mood */}
      <section className="py-20 bg-[#F7F3EC] border-b border-[#E6DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
              Curate by Energy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#29251F]">
              Shop by Mood
            </h2>
            <p className="text-xs text-[#575249] mt-2">
              Whether you’re seeking structured minimalism or eclectic 90s streetwear, discover outfits tuned to your personal aesthetic.
            </p>
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
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-[#F7F3EC] flex flex-col justify-end">
                  <span className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                    {mood.name}
                  </span>
                  <p className="text-[11px] text-[#E6DDD0]/80 line-clamp-2 mt-1 leading-snug">
                    {mood.description}
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[#C99C91] mt-3 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Mood <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* G. The Rewear Difference: "Better Finds. Less Waste." */}
      <section className="py-20 bg-[#FCFAF6] border-b border-[#E6DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
              The Conscious Model
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#29251F]">
              Better Finds. Less Waste.
            </h2>
            <p className="text-xs sm:text-sm text-[#575249] mt-2">
              Fast fashion produces millions of tons of landfill every season. We provide a stylish, curated alternative that honors the craftsmanship of existing clothing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Value 1 */}
            <div className="space-y-4 p-8 bg-white border border-[#E6DDD0] text-center sm:text-left">
              <div className="w-12 h-12 bg-[#777A55]/10 text-[#777A55] flex items-center justify-center rounded-none mx-auto sm:mx-0">
                <Sparkles size={22} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#29251F]">
                Unique by Nature
              </h3>
              <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
                Discover individual pieces that bring genuine personality to your wardrobe. No cookie-cutter mass-market drops or running into someone wearing the exact same outfit.
              </p>
            </div>

            {/* Value 2 */}
            <div className="space-y-4 p-8 bg-white border border-[#E6DDD0] text-center sm:text-left">
              <div className="w-12 h-12 bg-[#777A55]/10 text-[#777A55] flex items-center justify-center rounded-none mx-auto sm:mx-0">
                <Compass size={22} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#29251F]">
                Style That Makes Sense
              </h3>
              <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
                Find pre-loved fashion crafted from 100% natural wools, silks, and heavy denims without paying the inflated retail prices of luxury department stores.
              </p>
            </div>

            {/* Value 3 */}
            <div className="space-y-4 p-8 bg-white border border-[#E6DDD0] text-center sm:text-left">
              <div className="w-12 h-12 bg-[#777A55]/10 text-[#777A55] flex items-center justify-center rounded-none mx-auto sm:mx-0">
                <Repeat size={22} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#29251F]">
                Wear It Again
              </h3>
              <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
                Give existing clothing another vibrant chapter instead of letting great pieces sit unworn. Every garment reworn displaces virgin water and energy usage.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* H. Style Inspiration: "Ways to Wear It Again." */}
      <section className="py-20 bg-[#F7F3EC] border-b border-[#E6DDD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
                Editorial Lookbook
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#29251F]">
                Ways to Wear It Again
              </h2>
              <p className="text-xs text-[#575249] mt-2">
                Real thrift styling ideas to spark your everyday rotation.
              </p>
            </div>
            <button
              onClick={() => navigateTo('shop')}
              className="mt-4 sm:mt-0 text-xs uppercase tracking-widest text-[#29251F] hover:text-[#777A55] font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>Shop All Looks</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Pinterest/Magazine style inspiration collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STYLE_INSPIRATIONS.map((look) => (
              <div 
                key={look.id}
                onClick={() => openProduct(look.linkedProductId)}
                className="group cursor-pointer flex flex-col bg-white border border-[#E6DDD0] overflow-hidden hover:border-[#777A55] transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#E6DDD0] relative">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#F7F3EC]/90 text-[10px] uppercase tracking-wider px-2 py-0.5 font-medium">
                    {look.category}
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif text-base font-medium text-[#29251F] group-hover:text-[#777A55] transition-colors">
                      {look.title}
                    </h4>
                    <p className="text-xs text-[#575249] mt-1.5 leading-relaxed">
                      {look.caption}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E6DDD0] flex items-center justify-between text-[11px] text-[#777A55] font-medium uppercase tracking-wider">
                    <span>Inspect Featured Piece</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* I. Brand Story Preview: "Every Piece Has a Past. Yours Is Next." */}
      <section className="py-24 bg-[#29251F] text-[#F7F3EC] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C99C91] font-semibold block">
            The Rewear Manifesto
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Every Piece Has a Past. <br />
            <span className="italic text-[#E6DDD0]">Yours Is Next.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#E6DDD0]/80 leading-relaxed max-w-2xl mx-auto font-light">
            Fashion doesn’t always need to start from scratch. Rewear is about finding beauty in what already exists, discovering pieces with character, and making them part of your own story.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigateTo('about')}
              className="px-8 py-3.5 bg-[#F7F3EC] text-[#29251F] hover:bg-[#C99C91] hover:text-[#29251F] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Meet Rewear
            </button>
          </div>
        </div>
      </section>

      {/* J. Newsletter Section: "Good Finds. Straight to Your Inbox." */}
      <section className="py-20 bg-[#EFE9DF] border-b border-[#E6DDD0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center text-[#777A55] shadow-xs">
            <Sparkles size={20} />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block">
            Friday Drops & Archival Edits
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#29251F]">
            Good Finds. Straight to Your Inbox.
          </h2>
          <p className="text-xs sm:text-sm text-[#575249] max-w-lg mx-auto">
            Be the first to discover new drops, rare finds, and styling inspiration. Because second-hand fashion moves fast, subscribers get first notice.
          </p>

          {newsletterSuccess ? (
            <div className="p-4 bg-white border border-[#777A55] text-xs text-[#29251F] font-medium max-w-md mx-auto">
              ✓ You are subscribed! We'll notify you as soon as the next archive drop goes live.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterError) setNewsletterError('');
                  }}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 bg-white border border-[#D4C7B5] text-xs text-[#29251F] placeholder:text-[#575249]/60 focus:outline-none focus:border-[#777A55]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {newsletterError && (
                <p className="text-xs text-red-600 text-left">{newsletterError}</p>
              )}
            </form>
          )}

          <p className="text-[11px] text-[#575249]/80">
            No spam, ever. Unsubscribe with one click anytime.
          </p>
        </div>
      </section>

    </div>
  );
};
