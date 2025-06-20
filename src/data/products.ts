export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women';
  price: number;
  images: string[];
  description: string;
  badge?: string;
  rating?: number;
  reviews?: Review[];
}

export const products: Product[] = [
  {
    id: '1',
    name: "Men's Classic T-Shirt",
    category: 'men',
    price: 29.99,
    images: ['/images/mens-tshirt.webp', '/images/mens-tshirt.webp'],
    description: 'Classic cotton t-shirt for everyday wear',
    badge: 'Best Seller',
    rating: 4.5,
    reviews: [
      { user: 'Amit', rating: 5, comment: 'Great quality and fit!' },
      { user: 'Priya', rating: 4, comment: 'Nice color and comfortable.' },
    ],
  },
  {
    id: '2',
    name: "Men's Denim Jeans",
    category: 'men',
    price: 79.99,
    images: ['/images/mens-denim-jeans.webp', '/images/mens-denim-jeans.webp'],
    description: 'Comfortable slim-fit denim jeans',
    badge: 'New',
    rating: 4.0,
    reviews: [
      { user: 'Rahul', rating: 4, comment: 'Good fit, but a bit pricey.' },
    ],
  },
  {
    id: '3',
    name: "Women's Summer Dress",
    category: 'women',
    price: 59.99,
    images: ['/images/womens-summer-dress.jpeg', '/images/womens-summer-dress.jpeg'],
    description: 'Floral print summer dress',
    rating: 5.0,
    reviews: [
      { user: 'Sneha', rating: 5, comment: 'Absolutely love it!' },
    ],
  },
  {
    id: '4',
    name: "Women's Blouse",
    category: 'women',
    price: 44.99,
    images: ['/images/womens-blouse.webp', '/images/womens-blouse.webp'],
    description: 'Elegant silk blouse',
    badge: 'Trending',
    rating: 4.8,
    reviews: [
      { user: 'Anjali', rating: 5, comment: 'Very elegant and soft.' },
      { user: 'Ritu', rating: 4.5, comment: 'Looks great for office wear.' },
    ],
  },
]; 