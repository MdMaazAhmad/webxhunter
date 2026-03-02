import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function BlogHeader({ totalPosts, startIndex, endIndex }) {
  return (
    <div className="relative py-16 bg-gradient-to-br min-h-[70vh] flex justify-center items-center from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Digital <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Insights</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light">
          Discover how Web x Hunter transforms ideas into high-performing digital success stories.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/25">
            <Mail className="w-5 h-5 mr-2" />
            Get a Free Quote
          </Link>
        </div>
        <div className="text-gray-400 text-xs font-mono uppercase tracking-widest">
          Showing {startIndex + 1}-{Math.min(endIndex, totalPosts)} of {totalPosts} articles
        </div>
      </div>
    </div>
  );
}