import React, { useState, useMemo } from 'react';
import { Filter, X, ArrowUpDown, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory, CuratedCollection, MoodCategory, GarmentCondition } from '../types';

export const ShopPage: React.FC = () => {
  const { products, filters, setFilters, resetFilters } = useShop();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Available Filter Options
  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Jackets & Coats',
    'Denim & Bottoms',
    'Knitwear & Sweaters',
    'Vintage Shirts',
    'Streetwear',
    'Statement Pieces',
    'Dresses & Skirts',
    'Accessories'
  ];

  const collections: (CuratedCollection | 'All')[] = [
    'All',
    'Vintage Finds',
    'Everyday Essentials',
    'Streetwear',
    'Denim & Bottoms',
    'Statement Pieces',
    'Under-Budget Finds'
  ];

  const conditions: (GarmentCondition | 'All')[] = [
    'All',
    'Pristine',
    'Excellent',
    'Very Good',
    'Good'
  ];

  const sizes = ['All', 'S', 'M', 'L', 'XL', 'Free Size'];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category
      if (filters.category !== 'All' && product.category !== filters.category) {
        return false;
      }
      // Collection
      if (filters.collection !== 'All') {
        if (filters.collection === 'Under-Budget Finds') {
          if (product.priceINR > 1500) return false;
        } else if (!product.collections.includes(filters.collection as CuratedCollection)) {
          return false;
        }
      }
      // Mood
      if (filters.mood !== 'All' && !product.moods.includes(filters.mood as MoodCategory)) {
        return false;
      }
      // Condition
      if (filters.condition !== 'All' && product.condition !== filters.condition) {
        return false;
      }
      // Size
      if (filters.size !== 'All') {
        const pSize = product.size.toLowerCase();
        const fSize = filters.size.toLowerCase();
        if (!pSize.includes(fSize)) return false;
      }
      // Price range
      if (product.priceINR < filters.minPrice || product.priceINR > filters.maxPrice) {
        return false;
      }
      // Search Query
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        const matchesMat = product.material.toLowerCase().includes(q);
        const matchesCol = product.color.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesMat && !matchesCol) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') {
        return a.priceINR - b.priceINR;
      }
      if (filters.sortBy === 'price-desc') {
        return b.priceINR - a.priceINR;
      }
      if (filters.sortBy === 'newest') {
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
      // Default: featured (staff pick first, then newest)
      const aScore = (a.isStaffPick ? 2 : 0) + (a.isJustAdded ? 1 : 0);
      const bScore = (b.isStaffPick ? 2 : 0) + (b.isJustAdded ? 1 : 0);
      return bScore - aScore;
    });
  }, [products, filters]);

  const hasActiveFilters = 
    filters.category !== 'All' ||
    filters.collection !== 'All' ||
    filters.mood !== 'All' ||
    filters.condition !== 'All' ||
    filters.size !== 'All' ||
    filters.minPrice > 0 ||
    filters.maxPrice < 5000 ||
    Boolean(filters.searchQuery);

  return (
    <div className="w-full bg-[#F7F3EC] min-h-screen pb-24">
      
      {/* Editorial Header */}
      <div className="border-b border-[#E6DDD0] bg-[#FCFAF6] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
              Curated Vintage & Thrift Catalogue
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#29251F] tracking-tight">
              {filters.collection !== 'All' 
                ? filters.collection 
                : filters.mood !== 'All' 
                  ? filters.mood 
                  : filters.category !== 'All' 
                    ? filters.category 
                    : 'Shop All Pieces'}
            </h1>
            <p className="text-xs sm:text-sm text-[#575249] mt-3 leading-relaxed">
              Every garment in our catalog is an authentic, one-of-a-kind vintage or pre-loved find. 
              Cleaned, flat-measured, and ready for its next life.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Controls Bar: Filter Toggle, Sort Selector, Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E6DDD0] gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden px-4 py-2 bg-white border border-[#D4C7B5] text-xs uppercase tracking-wider font-medium text-[#29251F] flex items-center gap-2 hover:border-[#777A55]"
            >
              <SlidersHorizontal size={15} />
              <span>Filter ({hasActiveFilters ? 'Active' : 'All'})</span>
            </button>

            <span className="text-xs text-[#575249] font-medium">
              Showing <strong className="text-[#29251F]">{filteredProducts.length}</strong> of {products.length} unique pieces
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="hidden sm:flex items-center gap-1 text-xs text-[#777A55] hover:text-[#29251F] font-medium transition-colors"
              >
                <RotateCcw size={12} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
            <span className="text-[#575249] uppercase tracking-wider text-[11px] font-medium">Sort By:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="bg-white border border-[#D4C7B5] px-3 py-1.5 text-xs text-[#29251F] focus:outline-none focus:border-[#777A55] font-medium"
            >
              <option value="featured">Featured Curation</option>
              <option value="newest">Newest Drops First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips Line */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-4 pb-2 text-xs">
            <span className="text-[#575249] text-[11px] uppercase tracking-wider">Active:</span>
            {filters.category !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#D4C7B5] text-[#29251F]">
                Category: {filters.category}
                <X size={12} className="cursor-pointer hover:text-red-600" onClick={() => setFilters(p => ({ ...p, category: 'All' }))} />
              </span>
            )}
            {filters.collection !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#D4C7B5] text-[#29251F]">
                Collection: {filters.collection}
                <X size={12} className="cursor-pointer hover:text-red-600" onClick={() => setFilters(p => ({ ...p, collection: 'All' }))} />
              </span>
            )}
            {filters.mood !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#D4C7B5] text-[#29251F]">
                Mood: {filters.mood}
                <X size={12} className="cursor-pointer hover:text-red-600" onClick={() => setFilters(p => ({ ...p, mood: 'All' }))} />
              </span>
            )}
            {filters.condition !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#D4C7B5] text-[#29251F]">
                Condition: {filters.condition}
                <X size={12} className="cursor-pointer hover:text-red-600" onClick={() => setFilters(p => ({ ...p, condition: 'All' }))} />
              </span>
            )}
            {filters.size !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#D4C7B5] text-[#29251F]">
                Size: {filters.size}
                <X size={12} className="cursor-pointer hover:text-red-600" onClick={() => setFilters(p => ({ ...p, size: 'All' }))} />
              </span>
            )}
            {filters.searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#D4C7B5] text-[#29251F]">
                Search: "{filters.searchQuery}"
                <X size={12} className="cursor-pointer hover:text-red-600" onClick={() => setFilters(p => ({ ...p, searchQuery: '' }))} />
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-[#777A55] underline hover:text-[#29251F] text-xs ml-1"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Layout Grid: Desktop Sidebar Filters + Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-6">
          
          {/* Desktop Left Sidebar Filters */}
          <aside className="hidden lg:block space-y-8 pr-6 border-r border-[#E6DDD0]">
            
            {/* Category Filter */}
            <div>
              <h3 className="font-serif text-base font-semibold text-[#29251F] uppercase tracking-wider mb-3">
                Categories
              </h3>
              <div className="space-y-1.5 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
                    className={`w-full text-left py-1 px-2 transition-colors flex justify-between items-center ${
                      filters.category === cat 
                        ? 'bg-[#777A55]/15 font-semibold text-[#29251F]' 
                        : 'text-[#575249] hover:text-[#29251F]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[10px] text-[#575249]/70">
                      {cat === 'All' ? products.length : products.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Curated Collection Filter */}
            <div>
              <h3 className="font-serif text-base font-semibold text-[#29251F] uppercase tracking-wider mb-3">
                Curated Collections
              </h3>
              <div className="space-y-1.5 text-xs">
                {collections.map((col) => (
                  <button
                    key={col}
                    onClick={() => setFilters(prev => ({ ...prev, collection: col }))}
                    className={`w-full text-left py-1 px-2 transition-colors flex justify-between items-center ${
                      filters.collection === col 
                        ? 'bg-[#777A55]/15 font-semibold text-[#29251F]' 
                        : 'text-[#575249] hover:text-[#29251F]'
                    }`}
                  >
                    <span>{col}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div>
              <h3 className="font-serif text-base font-semibold text-[#29251F] uppercase tracking-wider mb-3">
                Condition Grading
              </h3>
              <div className="space-y-1.5 text-xs">
                {conditions.map((cond) => (
                  <button
                    key={cond}
                    onClick={() => setFilters(prev => ({ ...prev, condition: cond }))}
                    className={`w-full text-left py-1 px-2 transition-colors flex justify-between items-center ${
                      filters.condition === cond 
                        ? 'bg-[#777A55]/15 font-semibold text-[#29251F]' 
                        : 'text-[#575249] hover:text-[#29251F]'
                    }`}
                  >
                    <span>{cond}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="font-serif text-base font-semibold text-[#29251F] uppercase tracking-wider mb-3">
                Size
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilters(prev => ({ ...prev, size: s }))}
                    className={`px-3 py-1.5 border transition-all ${
                      filters.size === s 
                        ? 'bg-[#29251F] text-[#F7F3EC] border-[#29251F]' 
                        : 'bg-white text-[#29251F] border-[#D4C7B5] hover:border-[#777A55]'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-serif text-base font-semibold text-[#29251F] uppercase tracking-wider mb-3">
                Price (INR)
              </h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min={0}
                  max={5000}
                  step={200}
                  value={filters.maxPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                  className="w-full accent-[#777A55]"
                />
                <div className="flex justify-between text-xs text-[#575249] font-mono">
                  <span>₹0</span>
                  <span>Up to ₹{filters.maxPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

          </aside>

          {/* Right Product Grid Area */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              /* Empty state */
              <div className="py-20 text-center bg-white border border-[#E6DDD0] p-8">
                <div className="w-14 h-14 bg-[#EFE9DF] rounded-full mx-auto flex items-center justify-center text-[#777A55] mb-4">
                  <Filter size={24} />
                </div>
                <h3 className="font-serif text-2xl text-[#29251F] font-medium">
                  No matching garments found
                </h3>
                <p className="text-xs sm:text-sm text-[#575249] max-w-md mx-auto mt-2">
                  We couldn't find any one-of-a-kind pieces matching your current filter combination. 
                  Try clearing some filters or searching with a different term.
                </p>
                <div className="mt-6">
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2.5 bg-[#29251F] text-[#F7F3EC] text-xs uppercase tracking-widest font-medium hover:bg-[#777A55] transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            ) : (
              /* Product Grid */
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#29251F]/50 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#F7F3EC] h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DDD0]">
                <h3 className="font-serif text-xl font-medium text-[#29251F]">
                  Filter Archives
                </h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1.5 text-[#29251F]"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-white border border-[#D4C7B5] p-2 text-xs text-[#29251F]"
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Collection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-2">
                  Curated Collection
                </label>
                <select
                  value={filters.collection}
                  onChange={(e) => setFilters(prev => ({ ...prev, collection: e.target.value }))}
                  className="w-full bg-white border border-[#D4C7B5] p-2 text-xs text-[#29251F]"
                >
                  {collections.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-2">
                  Size
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {sizes.map(s => (
                    <button
                      key={s}
                      onClick={() => setFilters(prev => ({ ...prev, size: s }))}
                      className={`px-3 py-1.5 border ${
                        filters.size === s ? 'bg-[#29251F] text-white border-[#29251F]' : 'bg-white border-[#D4C7B5]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-2">
                  Condition Grading
                </label>
                <select
                  value={filters.condition}
                  onChange={(e) => setFilters(prev => ({ ...prev, condition: e.target.value }))}
                  className="w-full bg-white border border-[#D4C7B5] p-2 text-xs text-[#29251F]"
                >
                  {conditions.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Max Price */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#29251F] mb-2">
                  Max Price: ₹{filters.maxPrice.toLocaleString('en-IN')}
                </label>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  step={200}
                  value={filters.maxPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                  className="w-full accent-[#777A55]"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6DDD0] flex gap-2">
              <button
                onClick={() => {
                  resetFilters();
                  setMobileFiltersOpen(false);
                }}
                className="flex-1 py-3 border border-[#29251F] text-xs uppercase tracking-wider font-medium text-[#29251F]"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 bg-[#29251F] text-xs uppercase tracking-wider font-medium text-[#F7F3EC]"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
