import dotenv from "dotenv";
dotenv.config()
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


export const generateItinerary = async (req, res) => {
  try {
    const { days, destination, interests } = req.body;

    if (!days || !destination) {
      return res
        .status(400)
        .json({ error: "Destination and days are required" });
    }

    const prompt = `Create a ${days}-day travel itinerary for ${destination}. Interests: ${interests}. 
Give day-wise plan with 3–4 activities each day, one local food recommendation, and travel tips. Format it neatly.`;

 
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

   
    const itineraryText = response.text || "No response from AI.";

    console.log(" AI Response:", itineraryText);

    res.status(200).json({ itinerary: itineraryText });
  } catch (error) {
    console.error("Error generating itinerary:", error);
    res.status(500).json({ error: "Failed to generate itinerary" });
  }
};
