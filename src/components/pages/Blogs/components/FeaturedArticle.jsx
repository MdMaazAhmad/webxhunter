import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeaturedArticles({ articles }) {
  if (!articles?.length) return null;

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-orange-500">Articles</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`} className="group block h-full">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full tracking-wide">Featured</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 font-light flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-orange-500 text-sm font-semibold mt-auto">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}