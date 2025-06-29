import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    date: "2023-08-15",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBAIgPv62Bkny024fH6SqtRvMVhViKy0FXVwudnzGUDAGpDjEX9zlRh_fRKFZEByuMPW23JQZ5yjmiCqTA7lYRo16panfmV8BWwzOSaAO8exs7Z4_puXoMKDhcLWLco11QRRdvJfBhcX3y6p0tuwCauIWToptBN6c0rF9N3qRN_pPWyYEluQu1kw0W5dkLBtIYz1HL_1DyI9AjP9r4fXjcTrRqBDa0paixaqQ-UI-PedLUW0EfsWVItxSR5QhtR3F41xnN3uswMgo",
    testimonial: "Working with Web x Hunter was a fantastic experience. They understood our vision and delivered a website that exceeded our expectations. Their professionalism and attention to detail are commendable."
  },
  {
    id: 2,
    name: "Ethan Bennett",
    date: "2023-07-22",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS3HSlhD1c3toAWRJ1fiNF6PL-2HpuGVxSlVqicaot7dT7a1jH3P88ARn5BKgipnXEPiXAg47kBdm1zCcg1LUMdPK9HJhCnoRzWYeGyVGvziIcq-2__xsc-UZLwV3xXZpjjm2z3X2gTb_KnXnEVJhnnfaWJot-GW3qE4PbBmUlUvkaA5YTpYfXg8ajoSV2MNkzKFs8m6MjV5hBYDsz8vgUSDqBwcCv_GPEZz5BnxEv826DwdJNGXiJ_ptAdkJCBDJMwq2D9HE-oEQ",
    testimonial: "The team at Web x Hunter is highly skilled and dedicated. They transformed our online presence and helped us achieve significant growth. We highly recommend their services."
  },
  {
    id: 3,
    name: "Olivia Hayes",
    date: "2023-06-10",
    rating: 5,
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt0vF8H8OJXXdeThVo74roBnOh7O2zTCI1uIQDzgzYiRRi0pjbOjwD7Z7p070S5UVCcVM6PUlQdQYlY5vXfoQtHGPY9aC0vanHy209jPM98-mcY-N2mMZhdFjZNlUGRlx__ghw0-Fy5NA39AxN8rS1pAsnxXdW9ma3TZaGBoWpfwpjyFv4ZcVt6I5KSWQK6JnxWUjKDlIiYLGolit4x-RQdE1Ib-8Yn2QLtUjMAl85CfwgkTi_mKuTAQfOBIXdN4gbZDEMUgh4_SE",
    testimonial: "Web x Hunter provided exceptional service and support throughout the entire process. Their creativity and expertise are unmatched. We are thrilled with the results."
  }
];

export default function Testimonial() {
  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-8">
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
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
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors duration-200">
      {/* Header with avatar and user info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name} avatar`}
          className="w-12 h-12 rounded-full object-cover bg-gray-700"
          loading="lazy"
        />
        <div className="flex-1">
          <h3 className="text-white text-base font-medium">
            {testimonial.name}
          </h3>
          <p className="text-gray-400 text-sm">
            {formatDate(testimonial.date)}
          </p>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <Star 
            key={index} 
            className="w-5 h-5 text-yellow-400 fill-current" 
          />
        ))}
      </div>

      {/* Testimonial text */}
      <blockquote className="text-white text-sm leading-relaxed">
        "{testimonial.testimonial}"
      </blockquote>
    </div>
  );
}