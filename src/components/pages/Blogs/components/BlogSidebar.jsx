import React, { useMemo } from 'react';
import Link from 'next/link';
import { Search, Folder, Tag, Clock } from 'lucide-react';

export default function BlogSidebar({ allPosts }) {
    const categories = useMemo(() => [...new Set(allPosts.map(p => p.category))], [allPosts]);
    const tags = useMemo(() => [...new Set(allPosts.flatMap(p => p.tags))], [allPosts]);
    const recentPosts = useMemo(() => allPosts.slice(0, 3), [allPosts]);

    return (
        <div className="space-y-6">
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5">
                <div className="flex items-center mb-4">
                    <Search className="w-4 h-4 text-orange-500 mr-2" />
                    <h3 className="text-base font-bold text-white tracking-wide">Search</h3>
                </div>
                <div className="relative">
                    <input type="text" placeholder="Search articles..." className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5">
                <div className="flex items-center mb-4">
                    <Folder className="w-4 h-4 text-orange-500 mr-2" />
                    <h3 className="text-base font-bold text-white tracking-wide">Categories</h3>
                </div>
                <div className="space-y-1">
                    {categories.map(category => (
                        <div key={category} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors group cursor-pointer">
                            <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-light">{category}</span>
                            <span className="text-orange-500 text-xs font-mono">{allPosts.filter(p => p.category === category).length}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5">
                <div className="flex items-center mb-4">
                    <Tag className="w-4 h-4 text-orange-500 mr-2" />
                    <h3 className="text-base font-bold text-white tracking-wide">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 text-xs rounded-full hover:border-orange-500 hover:text-orange-400 transition-all duration-300 cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5">
                <div className="flex items-center mb-4">
                    <Clock className="w-4 h-4 text-orange-500 mr-2" />
                    <h3 className="text-base font-bold text-white tracking-wide">Recent Posts</h3>
                </div>
                <div className="space-y-4">
                    {recentPosts.map(post => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
                            <img src={post.image} alt={post.title} className="w-16 h-12 object-cover rounded-md flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-gray-300 text-sm font-medium leading-tight line-clamp-2 group-hover:text-orange-400 transition-colors">{post.title}</h4>
                                <p className="text-gray-500 text-xs mt-1 font-mono">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}