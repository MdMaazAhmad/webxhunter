import React from 'react';
import { Code, PencilRuler, Search } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Code,
    title: "Web Development",
    description: "Building responsive, high-performance websites tailored to your business objectives.",
    features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration']
  },
  {
    id: 2,
    icon: PencilRuler,
    title: "App Development",
    description: "Developing high-quality, scalable mobile and web applications to meet your business needs.",
    features: ['React Native', 'Cross-Platform Apps', 'Backend Integration', 'Performance Optimization']
  },
  {
    id: 3,
    icon: Search,
    title: "Digital Marketing",
    description: "Implementing effective strategies to increase your online visibility and reach your target audience.",
    features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics']
  }
];


export default function Services() {
  return (
    <section id="service" className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold mb-4 text-xs uppercase tracking-wide">OUR SERVICES</p>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of services to meet your digital needs, from web development and design to digital marketing and SEO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                  <IconComponent className="text-white w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-2 group-hover:text-gray-400 transition-colors duration-300">
                      <div className="w-1 h-1 bg-orange-400 rounded-full group-hover:bg-orange-300 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}