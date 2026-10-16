import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, ShoppingBag, ShieldAlert, ArrowLeft, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { OrderDetails } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    processOrder,
    navigateTo
  } = useShop();

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    paymentMethod: 'UPI' as 'UPI' | 'Card' | 'Cash on Delivery'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 2000;
  const SHIPPING_FLAT_FEE = 150;
  const subtotal = cart.reduce((acc, item) => acc + item.product.priceINR * item.quantity, 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT_FEE;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = '10-digit phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Street delivery address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim() || formData.pincode.length < 6) newErrors.pincode = 'Valid 6-digit PIN code required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const order = processOrder({
        ...formData,
        items: [...cart],
        subtotal,
        shipping,
        total
      });
      setCompletedOrder(order);
      setIsSubmitting(false);
    }, 700);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setCompletedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#29251F]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#F7F3EC] shadow-2xl border border-[#E6DDD0] overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#29251F] text-[#F7F3EC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif tracking-widest text-lg uppercase font-semibold">REWEAR</span>
            <span className="text-xs text-[#C99C91]">/ Checkout</span>
          </div>
          <button 
            onClick={handleClose}
            className="text-[#E6DDD0] hover:text-white p-1 rounded-sm"
          >
            <X size={20} />
          </button>
        </div>

        {/* Demo Mode Notice */}
        <div className="bg-[#EFE9DF] border-b border-[#E6DDD0] px-6 py-2.5 flex items-center gap-2 text-xs text-[#575249]">
          <ShieldAlert size={15} className="text-[#777A55] flex-shrink-0" />
          <span>
            <strong>Prototype Demo Mode:</strong> This checkout validates inventory and simulates order placement without charging real money.
          </span>
        </div>

        {completedOrder ? (
          /* Order Confirmation View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#777A55]/15 text-[#777A55] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle size={36} />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#777A55] font-semibold">
                Order Confirmed
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#29251F] mt-1">
                Thank you, {completedOrder.customerName}!
              </h2>
              <p className="text-sm text-[#575249] mt-2">
                Order Reference: <strong className="font-mono text-[#29251F]">{completedOrder.orderId}</strong>
              </p>
              <p className="text-xs text-[#575249] mt-1">
                A confirmation has been logged for <span className="underline">{completedOrder.email}</span>. Your one-of-a-kind pieces are officially reserved and marked sold out.
              </p>
            </div>

            {/* Order Items Receipt */}
            <div className="bg-white border border-[#E6DDD0] p-4 text-left max-h-56 overflow-y-auto space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#575249] border-b border-[#E6DDD0] pb-2">
                Reserved Items
              </div>
              {completedOrder.items.map(item => (
                <div key={item.product.id} className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-medium text-[#29251F]">{item.product.name}</span>
                    <span className="text-[#575249] ml-2">({item.product.size})</span>
                  </div>
                  <span className="font-mono">₹{item.product.priceINR.toLocaleString('en-IN')}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#E6DDD0] flex justify-between text-sm font-semibold text-[#29251F]">
                <span>Total Amount</span>
                <span>₹{completedOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  handleClose();
                  navigateTo('shop');
                }}
                className="flex-1 py-3 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Continue Browsing
              </button>
              <button
                onClick={handleClose}
                className="flex-1 py-3 border border-[#29251F] text-[#29251F] text-xs uppercase tracking-widest font-medium hover:bg-[#E6DDD0] transition-colors"
              >
                Close Receipt
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleOrderSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Items mini summary */}
            <div className="bg-[#EFE9DF]/60 p-4 border border-[#E6DDD0] flex justify-between items-center text-xs">
              <div>
                <span className="font-medium text-[#29251F]">{cart.length} unique piece{cart.length > 1 ? 's' : ''} in bag</span>
                <span className="text-[#575249] block text-[11px] mt-0.5">Inventory verified against real stock</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-[#29251F]">Total: ₹{total.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-[#777A55] block">{shipping === 0 ? 'Free Shipping Included' : '+ ₹150 Flat Shipping'}</span>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-medium text-[#29251F] border-b border-[#E6DDD0] pb-2">
                1. Delivery & Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#575249] uppercase tracking-wider mb-1 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder="e.g. Ananya Roy"
                    className={`w-full px-3 py-2 bg-white border ${errors.customerName ? 'border-red-500' : 'border-[#D4C7B5]'} focus:outline-none focus:border-[#777A55] text-sm`}
                  />
                  {errors.customerName && <p className="text-red-600 text-[11px] mt-1">{errors.customerName}</p>}
                </div>

                <div>
                  <label className="block text-[#575249] uppercase tracking-wider mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ananya@example.com"
                    className={`w-full px-3 py-2 bg-white border ${errors.email ? 'border-red-500' : 'border-[#D4C7B5]'} focus:outline-none focus:border-[#777A55] text-sm`}
                  />
                  {errors.email && <p className="text-red-600 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[#575249] uppercase tracking-wider mb-1 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="98765 43210"
                    className={`w-full px-3 py-2 bg-white border ${errors.phone ? 'border-red-500' : 'border-[#D4C7B5]'} focus:outline-none focus:border-[#777A55] text-sm`}
                  />
                  {errors.phone && <p className="text-red-600 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[#575249] uppercase tracking-wider mb-1 font-medium">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="400001"
                    maxLength={6}
                    className={`w-full px-3 py-2 bg-white border ${errors.pincode ? 'border-red-500' : 'border-[#D4C7B5]'} focus:outline-none focus:border-[#777A55] text-sm`}
                  />
                  {errors.pincode && <p className="text-red-600 text-[11px] mt-1">{errors.pincode}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#575249] uppercase tracking-wider mb-1 font-medium">
                    Street Address & Apartment *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Flat 4B, Heritage Enclave, Bandra West"
                    className={`w-full px-3 py-2 bg-white border ${errors.address ? 'border-red-500' : 'border-[#D4C7B5]'} focus:outline-none focus:border-[#777A55] text-sm`}
                  />
                  {errors.address && <p className="text-red-600 text-[11px] mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-[#575249] uppercase tracking-wider mb-1 font-medium">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Mumbai"
                    className={`w-full px-3 py-2 bg-white border ${errors.city ? 'border-red-500' : 'border-[#D4C7B5]'} focus:outline-none focus:border-[#777A55] text-sm`}
                  />
                  {errors.city && <p className="text-red-600 text-[11px] mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-[#575249] uppercase tracking-wider mb-1 font-medium">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-[#D4C7B5] focus:outline-none focus:border-[#777A55] text-sm"
                  >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Other">Other States & UTs</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-medium text-[#29251F] border-b border-[#E6DDD0] pb-2">
                2. Payment Method
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {(['UPI', 'Card', 'Cash on Delivery'] as const).map((method) => (
                  <label
                    key={method}
                    className={`p-3.5 border cursor-pointer flex flex-col justify-between transition-all ${
                      formData.paymentMethod === method 
                        ? 'border-[#777A55] bg-[#777A55]/10 font-semibold text-[#29251F]' 
                        : 'border-[#D4C7B5] bg-white text-[#575249] hover:border-[#777A55]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span>{method}</span>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={() => setFormData(prev => ({ ...prev, paymentMethod: method }))}
                        className="accent-[#777A55]"
                      />
                    </div>
                    <span className="text-[10px] text-[#575249]">
                      {method === 'UPI' && 'GPay / PhonePe / Paytm'}
                      {method === 'Card' && 'Debit / Credit / NetBanking'}
                      {method === 'Cash on Delivery' && 'Pay at doorstep upon arrival'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-[#E6DDD0] flex items-center justify-between">
              <button
                type="button"
                onClick={handleClose}
                className="text-xs uppercase tracking-wider text-[#575249] hover:text-[#29251F] font-medium"
              >
                Back to Bag
              </button>
              <button
                type="submit"
                disabled={isSubmitting || cart.length === 0}
                className="px-8 py-3.5 bg-[#29251F] hover:bg-[#777A55] text-[#F7F3EC] text-xs uppercase tracking-widest font-semibold transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Reserving Pieces...' : `Place Demo Order (₹${total.toLocaleString('en-IN')})`}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
