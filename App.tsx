
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ProductGrid from './components/ProductGrid.tsx';
import StatsSection from './components/StatsSection.tsx';
import QuizModal from './components/QuizModal.tsx';
import Footer from './components/Footer.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import { Product, CartItem, Testimonial } from './types.ts';
import { TESTIMONIALS, PRODUCTS } from './constants.tsx';
import { Mail, Zap, Quote, ChevronRight, Cpu, Radar, Network, X, ShoppingBag, Sparkles, Brain, Activity, ShieldCheck, Terminal, Layers } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'daily' | 'ev' | 'fleet'>('all');

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cartCount} 
        onOpenQuiz={() => setIsQuizOpen(true)} 
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
        onCategorySelect={(cat) => {
          setActiveCategory(cat as any);
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      <main>
        <div id="hero">
          <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        </div>

        {/* REFINED: High-Tech "Difference" Section */}
        <section className="py-32 bg-[#020617] relative overflow-hidden">
          {/* Advanced Background: Grid + Radial Glows */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.08),transparent_70%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-6 border border-cyan-500/40 rounded-full bg-cyan-500/10 backdrop-blur-md">
                <Layers size={14} className="text-cyan-400" />
                <span className="text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase">Architecture Overview</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                The <span className="text-cyan-400">Astrateq</span> Difference
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg font-medium leading-relaxed">
                We've moved beyond simple sensors. Our proprietary hardware stack processes telemetry at the edge, delivering predictive insights before the driver even knows a risk exists.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: <Cpu className="text-cyan-400" size={32} />,
                  title: "Adaptive AI Learning",
                  spec: "128-Layer Neural Net",
                  latency: "2.4ms",
                  tag: "LEARNING_MODE: ACTIVE",
                  desc: "A constantly evolving model that maps your vehicle's unique acoustic and vibration signatures to prevent catastrophic component failure."
                },
                {
                  icon: <Radar className="text-cyan-400" size={32} />,
                  title: "Predictive Analytics",
                  spec: "500+ Telemetry Points",
                  latency: "1.8ms",
                  tag: "SENSORS: ENGAGED",
                  desc: "Our systems sample engine harmonics 1,000 times per second, detecting thermal anomalies weeks before a 'Check Engine' light appears."
                },
                {
                  icon: <Network className="text-cyan-400" size={32} />,
                  title: "Proactive Protection",
                  spec: "Fleet-Wide Sync",
                  latency: "0.5ms",
                  tag: "PROTECTION: MAXIMUM",
                  desc: "Connected to a global fleet-learning network. When one vehicle learns a new failure pattern, every Astrateq system is updated instantly."
                }
              ].map((feature, i) => (
                <div key={i} className="relative group">
                  {/* Glowing Border Background */}
                  <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  
                  <div className="relative h-full bg-slate-900/60 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-start transition-all duration-500 group-hover:translate-y-[-12px] group-hover:bg-slate-800/80 group-hover:border-cyan-500/30">
                    
                    {/* Top Meta Info */}
                    <div className="w-full flex justify-between items-center mb-10">
                      <div className="flex items-center space-x-2 bg-black/40 px-3 py-1 rounded-md border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                        <span className="text-[9px] font-black text-cyan-400 tracking-widest uppercase">{feature.tag}</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 tracking-tighter">LATENCY: <span className="text-white">{feature.latency}</span></span>
                    </div>

                    {/* Icon with Glow */}
                    <div className="mb-8 relative">
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all">
                        {feature.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">{feature.title}</h3>
                    <div className="inline-block px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-md text-[10px] font-bold text-cyan-400 tracking-[0.15em] uppercase mb-6">{feature.spec}</div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">
                      {feature.desc}
                    </p>

                    <div className="mt-auto w-full">
                      <button className="flex items-center space-x-3 text-white font-black text-[10px] tracking-widest uppercase group/btn py-2">
                        <span className="group-hover/btn:text-cyan-400 transition-colors">Launch System Terminal</span>
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-cyan-500 group-hover/btn:text-gray-900 transition-all">
                          <ChevronRight size={14} />
                        </div>
                      </button>
                    </div>

                    {/* Scanning Line Effect */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="products">
          <ProductGrid 
            products={filteredProducts} 
            onAddToCart={handleAddToCart} 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <StatsSection />

        {/* Testimonials */}
        <section className="py-32 bg-gray-950 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative">
            <div className="text-center mb-12 flex justify-center"><Quote size={48} className="text-cyan-500/50" /></div>
            <div className="text-center space-y-8">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="#22d3ee" className="text-cyan-400" />)}
              </div>
              <p className="text-2xl md:text-3xl font-medium italic">"{TESTIMONIALS[activeTestimonial].quote}"</p>
              <div>
                <p className="text-lg font-black">{TESTIMONIALS[activeTestimonial].author}</p>
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest">{TESTIMONIALS[activeTestimonial].role}</p>
              </div>
              <div className="flex justify-center mt-12 space-x-3">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? 'bg-cyan-500 w-8' : 'bg-white/20 hover:bg-white/40'}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REDESIGNED AI Lab Recommendation Section */}
        <section className="py-32 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="relative group">
                {/* Technical Corner Brackets */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl"></div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-[3rem] p-12 md:p-24 text-center space-y-10 border border-gray-100 shadow-2xl shadow-cyan-500/5 overflow-hidden relative">
                   {/* Background AI Grid Decor */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                   
                   {/* Floating Tech Labels */}
                   <div className="absolute top-10 left-10 hidden lg:flex items-center space-x-2 text-[8px] font-black text-cyan-500/40 tracking-[0.3em] uppercase">
                      <Terminal size={10} />
                      <span>Diagnostics_Engaged: True</span>
                   </div>
                   <div className="absolute bottom-10 right-10 hidden lg:flex items-center space-x-2 text-[8px] font-black text-cyan-500/40 tracking-[0.3em] uppercase">
                      <Activity size={10} />
                      <span>Stream: v4.2_AI_Ready</span>
                   </div>

                   <div className="relative">
                      {/* Pulsing Neural Centerpiece */}
                      <div className="mx-auto w-24 h-24 mb-10 relative">
                         <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
                         <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping duration-[3000ms]"></div>
                         <div className="relative w-full h-full bg-white rounded-3xl shadow-xl flex items-center justify-center border border-gray-100 group-hover:border-cyan-200 transition-colors">
                            <Brain className="text-cyan-500 group-hover:scale-110 transition-transform duration-500" size={40} />
                         </div>
                      </div>

                      <div className="space-y-4">
                         <div className="inline-block px-4 py-1.5 bg-cyan-50 rounded-full text-[10px] font-black text-cyan-600 tracking-widest uppercase mb-4">
                            Precision Analysis Engine
                         </div>
                         <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight max-w-3xl mx-auto leading-none">
                            Find Your <span className="gradient-text">Perfect System</span> In Seconds
                         </h2>
                         <p className="max-w-xl mx-auto text-gray-500 font-medium text-lg leading-relaxed">
                            Our Gemini-powered engine analyzes your vehicle specs and driving habits to engineer a custom safety recommendation.
                         </p>
                      </div>
                   </div>
                   
                   <div className="flex flex-col items-center space-y-6">
                      <button 
                        onClick={() => setIsQuizOpen(true)} 
                        className="relative group/btn bg-gray-900 text-white px-16 py-6 rounded-2xl text-sm font-black tracking-[0.2em] uppercase overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-[1.02] active:scale-95"
                      >
                         <span className="relative z-10 flex items-center space-x-3">
                            <Sparkles size={18} className="text-cyan-400" />
                            <span>Run AI Diagnostic</span>
                         </span>
                         <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      </button>

                      <div className="flex flex-wrap justify-center gap-8 pt-4">
                        <span className="flex items-center space-x-2 text-[10px] font-black text-gray-400 tracking-widest uppercase">
                          <ShieldCheck size={14} className="text-emerald-500" />
                          <span>99.8% Accuracy</span>
                        </span>
                        <span className="flex items-center space-x-2 text-[10px] font-black text-gray-400 tracking-widest uppercase">
                          <Activity size={14} className="text-cyan-500" />
                          <span>Results Under 60s</span>
                        </span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Stay Ahead of the Curve</h2>
            <p className="text-gray-500 font-medium mb-12">Get exclusive AI safety insights delivered monthly.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-cyan-500/20" />
              <button className="bg-cyan-400 text-gray-900 px-10 py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-cyan-500">SUBSCRIBE</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
