import { GoogleGenAI, Type } from "@google/genai";
import { AdviceType, AiResponse } from "../types";

// Note: In a real production app, this call should proxy through a backend to protect the API Key.
// However, per instructions, we are using client-side env.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeDamageDescription = async (description: string): Promise<AiResponse> => {
  if (!process.env.API_KEY) {
    // Fallback mock response if no API key is present for demo purposes
    return {
      advice: AdviceType.CONSULT,
      explanation: "We'd love to take a look. Please bring your vehicle in for a free inspection.",
      estimatedCostRange: "$50 - $300"
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert auto glass technician at Maple Auto Glass in Surrey, BC. 
      Analyze the customer's description of their windshield or upholstery damage.
      
      Customer description: "${description}"
      
      Provide a JSON response with:
      1. Advice (REPAIR, REPLACE, or CONSULT if unsure).
      2. A brief, friendly explanation (max 2 sentences).
      3. A rough estimated cost range in CAD (e.g. "$100 - $150").`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: { type: Type.STRING, enum: [AdviceType.REPAIR, AdviceType.REPLACE, AdviceType.CONSULT] },
            explanation: { type: Type.STRING },
            estimatedCostRange: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AiResponse;

  } catch (error) {
    console.error("AI Analysis failed:", error);
    return {
      advice: AdviceType.CONSULT,
      explanation: "Our AI systems are currently updating. Please call us for an instant quote!",
      estimatedCostRange: "Call for pricing"
    };
  }
};