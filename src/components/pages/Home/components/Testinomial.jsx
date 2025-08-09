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