import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ActivePage } from '../types';

export const Navbar: React.FC = () => {
  const { 
    activePage, 
    navigateTo, 
    cart, 
    wishlist, 
    setIsCartOpen, 
    setIsSearchOpen 
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistCount = wishlist.length;

  const handleNavClick = (page: ActivePage, filterOverride?: any) => {
    navigateTo(page, filterOverride);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-[#29251F] text-[#F7F3EC] py-2 px-4 text-center text-[11px] sm:text-xs tracking-[0.25em] font-medium border-b border-[#29251F]/20 uppercase">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span>Pre-Loved. Re-Loved. Reworn.</span>
          <span className="hidden md:inline-block text-[#C99C91]">/</span>
          <span className="hidden md:inline-block text-[#E6DDD0]/80">Free conscious shipping across India on orders over ₹2,000</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F7F3EC]/95 backdrop-blur-md shadow-xs border-b border-[#E6DDD0]' 
            : 'bg-[#F7F3EC] border-b border-[#E6DDD0]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          
          {/* Left: Mobile Menu Toggle & Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#29251F] hover:text-[#777A55] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex flex-col items-start text-left focus:outline-none"
            >
              <span className="font-serif tracking-[0.22em] text-2xl sm:text-3xl font-bold uppercase text-[#29251F] group-hover:text-[#777A55] transition-colors leading-none">
                REWEAR
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#777A55] font-medium mt-1">
                Archival & Thrift
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs tracking-widest font-medium uppercase text-[#29251F]">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-1 relative ${
                activePage === 'home' 
                  ? 'text-[#777A55] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#777A55]' 
                  : 'hover:text-[#777A55]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className={`transition-colors py-1 relative ${
                activePage === 'shop' 
                  ? 'text-[#777A55] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#777A55]' 
                  : 'hover:text-[#777A55]'
              }`}
            >
              Shop All
            </button>
            <button
              onClick={() => handleNavClick('shop', { sortBy: 'newest' })}
              className="hover:text-[#777A55] transition-colors py-1 flex items-center gap-1"
            >
              New Arrivals
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99C91]" />
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className={`transition-colors py-1 relative ${
                activePage === 'collections' 
                  ? 'text-[#777A55] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#777A55]' 
                  : 'hover:text-[#777A55]'
              }`}
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors py-1 relative ${
                activePage === 'about' 
                  ? 'text-[#777A55] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#777A55]' 
                  : 'hover:text-[#777A55]'
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('sustainability')}
              className={`transition-colors py-1 relative ${
                activePage === 'sustainability' 
                  ? 'text-[#777A55] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#777A55]' 
                  : 'hover:text-[#777A55]'
              }`}
            >
              Sustainability
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors py-1 relative ${
                activePage === 'contact' 
                  ? 'text-[#777A55] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#777A55]' 
                  : 'hover:text-[#777A55]'
              }`}
            >
              Contact & FAQs
            </button>
          </div>

          {/* Right Action Icons: Search, Wishlist, Bag */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#29251F] hover:text-[#777A55] transition-colors rounded-full hover:bg-[#E6DDD0]/40"
              aria-label="Search garments"
              title="Search collection"
            >
              <Search size={20} strokeWidth={1.75} />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => handleNavClick('wishlist')}
              className="p-2 text-[#29251F] hover:text-[#777A55] transition-colors rounded-full hover:bg-[#E6DDD0]/40 relative"
              aria-label="Wishlist"
              title="Your saved items"
            >
              <Heart size={20} strokeWidth={1.75} className={totalWishlistCount > 0 ? 'fill-[#C99C91] text-[#C99C91]' : ''} />
              {totalWishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#C99C91] text-[#29251F] text-[10px] font-bold flex items-center justify-center">
                  {totalWishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#29251F] hover:text-[#777A55] transition-colors rounded-full hover:bg-[#E6DDD0]/40 relative flex items-center"
              aria-label="Shopping bag"
              title="View shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.75} />
              {totalCartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#777A55] text-[#F7F3EC] text-[10px] font-bold flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#29251F]/40 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-[#F7F3EC] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E6DDD0]">
                <div className="font-serif tracking-[0.2em] text-2xl font-bold uppercase text-[#29251F]">
                  REWEAR
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#29251F] hover:text-[#777A55]"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-5 text-sm uppercase tracking-widest font-medium">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Home</span>
                  <ArrowRight size={15} className="text-[#777A55]" />
                </button>
                <button
                  onClick={() => handleNavClick('shop')}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Shop All Pieces</span>
                  <ArrowRight size={15} className="text-[#777A55]" />
                </button>
                <button
                  onClick={() => handleNavClick('shop', { sortBy: 'newest' })}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Fresh Drops & New In</span>
                  <span className="text-[10px] bg-[#C99C91]/30 text-[#29251F] px-2 py-0.5 rounded-xs">New</span>
                </button>
                <button
                  onClick={() => handleNavClick('collections')}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Curated Collections</span>
                  <ArrowRight size={15} className="text-[#777A55]" />
                </button>
                <button
                  onClick={() => handleNavClick('wishlist')}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Saved Items ({totalWishlistCount})</span>
                  <Heart size={15} className="text-[#C99C91]" />
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Our Story</span>
                  <ArrowRight size={15} className="text-[#777A55]" />
                </button>
                <button
                  onClick={() => handleNavClick('sustainability')}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Sustainability</span>
                  <ArrowRight size={15} className="text-[#777A55]" />
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-left py-1 text-[#29251F] hover:text-[#777A55] flex items-center justify-between"
                >
                  <span>Contact & FAQs</span>
                  <ArrowRight size={15} className="text-[#777A55]" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6DDD0] text-xs text-[#575249]">
              <p className="font-serif italic text-base text-[#29251F] mb-1">
                “Your Next Favourite Was Loved Before.”
              </p>
              <p className="text-[11px] text-[#777A55]">Rewear Curated Thrift Studio</p>
            </div>
          </div>
          {/* Overlay click to close */}
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
