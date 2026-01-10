import { GoogleGenAI, Type } from "@google/genai";

// Initialize AI client lazily to prevent crashes during module evaluation
let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey || apiKey === 'undefined') {
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const getAIRecommendation = async (quizData: Record<string, string>) => {
  try {
    const ai = getClient();
    
    if (!ai) {
      console.warn("Gemini API Key missing or invalid. Falling back to local logic.");
      return getFallbackRecommendation(quizData);
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze user vehicle safety needs: ${JSON.stringify(quizData)}. 
      Recommend the best Astrateq product (astra-ai-coach, fleetguard-pro, or ev-battery-suite). 
      Return JSON with recommendedProductId, reasoning (2 sentences), and confidenceScore (0-100).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedProductId: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            confidenceScore: { type: Type.NUMBER }
          },
          required: ["recommendedProductId", "reasoning", "confidenceScore"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty AI response");
    return JSON.parse(text);
    
  } catch (error) {
    console.error("Gemini Error:", error);
    return getFallbackRecommendation(quizData);
  }
};

const getFallbackRecommendation = (quizData: Record<string, string>) => {
  if (quizData.driver_type === 'fleet') {
    return { 
      recommendedProductId: 'fleetguard-pro', 
      reasoning: "Based on your business needs, FleetGuard Pro provides the necessary enterprise telemetry for fleet maintenance.", 
      confidenceScore: 95 
    };
  }
  if (quizData.driver_type === 'ev') {
    return { 
      recommendedProductId: 'ev-battery-suite', 
      reasoning: "The EV Battery Suite is optimized for your electric vehicle's unique range and thermal safety requirements.", 
      confidenceScore: 95 
    };
  }
  return { 
    recommendedProductId: 'astra-ai-coach', 
    reasoning: "The ASTRA-AI Coach is perfect for your daily commute, offering real-time accident prevention.", 
    confidenceScore: 95 
  };
};