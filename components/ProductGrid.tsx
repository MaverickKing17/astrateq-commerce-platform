
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onAddToCart }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
              Premium AI Safety Solutions
            </h2>
            <p className="text-gray-500 font-medium">Engineered for precision. Designed for confidence.</p>
          </div>
          <a href="#" className="text-cyan-600 font-black text-xs tracking-widest uppercase hover:underline">
            View All Products →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col h-full bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
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
      </div>
    </section>
  );
};

export default ProductGrid;
