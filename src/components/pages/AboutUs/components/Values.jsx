import { memo } from 'react';
import { Users, Zap, Shield, Clock } from 'lucide-react';

const Values = memo(() => {
  const values = [
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success through collaborative innovation.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace emerging technologies and creative solutions to stay ahead of the curve and deliver cutting-edge results.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing to ensure flawless performance, security, and reliability at scale.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Agile Delivery",
      description: "We deliver exceptional results on time through efficient processes, clear communication, and iterative development.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-black">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
          Our Core <span className="text-orange-400">Values</span>
        </h2>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          These principles guide every decision we make and every solution we create for our clients
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div 
            key={index}
            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className={`relative w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <value.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="relative text-sm font-bold text-white mb-3">{value.title}</h3>
            <p className="relative text-gray-400 text-xs leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
});

export default Values;