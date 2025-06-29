import React from 'react';
import { PencilLine, Code, Search, BarChart3 } from 'lucide-react';

const expertise = [
  {
    id: 1,
    icon: PencilLine,
    title: "Custom Web Design",
    description: "We create visually stunning and user-friendly websites tailored to your brand."
  },
  {
    id: 2,
    icon: Code,
    title: "Advanced Web Development",
    description: "We build robust, scalable web applications using the latest technologies."
  },
  {
    id: 3,
    icon: Search,
    title: "SEO and Digital Marketing",
    description: "We enhance your online visibility and drive targeted traffic to your website."
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Performance Optimization",
    description: "We ensure your website is fast, responsive, and optimized for all devices."
  }
];

export default function WhyUs() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-8">
          Why Choose Us?
        </h2>
        
        <div className="mb-10">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 max-w-3xl">
            Our Expertise
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-3xl">
            We bring a wealth of experience and expertise to every project, ensuring exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors duration-200"
              >
                <IconComponent className="text-white w-6 h-6 mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}