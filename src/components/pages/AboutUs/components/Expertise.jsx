import { memo } from 'react';

const Expertise = memo(() => {
  const services = [
    { num: "01", title: "Business / Corporate Website", desc: "Professional, credibility-building websites for companies of all sizes. Custom design, service pages, contact forms, and fully optimized for Google search from day one." },
    { num: "02", title: "E-Commerce Store — Shopify", desc: "Feature-rich online stores on the world's leading e-commerce platform. Product management, secure checkout, payment gateway, and a mobile-first shopping experience." },
    { num: "03", title: "E-Commerce — Custom Coded", desc: "Fully custom-built e-commerce solutions for businesses that need functionality beyond standard platforms. Tailored entirely to your workflow, brand, and customers." },
    { num: "04", title: "Multivendor Marketplace", desc: "A complete marketplace where multiple vendors can register, list products, and manage their storefronts independently. Perfect for aggregators and online bazaars." },
    { num: "05", title: "Portfolio / Showcase Website", desc: "Elegant, visually-driven websites for creatives, photographers, studios, and agencies. Built to showcase your best work and attract exactly the right clients." },
    { num: "06", title: "Landing Page / Lead Generation", desc: "High-converting single-page websites for campaigns, product launches, or lead capture. Speed-optimized, mobile-first, and focused on turning visitors into customers." }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-orange-500 rounded-full"></div>
            <span className="text-orange-500 text-xs font-mono tracking-[0.2em] uppercase">What We Build</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Every Type of Website,<br />
            <span className="text-orange-500">Built Right</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl font-light leading-relaxed">
            We specialize in Shopify and custom-coded websites — crafted to perform, convert, and grow with your business. Here's what we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 border border-white/5 rounded-xl p-6 flex gap-5 hover:border-orange-500/30 transition-colors duration-300">
              <span className="text-3xl font-extrabold text-orange-500/20 leading-none min-w-[32px]">{service.num}</span>
              <div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">{service.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Expertise;