import React from 'react';
import { X, ShieldCheck, Truck, RefreshCw, Lock, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const PolicyModal: React.FC = () => {
  const { activePolicyModal, setActivePolicyModal } = useShop();

  if (!activePolicyModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#29251F]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#F7F3EC] shadow-2xl border border-[#E6DDD0] p-6 sm:p-8">
        <button
          onClick={() => setActivePolicyModal(null)}
          className="absolute top-4 right-4 p-2 text-[#29251F] hover:text-[#777A55] transition-colors"
        >
          <X size={20} />
        </button>

        {activePolicyModal === 'shipping' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#777A55]">
              <Truck size={22} />
              <h3 className="font-serif text-2xl font-medium text-[#29251F]">
                Shipping & Returns Policy
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-[#575249] space-y-3 leading-relaxed">
              <p>
                <strong>Domestic Dispatch across India:</strong> All orders are carefully packed in 100% biodegradable FSC-certified kraft paper mailers and dispatched from our studio within 24 to 48 business hours.
              </p>
              <p>
                <strong>Delivery Timelines:</strong>
                <br />• Metro Cities (Mumbai, Delhi NCR, Bangalore, Kolkata, Chennai, Hyderabad): 3–4 business days.
                <br />• Rest of India: 5–7 business days.
              </p>
              <p>
                <strong>Shipping Fees:</strong> Standard flat shipping of ₹150 applies on orders below ₹2,000. Orders of ₹2,000 and above receive complimentary express shipping.
              </p>
              <p>
                <strong>48-Hour Return Window:</strong> Because every garment is an individual archive piece, we offer store credit returns requested within 48 hours of delivery if an item has an undisclosed defect or deviates noticeably from our listed flat measurements. Return pickup is arranged directly through our support.
              </p>
            </div>
          </div>
        )}

        {activePolicyModal === 'grading' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#777A55]">
              <ShieldCheck size={22} />
              <h3 className="font-serif text-2xl font-medium text-[#29251F]">
                Rewear Condition Grading Guide
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-[#575249] space-y-3 leading-relaxed">
              <p>
                Because vintage sizing and condition differ from modern off-the-rack fashion, our curatorial team inspects every seam, button, and fiber under daylight lamps before listing.
              </p>
              <div className="space-y-2 border-t border-[#E6DDD0] pt-3">
                <div className="bg-white p-3 border border-[#E6DDD0]">
                  <strong className="text-[#29251F] block text-xs uppercase tracking-wider">Pristine</strong>
                  <span className="text-xs">Deadstock or virtually unworn. Crisp fabric, intact original structure, zero pilling, flawless lining.</span>
                </div>
                <div className="bg-white p-3 border border-[#E6DDD0]">
                  <strong className="text-[#29251F] block text-xs uppercase tracking-wider">Excellent</strong>
                  <span className="text-xs">Gently worn with beautiful soft hand-feel. No tears, missing buttons, or stains. Stitching is fully intact.</span>
                </div>
                <div className="bg-white p-3 border border-[#E6DDD0]">
                  <strong className="text-[#29251F] block text-xs uppercase tracking-wider">Very Good</strong>
                  <span className="text-xs">Natural vintage patina such as honeycombing on denim or soft fading along collar folds. Adds authentic vintage character.</span>
                </div>
                <div className="bg-white p-3 border border-[#E6DDD0]">
                  <strong className="text-[#29251F] block text-xs uppercase tracking-wider">Good</strong>
                  <span className="text-xs">Noticeable historical character markings (e.g. distressed cuff hems, subtle wash fade). Always clearly photographed and described.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePolicyModal === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#777A55]">
              <Lock size={22} />
              <h3 className="font-serif text-2xl font-medium text-[#29251F]">
                Privacy & Data Integrity
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-[#575249] space-y-3 leading-relaxed">
              <p>
                At Rewear, your privacy is respected completely. We do not sell, rent, or trade customer contact details with third-party advertisers.
              </p>
              <p>
                <strong>Information Collected:</strong> Delivery addresses and phone numbers are used strictly for shipping coordination and dispatch tracking. Email addresses provided for drops are used solely for notifying you about curated arrivals.
              </p>
              <p>
                <strong>Prototype Notice:</strong> In this interactive demo prototype, order data and wishlist preferences are maintained in your local browser session storage without transmitting sensitive financial information.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#E6DDD0] flex justify-end">
          <button
            onClick={() => setActivePolicyModal(null)}
            className="px-6 py-2.5 bg-[#29251F] text-[#F7F3EC] text-xs uppercase tracking-wider font-medium hover:bg-[#777A55] transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
