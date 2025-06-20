export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women';
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: "Men's Classic T-Shirt",
    category: 'men',
    price: 29.99,
    image: '/images/mens-tshirt.jpg',
    description: 'Classic cotton t-shirt for everyday wear'
  },
  {
    id: '2',
    name: "Men's Denim Jeans",
    category: 'men',
    price: 79.99,
    image: '/images/mens-jeans.jpg',
    description: 'Comfortable slim-fit denim jeans'
  },
  {
    id: '3',
    name: "Women's Summer Dress",
    category: 'women',
    price: 59.99,
    image: '/images/womens-dress.jpg',
    description: 'Floral print summer dress'
  },
  {
    id: '4',
    name: "Women's Blouse",
    category: 'women',
    price: 44.99,
    image: '/images/womens-blouse.jpg',
    description: 'Elegant silk blouse'
  },
]; 