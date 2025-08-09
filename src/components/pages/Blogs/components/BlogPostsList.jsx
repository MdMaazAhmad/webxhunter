// src/components/BlogPostsList.js
import React from 'react';
import Link from 'next/link'; // Make sure to import Link
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPostsList = ({ posts }) => (
  <div className="grid gap-6">
    {posts.map(post => (
      // Wrap the entire card in a Link component
      <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500 transition-all duration-300">
          <div className="grid md:grid-cols-5 gap-4 p-4">
            <div className="md:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col">
              <div>
                {/* ... (rest of your card content) ... */}
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-auto">
                 {/* The button is now just for visual style */}
                 <div className="inline-flex items-center text-orange-400 font-semibold transition-all duration-300">
                   Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default BlogPostsList;