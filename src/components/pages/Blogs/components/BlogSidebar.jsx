// src/components/BlogSidebar.js
import React, { useMemo } from 'react';
import { Search, Tag, Folder, Clock } from 'lucide-react';

const BlogSidebar = ({ allPosts }) => {
    const categories = useMemo(() => [...new Set(allPosts.map(p => p.category))], [allPosts]);
    const tags = useMemo(() => [...new Set(allPosts.flatMap(p => p.tags))], [allPosts]);
    const recentPosts = useMemo(() => allPosts.slice(0, 4), [allPosts]);

    const SidebarCard = ({ icon, title, children }) => (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            {children}
        </div>
    );

    return (
        <div className="space-y-6">
            <SidebarCard icon={<Search className="w-4 h-4 text-orange-400 mr-2" />} title="Search">
                <div className="relative">
                    <input type="text" placeholder="Search articles..." className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
            </SidebarCard>

            <SidebarCard icon={<Folder className="w-4 h-4 text-blue-400 mr-2" />} title="Categories">
                <div className="space-y-2">
                    {categories.map(category => (
                        <div key={category} className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group cursor-pointer">
                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm">{category}</span>
                            <span className="text-orange-400 text-xs font-medium">({allPosts.filter(p => p.category === category).length})</span>
                        </div>
                    ))}
                </div>
            </SidebarCard>

            <SidebarCard icon={<Tag className="w-4 h-4 text-green-400 mr-2" />} title="Popular Tags">
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
                            #{tag}
                        </span>
                    ))}
                </div>
            </SidebarCard>

            <SidebarCard icon={<Clock className="w-4 h-4 text-purple-400 mr-2" />} title="Recent Posts">
                <div className="space-y-3">
                    {recentPosts.map(post => (
                        <div key={post.id} className="flex gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors group cursor-pointer">
                            <img src={post.image} alt={post.title} className="w-14 h-10 object-cover rounded-md flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-gray-300 text-sm font-medium leading-tight line-clamp-2 group-hover:text-white transition-colors">{post.title}</h4>
                                <p className="text-gray-500 text-xs mt-1">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SidebarCard>
        </div>
    );
};

export default BlogSidebar;
