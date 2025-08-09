// src/components/BlogPostsList.js
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPostsList = ({ posts }) => (
  <div className="grid gap-6">
    {posts.map(post => (
      <div key={post.id} className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300">
        <div className="grid md:grid-cols-5 gap-4 p-4">
          <div className="md:col-span-2">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-400 text-xs">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-auto">
                <button className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default BlogPostsList;
