import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { DNA } from "./components/DNA";
import { ProposalPlanner } from "./components/ProposalPlanner";
import { InteractiveCalculator } from "./components/InteractiveCalculator";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { AIProjectBlueprint } from "./types";

export default function App() {
  const [appliedBlueprint, setAppliedBlueprint] = useState<AIProjectBlueprint | null>(null);

  const handleApplyBlueprint = (blueprint: AIProjectBlueprint) => {
    setAppliedBlueprint(blueprint);
  };

  const handleClearAppliedBlueprint = () => {
    setAppliedBlueprint(null);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Universal light glow decor elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[140px]" />
      </div>

      {/* Main App Layout */}
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <DNA />
        <ProposalPlanner onApplyBlueprint={handleApplyBlueprint} />
        <InteractiveCalculator />
        <Testimonials />
        <ContactForm 
          appliedBlueprint={appliedBlueprint} 
          onClearAppliedBlueprint={handleClearAppliedBlueprint} 
        />
      </main>

      <Footer />
    </div>
  );
}
