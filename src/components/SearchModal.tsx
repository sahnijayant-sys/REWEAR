import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SearchModal: React.FC = () => {
  const {
    products,
    isSearchOpen,
    setIsSearchOpen,
    openProduct,
    navigateTo
  } = useShop();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  const results = products.filter(product => {
    if (!cleanQuery) return false;
    return (
      product.name.toLowerCase().includes(cleanQuery) ||
      product.category.toLowerCase().includes(cleanQuery) ||
      product.color.toLowerCase().includes(cleanQuery) ||
      product.material.toLowerCase().includes(cleanQuery) ||
      product.size.toLowerCase().includes(cleanQuery) ||
      product.condition.toLowerCase().includes(cleanQuery) ||
      product.moods.some(m => m.toLowerCase().includes(cleanQuery)) ||
      product.collections.some(c => c.toLowerCase().includes(cleanQuery))
    );
  });

  const popularSearches = ['Denim', 'Cableknit', 'Houndstooth', 'Silk', 'Olive', 'Linen', 'Overalls'];

  const handleSelectProduct = (productId: string) => {
    setIsSearchOpen(false);
    openProduct(productId);
  };

  const handleViewAllResults = () => {
    setIsSearchOpen(false);
    navigateTo('shop', { searchQuery: query });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#29251F]/60 backdrop-blur-xs flex items-start justify-center pt-12 sm:pt-20 px-4">
      <div className="relative w-full max-w-2xl bg-[#F7F3EC] shadow-2xl border border-[#E6DDD0] overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E6DDD0] flex items-center gap-3 bg-white">
          <Search size={22} className="text-[#777A55] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by piece, fabric, colour, or mood (e.g. Denim, Silk, 90s, Wool)..."
            className="w-full bg-transparent text-[#29251F] text-base sm:text-lg focus:outline-none placeholder:text-[#575249]/50 font-serif"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#575249] hover:text-[#29251F] uppercase font-mono px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#29251F] hover:text-[#777A55] rounded-full transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-[#EFE9DF] border-b border-[#E6DDD0] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#575249] uppercase tracking-wider font-medium text-[11px] whitespace-nowrap">
            Popular:
          </span>
          <div className="flex gap-2">
            {popularSearches.map(term => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-2.5 py-1 bg-white border border-[#D4C7B5] hover:border-[#777A55] text-[#29251F] text-xs transition-colors whitespace-nowrap"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {cleanQuery && results.length === 0 ? (
            <div className="text-center py-10">
              <p className="font-serif text-lg text-[#29251F]">
                No one-of-a-kind pieces found for "{query}"
              </p>
              <p className="text-xs text-[#575249] mt-2 max-w-sm mx-auto">
                Try searching for broad categories like "Jackets", "Denim", "Knitwear", or explore our full collection.
              </p>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  navigateTo('shop');
                }}
                className="mt-5 px-5 py-2.5 bg-[#29251F] text-[#F7F3EC] text-xs uppercase tracking-wider font-medium hover:bg-[#777A55] transition-colors"
              >
                Browse All Pieces
              </button>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs text-[#575249] pb-2 border-b border-[#E6DDD0]">
                <span>Matching Archives ({results.length})</span>
                <button
                  onClick={handleViewAllResults}
                  className="hover:text-[#777A55] flex items-center gap-1 font-medium uppercase tracking-wider text-[11px]"
                >
                  <span>Filter in Shop</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.slice(0, 6).map(product => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.id)}
                    className="flex gap-3 p-2 bg-white border border-[#E6DDD0] hover:border-[#777A55] cursor-pointer transition-all group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-20 object-cover bg-[#E6DDD0] flex-shrink-0"
                    />
                    <div className="flex flex-col justify-between py-0.5">
                      <div>
                        <div className="text-[10px] text-[#777A55] uppercase tracking-wider font-medium">
                          {product.category} · {product.size}
                        </div>
                        <h4 className="font-serif text-sm font-medium text-[#29251F] group-hover:text-[#777A55] transition-colors line-clamp-1">
                          {product.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#29251F]">
                          ₹{product.priceINR.toLocaleString('en-IN')}
                        </span>
                        {product.stockQuantity <= 0 && (
                          <span className="text-[10px] text-red-700 uppercase font-medium">
                            Sold Out
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-6 text-center text-xs text-[#575249]">
              Type a keyword above or select one of the popular tags to explore our thrifted archives.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
