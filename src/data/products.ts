import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'rw-001',
    name: '1990s Washed Denim Trucker Jacket',
    tagline: 'Heavyweight indigo with authentic lived-in fade',
    description: 'An iconic boxy-fit trucker jacket from the early 90s in 14oz ring-spun cotton denim. Features brass shank buttons, dual chest flap pockets, and twin welt hand pockets. The collar and cuffs show genuine sun-softened wear without any fraying.',
    category: 'Jackets & Coats',
    collections: ['Vintage Finds', 'Denim & Bottoms', 'Statement Pieces'],
    moods: ['The Vintage Soul', 'The Streetwear Era'],
    priceINR: 2450,
    originalPriceINR: 5800,
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'L (Boxy Relaxed)',
    measurements: {
      chest: '44 in (112 cm)',
      shoulder: '19.5 in (49.5 cm)',
      length: '26 in (66 cm)',
      sleeve: '25 in (63.5 cm)'
    },
    condition: 'Excellent',
    conditionNotes: 'Superb vintage structural integrity. Light natural honey-fade along sleeve creases. All original copper rivets and shank buttons firmly intact.',
    flawDisclosure: 'Subtle discoloration near the inside nape of neck collar, invisible when worn.',
    color: 'Washed Indigo',
    material: '100% Ring-Spun Cotton (14 oz)',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    isStaffPick: true,
    dateAdded: '2026-10-14T09:00:00Z'
  },
  {
    id: 'rw-002',
    name: 'Chunky Aran Cableknit Fisherman Sweater',
    tagline: 'Pure Irish-spun undyed wool with heritage honeycomb weave',
    description: 'A genuine hand-knitted heavy cableknit sweater in natural raw ecru wool. Substantial warmth with distinct honeycomb, cable, and diamond stitch patterns symbolizing fisherman fortunes. Retains its natural lanolin feel and warmth.',
    category: 'Knitwear & Sweaters',
    collections: ['Vintage Finds', 'Everyday Essentials'],
    moods: ['The Minimalist', 'The Soft Aesthetic', 'The Vintage Soul'],
    priceINR: 2890,
    originalPriceINR: 6200,
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'M (Slouchy Fit)',
    measurements: {
      chest: '42 in (106 cm)',
      shoulder: '20 in (51 cm)',
      length: '27 in (68.5 cm)',
      sleeve: '24 in (61 cm)'
    },
    condition: 'Pristine',
    conditionNotes: 'Lovingly preserved. No pilling, zero snags, ribs remain tightly elastic at hem and cuffs. Freshly steam-cleaned and cedar-stored.',
    flawDisclosure: 'None observed.',
    color: 'Ecru / Natural Oatmeal',
    material: '100% Undyed Shetland Wool',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    isStaffPick: true,
    dateAdded: '2026-10-15T11:30:00Z'
  },
  {
    id: 'rw-003',
    name: 'Pleated High-Rise Olive Chino Trousers',
    tagline: 'Military-spec tailored cotton twill with tapered leg',
    description: 'Circa late 80s double forward pleat army-surplus inspired trousers. Crafted in dense brushed cotton twill that drapes with an elegant drape. Features corozo button fly, coin pocket, and deep slash side pockets.',
    category: 'Denim & Bottoms',
    collections: ['Everyday Essentials', 'Vintage Finds', 'Denim & Bottoms'],
    moods: ['The Minimalist', 'The Vintage Soul'],
    priceINR: 1750,
    originalPriceINR: 3900,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80'
    ],
    size: '30W / 30L',
    measurements: {
      waist: '30 in (76 cm)',
      rise: '12.5 in (32 cm)',
      inseam: '30 in (76 cm)',
      hips: '41 in (104 cm)'
    },
    condition: 'Excellent',
    conditionNotes: 'Sturdy brushed twill, no fraying at cuffs. Fabric has softened with age to an exceptionally comfortable drape.',
    flawDisclosure: 'Tiny pin-sized discoloration near the back right pocket welt, scarcely noticeable.',
    color: 'Muted Olive Green',
    material: '100% Cotton Chino Twill',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: false,
    dateAdded: '2026-10-12T14:15:00Z'
  },
  {
    id: 'rw-004',
    name: 'Oversized Double-Breasted Wool Blazer',
    tagline: 'Tailored houndstooth with structured shoulders',
    description: 'An immaculate tailored blazer featuring a subtle black-and-tan micro-houndstooth check. Peak lapels, tortoiseshell buttons, fully lined interior in silky cupro, and an easy unisex drop-shoulder silhouette that pairs effortlessly over knitwear or vintage graphic tees.',
    category: 'Jackets & Coats',
    collections: ['Vintage Finds', 'Statement Pieces'],
    moods: ['The Statement Maker', 'The Minimalist'],
    priceINR: 3200,
    originalPriceINR: 7500,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'Free Size (Best fits M - XL)',
    measurements: {
      chest: '46 in (117 cm)',
      shoulder: '20 in (51 cm)',
      length: '31 in (79 cm)',
      sleeve: '25 in (63.5 cm)'
    },
    condition: 'Pristine',
    conditionNotes: 'Appears unworn vintage deadstock. Pockets remain factory-basted. Perfect shoulder structure and pristine cupro lining.',
    flawDisclosure: 'None.',
    color: 'Tan & Espresso Check',
    material: '90% Virgin Wool, 10% Cashmere',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    isStaffPick: true,
    dateAdded: '2026-10-15T08:00:00Z'
  },
  {
    id: 'rw-005',
    name: '90s Relaxed Heavyweight Graphic Crewneck',
    tagline: 'Sun-washed forest green with collegiate puff print',
    description: 'Vintage collegiate fleece pullover with ribbed side gussets for mobility. Heavyweight 450gsm loopback French terry, pre-shrunk with a boxy torso and drop shoulder fit.',
    category: 'Streetwear',
    collections: ['Streetwear', 'Everyday Essentials', 'Under-Budget Finds'],
    moods: ['The Streetwear Era'],
    priceINR: 1450,
    originalPriceINR: 3400,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'XL',
    measurements: {
      chest: '48 in (122 cm)',
      shoulder: '22 in (56 cm)',
      length: '28 in (71 cm)',
      sleeve: '24.5 in (62 cm)'
    },
    condition: 'Very Good',
    conditionNotes: 'True 90s vintage patina. Gentle distressing around the cuff edges that adds unmistakable street character.',
    flawDisclosure: 'Micro-cracking along the collegiate typography print; adds authentic vintage aesthetic.',
    color: 'Faded Forest Green',
    material: '100% Heavyweight Cotton Fleece',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: false,
    dateAdded: '2026-10-10T16:20:00Z'
  },
  {
    id: 'rw-006',
    name: 'Camp Collar Hand-Printed Silk Shirt',
    tagline: 'Fluid botanical drape with mother-of-pearl buttons',
    description: 'A relaxed Cuban-collar shirt in pure habotai silk featuring an earthy botanical terracotta and ochre illustration. Lightweight and breathable, designed with a straight vented hem.',
    category: 'Vintage Shirts',
    collections: ['Vintage Finds', 'Statement Pieces'],
    moods: ['The Statement Maker', 'The Vintage Soul'],
    priceINR: 1980,
    originalPriceINR: 4400,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'M',
    measurements: {
      chest: '42 in (106 cm)',
      shoulder: '18 in (46 cm)',
      length: '27.5 in (70 cm)',
      sleeve: '10 in (25.5 cm)'
    },
    condition: 'Excellent',
    conditionNotes: 'Silk retains liquid-like drape and vibrant colour. Seams are French-stitched throughout.',
    flawDisclosure: 'Spare button inside placket is missing, but all front functional buttons are intact.',
    color: 'Terracotta & Ochre',
    material: '100% Habotai Silk',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    dateAdded: '2026-10-13T11:00:00Z'
  },
  {
    id: 'rw-007',
    name: 'Vintage Levi’s 501 Straight Leg Raw Hem Denim',
    tagline: 'Mid-blue wash with authentic honeycombs & whiskering',
    description: 'Genuine vintage button-fly 501s with medium stonewash wear and custom raw-cut hems. High rise sits snugly at the natural waist with a straight silhouette through the leg.',
    category: 'Denim & Bottoms',
    collections: ['Denim & Bottoms', 'Vintage Finds', 'Everyday Essentials'],
    moods: ['The Vintage Soul', 'The Minimalist'],
    priceINR: 2350,
    originalPriceINR: 5200,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=1000&q=80'
    ],
    size: '28W / 29L',
    measurements: {
      waist: '28.5 in (72 cm)',
      rise: '11 in (28 cm)',
      inseam: '29 in (73.5 cm)',
      hips: '38 in (96.5 cm)'
    },
    condition: 'Very Good',
    conditionNotes: 'Thick non-stretch 100% cotton denim. The denim has molded to perfection with natural fading across thigh and knees.',
    flawDisclosure: 'Hemline was trimmed raw by previous owner to 29-inch length.',
    color: 'Medium Stonewash Indigo',
    material: '100% Rigid Cotton Denim',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: false,
    dateAdded: '2026-10-11T13:40:00Z'
  },
  {
    id: 'rw-008',
    name: 'Bias-Cut Dusty Rose Silk Slip Dress',
    tagline: 'Minimalist 90s fluid silhouette with delicate spaghetti straps',
    description: 'An ethereal bias-cut slip dress crafted from sand-washed silk crepe. Drapes naturally across the contour of the body with subtle cowl neck detailing and adjustable dainty strap ties. Wear solo with leather boots or layer over a white vintage baby tee.',
    category: 'Dresses & Skirts',
    collections: ['Statement Pieces', 'Everyday Essentials'],
    moods: ['The Soft Aesthetic', 'The Minimalist'],
    priceINR: 2650,
    originalPriceINR: 5900,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'S',
    measurements: {
      chest: '34 in (86 cm)',
      waist: '27 in (68.5 cm)',
      length: '46 in (117 cm)',
      hips: '37 in (94 cm)'
    },
    condition: 'Excellent',
    conditionNotes: 'Sand-washed silk finish feels peach-soft. Hemline is baby-rolled and flawless.',
    flawDisclosure: 'One faint water mark near lower back hem, only visible under direct inspection light.',
    color: 'Dusty Rose',
    material: '100% Sand-Washed Mulberry Silk',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    dateAdded: '2026-10-14T17:10:00Z'
  },
  {
    id: 'rw-009',
    name: 'Washed Khaki Chore Worker Coat',
    tagline: 'Heavy cotton drill with corduroy collar & patch utility pockets',
    description: 'European atelier utility work jacket in heavyweight duck canvas. Deep utility patch pockets with reinforced bar-tacking and a contrast espresso corduroy collar. Built to withstand decades of rewearing.',
    category: 'Jackets & Coats',
    collections: ['Vintage Finds', 'Everyday Essentials'],
    moods: ['The Vintage Soul', 'The Minimalist'],
    priceINR: 2750,
    originalPriceINR: 6500,
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'M / L',
    measurements: {
      chest: '45 in (114 cm)',
      shoulder: '19 in (48 cm)',
      length: '29 in (74 cm)',
      sleeve: '25 in (63.5 cm)'
    },
    condition: 'Excellent',
    conditionNotes: 'Sturdy hardware, reinforced buttonholes, soft break-in at the elbows.',
    flawDisclosure: 'One tiny oil spot on right lower pocket flap, characteristic of authentic workshop wear.',
    color: 'Caramel Sand / Olive',
    material: '100% Cotton Duck Canvas with Corduroy trim',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: false,
    isStaffPick: true,
    dateAdded: '2026-10-09T10:00:00Z'
  },
  {
    id: 'rw-010',
    name: 'Relaxed Striped Mohair Cardigan',
    tagline: 'Fluffy brushed knit in earthy olive, sand, and burnt sienna',
    description: 'Kurt Cobain-inspired relaxed cardigan in a luxurious mohair-wool blend. Features tortoise buttons, ribbed trims, and a relaxed dropped-shoulder silhouette that layers easily over tees and dresses.',
    category: 'Knitwear & Sweaters',
    collections: ['Vintage Finds', 'Statement Pieces', 'Streetwear'],
    moods: ['The Vintage Soul', 'The Streetwear Era'],
    priceINR: 2850,
    originalPriceINR: 6400,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'L',
    measurements: {
      chest: '46 in (117 cm)',
      shoulder: '21 in (53 cm)',
      length: '27 in (68.5 cm)',
      sleeve: '24 in (61 cm)'
    },
    condition: 'Excellent',
    conditionNotes: 'Soft, airy halo effect without shedding. Cuffs retain clean elastic recovery.',
    flawDisclosure: 'None.',
    color: 'Olive, Sand & Sienna',
    material: '40% Mohair, 40% Merino Wool, 20% Recycled Polyamide',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    dateAdded: '2026-10-15T15:20:00Z'
  },
  {
    id: 'rw-011',
    name: 'Boxy Vintage Oxford Cloth Button-Down (OCBD)',
    tagline: 'Heavy pinpoint cotton with classic unlined roll collar',
    description: 'The definitive American collegiate classic. Thick, breathable Oxford cotton with mother-of-pearl buttons, a generous back box pleat, and locker loop. Looks timeless tucked into trousers or worn open over a ribbed tank.',
    category: 'Vintage Shirts',
    collections: ['Everyday Essentials', 'Under-Budget Finds'],
    moods: ['The Minimalist'],
    priceINR: 1190,
    originalPriceINR: 2800,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'M',
    measurements: {
      chest: '42 in (106 cm)',
      shoulder: '18.5 in (47 cm)',
      length: '29 in (74 cm)',
      sleeve: '24.5 in (62 cm)'
    },
    condition: 'Pristine',
    conditionNotes: 'Fabric feels sturdy and crisp. Colar roll holds shape beautifully without starch.',
    flawDisclosure: 'None.',
    color: 'Pale Sky Blue',
    material: '100% Combed Oxford Cotton',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: false,
    dateAdded: '2026-10-08T12:00:00Z'
  },
  {
    id: 'rw-012',
    name: 'Vintage Hand-Tooled Cognac Leather Shoulder Bag',
    tagline: 'Vegetable-tanned full-grain leather with brass saddle buckle',
    description: 'An artisanal 1970s crossbody saddle bag in thick cognac bridle leather. Features embossed floral tooling along the front flap, divided interior compartments, and an adjustable shoulder strap that has developed a glowing rich patina over decades.',
    category: 'Accessories',
    collections: ['Vintage Finds', 'Statement Pieces', 'Under-Budget Finds'],
    moods: ['The Vintage Soul', 'The Soft Aesthetic'],
    priceINR: 1850,
    originalPriceINR: 4200,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'One Size (10" x 8" x 3")',
    measurements: {
      length: '10 in (25.5 cm)',
      shoulder: 'Strap drop 18-22 in adjustable'
    },
    condition: 'Very Good',
    conditionNotes: 'Supple leather treated with organic beeswax balm. Solid brass hardware with natural aged oxidation.',
    flawDisclosure: 'Light surface scuffs on rear face from friction against clothing; leather has aged beautifully.',
    color: 'Cognac Saddle Brown',
    material: '100% Vegetable-Tanned Cowhide Leather',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    isStaffPick: true,
    dateAdded: '2026-10-14T10:45:00Z'
  },
  {
    id: 'rw-013',
    name: 'High-Waisted Pleated Linen Midi Skirt',
    tagline: 'Pure Belgian flax linen with horn buttons & side pockets',
    description: 'An effortlessly breezy A-line midi skirt with deep side seam pockets and an elasticated back waistband for an adaptable, flattering fit. Cut from dense raw flax linen that softens with every wash.',
    category: 'Dresses & Skirts',
    collections: ['Everyday Essentials', 'Vintage Finds'],
    moods: ['The Soft Aesthetic', 'The Minimalist'],
    priceINR: 1690,
    originalPriceINR: 3800,
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'S / M (Elastic Back)',
    measurements: {
      waist: '26 - 30 in (66 - 76 cm)',
      length: '32 in (81 cm)',
      hips: 'Free (A-line flare)'
    },
    condition: 'Excellent',
    conditionNotes: 'Flax weave is intact and vibrant. Horn buttons are firmly sewn.',
    flawDisclosure: 'Natural slubs characteristic of authentic pure flax linen.',
    color: 'Warm Sandstone',
    material: '100% Belgian Flax Linen',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: false,
    dateAdded: '2026-10-07T14:30:00Z'
  },
  {
    id: 'rw-014',
    name: 'Japanese Carpenter Indigo Dungarees / Overalls',
    tagline: 'Heavy raw denim with brass hardware & rule pocket',
    description: 'Classic workwear overalls in deep indigo denim with contrast ecru triple-stitching. Straight relaxed fit with hammer loop, bib pocket with pencil division, and brass slide buckles.',
    category: 'Denim & Bottoms',
    collections: ['Denim & Bottoms', 'Streetwear', 'Statement Pieces'],
    moods: ['The Streetwear Era', 'The Vintage Soul'],
    priceINR: 2950,
    originalPriceINR: 6800,
    images: [
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'M (Relaxed Unisex)',
    measurements: {
      waist: '32 in (81 cm)',
      rise: '13 in (33 cm)',
      inseam: '31 in (79 cm)',
      hips: '42 in (106 cm)'
    },
    condition: 'Excellent',
    conditionNotes: 'Solid heavy weight denim with zero knee bagging. All rivets and clips function smoothly.',
    flawDisclosure: 'Mild wear along bottom back hem from contact with boots.',
    color: 'Deep Indigo',
    material: '100% Japanese Selvedge-style Cotton Denim',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    dateAdded: '2026-10-15T18:00:00Z'
  },
  {
    id: 'rw-015',
    name: 'Washed Black Minimalist Boxy Popover',
    tagline: 'Clean architectural pullover in Japanese organic cotton',
    description: 'Minimalist popover tunic with a clean mandarin neck and hidden placket. Relaxed drop-shoulder cut that looks sharp and sculptural in modern casual wardrobes.',
    category: 'Vintage Shirts',
    collections: ['Everyday Essentials', 'Under-Budget Finds'],
    moods: ['The Minimalist'],
    priceINR: 1350,
    originalPriceINR: 3200,
    images: [
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'L',
    measurements: {
      chest: '44 in (112 cm)',
      shoulder: '19.5 in (49.5 cm)',
      length: '28.5 in (72 cm)',
      sleeve: '25 in (63.5 cm)'
    },
    condition: 'Pristine',
    conditionNotes: 'Deep charcoal-black color preserved without uneven fading. Crisp fabric structure.',
    flawDisclosure: 'None.',
    color: 'Washed Charcoal Black',
    material: '100% Organic Cotton Poplin',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: false,
    dateAdded: '2026-10-06T15:00:00Z'
  },
  {
    id: 'rw-016',
    name: 'Pure Mulberry Silk Paisley Square Scarf',
    tagline: '36-inch hand-rolled silk foulard in olive & copper motifs',
    description: 'A genuine archival silk twill scarf with intricate heritage paisley arabesques. Hand-rolled hems give it a luxurious plump edge. Can be worn as a neckerchief, hair bandana, or tied to a thrifted handbag handle.',
    category: 'Accessories',
    collections: ['Vintage Finds', 'Under-Budget Finds'],
    moods: ['The Vintage Soul', 'The Soft Aesthetic', 'The Statement Maker'],
    priceINR: 950,
    originalPriceINR: 2500,
    images: [
      'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80'
    ],
    size: 'One Size (36" x 36")',
    measurements: {
      length: '36 x 36 in (91 x 91 cm)'
    },
    condition: 'Pristine',
    conditionNotes: 'Silky luster is rich and crisp. Rolled edges are tight and undamaged.',
    flawDisclosure: 'None.',
    color: 'Olive, Copper & Cream',
    material: '100% Mulberry Silk Twill (16 momme)',
    stockQuantity: 1,
    isOneOfAKind: true,
    isJustAdded: true,
    dateAdded: '2026-10-15T12:00:00Z'
  }
];

export const CURATED_COLLECTIONS_DATA = [
  {
    id: 'vintage-finds',
    name: 'Vintage Finds',
    tagline: 'Archival garments from the 70s, 80s, and 90s with irreplaceable character.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    count: 8,
    categoryFilter: 'Vintage Finds'
  },
  {
    id: 'everyday-essentials',
    name: 'Everyday Essentials',
    tagline: 'Wardrobe anchors: clean poplins, chinos, and sweaters made to be worn on repeat.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    count: 7,
    categoryFilter: 'Everyday Essentials'
  },
  {
    id: 'streetwear',
    name: 'Streetwear',
    tagline: 'Heavyweight fleece, boxy tees, and skater silhouettes with relaxed energy.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    count: 5,
    categoryFilter: 'Streetwear'
  },
  {
    id: 'denim-bottoms',
    name: 'Denim & Bottoms',
    tagline: 'Rigid cotton Levi’s, army fatigue chinos, and carpenter dungarees that age with dignity.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    count: 5,
    categoryFilter: 'Denim & Bottoms'
  },
  {
    id: 'statement-pieces',
    name: 'Statement Pieces',
    tagline: 'Rare houndstooth tailoring, silk printed camp shirts, and head-turning outer layers.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    count: 6,
    categoryFilter: 'Statement Pieces'
  },
  {
    id: 'under-budget-finds',
    name: 'Under-Budget Finds',
    tagline: 'Curated one-of-a-kind steals under ₹1,500 that never compromise on quality.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    count: 5,
    categoryFilter: 'Under-Budget Finds'
  }
];

export const MOODS_DATA = [
  {
    id: 'minimalist',
    name: 'The Minimalist',
    description: 'Clean geometry, quiet neutral palettes, and refined functional simplicity.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    tag: 'The Minimalist'
  },
  {
    id: 'vintage-soul',
    name: 'The Vintage Soul',
    description: 'Patinated denim, chunky heritage knits, and genuine retro textures.',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
    tag: 'The Vintage Soul'
  },
  {
    id: 'streetwear-era',
    name: 'The Streetwear Era',
    description: 'Relaxed proportions, collegiate typography, and vintage subculture energy.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    tag: 'The Streetwear Era'
  },
  {
    id: 'soft-aesthetic',
    name: 'The Soft Aesthetic',
    description: 'Airy silks, pastel undertones, brushed mohair, and feminine vintage slips.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    tag: 'The Soft Aesthetic'
  },
  {
    id: 'statement-maker',
    name: 'The Statement Maker',
    description: 'Oversized structured coats, hand-printed silks, and bold archival cuts.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    tag: 'The Statement Maker'
  }
];

export const STYLE_INSPIRATIONS = [
  {
    id: 'look-1',
    title: 'Autumn Layering with 90s Denim',
    caption: 'Pairing a heavy trucker jacket over an Aran cableknit sweater with relaxed chinos.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80',
    linkedProductId: 'rw-001',
    category: 'Layering'
  },
  {
    id: 'look-2',
    title: 'Tailored Meets Casual',
    caption: 'Double-breasted houndstooth blazer draped casually over high-rise raw hem 501s.',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=80',
    linkedProductId: 'rw-004',
    category: 'Tailoring'
  },
  {
    id: 'look-3',
    title: 'Effortless Summer Silk',
    caption: 'Silk slip dress paired with vintage cowboy boots and a tied linen overshirt.',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80',
    linkedProductId: 'rw-008',
    category: 'Feminine'
  },
  {
    id: 'look-4',
    title: 'Subcultural Streetwear',
    caption: 'Sun-faded forest green crewneck over wide-leg pleated trousers with leather accessories.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=700&q=80',
    linkedProductId: 'rw-005',
    category: 'Streetwear'
  }
];

export const FAQS_DATA = [
  {
    question: 'What does "thrifted clothing" mean at Rewear?',
    answer: 'Thrifted clothing means garments that have had a previous life and owner. At Rewear, we handpick each piece based on fabric quality, construction integrity, timeless aesthetics, and unique design. Every piece is professionally dry-cleaned, steamed, measured, and inspected before being listed.'
  },
  {
    question: 'How are garments graded for condition?',
    answer: 'We use a strict 4-tier grading system:\n• Pristine: Shows little to no visible sign of wear; like-new vintage or deadstock.\n• Excellent: Gentle pre-loved character with no structural flaws, stains, or damage.\n• Very Good: Normal minor signs of vintage wear (such as gentle patina or fade) that enhance the garment\'s authentic aesthetic.\n• Good: Noticeable character markings (e.g. distressed edges, subtle paint splatter) that are clearly photographed and disclosed.'
  },
  {
    question: 'How should I choose my size for thrifted clothing?',
    answer: 'Vintage sizing often differs significantly from modern high-street sizing. Therefore, we do not rely solely on tag sizes! We take exact flat garment measurements in inches and centimetres (chest, shoulder, sleeve, waist, inseam, length). We strongly advise measuring a favourite garment in your existing closet that fits you well and comparing it to our measurements.'
  },
  {
    question: 'Are all products truly one of a kind?',
    answer: 'Yes! Almost every item in our store is unique and we only hold a single piece in inventory (Quantity: 1). Once an item is placed in an order and sold, it is gone. If you love a piece, we recommend securing it early.'
  },
  {
    question: 'What are your delivery and shipping timelines across India?',
    answer: 'Orders are dispatched within 24–48 hours from our studio in biodegradable, recycled paper packaging. Standard delivery takes 3–5 business days to metros and 5–7 business days to regional locations across India. Tracking details are provided upon dispatch.'
  },
  {
    question: 'What is Rewear\'s return and exchange policy?',
    answer: 'Because thrift items are individual, one-off pieces, each return represents an item that other customers cannot purchase. To maintain fair access and reduce shipping emissions, we offer returns for store credit within 48 hours of delivery if an item has an undisclosed defect or does not match our listed measurements.'
  },
  {
    question: 'How can I contact the Rewear styling team?',
    answer: 'You can reach us through our contact form on this website or email us directly at hello@rewear.store. Our team is happy to send additional video clips, measurement checks, or styling advice.'
  }
];
