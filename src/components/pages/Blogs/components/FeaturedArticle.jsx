import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { allPosts } from '../post';

const FeaturedArticles = memo(() => {
    // Get first 3 posts for featured articles
    const featuredPosts = allPosts.slice(0, 3);
  
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured <span className="text-orange-400">Articles</span>
            </h2>
            <p className="text-gray-300 text-lg">Don't miss these trending topics</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((article, index) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gray-800/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
                        Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              View All Articles
            </button>
          </div>
        </div>
      </section>
    );
  });
  
  FeaturedArticles.displayName = 'FeaturedArticles';
  
  export default FeaturedArticles;