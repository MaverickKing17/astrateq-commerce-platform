
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIRecommendation = async (quizData: Record<string, string>) => {
  try {
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

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback logic
    if (quizData.driver_type === 'fleet') return { recommendedProductId: 'fleetguard-pro', reasoning: "FleetGuard Pro is optimized for business management.", confidenceScore: 90 };
    if (quizData.driver_type === 'ev') return { recommendedProductId: 'ev-battery-suite', reasoning: "EV owners benefit most from our battery management suite.", confidenceScore: 90 };
    return { recommendedProductId: 'astra-ai-coach', reasoning: "The ASTRA-AI Coach provides the best personal safety features for daily drivers.", confidenceScore: 90 };
  }
};
