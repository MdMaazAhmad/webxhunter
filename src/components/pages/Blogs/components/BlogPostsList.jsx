import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPostsList({ posts }) {
  return (
    <div className="grid gap-6">
      {posts.map(post => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300">
            <div className="grid md:grid-cols-5 gap-4 p-4">
              <div className="md:col-span-2">
                <div className="relative aspect-video md:aspect-auto md:h-full rounded-lg overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col justify-center py-2">
                <div className="flex gap-2 mb-2">
                  <span className="text-orange-500 text-xs font-mono uppercase tracking-wider">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 font-light">
                  {post.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center text-orange-500 text-sm font-semibold transition-all duration-300">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}