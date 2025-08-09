import { memo } from 'react';
import { Code, Palette, TrendingUp, Zap } from 'lucide-react';

const Expertise = memo(() => {
  const services = [
    {
      icon: Palette,
      title: "Digital Design",
      description: "Creating stunning visual experiences that captivate audiences and drive conversions through strategic design thinking.",
      features: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Web Development", 
      description: "Building lightning-fast, scalable applications with modern technologies and best practices for optimal performance.",
      features: ["React/Next.js", "Node.js", "Cloud Solutions", "API Development"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Driving sustainable growth through data-driven marketing strategies and performance optimization techniques.",
      features: ["SEO Optimization", "Content Strategy", "Analytics", "Conversion Optimization"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every aspect for maximum speed, efficiency, and user satisfaction across all platforms and devices.",
      features: ["Core Web Vitals", "Mobile First", "CDN Integration", "Speed Optimization"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <div className="relative max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
          Our <span className="text-orange-400">Expertise</span>
        </h2>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          Comprehensive digital solutions powered by cutting-edge technology and creative excellence
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105"
          >
            <div className="relative">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full border border-orange-500/20 hover:bg-orange-500/20 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
});

export default Expertise;