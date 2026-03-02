import { Code2, ShoppingCart, Layers, Search } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    description: "Custom-built websites from scratch — zero templates, designed specifically for your brand, audience, and business goals.",
    features: ["Business / Corporate Sites", "Portfolio & Showcase", "Landing Pages", "Google-Ready SEO"],
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "Shopify E-Commerce",
    description: "Feature-rich online stores on the world's leading e-commerce platform, ready to sell from day one.",
    features: ["Product Management", "Payment Integration", "Mobile-First Design", "Speed Optimization"],
  },
  {
    id: 3,
    icon: Layers,
    title: "Custom-Coded Stores",
    description: "Fully custom e-commerce and multivendor marketplaces built for businesses that need functionality beyond standard platforms.",
    features: ["Custom Admin Panel", "Wallet System + OTP", "Auto Invoice Generator", "Multivendor Support"],
  },
  {
    id: 4,
    icon: Search,
    title: "SEO Optimization",
    description: "Schema markup, XML sitemap, meta tags, and Google Search Console configured from day one so you rank faster.",
    features: ["On-Page SEO", "Google Search Console", "Schema Markup", "XML Sitemap"],
  },
];

export default function Services() {
  return (
    <section id="service" className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold mb-4 text-xs uppercase tracking-wide">Our Services</p>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Every Type of Website, Built Right</h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            We specialize in Shopify and custom-coded websites — crafted to perform, convert, and grow with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center gap-2 group-hover:text-gray-400 transition-colors duration-300">
                      <div className="w-1 h-1 bg-orange-400 rounded-full group-hover:bg-orange-300 transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}