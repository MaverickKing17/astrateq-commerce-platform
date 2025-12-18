
import React from 'react';
import { Play, ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero-bg min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8 animate-in fade-in duration-700">
          <div className="inline-flex items-center space-x-4 text-gray-300 text-xs font-bold tracking-[0.2em] uppercase">
            <span>As featured in:</span>
            <span className="opacity-50">TechCrunch</span>
            <span className="opacity-50">Wired</span>
            <span className="opacity-50">The Verge</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Drive with Absolute <span className="gradient-text">Confidence</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-medium">
            AI-powered safety that predicts vehicle issues before they happen—<br className="hidden md:block" />
            protecting your family with industry-leading <span className="text-cyan-400 font-bold">94% accuracy</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-cyan-500 text-white px-8 py-4 rounded-full text-sm font-black tracking-widest hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/40">
              FIND MY PERFECT SOLUTION
            </button>
            <button className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-full text-sm font-black tracking-widest hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center space-x-2 backdrop-blur-sm">
              <Play size={18} fill="currentColor" />
              <span>WATCH HOW IT WORKS</span>
            </button>
          </div>

          <div className="flex flex-col items-center space-y-2 pt-8">
             <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#facc15" className="text-yellow-400" />
              ))}
              <span className="text-white font-bold ml-2">4.8/5</span>
              <span className="text-gray-400 text-sm">from 3,200+ reviews</span>
            </div>
            <p className="text-cyan-400 text-sm font-bold tracking-wider">
              <span className="text-white opacity-60 font-normal">50,247</span> protected drivers
            </p>
          </div>
        </div>

        {/* Dashboard Preview mockup */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25"></div>
          <div className="relative bg-gray-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl aspect-video md:aspect-[21/9]">
            <img 
              src="https://images.unsplash.com/photo-1617788138017-80ad42243c5d?auto=format&fit=crop&q=80&w=1200" 
              alt="Astrateq Dashboard"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-md flex items-center justify-center border border-cyan-500/40">
                <ShieldCheck className="text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-cyan-400 font-black tracking-widest uppercase">System Status</p>
                <p className="text-white font-bold">Astrateq AI Active • Optimized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
