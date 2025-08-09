import React from 'react';

const featuredProjects = [
  {
    id: 1,
    title: "Tech Innovators",
    description: "A cutting-edge platform for a leading tech company.",
    category: "Web Development",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmDRFrtlT8_2jVBKb4qV85ofskoM4XqsD7tzMIsFkG8nbt_mS_u7F7w1NnRM12l277ZvWxz6OuraQdZPZSneAitQTTx9VZqqhxFz4WqDKIT8X1EfjU2OeIrSZOBGFWIAZxwKelbJoSsUH8zcDbAFVorlZKHep6e5mvUHN22VAl-NWYNipxvv0qUv99gpeTPn0y7kFRvVwma7EAEOh3aNNZTknmyuL3s9kYztM_bdMymefvYxz8pb7krxLdKxHRTCH0Kc5RCJ_x79I",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Fashion Forward",
    description: "A stylish and engaging online presence for a fashion brand.",
    category: "E-commerce",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcQoWuYwn4Wlobqn6c_DLRn248rdftloJu2diUHWFO1t7f1URv3smCRgfmEcv6JdkoWT83hsP6oBwDVF1mMowmhym_j4bINwPiigpggMv-Z3qehncvjoC6ED06rJOMiN22DlYVrjljQ4l3xqwjFbynx3Jyl8aNfmcMiUCy0VVAX-GpISbT35xoPl6Hu7evke32YKJzYzGTDLMKkcBn_PVlgTavAEeww8wzV1K1w6vt3wzWi09cwpvLRvPIYh6yCTT8BLX2Snw8Lg",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Financial Solutions",
    description: "A secure and informative website for a financial institution.",
    category: "Fintech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAmUq4OlwzmjSgVJM01FMqJFuP37KLGvRqvqxUFlmtvv_HR2r1dVjJAVYaMZpjHyky4XmCfm8FqArMz854aySQiVv-gL13Y399dPJc1HNm71PhGDDb7QrLXmrvtT_SL-MT06m3Zhj72kfmQ8UdzvCC3Lk-WG0WyYwOIMrrm4VDFxBK57pjdDiAeIbSuxt9Ti01aHHhq7Ar64OKefMbI9ifTwF7LwpnRVgOn09rL4_fxCxr2qPqc99rq2koHZ5WM7D82ODSpRLtTdw",
    color: "from-green-500 to-emerald-500"
  }
];

export default function Feature() {
  return (
    <section className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold mb-4 text-xs uppercase tracking-wide">FEATURED PROJECTS</p>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Our Recent Work
          </h2>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto">
            Take a look at some of our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl aspect-[5/3] mb-4 bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-xs text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            View Project
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-orange-400 text-xs font-semibold uppercase tracking-wide">
          {project.category}
        </div>
        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}