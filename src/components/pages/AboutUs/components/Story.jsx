import { memo } from 'react';
import { Target, Zap, CheckCircle, Calendar } from 'lucide-react';

const Story = memo(() => (
    <section className="py-20 bg-gray-900">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100/10 text-orange-400 text-xs font-medium mb-6">
            <Calendar className="w-3 h-3 mr-2" />
            Founded in 2020
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Our Journey to 
            <span className="text-orange-400"> Digital Innovation</span>
          </h2>
          <div className="space-y-4 text-sm text-gray-300 mb-6">
            <p>
            Founded with a vision to bridge the gap between creative design and cutting-edge technology, Web x Hunter has evolved from a passionate startup into a globally recognized IT company.
            </p>
            <p>
            We believe in the power of collaboration, innovation, and the relentless pursuit of excellence. Our team combines technical expertise with creative flair to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Started with a mission to democratize digital excellence</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Expanded to serve clients in 3+ countries worldwide</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Built a team of 10+ world-class professionals</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-orange-500/20 to-transparent rounded-xl p-6 backdrop-blur-sm border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
              <Target className="w-8 h-8 text-orange-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Mission</h4>
              <p className="text-gray-300 text-sm">Empowering businesses through innovative digital solutions that drive real growth and meaningful impact.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
              <Zap className="w-8 h-8 text-blue-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Vision</h4>
              <p className="text-gray-300 text-sm">Leading the future of digital transformation by creating experiences that inspire and technologies that empower.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default Story;