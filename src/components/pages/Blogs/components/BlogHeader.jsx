// src/components/BlogHeader.js
import React from 'react';
import { Mail, Layers } from 'lucide-react';

const BlogHeader = ({ totalPosts, startIndex, endIndex }) => (
  <div className="relative py-16 bg-gradient-to-br min-h-[90vh] flex justify-center items-center from-gray-900 via-black to-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    <div className="relative max-w-6xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Digital <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Discover the latest trends and expert advice in web development, design, and digital marketing.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300">
          <Mail className="w-5 h-5 mr-2" />
          Subscribe
        </button>
        <button className="inline-flex items-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
          <Layers className="w-5 h-5 mr-2" />
          Explore Topics
        </button>
      </div>

      <div className="text-gray-400 text-xs">
        Showing {startIndex + 1}-{Math.min(endIndex, totalPosts)} of {totalPosts} articles
      </div>
    </div>
  </div>
);

export default BlogHeader;
