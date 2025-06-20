import { Product } from '@/data/products';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
  onQuickView?: () => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const isWishlisted = wishlist.includes(product.id);

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  function toggleWishlist() {
    let updated: string[];
    if (isWishlisted) {
      updated = wishlist.filter(id => id !== product.id);
    } else {
      updated = [...wishlist, product.id];
    }
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group relative border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-pink-400 animate-fade-in">
      <div className="relative h-64">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow font-bold tracking-wide animate-bounce z-10">
            {product.badge}
          </span>
        )}
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isWishlisted ? (
            <HeartSolid className="h-6 w-6 text-pink-500 fill-pink-500" />
          ) : (
            <HeartOutline className="h-6 w-6 text-pink-500" />
          )}
        </button>
        {onQuickView && (
          <button
            onClick={onQuickView}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 text-blue-600 px-4 py-1 rounded shadow hover:bg-blue-600 hover:text-white transition"
          >
            Quick View
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-700 transition-colors duration-200">{product.name}</h3>
        <p className="text-gray-600 mt-2 mb-2 min-h-[40px]">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-pink-600">${product.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow transition-all duration-200 transform group-hover:scale-110 hover:bg-blue-700 hover:shadow-lg active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 