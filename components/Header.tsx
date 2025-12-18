
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Wallet, ChevronDown, Menu, X, CheckCircle } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenQuiz: () => void;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenQuiz, onOpenCart, onSearch, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleConnectWallet = () => {
    if (walletConnected) return;
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setWalletConnected(true);
    }, 2000); 
  };

  // Trigger bounce animation when cartCount changes
  useEffect(() => {
    if (cartCount > 0) {
      setIsBouncing(true);
      const timer = setTimeout(() => setIsBouncing(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="bg-cyan-500 text-white text-[11px] py-1 text-center font-medium tracking-wide">
        FREE SHIPPING ON ORDERS OVER $150+ • 60-DAY RETURNS • LIFETIME WARRANTY
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl italic">A</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-gray-900">ASTRATEQ</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'For Daily Drivers', id: 'daily' },
              { label: 'For EV Owners', id: 'ev' },
              { label: 'For Families', id: 'daily' }, 
              { label: 'For Businesses', id: 'fleet' }
            ].map((item) => (
              <div key={item.label} className="group relative">
                <button 
                  onClick={() => onCategorySelect(item.id)}
                  className="flex items-center space-x-1 text-sm font-semibold text-gray-600 hover:text-cyan-600 transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronDown size={14} className="opacity-50" />
                </button>
              </div>
            ))}
            <a href="#hero" className="text-sm font-semibold text-gray-600 hover:text-cyan-600 transition-colors">Resources</a>
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search products..." 
                className="pl-8 pr-4 py-1.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 w-48 border border-transparent transition-all focus:w-64"
              />
              <Search className="absolute left-2.5 top-2 text-gray-400" size={16} />
            </div>

            <button 
              onClick={handleConnectWallet}
              disabled={isConnecting}
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                walletConnected 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                : 'text-cyan-600 border border-cyan-600 hover:bg-cyan-50'
              }`}
            >
              {isConnecting ? (
                <div className="w-3 h-3 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
              ) : walletConnected ? (
                <CheckCircle size={14} />
              ) : (
                <Wallet size={14} />
              )}
              <span className="uppercase tracking-tight">
                {isConnecting 
                  ? 'CONNECTION REQUEST SENT...' 
                  : walletConnected 
                    ? '0x71C...3F4' 
                    : 'CONNECT WALLET'
                }
              </span>
            </button>

            <button className="text-gray-600 hover:text-cyan-600 transition-colors">
              <User size={20} />
            </button>

            <div className="relative">
              <button 
                onClick={onOpenCart}
                className="text-gray-600 hover:text-cyan-600 transition-all transform hover:scale-110"
              >
                <ShoppingCart size={20} />
              </button>
              {cartCount > 0 && (
                <span className={`absolute -top-2 -right-2 bg-cyan-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${isBouncing ? 'scale-150' : 'scale-100'} animate-in zoom-in`}>
                  {cartCount}
                </span>
              )}
            </div>

            <button 
              onClick={onOpenQuiz}
              className="bg-cyan-500 text-white px-5 py-2 rounded-full text-xs font-black tracking-wider hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              FIND MY SOLUTION
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="relative">
              <button onClick={onOpenCart}>
                <ShoppingCart className="text-gray-600" size={24} />
                {cartCount > 0 && (
                  <span className={`absolute -top-2 -right-2 bg-cyan-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${isBouncing ? 'scale-150' : 'scale-100'}`}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 animate-in slide-in-from-top duration-300">
          {[
            { label: 'For Daily Drivers', id: 'daily' },
            { label: 'For EV Owners', id: 'ev' },
            { label: 'For Families', id: 'daily' },
            { label: 'For Businesses', id: 'fleet' }
          ].map(item => (
            <button 
              key={item.label}
              onClick={() => {
                onCategorySelect(item.id);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left font-bold text-gray-800 py-2 hover:text-cyan-600"
            >
              {item.label}
            </button>
          ))}
          <hr />
          <div className="flex items-center space-y-4 flex-col">
             <button onClick={() => { onOpenQuiz(); setIsMenuOpen(false); }} className="w-full bg-cyan-500 text-white py-3 rounded-xl font-bold">FIND MY SOLUTION</button>
             <button onClick={handleConnectWallet} className="w-full border border-cyan-600 text-cyan-600 py-3 rounded-xl font-bold">
               {isConnecting ? 'REQUEST SENT...' : walletConnected ? '0x71C...3F4' : 'CONNECT WALLET'}
             </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
