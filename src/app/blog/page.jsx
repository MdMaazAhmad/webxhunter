'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const featuredArticles = [
    {
      id: '1',
      title: 'The Future of Web Design: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web design, from immersive experiences to sustainable practices.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'future-web-design-trends-2024'
    },
    {
      id: '2',
      title: 'Agile Development: Delivering Value Faster',
      excerpt: 'Learn how agile methodologies can help your team deliver high-quality web solutions more efficiently.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'agile-development-delivering-value-faster'
    },
    {
      id: '3',
      title: 'Maximizing ROI with Data-Driven Marketing',
      excerpt: 'Discover how data analytics can inform your marketing strategies and drive better results.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'maximizing-roi-data-driven-marketing'
    }
  ];

  const allPosts = [
    {
      id: '1',
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt: 'Explore the best practices for developing web applications that can handle growth and increased user traffic.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'building-scalable-web-applications',
      date: '2024-12-20'
    },
    {
      id: '2',
      title: 'User-Centric Design: Creating Intuitive and Engaging Experiences',
      excerpt: 'Learn how to put your users at the center of your design process to create websites that are both beautiful and functional.',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'user-centric-design-experiences',
      date: '2024-12-18'
    },
    {
      id: '3',
      title: 'Content Marketing Strategies for Driving Organic Traffic',
      excerpt: 'Discover effective content marketing techniques to attract and engage your target audience, boosting your website\'s visibility.',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'content-marketing-strategies',
      date: '2024-12-15'
    },
    {
      id: '4',
      title: 'Progressive Web Apps: The Future of Mobile Development',
      excerpt: 'Understanding how PWAs bridge the gap between web and mobile apps, offering native-like experiences.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'progressive-web-apps-future',
      date: '2024-12-12'
    },
    {
      id: '5',
      title: 'AI-Powered Design Tools: Revolutionizing Creative Workflows',
      excerpt: 'Explore how artificial intelligence is transforming the design industry and enhancing creative productivity.',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'ai-powered-design-tools',
      date: '2024-12-10'
    },
    {
      id: '6',
      title: 'Social Media Marketing Trends for 2025',
      excerpt: 'Stay ahead of the curve with the latest social media strategies and platform updates that drive engagement.',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'social-media-marketing-trends-2025',
      date: '2024-12-08'
    },
    {
      id: '7',
      title: 'Cybersecurity Best Practices for Web Applications',
      excerpt: 'Essential security measures to protect your web applications from common threats and vulnerabilities.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'cybersecurity-web-applications',
      date: '2024-12-05'
    },
    {
      id: '8',
      title: 'The Psychology of Color in Web Design',
      excerpt: 'How color choices impact user behavior and conversion rates on your website.',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'psychology-color-web-design',
      date: '2024-12-03'
    },
    {
      id: '9',
      title: 'Email Marketing Automation: Strategies That Convert',
      excerpt: 'Build effective email campaigns that nurture leads and drive conversions through smart automation.',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'email-marketing-automation',
      date: '2024-12-01'
    },
    {
      id: '10',
      title: 'Cloud Computing for Small Businesses',
      excerpt: 'How cloud technologies can help small businesses scale efficiently while reducing IT costs.',
      category: 'Industry News',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'cloud-computing-small-businesses',
      date: '2024-11-28'
    },
    {
      id: '11',
      title: 'Accessibility in Web Design: Building Inclusive Experiences',
      excerpt: 'Creating websites that are usable by everyone, including users with disabilities.',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'accessibility-web-design',
      date: '2024-11-25'
    },
    {
      id: '12',
      title: 'JavaScript Performance Optimization Techniques',
      excerpt: 'Advanced strategies to improve your JavaScript code performance and user experience.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'javascript-performance-optimization',
      date: '2024-11-22'
    },
    {
      id: '13',
      title: 'Voice Search Optimization: Preparing for the Future',
      excerpt: 'Adapt your SEO strategy for voice search and conversational queries.',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'voice-search-optimization',
      date: '2024-11-20'
    },
    {
      id: '14',
      title: 'The Rise of No-Code Development Platforms',
      excerpt: 'How no-code tools are democratizing software development and changing the industry.',
      category: 'Industry News',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'rise-nocode-development-platforms',
      date: '2024-11-18'
    },
    {
      id: '15',
      title: 'Sustainable Web Design: Reducing Digital Carbon Footprint',
      excerpt: 'Environmental considerations in web development and how to create eco-friendly websites.',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&crop=entropy&auto=format',
      slug: 'sustainable-web-design',
      date: '2024-11-15'
    }
  ];

  const categories = [
    'Web Development',
    'Design', 
    'Digital Marketing',
    'Industry News'
  ];

  const tags = [
    'React',
    'UI/UX',
    'SEO',
    'Content Strategy',
    'E-commerce'
  ];

  // Pagination logic
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of posts section
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const FeaturedArticleCard = ({ article }) => (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 group">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative w-full aspect-video bg-cover rounded-xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-white text-base font-medium leading-normal mb-2 group-hover:text-[#dce8f3] transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-[#a2abb3] text-sm font-normal leading-normal">
          {article.excerpt}
        </p>
      </div>
    </div>
  );

  const LatestPostCard = ({ post }) => (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-xl group">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[#a2abb3] text-sm font-normal leading-normal">
                {post.category}
              </p>
              <span className="text-[#a2abb3] text-xs">•</span>
              <p className="text-[#a2abb3] text-xs font-normal leading-normal">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-white text-base font-bold leading-tight group-hover:text-[#dce8f3] transition-colors">
                {post.title}
              </h3>
            </Link>
            <p className="text-[#a2abb3] text-sm font-normal leading-normal">
              {post.excerpt}
            </p>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#2c3135] text-white text-sm font-medium leading-normal w-fit hover:bg-[#3a4044] transition-colors">
              <span className="truncate">Read More</span>
            </button>
          </Link>
        </div>
        <Link href={`/blog/${post.slug}`} className="flex-1 max-w-[200px] md:max-w-none">
          <div className="relative w-full aspect-video bg-cover rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 200px, 300px"
            />
          </div>
        </Link>
      </div>
    </div>
  );

  const Pagination = () => {
    const getVisiblePages = () => {
      const delta = 2;
      const range = [];
      const rangeWithDots = [];

      for (let i = Math.max(2, currentPage - delta); 
           i <= Math.min(totalPages - 1, currentPage + delta); 
           i++) {
        range.push(i);
      }

      if (currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push('...', totalPages);
      } else {
        rangeWithDots.push(totalPages);
      }

      return rangeWithDots;
    };

    const visiblePages = totalPages > 1 ? getVisiblePages() : [1];

    return (
      <div className="flex items-center justify-center p-4 gap-2">
        <button 
          className="flex size-10 items-center justify-center hover:bg-[#2c3135] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="text-white" size={18} />
        </button>
        
        {visiblePages.map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="text-white text-sm px-2">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page)}
                className={`text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
                  currentPage === page 
                    ? 'text-white bg-[#2c3135] font-bold' 
                    : 'text-white hover:bg-[#2c3135]'
                }`}
              >
                {page}
              </button>
            )}
          </div>
        ))}
        
        <button 
          className="flex size-10 items-center justify-center hover:bg-[#2c3135] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="text-white" size={18} />
        </button>
      </div>
    );
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#121416]" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-4 sm:px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col lg:flex-row max-w-7xl flex-1 gap-8">
            
            {/* Main Content */}
            <div className="flex flex-col flex-1 max-w-none lg:max-w-[920px]">
              {/* Page Title */}
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Blog
                </h1>
                <div className="text-[#a2abb3] text-sm self-end">
                  Showing {startIndex + 1}-{Math.min(endIndex, allPosts.length)} of {allPosts.length} posts
                </div>
              </div>

              {/* Featured Articles */}
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Featured Articles
              </h2>
              
              <div className="overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3 min-w-max lg:min-w-0">
                  {featuredArticles.map((article) => (
                    <div key={article.id} className="min-w-[280px] flex-1 lg:min-w-60">
                      <FeaturedArticleCard article={article} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Posts */}
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Latest Posts
                <span className="text-[#a2abb3] text-sm font-normal ml-2">
                  (Page {currentPage} of {totalPages})
                </span>
              </h2>
              
              <div className="space-y-0">
                {currentPosts.map((post) => (
                  <LatestPostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && <Pagination />}
            </div>

            {/* Sidebar */}
            <div className="layout-content-container flex flex-col w-full lg:w-[360px] flex-shrink-0">
              {/* Categories */}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Categories
              </h3>
              <div className="space-y-0">
                {categories.map((category) => {
                  const count = allPosts.filter(post => post.category === category).length;
                  return (
                    <Link key={category} href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}>
                      <div className="flex items-center justify-between gap-4 bg-[#121416] px-4 min-h-14 hover:bg-[#2c3135] transition-colors rounded-lg mx-2">
                        <p className="text-white text-base font-normal leading-normal flex-1 truncate">
                          {category}
                        </p>
                        <span className="text-[#a2abb3] text-sm">({count})</span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Tags */}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Tags
              </h3>
              <div className="flex gap-3 p-3 flex-wrap pr-4">
                {tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace('/', '-')}`}>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#2c3135] pl-4 pr-4 hover:bg-[#3a4044] transition-colors">
                      <p className="text-white text-sm font-medium leading-normal">{tag}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Recent Posts */}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Recent Posts
              </h3>
              <div className="space-y-2 px-4">
                {allPosts.slice(0, 5).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="flex gap-3 p-2 hover:bg-[#2c3135] rounded-lg transition-colors group">
                      <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium leading-tight line-clamp-2 group-hover:text-[#dce8f3] transition-colors">
                          {post.title}
                        </p>
                        <p className="text-[#a2abb3] text-xs mt-1">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;