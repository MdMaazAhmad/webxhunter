import { memo } from 'react';
import { PenTool, Code, Globe, Layers, DollarSign, Headphones } from 'lucide-react';

const Values = memo(() => {
  const values = [
    { icon: PenTool, title: "Custom-Tailored Solutions", desc: "No templates. Every website is built from scratch, designed specifically for your brand, audience, and business goals." },
    { icon: Code, title: "Shopify & Custom Experts", desc: "Certified in Shopify and experienced in custom development — we always choose the right tool for your project." },
    { icon: Globe, title: "SEO-Ready from Day One", desc: "Proper structure, fast load times, mobile-first design, and Google Search Console setup — included in every plan." },
    { icon: Layers, title: "End-to-End Service", desc: "Design, development, launch, and support — all under one roof. No handoffs, no communication gaps." },
    { icon: DollarSign, title: "Transparent Pricing", desc: "What you see is what you pay. No hidden fees, no surprise invoices. Every deliverable is clearly defined upfront." },
    { icon: Headphones, title: "24/7 Technical Support", desc: "Our team is always available. Issues get resolved fast — because every minute of downtime costs you business." }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-6 h-0.5 bg-orange-500 rounded-full"></div>
            <span className="text-orange-500 text-xs font-mono tracking-[0.2em] uppercase">Why Choose Us</span>
            <div className="w-6 h-0.5 bg-orange-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            The Difference <span className="text-orange-500">That Delivers</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-light">
            Every agency promises results. We back it with process, transparency, and proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-300">
              <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center mb-5">
                <value.icon className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Values;