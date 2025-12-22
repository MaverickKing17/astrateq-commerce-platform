
import React from 'react';
import { ShoppingCart, Star, Filter, Package, ArrowRight, ImageOff } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  activeCategory: string;
  onCategoryChange: (category: any) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, activeCategory, onCategoryChange }) => {
  const getDynamicTitle = () => {
    switch (activeCategory) {
      case 'daily': return 'Daily Drive Intelligence';
      case 'ev': return 'EV Performance Ecosystem';
      case 'fleet': return 'Enterprise Fleet Solutions';
      default: return 'Advanced AI Safety Systems';
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100');
      // Create a fallback UI if image fails
      const fallback = document.createElement('div');
      fallback.className = 'text-gray-300 flex flex-col items-center gap-2';
      fallback.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><line x1="2" y1="2" x2="22" y2="22"/><path d="M10.41 10.41l-4.59 4.59"/><path d="M14.59 14.59l4.59-4.59"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.05-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/></svg><span class="text-[10px] font-black uppercase tracking-widest">Image Unavailable</span>`;
      parent.appendChild(fallback);
    }
  };

  return (
    <section className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              {getDynamicTitle()}
            </h2>
            <div className="flex items-center space-x-2 text-xs font-bold text-cyan-600 uppercase tracking-[0.2em]">
              <Package size={14} />
              <span>{products.length} Configuration{products.length !== 1 ? 's' : ''} Available</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative">
              <span className="absolute -top-2.5 left-4 px-2 bg-white text-[9px] font-black text-gray-400 uppercase tracking-widest z-10">Filter Solutions</span>
              <select 
                id="category-filter"
                value={activeCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="appearance-none px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all cursor-pointer hover:bg-gray-100 min-w-[240px]"
              >
                <option value="all">Complete Inventory</option>
                <option value="daily">Daily Commuting</option>
                <option value="ev">EV / High-Tech</option>
                <option value="fleet">Commercial Fleet</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <Filter size={16} />
              </div>
            </div>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <Package className="text-gray-300" size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">No matching systems found</h3>
            <p className="text-gray-500 font-medium mb-8">Refine your search parameters or explore our standard kits.</p>
            <button 
              onClick={() => onCategoryChange('all')}
              className="px-8 py-3 bg-gray-900 text-white rounded-full text-xs font-black tracking-widest uppercase hover:bg-cyan-600 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col h-full bg-white border border-gray-100 rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-12 fill-mode-both"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                    {product.badges.map((badge, idx) => (
                      <span key={idx} className={`px-4 py-1.5 text-[9px] font-black tracking-[0.15em] rounded-full uppercase shadow-xl backdrop-blur-md ${
                        badge.includes('BEST') ? 'bg-orange-500 text-white' : 
                        badge === 'NEW' ? 'bg-cyan-600 text-white' : 
                        badge.includes('RECOMMENDED') ? 'bg-indigo-600 text-white' :
                        'bg-gray-900/80 text-white'
                      }`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1.5 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "#facc15" : "none"} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-200"} />
                      ))}
                    </div>
                    <span className="text-sm font-black text-gray-900 ml-2">{product.rating.toFixed(1)}</span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">({product.reviewCount} Reports)</span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-cyan-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-10 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-50">
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Total System Price</span>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase">USD</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center group/btn hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-cyan-500/30"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={20} className="group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center">
                    <button className="text-[10px] font-black text-gray-400 hover:text-cyan-600 tracking-widest uppercase flex items-center space-x-2 transition-colors">
                      <span>Technical Specifications</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
