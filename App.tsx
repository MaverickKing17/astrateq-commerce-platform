
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import StatsSection from './components/StatsSection';
import QuizModal from './components/QuizModal';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem, Testimonial } from './types';
import { TESTIMONIALS, PRODUCTS } from './constants';
import { Mail, Zap, Quote, ChevronRight, Cpu, Radar, Network, X, ShoppingBag } from 'lucide-react';

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

        {/* High-Tech "Difference" Section */}
        <section className="py-24 bg-[#05070a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #22d3ee 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-3 py-1 mb-4 border border-cyan-500/30 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase">
                Core Technology
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                The <span className="text-cyan-400">Astrateq</span> Difference
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400 font-medium leading-relaxed">
                Beyond reactive safety. We've built a predictive ecosystem that understands your vehicle's mechanical "DNA" in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="text-cyan-400" size={32} />,
                  title: "Adaptive AI Learning",
                  spec: "128-Layer Neural Net",
                  latency: "2.4ms",
                  desc: "Our proprietary neural network continuously learns your vehicle's unique patterns, adapting to your driving style."
                },
                {
                  icon: <Radar className="text-cyan-400" size={32} />,
                  title: "Predictive Analytics",
                  spec: "500+ Telemetry Points",
                  latency: "1.8ms",
                  desc: "Advanced algorithms analyze high-frequency vibrations and thermal fluctuations that traditional OBD-II scanners miss."
                },
                {
                  icon: <Network className="text-cyan-400" size={32} />,
                  title: "Proactive Protection",
                  spec: "Fleet-Wide Sync",
                  latency: "0.5ms",
                  desc: "Real-time edge computing prevents incidents by alerting you to potential failures before they manifest."
                }
              ].map((feature, i) => (
                <div key={i} className="relative group overflow-hidden">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-full bg-white/[0.03] backdrop-blur-xl p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center transition-all duration-300 group-hover:translate-y-[-8px] group-hover:bg-white/[0.06]">
                    <div className="absolute top-4 right-6 flex space-x-2">
                       <span className="text-[8px] font-black text-cyan-500/60 tracking-widest uppercase">Latency: {feature.latency}</span>
                    </div>
                    <div className="mb-8 relative">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-cyan-500/50 transition-colors">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{feature.title}</h3>
                    <div className="text-[10px] font-bold text-cyan-500 tracking-[0.2em] uppercase mb-4 opacity-70">{feature.spec}</div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">{feature.desc}</p>
                    <div className="mt-auto w-full">
                      <a href="#" className="inline-flex items-center space-x-2 text-cyan-400 font-black text-[10px] tracking-widest uppercase group/link">
                        <span>Enter Terminal</span>
                        <ChevronRight size={14} />
                      </a>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.5)] opacity-0 group-hover:animate-[scan_3s_linear_infinite]"></div>
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

        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4">
             <div className="bg-gray-100 rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
                <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4"><Zap className="text-cyan-500" size={32} /></div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Not Sure Which System You Need?</h2>
                <p className="max-w-xl mx-auto text-gray-600 font-medium">Take our 60-second quiz and get a personalized safety recommendation for your vehicle and driving style.</p>
                <button onClick={() => setIsQuizOpen(true)} className="bg-cyan-500 text-white px-12 py-5 rounded-full text-sm font-black tracking-widest hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/30">FIND MY PERFECT SOLUTION</button>
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
