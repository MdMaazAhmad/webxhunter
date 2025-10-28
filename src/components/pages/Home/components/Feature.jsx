import React from "react";
import UranLayon from "@/images/UrbanLayon.png";
import GoSkinly from "@/images/GoSkinly.png";
import MHMStudios from "@/images/MHMStudios.png";
import Portfolio from "@/images/Portfolio.png";
import Link from "next/link";

const featuredProjects = [
 
  {
    id: 1,
    title: "Urban Layon",
    description:
      "A modern and visually appealing online presence for a leading fashion brand.",
    category: "E-commerce",
    image: UranLayon.src,
    url: "https://urbanlayon.com/",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 2,
    title: "SHOTS BY KG",
    description:
      "An elegant portfolio showcasing stunning photography and cinematography work with immersive visuals.",
    category: "Portfolio",
    url:"https://www.shotsbykg.com/",
    image: Portfolio.src,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Skinly",
    description:
      "A stylish and engaging e-commerce platform showcasing innovative gadgets and their brand.",
    category: "E-commerce",
    image: GoSkinly.src,
    color: "from-emerald-500 to-cyan-500",
    url: "https://goskinly.com/",
  },
  {
    id: 4,
    title: "MHM Studios",
    description:
      "A secure and informative website for a video production house and digital marketing agency.",
    category: "Web Development",
    url: "https://mhmstudios.in/",
    image: MHMStudios.src,
    color: "from-purple-500 to-pink-500",
  },
 
];

export default function Feature() {
  return (
    <section className="pt-10 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold mb-4 text-xs uppercase tracking-wide">
            FEATURED PROJECTS
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Our Recent Work
          </h2>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto">
            Take a look at some of our latest projects and see how we've helped
            businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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

        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
        />

        {project.url && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-xs text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Project
            </Link>
          </div>
        )}
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