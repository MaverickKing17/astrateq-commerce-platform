
import React, { useState, useRef } from 'react';
import { Play, ShieldCheck, Star, Activity, Battery, AlertTriangle, Zap, X, Loader2, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
    setIsVideoLoading(true);
  };

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
            <button 
              onClick={onOpenQuiz}
              className="w-full sm:w-auto bg-cyan-500 text-white px-8 py-4 rounded-full text-sm font-black tracking-widest hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/40"
            >
              FIND MY PERFECT SOLUTION
            </button>
            <button 
              onClick={handleOpenVideo}
              className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-full text-sm font-black tracking-widest hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
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
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25"></div>
          
          <div className="relative bg-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl aspect-video md:aspect-[21/9] flex">
            <img 
              src="https://images.unsplash.com/photo-1617788138017-80ad42243c5d?auto=format&fit=crop&q=80&w=1200" 
              alt="Dashboard"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
            <div className="relative w-full h-full p-6 md:p-10 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <div className="flex space-x-4">
                  <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest mb-1">Safety Index</p>
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl font-black text-white">98.4</div>
                      <Activity className="text-emerald-400 animate-pulse" size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                 <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-cyan-500/20 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-cyan-500/40 border-t-transparent animate-spin duration-[4000ms] flex items-center justify-center">
                       <Zap className="text-cyan-400 animate-pulse" size={32} />
                    </div>
                 </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-md flex items-center justify-center border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <ShieldCheck className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-cyan-400 font-black tracking-widest uppercase mb-0.5">System Status</p>
                    <p className="text-white font-bold text-sm">Astrateq AI v4.2 • Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.15)] border border-white/10 group">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-30 w-12 h-12 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all backdrop-blur-md border border-white/10"
            >
              <X size={24} />
            </button>
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
               {isVideoLoading && (
                 <div className="flex flex-col items-center space-y-4 animate-pulse">
                    <Loader2 className="text-cyan-500 animate-spin" size={48} />
                    <span className="text-cyan-500/60 text-[10px] font-black tracking-[0.3em] uppercase">Initializing AI Stream</span>
                 </div>
               )}
               <video 
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                autoPlay loop playsInline controls
                onCanPlay={() => setIsVideoLoading(false)}
               >
                <source src="https://player.vimeo.com/external/517042568.hd.mp4?s=823334e369b161e712f5a6396e6255018653e6b7&profile_id=174" type="video/mp4" />
                Your browser does not support the video tag.
               </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
