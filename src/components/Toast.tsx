import React from 'react';
import { Check, Info, AlertCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Toast: React.FC = () => {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-fade-in pointer-events-none">
      <div className="bg-[#29251F] text-[#F7F3EC] px-4 py-3 shadow-xl border border-[#3D372F] flex items-center gap-3">
        {toast.type === 'success' && <Check size={18} className="text-[#90946E] flex-shrink-0" />}
        {toast.type === 'info' && <Info size={18} className="text-[#C99C91] flex-shrink-0" />}
        {toast.type === 'error' && <AlertCircle size={18} className="text-[#C99C91] flex-shrink-0" />}
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          {toast.message}
        </span>
      </div>
    </div>
  );
};
