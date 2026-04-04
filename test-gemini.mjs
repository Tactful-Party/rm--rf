import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "AIzaSyAUIXuKaDhTiaWI_U7AdNyw5xBZFpZbH8w" });
async function test() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: [{role: "user", parts: [{text: "Hello"}]}],
    });
    console.log("SUCCESS:", response.text);
  } catch (error) {
    console.error("ERROR_THROWN:", error);
  }
}
test();
