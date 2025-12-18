
import React, { useState } from 'react';
import { X, ChevronRight, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { QUIZ_QUESTIONS, PRODUCTS } from '../constants';
import { getAIRecommendation } from '../services/geminiService';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleAnswer = (value: string) => {
    const q = QUIZ_QUESTIONS[step];
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (step < QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      processResult(newAnswers);
    }
  };

  const processResult = async (finalAnswers: Record<string, string>) => {
    setIsAnalyzing(true);
    const result = await getAIRecommendation(finalAnswers);
    setRecommendation(result);
    setIsAnalyzing(false);
  };

  if (!isOpen) return null;

  const currentQuestion = QUIZ_QUESTIONS[step];
  const progress = ((step + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/90 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900">
          <X size={24} />
        </button>

        {!recommendation && !isAnalyzing ? (
          <div className="p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                <Sparkles className="text-cyan-600" size={20} />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Find Your Solution</h2>
            </div>

            <div className="h-2 w-full bg-gray-100 rounded-full mb-12 overflow-hidden">
              <div 
                className="h-full bg-cyan-500 transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {currentQuestion.question}
              </h3>
              <div className="grid gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 hover:border-cyan-500 hover:bg-cyan-50 transition-all text-left group"
                  >
                    <span className="text-lg font-bold text-gray-700 group-hover:text-cyan-700">
                      {option.label}
                    </span>
                    <ChevronRight className="text-gray-300 group-hover:text-cyan-500" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : isAnalyzing ? (
          <div className="p-24 text-center">
            <Loader2 className="mx-auto text-cyan-500 animate-spin mb-6" size={64} />
            <h3 className="text-2xl font-black text-gray-900 mb-2">Analyzing Your Driving Data...</h3>
            <p className="text-gray-500">Our Gemini-powered engine is finding your perfect match.</p>
          </div>
        ) : (
          <div className="p-12">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-emerald-600" size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Recommendation Ready</h2>
              <div className="inline-block px-4 py-1 bg-cyan-50 text-cyan-700 text-xs font-black rounded-full uppercase tracking-widest">
                AI Confidence: {recommendation.confidenceScore}%
              </div>
            </div>

            {(() => {
              const product = PRODUCTS.find(p => p.id === recommendation.recommendedProductId) || PRODUCTS[0];
              return (
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 mb-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <img src={product.imageUrl} className="w-32 h-32 rounded-2xl object-cover shadow-lg" alt="" />
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl font-black text-gray-900 mb-2">{product.name}</h4>
                      <p className="text-gray-600 font-medium italic mb-4">"{recommendation.reasoning}"</p>
                      <p className="text-3xl font-black text-cyan-600">${product.price}</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="flex gap-4">
              <button 
                onClick={onClose}
                className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-cyan-600 transition-colors"
              >
                View Recommended Product
              </button>
              <button 
                onClick={() => {
                  setStep(0);
                  setRecommendation(null);
                  setAnswers({});
                }}
                className="px-8 border-2 border-gray-200 text-gray-500 py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-gray-50 transition-colors"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
