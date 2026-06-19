import { useState, useEffect, FormEvent } from "react";
import { Phone, Mail, CheckCircle2, FileJson, Sparkles, Send } from "lucide-react";
import { AIProjectBlueprint, LeadSubmission } from "../types";

interface ContactFormProps {
  appliedBlueprint: AIProjectBlueprint | null;
  onClearAppliedBlueprint: () => void;
}

export function ContactForm({ appliedBlueprint, onClearAppliedBlueprint }: ContactFormProps) {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lead, setLead] = useState<LeadSubmission | null>(null);
  const [leadsLog, setLeadsLog] = useState<LeadSubmission[]>([]);

  // Automatically pre-fill form fields when a blueprint is applied from the planner!
  useEffect(() => {
    if (appliedBlueprint) {
      setBusinessType(appliedBlueprint.industryRecommendation || "");
      setMessage(
        `Hola Nexora, hemos generado la propuesta de IA "${appliedBlueprint.projectName}". ` +
        `Nos interesa implementar la arquitectura de art e-theme: "${appliedBlueprint.vibeTheme || "Glassmorphism"}" ` +
        `con sus características automatizadas.`
      );
      // Smooth scroll to the form panel
      const element = document.getElementById("contacto-form-card");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [appliedBlueprint]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !businessType) return;

    const newLead: LeadSubmission = {
      id: "NEX-" + Math.floor(1000 + Math.random() * 9000),
      name,
      businessType,
      message,
      submittedAt: new Date().toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit' }),
      status: "Recibido"
    };

    setLead(newLead);
    const updatedLog = [newLead, ...leadsLog];
    setLeadsLog(updatedLog);
    setSubmitted(true);

    // Clear form inputs
    setName("");
    onClearAppliedBlueprint();
  };

  const resetForm = () => {
    setSubmitted(false);
    setLead(null);
    setMessage("");
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-surface-container-lowest/10">
      {/* Dynamic ambient flare */}
      <div className="absolute inset-0 z-0 opacity-10 blur-[130px] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Narrative text & details (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#4cd7f6] uppercase block">
                CONEXIÓN GLOBAL
              </span>
              <h2 className="font-sans text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                ¿Listo para dar el salto al <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">futuro</span>?
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Estamos aquí para responder tus dudas y diseñar la arquitectura digital que tu empresa merece. Llámanos directamente o completa el formulario de solicitud para iniciar.
              </p>
            </div>

            <div className="space-y-6">
              {/* Direct call element */}
              <div className="flex items-start gap-4">
                <a 
                  href="tel:61396954"
                  className="bg-primary/20 p-3 rounded-xl border border-primary/20 hover:bg-primary/30 active:scale-95 transition-all text-primary block"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant font-bold tracking-widest uppercase mb-1">
                    TELÉFONO DIRECTO
                  </p>
                  <a 
                    href="tel:61396954" 
                    className="font-sans text-2xl font-extrabold text-on-surface hover:text-[#4cd7f6] transition-colors leading-none"
                  >
                    61396954
                  </a>
                </div>
              </div>

              {/* Email element */}
              <div className="flex items-start gap-4">
                <a 
                  href="mailto:hello@nexora.ai"
                  className="bg-secondary/20 p-3 rounded-xl border border-secondary/20 hover:bg-secondary/30 active:scale-95 transition-all text-secondary block"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant font-bold tracking-widest uppercase mb-1">
                    EMAIL CORPORATIVO
                  </p>
                  <a 
                    href="mailto:hello@nexora.ai"
                    className="font-sans text-xl font-extrabold text-on-surface hover:text-primary transition-colors leading-none"
                  >
                    hello@nexora.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Majestic Form Card (7 Columns) */}
          <div id="contacto-form-card" className="lg:col-span-12 xl:col-span-7">
            {submitted && lead ? (
              <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden text-center space-y-6">
                <div className="absolute top-0 right-0 p-3 opacity-25">
                  <Sparkles className="text-secondary w-16 h-16 animate-pulse" />
                </div>
                
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans text-2xl font-black text-on-surface">¡Solicitud Procesada!</h3>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Hemos registrado tus especificaciones técnicas e iniciado la simulación de pre-ingeniería. Nos pondremos en contacto en breve.
                  </p>
                </div>

                {/* Simulated database record lookup box */}
                <div className="max-w-md mx-auto bg-surface-container-low border border-white/5 rounded-2xl p-6 text-left space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2.5">
                    <span className="font-bold text-secondary">REGISTRO DE CRM INTERNO</span>
                    <span className="bg-primary/20 text-primary-fixed-dim px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                      {lead.status}
                    </span>
                  </div>
                  <div className="space-y-1.5 text-on-surface-variant">
                    <p>
                      <span className="text-on-surface font-semibold">Ref Ticket:</span> {lead.id}
                    </p>
                    <p>
                      <span className="text-on-surface font-semibold">Cliente:</span> {lead.name}
                    </p>
                    <p>
                      <span className="text-on-surface font-semibold">Sector:</span> {lead.businessType}
                    </p>
                    <p className="line-clamp-2">
                      <span className="text-on-surface font-semibold">Mensaje:</span> {lead.message || "Consultivo general."}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 border border-white/15 hover:bg-white/5 rounded-xl text-xs font-mono font-bold tracking-wider text-on-surface transition-all cursor-pointer active:scale-95"
                  >
                    ENVIAR NUEVO TICKET
                  </button>
                </div>
              </div>
            ) : (
              <div className="glass-panel p-8 md:p-10 rounded-3xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-sans text-xl font-bold text-on-surface">
                    Solicita Información
                  </h3>
                  {appliedBlueprint && (
                    <div className="flex items-center gap-1 text-primary animate-pulse bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                      <FileJson className="w-3.5 h-3.5" />
                      <span className="font-mono text-[9px] font-bold tracking-wider uppercase">ARCHIVADO IA</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {appliedBlueprint && (
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex justify-between items-center text-xs">
                      <div className="space-y-0.5">
                        <p className="font-semibold text-on-surface">Propuesta vinculada con éxito</p>
                        <p className="text-on-surface-variant font-mono text-[10px] uppercase">
                          Blueprint: {appliedBlueprint.projectName}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={onClearAppliedBlueprint}
                        className="text-[10px] font-mono font-bold hover:text-red-400 text-on-surface-variant mr-1"
                      >
                        REMOVER
                      </button>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full bg-surface-container-high border border-white/10 rounded-xl p-4 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                      Tipo de Empresa / Sector
                    </label>
                    <input
                      type="text"
                      required
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      placeholder="Ej. Startup, Logística, Retail corporativo..."
                      className="w-full bg-surface-container-high border border-white/10 rounded-xl p-4 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                      Mensaje / Requerimientos
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Cuéntanos tu proyecto..."
                      rows={4}
                      className="w-full bg-surface-container-high border border-white/10 rounded-xl p-4 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(210,187,255,0.4)] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>ENVIAR SOLICITUD</span>
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
