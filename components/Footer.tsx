
import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin, Send, Shield, Lock, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl italic">A</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">ASTRATEQ</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Pioneering the future of vehicle safety through predictive AI and deep learning. 
              Making every journey safer, one mile at a time.
            </p>
            <div className="flex items-center space-x-6">
              <Twitter size={20} className="text-gray-500 hover:text-cyan-400 cursor-pointer" />
              <Linkedin size={20} className="text-gray-500 hover:text-cyan-400 cursor-pointer" />
              <Instagram size={20} className="text-gray-500 hover:text-cyan-400 cursor-pointer" />
              <Youtube size={20} className="text-gray-500 hover:text-cyan-400 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-cyan-400">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white">Driver Coach</a></li>
              <li><a href="#" className="hover:text-white">Emergency AI</a></li>
              <li><a href="#" className="hover:text-white">Predictive Fleet</a></li>
              <li><a href="#" className="hover:text-white">EV Suite</a></li>
              <li><a href="#" className="hover:text-white">View All</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-cyan-400">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Installation</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black tracking-[0.2em] uppercase text-cyan-400">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button className="absolute right-2 top-2 bg-cyan-500 p-1.5 rounded-lg hover:bg-cyan-600 transition-colors">
                <Send size={16} />
              </button>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <Shield size={12} className="text-cyan-500" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <Lock size={12} className="text-cyan-500" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <CreditCard size={12} className="text-cyan-500" />
                <span>Crypto Accepted</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-bold text-gray-500 tracking-widest uppercase">
          <div className="flex items-center space-x-6">
            <span>© 2025 Astrateq Gadgets. All rights reserved.</span>
            <div className="hidden lg:flex items-center space-x-4 ml-8">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-2 opacity-30 grayscale invert" alt="Visa" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 opacity-30 grayscale invert" alt="Mastercard" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-3 opacity-30 grayscale invert" alt="PayPal" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" className="h-3 opacity-30 grayscale invert" alt="Apple Pay" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
