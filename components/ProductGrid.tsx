
import React from 'react';
import { ShoppingCart, Star, Filter, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  activeCategory: string;
  onCategoryChange: (category: any) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, activeCategory, onCategoryChange }) => {
  // Helper to get a descriptive title based on category
  const getDynamicTitle = () => {
    switch (activeCategory) {
      case 'daily': return 'Daily Driver Safety Solutions';
      case 'ev': return 'EV Performance & Battery Intelligence';
      case 'fleet': return 'Enterprise Fleet Management Systems';
      default: return 'Premium AI Safety Solutions';
    }
  };

  return (
    <section className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="space-y-1">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight transition-all duration-300">
              {getDynamicTitle()}
            </h2>
            <div className="flex items-center space-x-2 text-sm font-bold text-cyan-600/60 uppercase tracking-widest">
              <Package size={14} />
              <span>Showing {products.length} {products.length === 1 ? 'result' : 'results'}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <label htmlFor="category-filter" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Filter by category
            </label>
            <select 
              id="category-filter"
              value={activeCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all cursor-pointer hover:bg-gray-100 min-w-[200px]"
            >
              <option value="all">All Solutions</option>
              <option value="daily">Daily Driving</option>
              <option value="ev">EV Intelligence</option>
              <option value="fleet">Fleet Enterprise</option>
            </select>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100 animate-in fade-in duration-500">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <Filter className="text-gray-300" size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">No matching systems found</h3>
            <p className="text-gray-500 font-medium mb-8">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => onCategoryChange('all')}
              className="text-cyan-600 font-black text-xs tracking-widest uppercase hover:text-cyan-700 transition-colors underline decoration-2 underline-offset-8"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col h-full bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 hover:scale-[1.01] animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    {product.badges.map((badge, idx) => (
                      <span key={idx} className={`px-4 py-1.5 text-[10px] font-black tracking-widest rounded-xl uppercase shadow-lg shadow-black/10 backdrop-blur-md ${
                        badge === 'BESTSELLER' || badge === 'RECOMMENDED FOR YOU' ? 'bg-orange-500/90 text-white' : 
                        badge === 'NEW' ? 'bg-cyan-600/90 text-white' : 
                        badge === 'EV OWNERS' ? 'bg-emerald-600/90 text-white' :
                        'bg-gray-900/90 text-white'
                      }`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1.5 mb-4">
                    <Star size={16} fill="#facc15" className="text-yellow-400" />
                    <span className="text-sm font-black text-gray-900">{product.rating.toFixed(1)}</span>
                    <span className="text-sm text-gray-400 font-medium">({product.reviewCount} reviews)</span>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight group-hover:text-cyan-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-10 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  <div className="mt-auto pt-8 border-t border-gray-50 mb-8">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">USD</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-[#0a0f1c] text-white py-5 rounded-[1.5rem] font-black text-xs tracking-[0.2em] uppercase hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center space-x-3 group/btn hover:shadow-xl hover:shadow-cyan-500/20"
                  >
                    <ShoppingCart size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    <span>ADD TO CART</span>
                  </button>
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
