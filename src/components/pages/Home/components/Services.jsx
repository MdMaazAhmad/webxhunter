import React, { useEffect, useState } from 'react';
import { Code, PencilRuler, Search } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Code,
    title: "Web Development",
    description: "Building responsive, high-performance websites tailored to your business objectives."
  },
  {
    id: 2,
    icon: PencilRuler,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly designs that enhance your brand identity."
  },
  {
    id: 3,
    icon: Search,
    title: "Digital Marketing",
    description: "Implementing effective strategies to increase your online visibility and reach your target audience."
  }
];

export default function Services() {
  const [hasServiceHash, setHasServiceHash] = useState(false);

  useEffect(() => {
    // Check initial hash
    const checkHash = () => {
      setHasServiceHash(window.location.hash === '#service');
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <div 
      className={`px-4 py-8 ${hasServiceHash ? 'pt-[5rem]' : ''}`} 
      id='service'
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-8">
          Our Services
        </h2>
       
        <div className="mb-10">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 max-w-3xl">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-white/80 text-base leading-relaxed max-w-3xl">
            We offer a wide range of services to meet your digital needs, from web development and design to digital marketing and SEO.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors duration-200"
              >
                <IconComponent className="text-white w-6 h-6 mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}