import { useState } from "react";
import { Gauge, Sparkles, Sliders, TrendingUp, Users } from "lucide-react";

export function InteractiveCalculator() {
  const [interactions, setInteractions] = useState(1500); // Daily interactions
  const [delegation, setDelegation] = useState(70); // % of interactions delegated to AI
  const [agentCost, setAgentCost] = useState(12); // Average cost per ticket manual in USD

  // Calculation parameters
  const legacyAnnualCost = interactions * 365 * agentCost;
  
  // Nexora AI handles it at 95% cheaper per ticket
  const aiCostPerTicket = agentCost * 0.05; 
  const manualRatio = (100 - delegation) / 100;
  const aiRatio = delegation / 100;
  
  const nexoraAnnualCost = (interactions * 365) * (manualRatio * agentCost + aiRatio * aiCostPerTicket);
  const annualSavings = Math.round(legacyAnnualCost - nexoraAnnualCost);
  const efficiencyGain = delegation;

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-surface">
      {/* Decorative Blur sphere */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#4cd7f6] block uppercase mb-3">
            HERRAMIENTA FINANCIERA
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4">
            ROICOMPARATOR & Ahorro Estimado
          </h2>
          <p className="text-on-surface-variant max-w-2xl font-sans text-sm md:text-base leading-relaxed">
            Nuestros ecosistemas inteligentes minimizan los tiempos muertos y automatizan tareas repetitivas. Compara a continuación el costo de mantener un soporte tradicional versus la automatización con Nexora AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-6 glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="font-sans text-xl font-bold mb-8 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-secondary" />
                Ajustar Parámetros de Operación
              </h3>

              <div className="space-y-8">
                {/* Interactions Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-mono text-xs font-semibold text-on-surface-variant tracking-wider uppercase flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Sesiones de Soporte Mensuales
                    </label>
                    <span className="font-mono text-sm font-bold text-secondary-fixed">
                      {(interactions * 30).toLocaleString()} / mes
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={interactions}
                    onChange={(e) => setInteractions(Number(e.target.value))}
                    className="w-full accent-secondary bg-surface-container-high h-2 rounded-lg cursor-pointer transition-all focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-on-surface-variant mt-1.5">
                    <span>3,000 / mes</span>
                    <span>300,000 / mes</span>
                  </div>
                </div>

                {/* Delegation Percentage Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-mono text-xs font-semibold text-on-surface-variant tracking-wider uppercase flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-primary" />
                      Delegación Automatizada por IA
                    </label>
                    <span className="font-mono text-sm font-bold text-secondary-fixed">
                      {delegation}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="95"
                    step="5"
                    value={delegation}
                    onChange={(e) => setDelegation(Number(e.target.value))}
                    className="w-full accent-primary bg-surface-container-high h-2 rounded-lg cursor-pointer transition-all focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-on-surface-variant mt-1.5">
                    <span>Mínimo (10%)</span>
                    <span>Optimizado Nexora (95%)</span>
                  </div>
                </div>

                {/* Average Ticket Cost Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-mono text-xs font-semibold text-on-surface-variant tracking-wider uppercase flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Costo Promedio Manual por Ticket
                    </label>
                    <span className="font-mono text-sm font-bold text-secondary-fixed">
                      ${agentCost} USD
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="50"
                    step="1"
                    value={agentCost}
                    onChange={(e) => setAgentCost(Number(e.target.value))}
                    className="w-full accent-secondary bg-surface-container-high h-2 rounded-lg cursor-pointer transition-all focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-on-surface-variant mt-1.5">
                    <span>$2 USD</span>
                    <span>$50 USD</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-on-surface-variant font-mono leading-relaxed">
              <Sparkles className="w-4 h-4 text-secondary flex-shrink-0 animate-pulse" />
              <span>
                Costo promedio de soporte por ticket con Nexora AI disminuye a solo{" "}
                <span className="text-secondary-fixed font-bold">${aiCostPerTicket.toFixed(2)} USD</span>.
              </span>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="lg:col-span-6 bg-surface-container-low border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-sans text-xl font-bold mb-8 text-on-surface">
                Dashboard de Ahorro Proyectado
              </h3>

              {/* Huge Savings Display */}
              <div className="bg-surface-container p-6 rounded-2xl border border-white/5 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 text-secondary opacity-30">
                  <Sparkles className="w-12 h-12" />
                </div>
                <span className="font-mono text-[10px] font-extrabold text-secondary tracking-widest uppercase block mb-1">
                  AHORRO ANUAL NETO ESTIMADO
                </span>
                <span className="font-sans text-4xl sm:text-5xl font-black text-secondary tracking-tight block">
                  ${annualSavings.toLocaleString()} <span className="text-lg font-normal text-on-surface">USD</span>
                </span>
              </div>

              {/* Comparative analytics bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1.5">
                    <span>Costo Manual Tradicional</span>
                    <span className="font-bold text-on-surface">${Math.round(legacyAnnualCost).toLocaleString()} / año</span>
                  </div>
                  <div className="bg-surface-container h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 w-full rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-on-surface-variant mb-1.5">
                    <span>Costo Automatizado Nexora AI</span>
                    <span className="font-bold text-secondary-fixed">${Math.round(nexoraAnnualCost).toLocaleString()} / año</span>
                  </div>
                  <div className="bg-surface-container h-3 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                      style={{ width: `${Math.max(8, (nexoraAnnualCost / legacyAnnualCost) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Micro comparison metrics */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 font-mono">
              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                  LATENCIA DE RESPUESTA
                </span>
                <span className="text-sm font-extrabold text-red-400 block">~120 min</span>
                <span className="text-[10px] text-secondary">vs &lt;450ms (IA)</span>
              </div>

              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                  INCREMENTO EN EFICIENCIA
                </span>
                <span className="text-sm font-extrabold text-secondary-fixed block">+{efficiencyGain}%</span>
                <span className="text-[10px] text-on-surface-variant">Libera agentes manuales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
