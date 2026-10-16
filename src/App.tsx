/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal } from './components/PolicyModal';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { activePage } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EC] text-[#29251F] selection:bg-[#777A55]/20 selection:text-[#29251F]">
      <Navbar />

      <main className="flex-1">
        {activePage === 'home' && <HomePage />}
        {activePage === 'shop' && <ShopPage />}
        {activePage === 'collections' && <CollectionsPage />}
        {activePage === 'product-detail' && <ProductDetailPage />}
        {activePage === 'wishlist' && <WishlistPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'sustainability' && <SustainabilityPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <Footer />

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <SearchModal />
      <CheckoutModal />
      <PolicyModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
