
import { GoogleGenAI, Type } from "@google/genai";

// Initialize AI client. process.env.API_KEY must be configured in Vercel project settings.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIRecommendation = async (quizData: Record<string, string>) => {
  try {
    // Basic validation to prevent unnecessary API crashes
    if (!process.env.API_KEY || process.env.API_KEY === 'undefined') {
      console.warn("Gemini API Key not found. Proceeding with local logic.");
      return getFallbackRecommendation(quizData);
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on these user responses for a vehicle safety system quiz: ${JSON.stringify(quizData)}. 
      Recommend which Astrateq product (ASTRA-AI Coach, FleetGuard Pro, or EV Battery Suite) fits them best and explain why in 2 short sentences. 
      Also provide a confidence score from 0-100.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedProductId: { type: Type.STRING, description: "One of: astra-ai-coach, fleetguard-pro, ev-battery-suite" },
            reasoning: { type: Type.STRING },
            confidenceScore: { type: Type.NUMBER }
          },
          required: ["recommendedProductId", "reasoning", "confidenceScore"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from Gemini");
    return JSON.parse(text);
    
  } catch (error) {
    console.error("Gemini Recommendation Engine Error:", error);
    return getFallbackRecommendation(quizData);
  }
};

/**
 * High-accuracy fallback recommendation logic based on driver intent.
 */
const getFallbackRecommendation = (quizData: Record<string, string>) => {
  if (quizData.driver_type === 'fleet') {
    return { 
      recommendedProductId: 'fleetguard-pro', 
      reasoning: "FleetGuard Pro is specifically engineered for business logistics and enterprise fleet health monitoring.", 
      confidenceScore: 98 
    };
  }
  if (quizData.driver_type === 'ev') {
    return { 
      recommendedProductId: 'ev-battery-suite', 
      reasoning: "The EV Battery Suite provides specialized telemetry for range optimization and thermal safety critical for electric vehicles.", 
      confidenceScore: 98 
    };
  }
  return { 
    recommendedProductId: 'astra-ai-coach', 
    reasoning: "The ASTRA-AI Coach offers the most versatile personal safety features for daily commuting and high-accuracy accident prevention.", 
    confidenceScore: 98 
  };
};
