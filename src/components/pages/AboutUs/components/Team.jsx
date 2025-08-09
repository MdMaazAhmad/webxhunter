import { memo } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = memo(() => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years in digital innovation and strategic business development",
      gradient: "from-orange-400 to-red-500"
    },
    {
      name: "Sarah Martinez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer passionate about creating exceptional user experiences and brand identities",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "David Kumar",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack architect specializing in scalable solutions and emerging technology integration",
      gradient: "from-green-500 to-blue-500"
    },
    {
      name: "Emma Thompson",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Growth expert helping brands achieve digital transformation and sustainable market expansion",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Meet Our <span className="text-blue-400">Visionaries</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            The brilliant minds behind every successful project and innovative solution we deliver
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-4">
                <div className={`w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br ${member.gradient} p-1 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <Linkedin className="w-3 h-3 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <Twitter className="w-3 h-3 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <Github className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{member.name}</h3>
              <p className="text-orange-400 font-semibold mb-2 text-xs">{member.role}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Team;