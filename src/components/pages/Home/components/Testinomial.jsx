import React from 'react';
import { Star } from 'lucide-react';
import ChandanBulani from "@/images/Chandan Bulani.webp"
import Danish from "@/images/Danish.png"
import Kg from "@/images/shotsBykg.png"

const testimonials = [
  {
    id: 1,
    name: "Chandan Bulani",
    date: "2023-08-15",
    rating: 5,
    avatar: ChandanBulani.src,
    testimonial: "We hired Web X Hunter to design and develop our Skinly website, and the experience was absolutely outstanding. From the very first consultation, their team understood our vision for a stylish, user-friendly, and conversion-focused eCommerce platform. They delivered a sleek design that perfectly showcases our mobile skins and accessories, with smooth navigation and fast loading speeds."
  },
  {
    id: 2,
    name: "Danish Khan",
    date: "2023-07-22",
    rating: 5,
    avatar: Danish.src,
    testimonial: "Web X Hunter did a great job creating our Urban Layon eCommerce website. From the start, they understood our vision for a premium clothing brand and turned it into a modern, stylish, and easy-to-use online store. The design matches our brand perfectly, with smooth navigation, quick loading, and a hassle-free shopping experience for our customers."
  },
  {
    id: 3,
    name: "Kamal Goswami",
    date: "2025-09-10",
    rating: 5,
    avatar: Kg.src,
    testimonial: "A huge thanks to WebxHunter for bringing my vision to life with a sleek, cinematic, and user-friendly portfolio. They perfectly captured the vibe I wanted — clean design, smooth navigation, and storytelling that truly represents my brand. Couldn’t be happier with the result!  — Shots by KG"


  }
];

export default function Testimonial() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold mb-4 text-xs uppercase tracking-wide">TESTIMONIALS</p>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="group bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={`${testimonial.name} avatar`}
            className="w-12 h-12 rounded-full object-cover bg-gray-700 border-2 border-gray-600 group-hover:border-orange-400 transition-all duration-300"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
            <Star className="w-2.5 h-2.5 text-white fill-current" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
            {testimonial.name}
          </h3>
          <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
            {formatDate(testimonial.date)}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }, (_, starIndex) => (
          <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      <blockquote className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        "{testimonial.testimonial}"
      </blockquote>
    </div>
  );
}