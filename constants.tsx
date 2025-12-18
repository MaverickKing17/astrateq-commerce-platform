
import React from 'react';
import { Product, Testimonial, QuizQuestion } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'astra-ai-coach',
    name: 'ASTRA-AI Driver Coach System',
    tagline: 'Your personal AI co-pilot for safer, smarter driving',
    price: 329,
    monthlyPrice: 27,
    rating: 4.9,
    reviewCount: 847,
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
    category: 'daily',
    badges: ['BESTSELLER', 'Recommended for You']
  },
  {
    id: 'fleetguard-pro',
    name: 'FleetGuard AI Pro',
    tagline: 'Enterprise-grade fleet safety and predictive maintenance',
    price: 599,
    monthlyPrice: 50,
    rating: 4.8,
    reviewCount: 341,
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    category: 'fleet',
    badges: ['NEW']
  },
  {
    id: 'ev-battery-suite',
    name: 'EV Battery Intelligence Suite',
    tagline: 'Maximize range and protect your EV investment',
    price: 449,
    monthlyPrice: 37,
    rating: 4.9,
    reviewCount: 523,
    imageUrl: 'https://images.unsplash.com/photo-1560177112-fbfd5fde9566?auto=format&fit=crop&q=80&w=800',
    category: 'ev',
    badges: ['EV OWNERS']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Mitchell',
    role: 'Tesla Model Y Owner',
    quote: 'This system predicted my transmission failure 5 weeks before my mechanic even heard anything unusual. Saved me from a $3,000 emergency repair and kept my family safe.',
    rating: 5
  },
  {
    id: '2',
    author: 'David Chen',
    role: 'Fleet Manager, Logistics Plus',
    quote: 'Managing 50 vehicles used to be a nightmare of reactive fixes. Astrateq gave us the foresight to schedule maintenance before breakdowns happened. ROI was immediate.',
    rating: 5
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'driver_type',
    question: 'How would you primarily describe your driving needs?',
    options: [
      { label: 'Daily Commuting & Personal Use', value: 'daily' },
      { label: 'Managing a Business Fleet', value: 'fleet' },
      { label: 'EV Enthusiast / Tech Focused', value: 'ev' }
    ]
  },
  {
    id: 'vehicle_age',
    question: 'How old is your primary vehicle?',
    options: [
      { label: 'New (0-3 years)', value: 'new' },
      { label: 'Mature (4-10 years)', value: 'mature' },
      { label: 'Classic (10+ years)', value: 'classic' }
    ]
  },
  {
    id: 'primary_concern',
    question: 'What is your biggest automotive concern?',
    options: [
      { label: 'Safety & Accident Prevention', value: 'safety' },
      { label: 'Predictive Maintenance & Longevity', value: 'maintenance' },
      { label: 'Battery Health & Range Optimization', value: 'battery' }
    ]
  }
];
