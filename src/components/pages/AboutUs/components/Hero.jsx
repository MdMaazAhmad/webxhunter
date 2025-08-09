import { memo } from 'react';
import { Award, Globe, Rocket } from 'lucide-react';

const Hero = memo(() => (
  <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>
  
  <div className="relative max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Transforming Ideas Into
        <span className="block bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
          Digital Excellence
        </span>
      </h1>
      <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
        We craft exceptional digital experiences that drive growth, inspire audiences, 
        and deliver measurable results for businesses worldwide.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6 mt-16">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">50+</h3>
        <p className="text-gray-400 text-sm">Projects Delivered</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">3+</h3>
        <p className="text-gray-400 text-sm">Countries Served</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Rocket className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1">90%</h3>
        <p className="text-gray-400 text-sm">Client Satisfaction</p>
      </div>
    </div>
  </div>
</section>
));

export default Hero;