import React from 'react';

const featuredProjects = [
  {
    id: 1,
    title: "Tech Innovators",
    description: "A cutting-edge platform for a leading tech company.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmDRFrtlT8_2jVBKb4qV85ofskoM4XqsD7tzMIsFkG8nbt_mS_u7F7w1NnRM12l277ZvWxz6OuraQdZPZSneAitQTTx9VZqqhxFz4WqDKIT8X1EfjU2OeIrSZOBGFWIAZxwKelbJoSsUH8zcDbAFVorlZKHep6e5mvUHN22VAl-NWYNipxvv0qUv99gpeTPn0y7kFRvVwma7EAEOh3aNNZTknmyuL3s9kYztM_bdMymefvYxz8pb7krxLdKxHRTCH0Kc5RCJ_x79I"
  },
  {
    id: 2,
    title: "Fashion Forward",
    description: "A stylish and engaging online presence for a fashion brand.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcQoWuYwn4Wlobqn6c_DLRn248rdftloJu2diUHWFO1t7f1URv3smCRgfmEcv6JdkoWT83hsP6oBwDVF1mMowmhym_j4bINwPiigpggMv-Z3qehncvjoC6ED06rJOMiN22DlYVrjljQ4l3xqwjFbynx3Jyl8aNfmcMiUCy0VVAX-GpISbT35xoPl6Hu7evke32YKJzYzGTDLMKkcBn_PVlgTavAEeww8wzV1K1w6vt3wzWi09cwpvLRvPIYh6yCTT8BLX2Snw8Lg"
  },
  {
    id: 3,
    title: "Financial Solutions",
    description: "A secure and informative website for a financial institution.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAmUq4OlwzmjSgVJM01FMqJFuP37KLGvRqvqxUFlmtvv_HR2r1dVjJAVYaMZpjHyky4XmCfm8FqArMz854aySQiVv-gL13Y399dPJc1HNm71PhGDDb7QrLXmrvtT_SL-MT06m3Zhj72kfmQ8UdzvCC3Lk-WG0WyYwOIMrrm4VDFxBK57pjdDiAeIbSuxt9Ti01aHHhq7Ar64OKefMbI9ifTwF7LwpnRVgOn09rL4_fxCxr2qPqc99rq2koHZ5WM7D82ODSpRLtTdw"
  }
];

export default function Feature() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-8">
          Featured Projects
        </h2>
        
        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <div className="block lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} className="min-w-72 snap-center" />
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, className = "" }) {
  return (
    <div className={`flex flex-col gap-4 group cursor-pointer ${className}`}>
      <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-white text-base font-medium leading-normal group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-normal">
          {project.description}
        </p>
      </div>
    </div>
  );
}