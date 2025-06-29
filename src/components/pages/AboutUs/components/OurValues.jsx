import React from 'react';
import { Users, Target, ShieldCheck, Clock } from 'lucide-react';

const values = [
  {
    id: 1,
    icon: Users,
    title: "Client-Centric Approach",
    description: "We prioritize our clients' needs and goals, ensuring their vision is at the heart of every project."
  },
  {
    id: 2,
    icon: Target,
    title: "Innovation and Creativity",
    description: "We embrace creativity and innovation, constantly exploring new technologies and design trends to deliver cutting-edge solutions."
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Quality and Reliability",
    description: "We are committed to delivering high-quality, reliable web services that stand the test of time."
  },
  {
    id: 4,
    icon: Clock,
    title: "Timeliness and Efficiency",
    description: "We value our clients' time and strive to deliver projects on time and within budget."
  }
];

export default function OurValues() {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-8">
          Our Values
        </h2>
        
    
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.id}
                className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-200"
              >
                <IconComponent className="text-white w-6 h-6 mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}