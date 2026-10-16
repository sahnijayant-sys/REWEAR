import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  ShoppingBag, 
  ShieldCheck, 
  Ruler, 
  Truck, 
  RefreshCw, 
  AlertTriangle, 
  Sparkles, 
  Check, 
  ChevronRight,
  Share2
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { 
    selectedProductId, 
    products, 
    navigateTo, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    showToast,
    setActivePolicyModal 
  } = useShop();

  const product = products.find(p => p.id === selectedProductId) || products[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'details' | 'measurements' | 'condition' | 'shipping'>('measurements');
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <p>Garment not found.</p>
        <button onClick={() => navigateTo('shop')} className="mt-4 underline text-xs">Back to shop</button>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);
  const isSoldOut = product.stockQuantity <= 0;

  // Similar items
  const similarProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.collections.some(c => product.collections.includes(c))))
    .slice(0, 4);

  const handleAddToCart = () => {
    if (isSoldOut) return;
    setIsAdding(true);
    addToCart(product.id, true);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Garment link copied to clipboard', 'info');
    }
  };

  return (
    <div className="w-full bg-[#F7F3EC] pb-24">
      
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#E6DDD0] bg-[#FCFAF6] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#575249]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button 
              onClick={() => navigateTo('home')} 
              className="hover:text-[#29251F] transition-colors"
            >
              Home
            </button>
            <ChevronRight size={12} />
            <button 
              onClick={() => navigateTo('shop')} 
              className="hover:text-[#29251F] transition-colors"
            >
              Catalog
            </button>
            <ChevronRight size={12} />
            <button 
              onClick={() => navigateTo('shop', { category: product.category })} 
              className="hover:text-[#29251F] transition-colors"
            >
              {product.category}
            </button>
            <ChevronRight size={12} />
            <span className="text-[#29251F] font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </div>

          <button
            onClick={() => navigateTo('shop')}
            className="flex items-center gap-1 text-[#777A55] hover:text-[#29251F] font-medium"
          >
            <ArrowLeft size={13} />
            <span className="hidden sm:inline">Back to Collection</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Multi-Angle Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Featured Photo */}
            <div className="relative aspect-[3/4] w-full bg-[#E6DDD0] overflow-hidden border border-[#E6DDD0] shadow-xs">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} angle ${selectedImageIndex + 1}`}
                className={`w-full h-full object-cover object-center transition-all duration-300 ${isSoldOut ? 'grayscale contrast-75' : ''}`}
              />

              {/* Status Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {isSoldOut ? (
                  <span className="bg-[#29251F] text-[#F7F3EC] text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                    Sold Out
                  </span>
                ) : (
                  <>
                    <span className="bg-[#F7F3EC]/95 backdrop-blur-xs text-[#29251F] text-[11px] uppercase tracking-widest px-2.5 py-1 font-medium border border-[#E6DDD0]">
                      1 of 1 Archive Piece
                    </span>
                    {product.isStaffPick && (
                      <span className="bg-[#777A55] text-[#F7F3EC] text-[11px] uppercase tracking-widest px-2.5 py-1 font-medium">
                        Curator's Pick
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Share & Favorite Buttons on Image */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={handleShare}
                  aria-label="Share piece"
                  className="p-2.5 bg-[#F7F3EC]/90 hover:bg-[#F7F3EC] text-[#29251F] rounded-full shadow-xs transition-colors"
                  title="Copy link"
                >
                  <Share2 size={16} />
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Wishlist"
                  className={`p-2.5 rounded-full shadow-xs transition-colors ${
                    isFavorited 
                      ? 'bg-[#F7F3EC] text-[#C99C91]' 
                      : 'bg-[#F7F3EC]/90 hover:bg-[#F7F3EC] text-[#29251F]'
                  }`}
                >
                  <Heart size={16} className={isFavorited ? 'fill-[#C99C91]' : ''} />
                </button>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-[3/4] overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx 
                        ? 'border-[#777A55] opacity-100' 
                        : 'border-[#E6DDD0] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Garment Care Callout */}
            <div className="p-4 bg-[#EFE9DF] border border-[#E6DDD0] flex items-center gap-3 text-xs text-[#575249]">
              <Sparkles size={16} className="text-[#777A55] flex-shrink-0" />
              <span>
                <strong>Sanitized & Ready to Wear:</strong> This piece has been professionally dry-cleaned, ozone-sanitized, and cedar-steamed at our studio.
              </span>
            </div>

          </div>

          {/* Right Column: Garment Details, Measurements, Purchase Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              {/* Category & Mood metadata */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#777A55] font-semibold mb-2">
                <span>{product.category}</span>
                <span>·</span>
                <span>{product.moods[0]}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-[#29251F] font-normal leading-tight">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-[#575249] mt-2 italic font-serif">
                “{product.tagline}”
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-semibold text-[#29251F] tracking-tight">
                  ₹{product.priceINR.toLocaleString('en-IN')}
                </span>
                {product.originalPriceINR && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#575249]/70 line-through">
                      ₹{product.originalPriceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#777A55] font-medium">
                      (Verified Retail Vintage Value)
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Essential Snapshot Box */}
            <div className="p-4 bg-white border border-[#E6DDD0] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#575249] block text-[11px] uppercase tracking-wider">Garment Size</span>
                <span className="font-semibold text-[#29251F] text-sm">{product.size}</span>
              </div>
              <div>
                <span className="text-[#575249] block text-[11px] uppercase tracking-wider">Condition Grade</span>
                <span className="font-semibold text-[#777A55] text-sm">{product.condition}</span>
              </div>
              <div>
                <span className="text-[#575249] block text-[11px] uppercase tracking-wider">Fabric Composition</span>
                <span className="font-medium text-[#29251F]">{product.material}</span>
              </div>
              <div>
                <span className="text-[#575249] block text-[11px] uppercase tracking-wider">Archival Color</span>
                <span className="font-medium text-[#29251F]">{product.color}</span>
              </div>
            </div>

            {/* Honest Flaw Disclosure Box */}
            <div className="p-4 bg-[#FCFAF6] border border-[#E6DDD0] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#29251F]">
                <ShieldCheck size={14} className="text-[#777A55]" />
                <span>Honest Condition Disclosure</span>
              </div>
              <p className="text-xs text-[#575249] leading-relaxed">
                {product.conditionNotes}
              </p>
              {product.flawDisclosure && product.flawDisclosure !== 'None' && product.flawDisclosure !== 'None observed.' && (
                <div className="mt-2 text-xs text-[#8A5B3D] flex items-start gap-1.5 bg-[#F2E5E1]/40 p-2 border border-[#E2BCB4]/50">
                  <AlertTriangle size={13} className="flex-shrink-0 mt-0.5 text-[#C99C91]" />
                  <span><strong>Noted Character:</strong> {product.flawDisclosure}</span>
                </div>
              )}
            </div>

            {/* Main CTA Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={isSoldOut || isAdding}
                className={`w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 shadow-sm ${
                  isSoldOut
                    ? 'bg-[#D4C7B5] text-[#575249] cursor-not-allowed'
                    : 'bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC]'
                }`}
              >
                {isSoldOut ? (
                  <span>Sold Out (Archived)</span>
                ) : isAdding ? (
                  <>
                    <Check size={16} />
                    <span>Adding to Bag...</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add to Shopping Bag — ₹{product.priceINR.toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-full py-3.5 border border-[#29251F] text-xs uppercase tracking-[0.15em] font-medium transition-all flex items-center justify-center gap-2 ${
                  isFavorited 
                    ? 'bg-[#F2E5E1] text-[#29251F] border-[#C99C91]' 
                    : 'text-[#29251F] hover:bg-[#E6DDD0]/60'
                }`}
              >
                <Heart size={15} className={isFavorited ? 'fill-[#C99C91] text-[#C99C91]' : ''} />
                <span>{isFavorited ? 'Saved in Wishlist' : 'Save to Wishlist'}</span>
              </button>
            </div>

            {/* Tabs for Measurements, Details, Shipping */}
            <div className="pt-4 border-t border-[#E6DDD0]">
              <div className="flex border-b border-[#E6DDD0] text-xs uppercase tracking-wider font-medium">
                <button
                  onClick={() => setActiveTab('measurements')}
                  className={`pb-2.5 px-3 border-b-2 transition-colors ${
                    activeTab === 'measurements'
                      ? 'border-[#777A55] text-[#29251F] font-semibold'
                      : 'border-transparent text-[#575249] hover:text-[#29251F]'
                  }`}
                >
                  Measurements
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2.5 px-3 border-b-2 transition-colors ${
                    activeTab === 'details'
                      ? 'border-[#777A55] text-[#29251F] font-semibold'
                      : 'border-transparent text-[#575249] hover:text-[#29251F]'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2.5 px-3 border-b-2 transition-colors ${
                    activeTab === 'shipping'
                      ? 'border-[#777A55] text-[#29251F] font-semibold'
                      : 'border-transparent text-[#575249] hover:text-[#29251F]'
                  }`}
                >
                  Shipping & Returns
                </button>
              </div>

              <div className="py-4 text-xs text-[#575249] leading-relaxed">
                {activeTab === 'measurements' && (
                  <div className="space-y-3">
                    <p className="text-[11px] text-[#575249]">
                      All measurements are taken with the garment laid completely flat. We recommend comparing with a garment you already own.
                    </p>
                    <div className="bg-white border border-[#E6DDD0] divide-y divide-[#E6DDD0]">
                      {product.measurements.chest && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Chest (Pit-to-Pit x 2)</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.chest}</span>
                        </div>
                      )}
                      {product.measurements.shoulder && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Shoulder Width</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.shoulder}</span>
                        </div>
                      )}
                      {product.measurements.length && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Total Length</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.length}</span>
                        </div>
                      )}
                      {product.measurements.sleeve && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Sleeve Length</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.sleeve}</span>
                        </div>
                      )}
                      {product.measurements.waist && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Waist</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.waist}</span>
                        </div>
                      )}
                      {product.measurements.rise && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Front Rise</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.rise}</span>
                        </div>
                      )}
                      {product.measurements.inseam && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Inseam</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.inseam}</span>
                        </div>
                      )}
                      {product.measurements.hips && (
                        <div className="p-2.5 flex justify-between">
                          <span className="font-medium text-[#29251F]">Hips</span>
                          <span className="font-mono text-[#29251F]">{product.measurements.hips}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-3">
                    <p>{product.description}</p>
                    <div className="pt-2">
                      <span className="font-semibold text-[#29251F] block mb-1">Styling Suggestion:</span>
                      <p>
                        Pair with wide-leg neutral trousers or raw denim to contrast the texture. Versatile enough for year-round layering.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-2">
                    <p>
                      • <strong>Dispatch:</strong> Within 24–48 hours from our studio.
                    </p>
                    <p>
                      • <strong>Delivery:</strong> 3–5 days to metros across India.
                    </p>
                    <p>
                      • <strong>Returns:</strong> 48 hours for store credit if an undisclosed defect is found.
                    </p>
                    <button
                      onClick={() => setActivePolicyModal('shipping')}
                      className="text-[#777A55] underline text-[11px] pt-1 block"
                    >
                      Read full shipping & returns policy
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Similar Pieces / Complete The Look */}
        {similarProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E6DDD0]">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#777A55] font-semibold block mb-1">
                  Complementary Archives
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#29251F]">
                  Similar Finds You May Love
                </h3>
              </div>
              <button
                onClick={() => navigateTo('shop')}
                className="text-xs uppercase tracking-widest text-[#29251F] hover:text-[#777A55] font-medium"
              >
                View Catalog
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {similarProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
