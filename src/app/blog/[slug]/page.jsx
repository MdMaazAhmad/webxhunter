'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import { allPosts } from '@/components/pages/Blogs/post';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowLeft, Clock, Share2 } from 'lucide-react';

const BlogPostDetail = () => {
  const params = useParams();
  const post = allPosts.find(p => p.slug === params.slug);
  
  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">404</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Article Not Found</h1>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog" className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <article className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16">
          <Link href="/blog" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-all duration-300 mb-6 sm:mb-8 group">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to all articles</span>
          </Link>

          <header className="mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 text-xs sm:text-sm font-semibold rounded-full border border-orange-500/30">
                {post.category}
              </span>
              <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                {getReadTime(post.content)} min read
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 py-4 sm:py-6 border-t border-b border-gray-700">
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                <time dateTime={post.date} className="text-xs sm:text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
              
              <button className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg transition-all hover:bg-gray-700/50 text-sm">
                <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Share
              </button>
            </div>
          </header>

          <div className="relative mb-8 sm:mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10">
            <div className="aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
          <div 
            className="prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none
                       prose-headings:text-white prose-headings:font-bold
                       prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-10 md:prose-h2:mt-12 prose-h2:mb-4 sm:prose-h2:mb-6 prose-h2:text-orange-400
                       prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-6 sm:prose-h3:mt-8 md:prose-h3:mt-10 prose-h3:mb-3 sm:prose-h3:mb-4 prose-h3:text-orange-300
                       prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 sm:prose-p:mb-6
                       prose-lead:text-lg sm:prose-lead:text-xl prose-lead:text-gray-200 prose-lead:font-medium prose-lead:mb-6 sm:prose-lead:mb-8
                       prose-strong:text-white prose-strong:font-semibold
                       prose-ul:text-gray-300 prose-li:mb-1 sm:prose-li:mb-2
                       prose-a:text-orange-400 prose-a:no-underline hover:prose-a:text-orange-300
                       prose-blockquote:border-orange-500 prose-blockquote:bg-gray-800/50 prose-blockquote:rounded-lg prose-blockquote:p-4 sm:prose-blockquote:p-6"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Article Tags</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-gray-300 text-xs sm:text-sm font-medium rounded-full border border-gray-600/50 hover:border-orange-500/50 hover:text-orange-400 transition-all cursor-pointer"
                  >
                    <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl p-6 sm:p-8 border border-gray-700/50">
              <div className="text-center">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Get Started?</h4>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Transform your business with a professional website that converts visitors into customers.</p>
                <Link href="/contact" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg">
                  Get Your Website Today
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;