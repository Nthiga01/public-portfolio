
import { GoogleGenAI } from "@google/genai";
import { EXPERIENCES, SKILLS, PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Nthiga Brian, a Business Analyst. 
Users will ask questions about Brian's career, skills, and projects.
Respond professionally using the data provided below. 
If information is not available, state that Brian would be happy to discuss it further in an interview.

Data:
Experiences: ${JSON.stringify(EXPERIENCES)}
Skills: ${JSON.stringify(SKILLS)}
Projects: ${JSON.stringify(PROJECTS)}
`;

export const askBrianAI = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or reach out to Brian directly!";
  }
};
