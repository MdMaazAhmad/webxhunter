'use client'
import React, { useState, useMemo } from 'react';
import { allPosts, POSTS_PER_PAGE } from './post';
import BlogHeader from './components/BlogHeader';
import FeaturedArticles from './components/FeaturedArticle';
import BlogPostsList from './components/BlogPostsList';
import BlogSidebar from './components/BlogSidebar';
import BlogPagination from './components/BlogPagination';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPosts = useMemo(() => allPosts.filter(post => post.featured), []);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen font-sans">
      <BlogHeader totalPosts={allPosts.length} startIndex={startIndex} endIndex={endIndex} />
      
      <FeaturedArticles articles={featuredPosts} />

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
                <div className="text-gray-400 text-xs">Page {currentPage} of {totalPages}</div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <BlogPostsList posts={currentPosts} />
                </div>
                <div className="lg:col-span-1">
                    <BlogSidebar allPosts={allPosts} />
                </div>
            </div>
        </div>
      </main>

      <BlogPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
