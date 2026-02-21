export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  macros: {
    protein: number;
    sugar: number;
    fiber: number;
    calories: number;
  };
  ingredients: string[];
  fermentationProcess: string;
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'classic-high-protein-sourdough',
    name: 'Classic High-Protein Sourdough',
    description: 'Our flagship naturally fermented bread with an airy crumb and balanced tang.',
    price: 10.99,
    images: ['linear-gradient(145deg, #472F0B, #878E2E)'],
    macros: { protein: 14, sugar: 2, fiber: 5, calories: 160 },
    ingredients: ['Stone-ground wheat flour', 'Pea protein', 'Sea salt', 'Natural starter', 'Filtered water'],
    fermentationProcess: '72-hour cold fermentation for flavor depth and better digestibility.',
  },
  {
    id: '2',
    slug: 'seeded-power-loaf',
    name: 'Seeded Power Loaf',
    description: 'Nutrient-dense high protein artisan bread loaded with toasted seeds and soft bite.',
    price: 12.49,
    images: ['linear-gradient(145deg, #878E2E, #C2DCFF)'],
    macros: { protein: 16, sugar: 2, fiber: 6, calories: 170 },
    ingredients: ['Whole grain flour', 'Pumpkin seeds', 'Sunflower seeds', 'Natural starter', 'Sea salt'],
    fermentationProcess: 'Long fermentation plus overnight hydration to keep texture plush.',
  },
  {
    id: '3',
    slug: 'cinnamon-protein-swirl',
    name: 'Cinnamon Protein Swirl',
    description: 'Warm cinnamon ribboned through low sugar bread with a bakery-soft crumb.',
    price: 11.99,
    images: ['linear-gradient(145deg, #600F15, #FF9999)'],
    macros: { protein: 15, sugar: 4, fiber: 4, calories: 175 },
    ingredients: ['Unbleached flour', 'Whey isolate', 'Cinnamon', 'Date sugar', 'Natural starter'],
    fermentationProcess: 'Gentle fold-and-rest fermentation to preserve aroma and softness.',
  },
];

export const buildCheckoutPayload = (items: { id: string; quantity: number }[]) => ({
  currency: 'usd',
  items: items.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return {
      productId: item.id,
      name: product?.name,
      unit_amount: product ? Math.round(product.price * 100) : 0,
      quantity: item.quantity,
    };
  }),
  metadata: {
    brand: 'Loafy',
    source: 'web-checkout-placeholder',
  },
});
