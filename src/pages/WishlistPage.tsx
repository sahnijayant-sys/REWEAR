import React from 'react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const WishlistPage: React.FC = () => {
  const { 
    wishlist, 
    products, 
    navigateTo, 
    openProduct, 
    toggleWishlist, 
    moveToCartFromWishlist 
  } = useShop();

  const savedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="w-full bg-[#F7F3EC] min-h-screen pb-24">
      
      {/* Header */}
      <div className="border-b border-[#E6DDD0] bg-[#FCFAF6] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-2">
            Your Personal Curation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#29251F]">
            Saved Wishlist
          </h1>
          <p className="text-xs sm:text-sm text-[#575249] mt-3">
            Since every piece is one of a kind, saved pieces are not reserved until purchased. 
            Claim your favourites before they find another home.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {savedProducts.length === 0 ? (
          /* Empty State */
          <div className="py-20 text-center bg-white border border-[#E6DDD0] max-w-lg mx-auto p-8 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#EFE9DF] text-[#C99C91] mx-auto flex items-center justify-center mb-4">
              <Heart size={28} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#29251F]">
              Your wishlist is empty
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] mt-2 leading-relaxed">
              Explore our weekly drops and click the heart icon on any piece you love to keep track of it here.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigateTo('shop')}
                className="px-8 py-3.5 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-medium transition-colors inline-flex items-center gap-2"
              >
                <span>Discover Archive</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          /* Wishlist Grid */
          <div>
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#E6DDD0] text-xs text-[#575249]">
              <span>Saved Pieces ({savedProducts.length})</span>
              <button
                onClick={() => navigateTo('shop')}
                className="text-[#777A55] hover:text-[#29251F] font-medium uppercase tracking-wider"
              >
                Continue Browsing
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {savedProducts.map((product) => {
                const isSoldOut = product.stockQuantity <= 0;
                return (
                  <div
                    key={product.id}
                    className="group bg-white border border-[#E6DDD0] flex flex-col justify-between overflow-hidden hover:border-[#777A55] transition-all"
                  >
                    <div 
                      className="cursor-pointer relative aspect-[3/4] overflow-hidden bg-[#E6DDD0]"
                      onClick={() => openProduct(product.id)}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          isSoldOut ? 'grayscale contrast-75' : ''
                        }`}
                      />
                      {isSoldOut && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="bg-[#29251F] text-[#F7F3EC] text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                            Sold Out
                          </span>
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className="absolute top-3 right-3 p-2 bg-[#F7F3EC]/90 rounded-full hover:bg-white text-red-600 transition-colors"
                        title="Remove from saved"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="text-[10px] text-[#777A55] uppercase tracking-wider font-medium mb-1">
                          {product.category} · Size {product.size}
                        </div>
                        <h4 
                          onClick={() => openProduct(product.id)}
                          className="font-serif text-base font-medium text-[#29251F] hover:text-[#777A55] cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-[#29251F]">
                            ₹{product.priceINR.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-[#777A55]">
                            {product.condition}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E6DDD0]">
                        <button
                          onClick={() => moveToCartFromWishlist(product.id)}
                          disabled={isSoldOut}
                          className={`w-full py-2.5 text-xs uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-1.5 ${
                            isSoldOut
                              ? 'bg-[#E6DDD0] text-[#575249]/60 cursor-not-allowed'
                              : 'bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC]'
                          }`}
                        >
                          <ShoppingBag size={14} />
                          <span>{isSoldOut ? 'Piece Sold' : 'Move to Bag'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
