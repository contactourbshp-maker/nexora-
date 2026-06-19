import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("Missing GEMINI_API_KEY. Please set it in the Secrets panel in AI Studio.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API endpoint: Get custom website blueprint
  app.post("/api/blueprint", async (req, res) => {
    try {
      const { name, businessType, description } = req.body;
      if (!name || !businessType) {
        return res.status(400).json({ error: "El nombre de la empresa y el sector son obligatorios." });
      }

      const client = getGeminiClient();
      const prompt = `Diseña una arquitectura de software inteligente y propuesta web para:
- Empresa: ${name}
- Sector: ${businessType}
- Descripción del Proyecto: ${description || "Startup o negocio moderno buscando digitalización avanzada."}

Genera sugerencias adaptadas, realistas y de alto impacto tecnológico.`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Eres el Arquitecto Jefe de IA de Nexora. Diseñas estructuras de webs del futuro con componentes avanzados de IA, interfaces fluidas tipo Glassmorphism, y bases de datos optimizadas. Entrega propuestas profesionales y convincentes.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              projectName: { type: Type.STRING },
              industryRecommendation: { type: Type.STRING },
              vibeTheme: { type: Type.STRING },
              architectureSummary: { type: Type.STRING },
              suggestedPages: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              aiFeatures: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    benefit: { type: Type.STRING },
                    difficulty: { type: Type.STRING }
                  },
                  required: ["name", "benefit"]
                }
              },
              suggestedDatabaseSchema: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              timeline: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    phase: { type: Type.STRING },
                    duration: { type: Type.STRING },
                    deliverables: { type: Type.STRING }
                  },
                  required: ["phase", "duration"]
                }
              },
              estimatedCostSavingPercentage: { type: Type.STRING }
            },
            required: ["projectName", "industryRecommendation", "vibeTheme", "architectureSummary", "aiFeatures", "timeline"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        return res.status(500).json({ error: "No se pudo generar el blueprint. Inténtalo de nuevo." });
      }

      const blueprintData = JSON.parse(responseText.trim());
      return res.json(blueprintData);
    } catch (error: any) {
      console.error("Blueprint generation error:", error);
      return res.status(500).json({ error: error.message || "Error al conectar con la Inteligencia Artificial." });
    }
  });

  // Handle Vite middleware or production build
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
