import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck, RefreshCw } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    openProduct,
    setIsCheckoutOpen,
    navigateTo
  } = useShop();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 2000;
  const SHIPPING_FLAT_FEE = 150;

  const subtotal = cart.reduce((acc, item) => acc + item.product.priceINR * item.quantity, 0);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = cart.length === 0 ? 0 : isFreeShipping ? 0 : SHIPPING_FLAT_FEE;
  const total = subtotal + shipping;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#29251F]/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F3EC] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E6DDD0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag size={20} className="text-[#777A55]" />
              <h2 className="font-serif text-xl font-medium tracking-wide text-[#29251F]">
                Your Shopping Bag
              </h2>
              <span className="text-xs text-[#575249] font-mono">
                ({cart.reduce((sum, i) => sum + i.quantity, 0)})
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#29251F] hover:text-[#777A55] rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cart.length > 0 && (
            <div className="bg-[#EFE9DF] px-6 py-3 border-b border-[#E6DDD0]">
              <div className="flex justify-between items-center text-xs text-[#29251F] mb-1.5 font-medium">
                {isFreeShipping ? (
                  <span className="text-[#777A55] font-semibold flex items-center gap-1">
                    <ShieldCheck size={14} /> You've unlocked Complimentary Express Delivery!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#29251F]">₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more for Free Shipping
                  </span>
                )}
                <span className="text-[11px] text-[#575249]">{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#D4C7B5] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#777A55] transition-all duration-300"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Bag Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E6DDD0] flex items-center justify-center text-[#777A55] mb-4">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="font-serif text-xl text-[#29251F] mb-2 font-medium">
                  Your bag is currently empty
                </h3>
                <p className="text-sm text-[#575249] max-w-xs mb-6">
                  Every thrifted piece here is one of a kind. Find your next favourite piece before someone else does.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('shop');
                  }}
                  className="px-6 py-3 bg-[#29251F] text-[#F7F3EC] text-xs uppercase tracking-widest font-medium hover:bg-[#777A55] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.product.id}
                  className="flex gap-4 pb-6 border-b border-[#E6DDD0] last:border-0"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-26 object-cover bg-[#E6DDD0] flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsCartOpen(false);
                      openProduct(item.product.id);
                    }}
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 
                          onClick={() => {
                            setIsCartOpen(false);
                            openProduct(item.product.id);
                          }}
                          className="font-serif text-base text-[#29251F] hover:text-[#777A55] transition-colors cursor-pointer line-clamp-1 font-medium"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#575249] hover:text-red-700 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="text-xs text-[#575249] mt-0.5 space-x-1.5">
                        <span>Size: {item.product.size}</span>
                        <span>·</span>
                        <span className="text-[#777A55]">{item.product.condition}</span>
                      </div>

                      {item.product.isOneOfAKind && (
                        <div className="text-[10px] text-[#777A55] font-medium tracking-wide uppercase mt-1">
                          Single unit archive piece
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#D4C7B5] bg-white">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#29251F] hover:bg-[#E6DDD0] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-3 text-xs font-mono font-medium text-[#29251F]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stockQuantity}
                          className={`px-2 py-0.5 text-xs text-[#29251F] hover:bg-[#E6DDD0] transition-colors ${
                            item.quantity >= item.product.stockQuantity ? 'opacity-40 cursor-not-allowed' : ''
                          }`}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="font-semibold text-sm text-[#29251F]">
                          ₹{(item.product.priceINR * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Trigger */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#E6DDD0] bg-[#FCFAF6] space-y-4">
              <div className="space-y-1.5 text-xs text-[#575249]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#29251F]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <strong className="text-[#777A55]">FREE</strong> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E6DDD0] text-sm text-[#29251F] font-semibold">
                  <span>Estimated Total</span>
                  <span className="font-serif text-base">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#575249] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-[#777A55]" /> Verified Condition
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <RefreshCw size={12} className="text-[#777A55]" /> 48h Store Credit Return
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
