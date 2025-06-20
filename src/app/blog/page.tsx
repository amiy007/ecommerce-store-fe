import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'how-to-style-summer',
    title: 'How to Style Your Summer Wardrobe',
    summary: 'Tips and tricks for a cool, comfortable, and trendy summer look.',
    date: '2024-06-01',
    author: 'Amit Yadav',
    image: '/images/mens-tshirt.webp',
    content: `Summer is all about comfort and style. Here are some tips to keep your wardrobe fresh and trendy...`,
  },
  {
    id: 'top-5-fashion-trends',
    title: 'Top 5 Fashion Trends for 2024',
    summary: 'Stay ahead of the curve with these must-know trends for the year.',
    date: '2024-05-20',
    author: 'Priya Sharma',
    image: '/images/womens-blouse.webp',
    content: `2024 brings bold colors, sustainable fabrics, and more. Here are the top 5 trends you need to know...`,
  },
  {
    id: 'capsule-wardrobe',
    title: 'Building a Capsule Wardrobe',
    summary: 'How to create a versatile wardrobe with just a few key pieces.',
    date: '2024-05-10',
    author: 'Rahul Verma',
    image: '/images/mens-tshirt.webp',
    content: `A capsule wardrobe saves time and money. Learn how to build yours with these essentials...`,
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-pink-500 p-8 text-white text-center shadow-lg mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Fashion Blog</h1>
          <p className="text-lg md:text-2xl mb-4">Latest tips, trends, and stories from the world of fashion</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg p-0 flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-pink-400 relative overflow-hidden">
              <div className="w-full h-40 relative flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 flex-1">{post.summary}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Read More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-pink-600 transition-colors duration-200">View All Blog Posts</a>
        </div>
      </section>
    </main>
  );
} 