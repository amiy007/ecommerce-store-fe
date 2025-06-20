'use client'
import { products, Product } from '@/data/products';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import ProductQuickViewModal from '@/components/ProductQuickViewModal';

const womenProducts = products.filter(p => p.category === 'women');

export default function WomenPage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  function toggleWishlist(id: string) {
    let updated: string[];
    if (wishlist.includes(id)) {
      updated = wishlist.filter(wid => wid !== id);
    } else {
      updated = [...wishlist, id];
    }
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  }

  function handleAddToCart(productName: string) {
    alert(`${productName} added to cart!`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-8">
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-blue-600 p-8 text-white text-center shadow-lg mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Women&apos;s Collection</h1>
          <p className="text-lg md:text-2xl mb-4">Explore trending styles and elegant outfits for women</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {womenProducts.map(product => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gradient-to-r hover:from-pink-400 hover:to-blue-400 relative">
                <div className="w-40 h-40 mb-4 relative flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-lg overflow-hidden">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover rounded-lg" />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow font-bold tracking-wide animate-bounce z-10">
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition"
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    {isWishlisted ? (
                      <HeartSolid className="h-6 w-6 text-pink-500 fill-pink-500" />
                    ) : (
                      <HeartOutline className="h-6 w-6 text-pink-500" />
                    )}
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{product.name}</h3>
                <div className="text-lg font-bold text-pink-600 mb-2">${product.price}</div>
                <div className="flex gap-2 w-full mt-auto">
                  <button className="flex-1 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition" onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
                  <button className="flex-1 bg-gray-200 text-pink-700 px-4 py-2 rounded-lg shadow hover:bg-pink-100 transition" onClick={() => setQuickViewProduct(product)}>Quick View</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <ProductQuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </main>
  );
} 