import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    image: '/images/hero1.jpg',
    title: 'Summer Sale is Here!',
    subtitle: 'Up to 50% off on selected items',
  },
  {
    image: '/images/hero2.jpg',
    title: 'New Arrivals',
    subtitle: 'Check out the latest trends',
  },
  {
    image: '/images/hero3.jpg',
    title: 'Exclusive Offers',
    subtitle: 'Sign up and get special discounts',
  },
];

export default function HeroBanner() {
  // For MVP, just show the first slide. (Can add carousel logic later)
  const slide = slides[0];
  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 bg-gray-100 flex items-center justify-center">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/60 via-purple-500/40 to-pink-400/30 z-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2 animate-fade-in">
          {slide.title}
        </h2>
        <p className="text-lg md:text-2xl text-white drop-shadow mb-6 animate-fade-in delay-100">
          {slide.subtitle}
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-3 bg-white/90 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-700 hover:text-white transition-colors duration-200 animate-fade-in delay-200"
        >
          Shop Now
        </a>
      </motion.div>
    </div>
  );
} 