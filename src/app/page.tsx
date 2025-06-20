'use client'

import HeroBanner from '@/components/HeroBanner';
import CategoryCards from '@/components/CategoryCards';
import ProductFilterBar from '@/components/ProductFilterBar';
import ProductQuickViewModal from '@/components/ProductQuickViewModal';
import { Product } from '@/data/products';
import { useState } from 'react';
import Image from 'next/image';

const staticFeatured = [
  {
    id: '1',
    name: "Men's Classic T-Shirt",
    price: 29.99,
    badge: 'Best Seller',
    image: '/images/mens-tshirt.webp',
  },
  {
    id: '2',
    name: "Men's Denim Jeans",
    price: 79.99,
    badge: 'New',
    image: '/images/mens-denim-jeans.webp',
  },
  {
    id: '3',
    name: "Women's Summer Dress",
    price: 59.99,
    badge: 'Trending',
    image: '/images/womens-summer-dress.jpeg',
  },
];

export default function Home() {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [size, setSize] = useState('');
  const [rating, setRating] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="container mx-auto px-4">
      <HeroBanner />
      <CategoryCards />
      <ProductFilterBar
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        size={size}
        setSize={setSize}
        rating={rating}
        setRating={setRating}
      />
      {/* Redesigned Featured Products Section */}
      <section className="my-12 rounded-2xl p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 drop-shadow">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staticFeatured.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-pink-400 relative"
            >
              <div className="w-40 h-40 mb-4 relative flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-lg overflow-hidden">
                {/* Show image if available, else show placeholder */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160x160?text=No+Image';
                  }}
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow font-bold tracking-wide animate-bounce z-10">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{item.name}</h3>
              <div className="text-lg font-bold text-pink-600 mb-2">${item.price}</div>
              <button className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">View Details</button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-pink-600 transition-colors duration-200">View All Products</a>
        </div>
      </section>
      <ProductQuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
} 