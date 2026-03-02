import { memo } from 'react';
import { Clock, Shield, Zap } from 'lucide-react';

const Hero = memo(() => (
  <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Crafting <br className="md:hidden" />
          <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Digital Success
          </span><br />
          Stories
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          From stunning business websites to powerful e-commerce stores — Web x Hunter builds digital experiences that captivate your audience and drive measurable business growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">15-20 Days</h3>
          <p className="text-gray-400 text-sm">Fast Delivery</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Shield className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Secure & Reliable</h3>
          <p className="text-gray-400 text-sm">SSL & Cloud Hosting</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Zap className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">SEO Ready</h3>
          <p className="text-gray-400 text-sm">Optimized from Day One</p>
        </div>
      </div>
    </div>
  </section>
));

export default Hero;