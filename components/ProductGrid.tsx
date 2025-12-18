
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
            <p className="text-gray-500 font-medium">Engineered for precision. Designed for confidence.</p>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
            {['all', 'daily', 'ev', 'fleet'].map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black tracking-widest uppercase transition-all ${
                  activeCategory === cat 
                  ? 'bg-white text-cyan-600 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
            <Filter className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-400">No matching solutions found</h3>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col h-full bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.badges.map((badge, idx) => (
                      <span key={idx} className={`px-3 py-1 text-[10px] font-black tracking-widest rounded-full uppercase ${
                        badge === 'BESTSELLER' ? 'bg-cyan-500 text-white' : 
                        badge === 'NEW' ? 'bg-emerald-500 text-white' : 
                        'bg-orange-500 text-white'
                      }`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star size={14} fill="#facc15" className="text-yellow-400" />
                    <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviewCount})</span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">
                    {product.tagline}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-black text-gray-900">${product.price}</span>
                      <span className="text-gray-400 text-xs font-bold block">or ${product.monthlyPrice}/mo with Affirm</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-xs tracking-[0.15em] uppercase hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={18} />
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
