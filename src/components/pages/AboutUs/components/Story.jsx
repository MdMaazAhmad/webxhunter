import { memo } from 'react';

const Story = memo(() => {
  const steps = [
    { num: "01", title: "Discovery & Free Consultation", desc: "We learn your business, goals, audience, and competitors — laying the foundation for everything that follows." },
    { num: "02", title: "Design & Prototyping", desc: "Wireframes and visual mockups reviewed and approved before a single line of code is written." },
    { num: "03", title: "Development & Integration", desc: "Built on Shopify or custom code with all features, plugins, and payment systems fully integrated." },
    { num: "04", title: "Testing & Quality Assurance", desc: "Tested across all devices and browsers for speed, security, and flawless functionality." },
    { num: "05", title: "Launch & Deployment", desc: "Domain configured, hosting live, Google Search Console submitted — your website goes live." },
    { num: "06", title: "1 Year Free Support", desc: "Free technical support for a full year post-launch. We're with you every step of the way." }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-orange-500 rounded-full"></div>
            <span className="text-orange-500 text-xs font-mono tracking-[0.2em] uppercase">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Our 6-Step Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 border-b border-white/5 pb-6 last:border-0 md:last:border-b-0">
              <span className="text-3xl font-extrabold text-orange-500/30 leading-none">{step.num}</span>
              <div>
                <h4 className="text-base font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Story;