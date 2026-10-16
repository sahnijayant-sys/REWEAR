import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Sparkles, Shield, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { navigateTo, setActivePolicyModal } = useShop();
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setNewsletterStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Save to local subscriptions
    try {
      const existing = JSON.parse(localStorage.getItem('rewear_newsletter_subs') || '[]');
      if (existing.includes(email)) {
        setNewsletterStatus('success');
        setErrorMessage('You are already subscribed to Rewear drops!');
      } else {
        localStorage.setItem('rewear_newsletter_subs', JSON.stringify([...existing, email]));
        setNewsletterStatus('success');
        setErrorMessage('');
      }
    } catch {
      setNewsletterStatus('success');
    }
  };

  return (
    <footer className="bg-[#29251F] text-[#F7F3EC] border-t border-[#3D372F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Manifesto Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#3D372F]">
          
          {/* Brand Manifesto */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-serif tracking-[0.25em] text-2xl sm:text-3xl font-bold uppercase text-[#F7F3EC] block">
              REWEAR
            </span>
            <p className="font-serif italic text-lg sm:text-xl text-[#E6DDD0] leading-relaxed max-w-lg">
              “Your Next Favourite Was Loved Before.”
            </p>
            <p className="text-xs sm:text-sm text-[#E6DDD0]/75 leading-relaxed max-w-md">
              Rewear is an independent thrift store giving pre-loved clothing a stylish second chapter. 
              We curate one-of-a-kind vintage and contemporary garments with honest condition disclosures 
              and precise measurements, so you can wear clothes with a story.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C99C91] font-semibold mb-2">
                <Sparkles size={14} />
                <span>Private Drop Access</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#F7F3EC] mb-2">
                Good Finds. Straight to Your Inbox.
              </h3>
              <p className="text-xs text-[#E6DDD0]/70 mb-5">
                Be the first to discover Friday archive drops, rare vintage finds, and conscious styling editorials.
              </p>
            </div>

            {newsletterStatus === 'success' ? (
              <div className="bg-[#777A55]/20 border border-[#777A55] p-4 flex items-center gap-3 text-xs text-[#F7F3EC]">
                <Check size={18} className="text-[#90946E] flex-shrink-0" />
                <span>
                  Welcome to the Rewear circle! {errorMessage || "You'll receive our next drop catalogue directly."}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (newsletterStatus === 'error') setNewsletterStatus('idle');
                    }}
                    placeholder="Enter your email address..."
                    className="flex-1 bg-[#3D372F]/60 border border-[#575249] px-4 py-3 text-xs text-[#F7F3EC] placeholder:text-[#E6DDD0]/40 focus:outline-none focus:border-[#C99C91]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#777A55] hover:bg-[#90946E] text-[#F7F3EC] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
                {newsletterStatus === 'error' && (
                  <p className="text-xs text-[#C99C91]">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#3D372F] text-xs">
          
          {/* Shop Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-[#C99C91] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-[#E6DDD0]/80">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-[#F7F3EC] transition-colors">
                  Shop All Garments
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', { sortBy: 'newest' })} className="hover:text-[#F7F3EC] transition-colors">
                  Fresh Arrivals & Drops
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('collections')} className="hover:text-[#F7F3EC] transition-colors">
                  Curated Collections
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop', { collection: 'Under-Budget Finds' })} className="hover:text-[#F7F3EC] transition-colors">
                  Under ₹1,500 Finds
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('wishlist')} className="hover:text-[#F7F3EC] transition-colors">
                  Saved Wishlist
                </button>
              </li>
            </ul>
          </div>

          {/* About & Ethics Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-[#C99C91] font-semibold">
              The Brand
            </h4>
            <ul className="space-y-2 text-[#E6DDD0]/80">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#F7F3EC] transition-colors">
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sustainability')} className="hover:text-[#F7F3EC] transition-colors">
                  Sustainability & Care
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('grading')} className="hover:text-[#F7F3EC] transition-colors">
                  Condition Grading Scale
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sustainability')} className="hover:text-[#F7F3EC] transition-colors">
                  Garment Mending Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-[#C99C91] font-semibold">
              Customer Care
            </h4>
            <ul className="space-y-2 text-[#E6DDD0]/80">
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#F7F3EC] transition-colors">
                  Contact Studio
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#F7F3EC] transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('shipping')} className="hover:text-[#F7F3EC] transition-colors">
                  Shipping & Dispatch (India)
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('shipping')} className="hover:text-[#F7F3EC] transition-colors">
                  Returns & Store Credit
                </button>
              </li>
            </ul>
          </div>

          {/* Studio & Legal Col */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-[#C99C91] font-semibold">
              Studio & Policies
            </h4>
            <ul className="space-y-2 text-[#E6DDD0]/80">
              <li>
                <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-[#F7F3EC] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-[#F7F3EC] transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F3EC] transition-colors flex items-center gap-1.5"
                >
                  <Instagram size={14} />
                  <span>@rewear.curated</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#777A55] leading-snug">
                Studio dispatch based in Mumbai & New Delhi. All pieces sanitized and authenticated.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E6DDD0]/60 gap-4">
          <p>© {new Date().getFullYear()} Rewear. All rights reserved. “Good Clothes Deserve Another Life.”</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Recycled Kraft Packaging</span>
            <span>·</span>
            <span>Independent Circular Fashion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
