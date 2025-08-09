import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Palette, Smartphone, TrendingUp } from 'lucide-react';

const services = [
  { icon: Code, name: 'Web Development' },
  { icon: Palette, name: 'UI/UX Design' },
  { icon: Smartphone, name: 'Mobile Apps' },
  { icon: TrendingUp, name: 'Digital Strategy' }
];

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

const floatingElements = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  delay: i * 0.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
}));

const BackgroundEffects = ({ mousePosition }) => (
  <>
    <div className="absolute w-full  inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
    
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(249,115,22,0.15), transparent 40%)`
      }}
    />

    {floatingElements.map((element) => (
      <div
        key={element.id}
        className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
        style={{
          left: `${element.x}%`,
          top: `${element.y}%`,
          animationDelay: `${element.delay}s`,
          animationDuration: '3s'
        }}
      />
    ))}

    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </>
);

const Badge = () => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-400/20 rounded-full text-orange-400 text-[10px] md:text-xs font-medium mb-8 backdrop-blur-sm">
    <Sparkles className="w-4 h-4" />
    Next-Gen Digital Solutions
  </div>
);

const HeroTitle = () => (
  <h1 className="text-3xl md:text-4xl  font-black text-white mb-6 leading-tight">
    We Build
    <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
      Digital Dreams
    </span>
    Into Reality
  </h1>
);

const HeroDescription = () => (
  <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
    From stunning websites to powerful mobile apps, we craft digital experiences that captivate users and drive business growth.
  </p>
);

const CTAButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
    <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 md:px-8 py-2 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-3">
      Start Your Project
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
    <button className="group border-2 border-gray-600 hover:border-orange-400 text-gray-300 hover:text-white px-4 md:px-8 py-2 md:py-4 rounded-xl font-bold text-xs md:text-base transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm">
      View Portfolio
    </button>
  </div>
);

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;
  return (
    <div
      className="group p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl hover:bg-gray-800/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
      <p className="text-gray-300 text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300">
        {service.name}
      </p>
    </div>
  );
};

const ServiceGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
    {services.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
  </div>
);

const StatCard = ({ stat, index }) => (
  <div className="group text-center hover:scale-110 transition-transform duration-300">
    <div className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
      {stat.number}
    </div>
    <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
  </div>
);

const StatsGrid = () => (
  <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
    {stats.map((stat, index) => (
      <StatCard key={index} stat={stat} index={index} />
    ))}
  </div>
);

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

export default function Hero() {
  const mousePosition = useMousePosition();

  return (
    <section id="home" className="relative min-h-screen flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <BackgroundEffects mousePosition={mousePosition} />

      <div className=" w-full mx-auto px-6 sm:px-8 lg:px-12 py-6 text-center">
        <Badge />
        <HeroTitle />
        <HeroDescription />
        <CTAButtons />
        <ServiceGrid />
        <StatsGrid />
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div> */}
    </section>
  );
}