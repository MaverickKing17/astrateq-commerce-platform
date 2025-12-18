
import React from 'react';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  activeCategory: string;
  onCategoryChange: (category: any) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, activeCategory, onCategoryChange }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
              Premium AI Safety Solutions
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <select 
              value={activeCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            >
              <option value="all">All products</option>
              <option value="daily">Daily Drivers</option>
              <option value="ev">EV Owners</option>
              <option value="fleet">Fleet Management</option>
            </select>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
            <Filter className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-400">No matching solutions found</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col h-full bg-white border border-gray-100 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 hover:scale-[1.01] animate-in fade-in slide-in-from-bottom-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.badges.map((badge, idx) => (
                      <span key={idx} className={`px-3 py-1 text-[10px] font-black tracking-widest rounded-lg uppercase ${
                        badge === 'BESTSELLER' || badge === 'RECOMMENDED FOR YOU' ? 'bg-orange-500 text-white' : 
                        badge === 'NEW' ? 'bg-cyan-600 text-white' : 
                        badge === 'EV OWNERS' ? 'bg-emerald-600 text-white' :
                        'bg-gray-700 text-white'
                      }`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1 mb-4">
                    <Star size={16} fill="#facc15" className="text-yellow-400" />
                    <span className="text-sm font-bold text-gray-900">{product.rating.toFixed(1)}</span>
                    <span className="text-sm text-gray-400">({product.reviewCount})</span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-8 line-clamp-2">
                    {product.tagline}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">USD</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-[#0a0f1c] text-white py-4 rounded-2xl font-black text-xs tracking-[0.15em] uppercase hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-3 group/btn"
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
