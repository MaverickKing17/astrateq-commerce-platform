
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  monthlyPrice: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: 'daily' | 'ev' | 'fleet';
  badges: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export interface CartItem extends Product {
  quantity: number;
}
