import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Men',
    image: '/images/men-category.jpg',
    href: '/men',
  },
  {
    name: 'Women',
    image: '/images/women-category.jpg',
    href: '/women',
  },
];

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          href={cat.href}
          className="block group rounded-lg overflow-hidden shadow hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative"
        >
          <div className="relative h-48">
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                {cat.name}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 