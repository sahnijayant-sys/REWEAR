import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openProduct, toggleWishlist, isInWishlist, addToCart } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const isSoldOut = product.stockQuantity <= 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSoldOut) return;
    setIsAdding(true);
    addToCart(product.id, false);
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div 
      className="group relative flex flex-col cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openProduct(product.id)}
    >
      {/* Image Showcase */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E6DDD0]/50 border border-[#E6DDD0]/70">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover object-center transition-transform duration-700 ease-out ${
            isHovered ? 'scale-105' : 'scale-100'
          } ${isSoldOut ? 'grayscale contrast-75 opacity-70' : ''}`}
        />

        {/* Minimal Unboxed Badges Top Left */}
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1">
          {isSoldOut ? (
            <span className="bg-[#29251F] text-[#F7F3EC] text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium">
              Sold Out
            </span>
          ) : (
            <>
              {product.isOneOfAKind && (
                <span className="bg-[#F7F3EC]/90 backdrop-blur-xs text-[#29251F] text-[10px] uppercase tracking-widest px-2 py-0.5 font-medium border border-[#E6DDD0]">
                  1 of 1
                </span>
              )}
              {product.isJustAdded && (
                <span className="bg-[#777A55] text-[#F7F3EC] text-[10px] uppercase tracking-widest px-2 py-0.5 font-medium">
                  Just In
                </span>
              )}
            </>
          )}
        </div>

        {/* Wishlist Button Top Right */}
        <button
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-all duration-200 ${
            isFavorited 
              ? 'bg-[#F7F3EC] text-[#C99C91] shadow-xs' 
              : 'bg-[#F7F3EC]/80 text-[#29251F] hover:bg-[#F7F3EC] hover:text-[#C99C91]'
          }`}
        >
          <Heart size={16} className={isFavorited ? 'fill-[#C99C91]' : ''} />
        </button>

        {/* Quick Action Overlay on Desktop Hover */}
        {!isSoldOut && (
          <div className="absolute inset-x-3 bottom-3 hidden sm:flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="flex-1 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-wider py-2.5 px-3 font-medium flex items-center justify-center gap-1.5 transition-colors shadow-md"
            >
              {isAdding ? (
                <>
                  <Check size={14} />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={14} />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                openProduct(product.id);
              }}
              className="p-2.5 bg-[#F7F3EC] text-[#29251F] hover:bg-[#E6DDD0] transition-colors shadow-md"
              title="Inspect Details"
            >
              <Eye size={15} />
            </button>
          </div>
        )}
      </div>

      {/* Product Details & Typography */}
      <div className="pt-3 pb-2 flex flex-col flex-1">
        
        {/* Unboxed Meta Line */}
        <div className="flex items-center gap-2 text-[11px] text-[#575249] uppercase tracking-wider mb-1 font-medium">
          <span>{product.category}</span>
          <span aria-hidden="true">·</span>
          <span>Size {product.size.split(' ')[0]}</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#777A55]">{product.condition}</span>
        </div>

        {/* Product Title */}
        <h3 className="font-serif text-base sm:text-lg text-[#29251F] font-medium leading-snug group-hover:text-[#777A55] transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Pricing in INR */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-sm sm:text-base font-semibold text-[#29251F] tracking-tight">
            ₹{product.priceINR.toLocaleString('en-IN')}
          </span>
          {product.originalPriceINR && (
            <span className="text-xs text-[#575249]/70 line-through">
              ₹{product.originalPriceINR.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Mobile quick add button */}
        <div className="mt-2.5 sm:hidden">
          <button
            onClick={handleQuickAdd}
            disabled={isSoldOut}
            className={`w-full py-2 text-xs font-medium uppercase tracking-wider border ${
              isSoldOut
                ? 'border-[#D3C6B4] text-[#575249]/60 cursor-not-allowed bg-transparent'
                : 'border-[#29251F] text-[#29251F] active:bg-[#29251F] active:text-[#F7F3EC]'
            }`}
          >
            {isSoldOut ? 'Sold Out' : 'Quick Add'}
          </button>
        </div>
      </div>
    </div>
  );
};
