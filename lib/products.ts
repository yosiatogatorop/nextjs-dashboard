import { CAKE_CATEGORIES } from './constants';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  size?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  rating?: number;
  reviewCount?: number;
  ingredients?: string[];
  allergens?: string[];
  decorations?: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  comment: string;
  rating: number;
  image?: string;
  date?: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Enchanted Heart Cake',
    price: 59.99,
    image: 'enchanted-heart.jpg',
    description: 'Luscious red velvet heart-shaped cake with cream cheese frosting and edible gold leaf details',
    category: 'romantic',
    size: '8"',
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 42,
    ingredients: ['Red velvet', 'Cream cheese', 'Fresh raspberries', 'Edible gold'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    decorations: ['Heart-shaped', 'Gold leaf', 'Fresh flowers']
  },
  {
    id: 2,
    name: 'Eternal Love Chocolate',
    price: 65.99,
    image: 'eternal-love.jpg',
    description: 'Rich chocolate cake layered with chocolate ganache and fresh strawberries, decorated with chocolate curls',
    category: 'anniversary',
    size: '9"',
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 56,
    ingredients: ['Dark chocolate', 'Fresh cream', 'Strawberries', 'Chocolate curls'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    decorations: ['Chocolate heart', 'Berry compote', 'Edible flowers']
  },
  {
    id: 3,
    name: 'Blushing Romance',
    price: 72.99,
    image: 'blushing-romance.jpg',
    description: 'Delicate vanilla sponge with rose-infused buttercream and raspberry filling, decorated with sugar flowers',
    category: 'valentine',
    size: '10"',
    isFeatured: true,
    rating: 5.0,
    reviewCount: 38,
    ingredients: ['Vanilla bean', 'Rose water', 'Raspberry jam', 'Edible flowers'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    decorations: ['Sugar flowers', 'Pink ombre', 'Pearl details']
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 4,
    name: 'Sweetheart Surprise',
    price: 49.99,
    image: 'sweetheart-surprise.jpg',
    description: 'Moist strawberry cake with vanilla buttercream and hidden heart-shaped raspberry filling',
    category: 'romantic',
    size: '6"',
    rating: 4.7,
    reviewCount: 29,
    ingredients: ['Fresh strawberries', 'Vanilla bean', 'Raspberry coulis'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    decorations: ['Heart-shaped', 'Pink drizzle', 'White chocolate']
  },
  {
    id: 5,
    name: 'Golden Anniversary',
    price: 89.99,
    image: 'golden-anniversary.jpg',
    description: 'Elegant two-tier vanilla cake with gold accents and champagne-infused buttercream',
    category: 'anniversary',
    size: '8" + 6"',
    isNew: true,
    rating: 4.9,
    reviewCount: 18,
    ingredients: ['Vanilla bean', 'Champagne', 'Edible gold', 'White chocolate'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    decorations: ['Two-tier', 'Gold leaf', 'Sugar pearls']
  },
  {
    id: 6,
    name: 'Cupid\'s Delight',
    price: 54.99,
    image: 'cupids-delight.jpg',
    description: 'Fluffy vanilla cake with strawberry mousse filling and white chocolate ganache',
    category: 'valentine',
    size: '8"',
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 47,
    ingredients: ['Vanilla', 'Strawberry mousse', 'White chocolate', 'Fresh berries'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    decorations: ['Heart sprinkles', 'Chocolate drizzle', 'Berry topping']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'Anniversary Celebration',
    comment: 'The Enchanted Heart Cake made our 10th anniversary unforgettable. The taste was divine and the presentation breathtaking!',
    rating: 5,
    image: 'couple-1.jpg',
    date: 'February 14, 2025'
  },
  {
    id: 2,
    name: 'Jessica Wilson',
    role: 'Valentine\'s Day Surprise',
    comment: 'My partner was speechless when he saw the Blushing Romance cake. The rose flavor was subtle and perfect. Worth every penny!',
    rating: 5,
    date: 'February 10, 2025'
  },
  {
    id: 3,
    name: 'David Thompson',
    role: 'Proposal Cake',
    comment: 'Used the Eternal Love Chocolate cake for my proposal. She said yes before I even asked the question! The cake was that good.',
    rating: 4,
    image: 'couple-2.jpg',
    date: 'January 28, 2025'
  },
  {
    id: 4,
    name: 'Olivia Martinez',
    role: 'Wedding Cake',
    comment: 'Our Golden Anniversary cake was the centerpiece of our wedding. Guests couldn\'t stop talking about how beautiful and delicious it was.',
    rating: 5,
    date: 'December 15, 2024'
  },
  {
    id: 5,
    name: 'Robert Chen',
    role: 'Birthday Surprise',
    comment: 'Ordered Cupid\'s Delight for my wife\'s birthday. The strawberry mousse filling was heavenly. Will definitely order again!',
    rating: 4,
    date: 'November 20, 2024'
  },
  {
    id: 6,
    name: 'Emily Davis',
    role: 'Just Because',
    comment: 'The Sweetheart Surprise cake was adorable and delicious. Perfect for our date night in. The hidden heart was a lovely touch!',
    rating: 5,
    image: 'couple-3.jpg',
    date: 'October 5, 2024'
  }
];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return featuredProducts;
};

export const getProductById = (id: number) => {
  return allProducts.find(product => product.id === id);
};

export const getTestimonials = () => {
  return testimonials;
};