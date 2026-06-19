import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, FileText, Calendar, Database, Layers, Check, Copy, ArrowDownRight } from "lucide-react";
import { AIProjectBlueprint } from "../types";

interface ProposalPlannerProps {
  onApplyBlueprint: (blueprint: AIProjectBlueprint) => void;
}

export function ProposalPlanner({ onApplyBlueprint }: ProposalPlannerProps) {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [blueprint, setBlueprint] = useState<AIProjectBlueprint | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadingSteps = [
    "Inicializando Núcleo Generativo Nexora...",
    "Conectando canales con Modelo Gemini 3.5-Flash...",
    "Analizando sector corporativo y patrones de conversión...",
    "Estructurando base de datos relacional sugerida...",
    "Diseñando módulos y agentes de Inteligencia Artificial...",
    "Compilando cronograma de desarrollo y propuesta final..."
  ];

  const handleGenerate = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !businessType) return;

    setLoading(true);
    setError(null);
    setBlueprint(null);
    setLoadingStep(0);

    // Dynamic loading screen step simulation
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1500);

    try {
      const response = await fetch("/api/blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, businessType, description })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Error al generar la propuesta.");
      }

      const data = await response.json();
      setBlueprint(data);
    } catch (e: any) {
      console.error(e);
      setError(e.message || "No se pudo generar la propuesta. Por favor verifica tu llave API en Secrets.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!blueprint) return;
    const text = `
NEXORA AI - PROPUESTA TECNOLÓGICA PERSONALIZADA
===============================================
Proyecto: ${blueprint.projectName}
Sector recomendado: ${blueprint.industryRecommendation}
Estilo Visual Recomendo: ${blueprint.vibeTheme}

RESUMEN DE ARQUITECTURA:
${blueprint.architectureSummary}

MÓDULOS DE INTELIGENCIA ARTIFICIAL:
${blueprint.aiFeatures.map((f) => `- ${f.name}: ${f.benefit} (Dificultad: ${f.difficulty || "Media"})`).join("\n")}

CRONOGRAMA DE ENTREGAS:
${blueprint.timeline.map((t) => `- Fase: ${t.phase} (${t.duration}) - Entregables: ${t.deliverables || "N/D"}`).join("\n")}
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="blueprint-generator" className="py-24 relative overflow-hidden bg-surface-container-lowest/30">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-container-lowest/20 to-surface pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-secondary uppercase block mb-3">
            HERRAMIENTA INTERACTIVA
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4">
            Generador de Arquitectura IA
          </h2>
          <p className="text-on-surface-variant font-sans text-sm md:text-base">
            Ingresa los datos de tu empresa y nuestra IA estructurará un diagnóstico arquitectónico, mapa de base de datos, módulos inteligentes sugeridos y cronograma de desarrollo técnico inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl">
            <h3 className="font-sans text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              Configurar Especificaciones
            </h3>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block font-mono text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  Nombre de tu Empresa / Proyecto
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. NovaLogistics, AuraSkin Care"
                  className="w-full bg-surface-container-high border border-white/10 rounded-xl p-4 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  Sector o Nicho del Negocio
                </label>
                <select
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-surface-container-high border border-white/10 rounded-xl p-4 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="E-Commerce / Tienda Digital">E-Commerce / Tienda Digital</option>
                  <option value="Logística e Inventario">Logística e Inventario</option>
                  <option value="SaaS / Software como Servicio">SaaS / Software como Servicio</option>
                  <option value="Salud, Clínicas y Medicina">Salud, Clínicas y Medicina</option>
                  <option value="Fintech e Inversiones">Fintech e Inversiones</option>
                  <option value="Inmobiliaria / Real Estate">Inmobiliaria / Real Estate</option>
                  <option value="Educación y E-Learning">Educación y E-Learning</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                  Objetivo Principal del Sitio (Opcional)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ej. Queremos que el usuario pueda subir fotos de sus facturas para que la IA las lea automáticamente y nos dé gráficas."
                  rows={4}
                  className="w-full bg-surface-container-high border border-white/10 rounded-xl p-4 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  loading
                    ? "bg-surface-container-highest text-on-surface-variant cursor-not-allowed border border-white/5"
                    : "bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container hover:shadow-[0_0_20px_rgba(210,187,255,0.3)] hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {loading ? "GENERANDO BLUEPRINT..." : "AUTOGENERAR PROPUESTA IA"}
              </button>
            </form>
          </div>

          {/* Output Display / Terminal Panel */}
          <div className="lg:col-span-7 h-full min-h-[500px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-surface-container-lowest border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-between min-h-[500px]"
                >
                  <div>
                    <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
                      <Terminal className="w-5 h-5 text-secondary animate-pulse" />
                      <span className="font-mono text-xs text-secondary-fixed tracking-wider font-semibold uppercase">
                        NEXORA TERMINAL ENGINE
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs leading-relaxed text-on-surface-variant">
                      <p className="text-primary-fixed-dim">{"[BUILD] Pipeline initialized..."}</p>
                      <p>{`[META] Target business: ${name || "S/N"}`}</p>
                      <p>{`[META] Business category: ${businessType}`}</p>
                      <div className="pt-4 space-y-2">
                        {loadingSteps.slice(0, loadingStep).map((step, idx) => (
                          <div key={idx} className="flex gap-2 items-center text-secondary">
                            <span className="text-secondary-fixed">✔</span>
                            <span>{step}</span>
                          </div>
                        ))}
                        <div className="flex gap-2 items-center text-primary-fixed animate-pulse">
                          <span className="animate-spin">⚡</span>
                          <span>{loadingSteps[loadingStep]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden mt-8">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                </motion.div>
              )}

              {error && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-error-container/20 border border-error/20 p-8 rounded-3xl text-center h-full flex flex-col justify-center items-center min-h-[500px]"
                >
                  <p className="text-error font-mono text-sm mb-4">Error de Ejecución</p>
                  <p className="text-on-surface text-sm max-w-sm">{error}</p>
                </motion.div>
              )}

              {blueprint && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-surface-container border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col min-h-[500px]"
                >
                  {/* Decorative background blueprints graph style */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none border-t border-b border-primary border-dashed bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Header / Meta */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/10 pb-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] bg-secondary/20 text-secondary px-2.5 py-0.5 rounded-full font-bold tracking-wider uppercase">
                          AI ARCHITECTURE PROPOSAL
                        </span>
                        {blueprint.estimatedCostSavingPercentage && (
                          <span className="font-mono text-[10px] bg-primary/20 text-primary px-2.5 py-0.5 rounded-full font-bold tracking-wider uppercase">
                            +{blueprint.estimatedCostSavingPercentage} Eficiencia
                          </span>
                        )}
                      </div>
                      <h4 className="font-sans text-2xl font-extrabold text-on-surface tracking-tight">
                        {blueprint.projectName}
                      </h4>
                      <p className="text-xs font-mono text-on-surface-variant uppercase mt-1">
                        Sugerido para: <span className="text-secondary-fixed">{blueprint.industryRecommendation}</span>
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleCopy}
                        className="p-2.5 rounded-xl border border-white/10 bg-surface-container/50 text-on-surface-variant hover:text-white hover:border-white/20 transition-all flex items-center gap-1.5 font-mono text-xs cursor-pointer"
                        title="Copiar Blueprint Completo"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? "COPIADO" : "COPIAR"}</span>
                      </button>

                      <button
                        onClick={() => onApplyBlueprint(blueprint)}
                        className="p-2.5 rounded-xl border border-secondary/30 bg-secondary/5 text-secondary hover:bg-secondary/15 transition-all flex items-center gap-1.5 font-mono text-xs cursor-pointer"
                      >
                        <ArrowDownRight className="w-4 h-4" />
                        <span>APLICAR FORM</span>
                      </button>
                    </div>
                  </div>

                  {/* Body Content Tabs Grid */}
                  <div className="space-y-6 flex-1">
                    {/* General Summary */}
                    <div>
                      <h5 className="font-mono text-xs font-extrabold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        Veredicto del Arquitecto
                      </h5>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {blueprint.architectureSummary}
                      </p>
                    </div>

                    {/* Vibe Theme */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-surface-container-high/40 border border-white/5 p-4 rounded-2xl">
                        <h6 className="font-mono text-[10px] font-bold text-on-surface-variant uppercase mb-1">
                          Dirección de Arte Recomenda
                        </h6>
                        <p className="text-xs font-semibold text-on-surface">{blueprint.vibeTheme}</p>
                      </div>

                      {blueprint.suggestedPages && blueprint.suggestedPages.length > 0 && (
                        <div className="bg-surface-container-high/40 border border-white/5 p-4 rounded-2xl">
                          <h6 className="font-mono text-[10px] font-bold text-on-surface-variant uppercase mb-1">
                            Mapa de Páginas Críticas
                          </h6>
                          <p className="text-xs font-semibold text-secondary-fixed">
                            {blueprint.suggestedPages.join(" → ")}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Suggested AI Features */}
                    <div>
                      <h5 className="font-mono text-xs font-extrabold text-secondary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Componentes de Inteligencia Artificial Sugeridos
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {blueprint.aiFeatures.map((feat, index) => (
                          <div
                            key={index}
                            className="bg-surface-container-low/80 border border-white/5 p-4 rounded-2xl"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-bold text-on-surface">{feat.name}</span>
                              {feat.difficulty && (
                                <span className="font-mono text-[9px] bg-white/5 px-2 py-0.5 rounded text-on-surface-variant">
                                  {feat.difficulty}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-on-surface-variant leading-relaxed">{feat.benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Database or Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Database */}
                      {blueprint.suggestedDatabaseSchema && blueprint.suggestedDatabaseSchema.length > 0 && (
                        <div>
                          <h5 className="font-mono text-xs font-extrabold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Database className="w-3.5 h-3.5" />
                            Esquema de Datos Recomendo
                          </h5>
                          <div className="bg-surface-container-lowest border border-white/5 p-3 rounded-2xl font-mono text-[10px] text-on-surface-variant space-y-1">
                            {blueprint.suggestedDatabaseSchema.map((sch, i) => (
                              <p key={i} className="truncate">
                                <span className="text-secondary-fixed">📊</span> {sch}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Timeline */}
                      <div className={blueprint.suggestedDatabaseSchema ? "md:col-span-1" : "md:col-span-2"}>
                        <h5 className="font-mono text-xs font-extrabold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          Hoja de Ruta de Desarrollo
                        </h5>
                        <div className="space-y-2">
                          {blueprint.timeline.slice(0, 3).map((item, index) => (
                            <div key={index} className="flex gap-2 items-center text-xs">
                              <span className="font-mono font-bold text-primary">{item.duration}</span>
                              <span className="text-on-surface-variant">|</span>
                              <span className="font-semibold text-on-surface truncate">{item.phase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {!blueprint && !loading && !error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-surface-container-lowest border border-white/5 border-dashed rounded-3xl p-8 text-center flex flex-col justify-center items-center h-full min-h-[500px]"
                >
                  <div className="p-4 bg-surface-container-low border border-white/10 rounded-full mb-4">
                    <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <h4 className="font-sans text-lg font-bold text-on-surface mb-2">Simulador de Propuesta listo</h4>
                  <p className="text-xs text-on-surface-variant max-w-sm leading-relaxed">
                    Completa los detalles de tu empresa en el configurador de la izquierda y presiona el botón para compilar una propuesta arquitectónica impulsada por IA en tiempo real.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
