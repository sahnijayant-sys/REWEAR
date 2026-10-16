export type GarmentCondition = 'Pristine' | 'Excellent' | 'Very Good' | 'Good';

export type ProductCategory = 
  | 'Jackets & Coats' 
  | 'Denim & Bottoms' 
  | 'Knitwear & Sweaters' 
  | 'Vintage Shirts' 
  | 'Streetwear' 
  | 'Statement Pieces' 
  | 'Dresses & Skirts' 
  | 'Accessories';

export type MoodCategory = 
  | 'The Minimalist' 
  | 'The Vintage Soul' 
  | 'The Streetwear Era' 
  | 'The Soft Aesthetic' 
  | 'The Statement Maker';

export type CuratedCollection = 
  | 'Vintage Finds' 
  | 'Everyday Essentials' 
  | 'Streetwear' 
  | 'Denim & Bottoms' 
  | 'Statement Pieces' 
  | 'Under-Budget Finds';

export interface GarmentMeasurements {
  chest?: string;
  shoulder?: string;
  length?: string;
  sleeve?: string;
  waist?: string;
  inseam?: string;
  rise?: string;
  hips?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  collections: CuratedCollection[];
  moods: MoodCategory[];
  priceINR: number;
  originalPriceINR?: number;
  images: string[];
  size: string;
  measurements: GarmentMeasurements;
  condition: GarmentCondition;
  conditionNotes: string;
  flawDisclosure?: string;
  color: string;
  material: string;
  stockQuantity: number;
  isOneOfAKind: boolean;
  isJustAdded: boolean;
  isStaffPick?: boolean;
  dateAdded: string; // ISO format
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export interface FilterState {
  category: string;
  collection: string;
  mood: string;
  condition: string;
  size: string;
  color: string;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
  sortBy: 'newest' | 'price-asc' | 'price-desc' | 'featured';
}

export type ActivePage = 
  | 'home' 
  | 'shop' 
  | 'collections' 
  | 'product-detail' 
  | 'wishlist' 
  | 'about' 
  | 'sustainability' 
  | 'contact';

export interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  paymentMethod: 'UPI' | 'Card' | 'Cash on Delivery';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: string;
}
