
import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="text-cyan-600" size={24} />
            <h2 className="text-xl font-black text-gray-900">Your Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                <ShoppingBag size={32} />
              </div>
              <p className="text-gray-500 font-medium">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="text-cyan-600 font-black text-xs tracking-widest uppercase hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex space-x-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover border border-gray-100" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{item.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">Qty: {item.quantity}</p>
                  <p className="font-black text-cyan-600">${item.price}</p>
                </div>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-bold text-gray-600">Subtotal</span>
              <span className="font-black text-gray-900">${subtotal}</span>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-cyan-500 text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-cyan-600 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-cyan-500/20">
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
