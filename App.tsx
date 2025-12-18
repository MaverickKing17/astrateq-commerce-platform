
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import StatsSection from './components/StatsSection';
import QuizModal from './components/QuizModal';
import Footer from './components/Footer';
import { Product, Testimonial } from './types';
import { TESTIMONIALS } from './constants';
import { Mail, Zap, Target, Activity, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleAddToCart = (product: Product) => {
    setCartCount(prev => prev + 1);
    // Visual feedback could go here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} />
      
      <main>
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* Features Section - The Astrateq Difference */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">The Astrateq Difference</h2>
              <p className="text-cyan-600 font-bold tracking-widest uppercase text-xs">
                Prevention, Not Reaction — Traditional safety systems respond after problems occur. Our AI predicts and prevents them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="text-cyan-500" size={32} />,
                  title: "Adaptive AI Learning",
                  desc: "Our proprietary neural network continuously learns your vehicle's unique patterns, adapting to your driving style and environmental conditions for increasingly accurate predictions over time."
                },
                {
                  icon: <Activity className="text-cyan-500" size={32} />,
                  title: "Predictive Analytics",
                  desc: "Advanced algorithms analyze over 500 data points per second, identifying subtle anomalies that human inspection would miss, giving you actionable insights weeks before issues manifest."
                },
                {
                  icon: <Target className="text-cyan-500" size={32} />,
                  title: "Proactive Protection",
                  desc: "Move beyond reactive safety. Our system actively prevents incidents by alerting you to potential failures, optimizing your vehicle maintenance, and ensuring your vehicle performs at its best."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center flex flex-col items-center group">
                  <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-cyan-50 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{feature.desc}</p>
                  <a href="#" className="mt-auto text-cyan-600 font-black text-xs tracking-widest uppercase hover:underline">
                    LEARN MORE →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid Section */}
        <ProductGrid onAddToCart={handleAddToCart} />

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials Slider */}
        <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-cyan-600/10 blur-[120px] rounded-full transform -translate-y-1/2"></div>
          <div className="max-w-4xl mx-auto px-4 relative">
            <div className="text-center mb-12 flex justify-center">
              <Quote size={48} className="text-cyan-500/50" />
            </div>
            
            <div className="relative">
              <div className="text-center space-y-8">
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="#22d3ee" className="text-cyan-400" />)}
                </div>
                <p className="text-2xl md:text-3xl font-medium leading-relaxed italic">
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                <div>
                  <p className="text-lg font-black text-white">— {TESTIMONIALS[activeTestimonial].author}</p>
                  <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest">{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </div>

              <div className="flex justify-center mt-12 space-x-3">
                {TESTIMONIALS.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? 'bg-cyan-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Recommendation Engine */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-gray-100 rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
                
                <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <Zap className="text-cyan-500" size={32} />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                  Not Sure Which System You Need?
                </h2>
                <p className="max-w-xl mx-auto text-gray-600 font-medium">
                  Take our 60-second quiz and get a personalized safety recommendation for your vehicle and driving style.
                </p>
                
                <button 
                  onClick={() => setIsQuizOpen(true)}
                  className="bg-cyan-500 text-white px-12 py-5 rounded-full text-sm font-black tracking-widest hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/30"
                >
                  FIND MY PERFECT SOLUTION
                </button>
                
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                  <span className="flex items-center space-x-2 text-xs font-bold text-gray-500">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>No email required</span>
                  </span>
                  <span className="flex items-center space-x-2 text-xs font-bold text-gray-500">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Instant results</span>
                  </span>
                  <span className="flex items-center space-x-2 text-xs font-bold text-gray-500">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Free</span>
                  </span>
                </div>
             </div>
          </div>
        </section>

        {/* Newsletter / "Stay Ahead" section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8 inline-block p-4 bg-cyan-50 rounded-2xl">
              <Mail className="text-cyan-600" size={32} />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Stay Ahead of the Curve</h2>
            <p className="text-gray-500 font-medium mb-12">Get exclusive AI safety insights, early access to new features, and expert tips delivered monthly.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="bg-cyan-400 text-gray-900 px-10 py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-cyan-500 transition-colors">
                SUBSCRIBE
              </button>
            </form>
            <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              ✓ No spam. Unsubscribe anytime. <a href="#" className="underline">Privacy Policy</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
    </div>
  );
};

// Simple helper component since we didn't define CheckCircle2 globally
const CheckCircle2 = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default App;
