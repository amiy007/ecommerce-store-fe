interface ProductFilterBarProps {
  category: string;
  setCategory: (cat: string) => void;
  sort: string;
  setSort: (sort: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  size: string;
  setSize: (size: string) => void;
  rating: number;
  setRating: (rating: number) => void;
}

const sizes = ['All', 'S', 'M', 'L', 'XL'];
const priceOptions = [
  { label: 'All', value: [0, 1000] },
  { label: 'Under $50', value: [0, 50] },
  { label: '$50 - $100', value: [50, 100] },
  { label: '$100 - $200', value: [100, 200] },
  { label: 'Above $200', value: [200, 1000] },
];

function StarSelector({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(n => (
        <button
          key={n}
          type="button"
          className={`text-xl ${n <= value ? 'text-yellow-400' : 'text-gray-300'}`}
          onClick={() => onChange(n)}
          aria-label={`Filter by ${n} star${n > 1 ? 's' : ''}`}
        >
          ★
        </button>
      ))}
      <button type="button" className="ml-2 text-sm text-gray-500 underline" onClick={() => onChange(0)}>
        Any
      </button>
    </div>
  );
}

export default function ProductFilterBar({ category, setCategory, sort, setSort, priceRange, setPriceRange, size, setSize, rating, setRating }: ProductFilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div className="flex gap-2 flex-wrap items-center">
        <span className="font-semibold">Category:</span>
        <button
          className={`px-4 py-2 rounded ${category === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setCategory('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${category === 'men' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setCategory('men')}
        >
          Men
        </button>
        <button
          className={`px-4 py-2 rounded ${category === 'women' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setCategory('women')}
        >
          Women
        </button>
      </div>
      <div className="flex gap-4 flex-wrap items-center">
        <div>
          <span className="font-semibold mr-2">Price:</span>
          <select
            className="px-2 py-1 rounded border"
            value={JSON.stringify(priceRange)}
            onChange={e => setPriceRange(JSON.parse(e.target.value))}
          >
            {priceOptions.map(opt => (
              <option key={opt.label} value={JSON.stringify(opt.value)}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <span className="font-semibold mr-2">Size:</span>
          <select
            className="px-2 py-1 rounded border"
            value={size}
            onChange={e => setSize(e.target.value)}
          >
            {sizes.map(s => (
              <option key={s} value={s === 'All' ? '' : s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <span className="font-semibold mr-2">Rating:</span>
          <StarSelector value={rating} onChange={setRating} />
        </div>
        <div>
          <select
            className="px-4 py-2 rounded border"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
} 