import { Product } from '@/data/products';
import Image from 'next/image';
import { useState } from 'react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-400">
      {'★'.repeat(Math.round(rating))}
      {'☆'.repeat(5 - Math.round(rating))}
    </span>
  );
}

function SizeGuideModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close Size Guide"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4">Size Guide</h3>
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Size</th>
              <th className="p-2 border">Chest (in)</th>
              <th className="p-2 border">Waist (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border">S</td><td className="p-2 border">36-38</td><td className="p-2 border">30-32</td></tr>
            <tr><td className="p-2 border">M</td><td className="p-2 border">39-41</td><td className="p-2 border">33-35</td></tr>
            <tr><td className="p-2 border">L</td><td className="p-2 border">42-44</td><td className="p-2 border">36-38</td></tr>
            <tr><td className="p-2 border">XL</td><td className="p-2 border">45-47</td><td className="p-2 border">39-41</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ProductQuickViewModal({ product, onClose }: ProductQuickViewModalProps) {
  const [mainIdx, setMainIdx] = useState(0);
  const [reviews, setReviews] = useState(product?.reviews || []);
  const [user, setUser] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) return null;
  const mainImage = product.images[mainIdx] || product.images[0];
  const avgRating = reviews.length ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) : 'N/A';

  function handleReviewSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !comment) return;
    setReviews([...reviews, { user, rating, comment }]);
    setUser('');
    setRating(5);
    setComment('');
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative p-6 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="relative h-64 w-full mb-4 group overflow-hidden">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-cover rounded transition-transform duration-200 group-hover:scale-110"
          />
        </div>
        <div className="flex gap-2 mb-4 justify-center">
          {product.images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setMainIdx(idx)}
              className={`h-12 w-12 rounded border ${mainIdx === idx ? 'border-blue-600' : 'border-gray-200'}`}
            >
              <Image src={img} alt={product.name} width={48} height={48} className="object-cover rounded" />
            </button>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={Number(avgRating)} />
          <span className="text-gray-600 text-sm">{avgRating} ({reviews.length} reviews)</span>
        </div>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <div className="text-xl font-bold mb-4">${product.price}</div>
        <div className="flex gap-2 mb-6">
          <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Add to Cart</button>
          <button
            className="w-full bg-gray-200 text-gray-800 py-2 rounded font-semibold hover:bg-gray-300 transition"
            onClick={() => setShowSizeGuide(true)}
          >
            Size Guide
          </button>
        </div>
        {showSizeGuide && <SizeGuideModal onClose={() => setShowSizeGuide(false)} />}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Reviews</h3>
          {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
          <ul className="space-y-2 max-h-32 overflow-y-auto">
            {reviews.map((r, i) => (
              <li key={i} className="border-b pb-2">
                <div className="flex items-center gap-2">
                  <StarRating rating={r.rating} />
                  <span className="font-semibold">{r.user}</span>
                </div>
                <div className="text-gray-700 text-sm">{r.comment}</div>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleReviewSubmit} className="space-y-2">
          <h4 className="font-semibold">Add a Review</h4>
          <input
            className="w-full border rounded p-2"
            placeholder="Your name"
            value={user}
            onChange={e => setUser(e.target.value)}
            required
          />
          <select
            className="w-full border rounded p-2"
            value={rating}
            onChange={e => setRating(Number(e.target.value))}
          >
            {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>)}
          </select>
          <textarea
            className="w-full border rounded p-2"
            placeholder="Your review"
            value={comment}
            onChange={e => setComment(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition">Submit Review</button>
        </form>
      </div>
    </div>
  );
} 