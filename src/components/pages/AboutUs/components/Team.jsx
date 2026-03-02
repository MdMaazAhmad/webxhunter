import { memo } from 'react';
import Taukir from "@/images/Taukir.jpg";
import Irfan from "@/images/Irfan.jpg";
import Furqan from "@/images/furquan.webp";
import Maaz from "@/images/Maaz.jpg";

const Team = memo(() => {
  const team = [
    { name: "Furqan Zaman", role: "Founder & CEO", image: Furqan.src, bio: "Visionary leader in digital innovation and strategic business development" },
    { name: "Irfan Jawad", role: "Creative Director", image: Irfan.src, bio: "Creative designer passionate about creating exceptional user experiences and brand identities" },
    { name: "Md Taukir", role: "Tech Lead", image: Taukir.src, bio: "Full-stack architect specializing in scalable solutions and emerging technology integration" },
    { name: "Maaz Ahmad", role: "Strategy Director", image: Maaz.src, bio: "Growth expert helping brands achieve digital transformation and sustainable market expansion" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Meet Our <span className="text-orange-500">Visionaries</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto font-light">
            The brilliant minds behind every successful project and innovative solution we deliver
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gray-800 p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{member.name}</h3>
              <p className="text-orange-500 font-medium mb-2 text-xs">{member.role}</p>
              <p className="text-gray-400 text-xs leading-relaxed font-light">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Team;