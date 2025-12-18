
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Wallet, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="bg-cyan-500 text-white text-[11px] py-1 text-center font-medium tracking-wide">
        FREE SHIPPING ON ORDERS OVER $150+ • 60-DAY RETURNS • LIFETIME WARRANTY
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl italic">A</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-900">ASTRATEQ</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center space-x-1 text-sm font-semibold text-gray-600 hover:text-cyan-600">
                <span>For Daily Drivers</span>
                <ChevronDown size={14} />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center space-x-1 text-sm font-semibold text-gray-600 hover:text-cyan-600">
                <span>For EV Owners</span>
                <ChevronDown size={14} />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center space-x-1 text-sm font-semibold text-gray-600 hover:text-cyan-600">
                <span>For Families</span>
                <ChevronDown size={14} />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center space-x-1 text-sm font-semibold text-gray-600 hover:text-cyan-600">
                <span>For Businesses</span>
                <ChevronDown size={14} />
              </button>
            </div>
            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-cyan-600">Resources</a>
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-8 pr-4 py-1.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 w-48 border border-transparent"
              />
              <Search className="absolute left-2.5 top-2 text-gray-400" size={16} />
            </div>

            <button className="flex items-center space-x-2 text-cyan-600 border border-cyan-600 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-cyan-50 transition-colors">
              <Wallet size={14} />
              <span>CONNECT WALLET</span>
            </button>

            <button className="text-gray-600 hover:text-cyan-600">
              <User size={20} />
            </button>

            <div className="relative">
              <button className="text-gray-600 hover:text-cyan-600">
                <ShoppingCart size={20} />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="bg-cyan-500 text-white px-5 py-2 rounded-full text-xs font-black tracking-wider hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/20">
              FIND MY SOLUTION
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
             <div className="relative">
              <ShoppingCart className="text-gray-600" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
          <a href="#" className="block font-bold text-gray-800">For Daily Drivers</a>
          <a href="#" className="block font-bold text-gray-800">For EV Owners</a>
          <a href="#" className="block font-bold text-gray-800">For Families</a>
          <a href="#" className="block font-bold text-gray-800">For Businesses</a>
          <hr />
          <div className="flex items-center space-x-4">
             <button className="flex-1 bg-cyan-500 text-white py-3 rounded-xl font-bold">FIND MY SOLUTION</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
