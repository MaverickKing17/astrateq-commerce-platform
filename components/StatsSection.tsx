
import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Trusted by Over <span className="text-cyan-400">50,000</span> Drivers Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <div className="text-7xl font-black text-white/20">94%</div>
            <h3 className="text-xl font-bold text-white mt-[-2.5rem]">Failure Prediction Accuracy</h3>
            <p className="text-gray-500 text-sm">Proprietary neural network trained on 1B+ miles of driving data.</p>
          </div>
          <div className="space-y-2">
            <div className="text-7xl font-black text-white/20">40%</div>
            <h3 className="text-xl font-bold text-white mt-[-2.5rem]">Accident Risk Reduction</h3>
            <p className="text-gray-500 text-sm">Real-time coaching that anticipates hazards before they manifest.</p>
          </div>
          <div className="space-y-2">
            <div className="text-7xl font-black text-white/20">3-6</div>
            <h3 className="text-xl font-bold text-white mt-[-2.5rem]">Weeks Advance Warning</h3>
            <p className="text-gray-500 text-sm">Industry-leading lead time for mechanical and electrical issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
