export interface AIFeature {
  name: string;
  benefit: string;
  difficulty?: string;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  deliverables?: string;
}

export interface AIProjectBlueprint {
  projectName: string;
  industryRecommendation: string;
  vibeTheme: string;
  architectureSummary: string;
  suggestedPages?: string[];
  aiFeatures: AIFeature[];
  suggestedDatabaseSchema?: string[];
  timeline: TimelinePhase[];
  estimatedCostSavingPercentage?: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  businessType: string;
  message: string;
  submittedAt: string;
  status: "Recibido" | "En Análisis" | "Asignado";
}
