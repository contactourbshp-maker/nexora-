import { BrainCircuit, Shield, Zap, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function DNA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="quienes-somos" className="py-24 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro */}
        <div className="mb-16 text-center md:text-left">
          <span className="font-mono text-xs font-semibold tracking-widest text-secondary block uppercase mb-3">
            NUESTRO ADN
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-on-surface tracking-tight">
            Arquitectos de la Inteligencia
          </h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {/* Main Algorithmic Innovation Card (Col-Span 8) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-secondary/30 transition-all duration-300"
          >
            {/* Glowing sweep effect */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/15 transition-all duration-500" />

            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <BrainCircuit className="text-primary w-14 h-14 mb-8 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-sans text-2xl md:text-3xl font-bold mb-4 text-on-surface">
                  Innovación Algorítmica
                </h3>
                <p className="font-sans text-base text-on-surface-variant max-w-2xl leading-relaxed">
                  En Nexora AI no construimos simples webs; desarrollamos ecosistemas inteligentes. Integramos modelos de lenguaje de última generación y visión artificial para automatizar procesos complejos desde el corazón de tu presencia online.
                </p>
              </div>

              {/* High saturated technical tag pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-surface-container-high/90 rounded-full border border-white/5 text-secondary font-mono text-xs font-semibold tracking-wider">
                  TRANSFORMADORES
                </span>
                <span className="px-4 py-1.5 bg-surface-container-high/90 rounded-full border border-white/5 text-secondary font-mono text-xs font-semibold tracking-wider">
                  AUTOCUSTODIA
                </span>
                <span className="px-4 py-1.5 bg-surface-container-high/90 rounded-full border border-white/5 text-secondary font-mono text-xs font-semibold tracking-wider">
                  BAJA LATENCIA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Stats (Col-Span 4) */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Stat Card 1 */}
            <motion.div
              variants={itemVariants}
              className="glass-panel p-10 rounded-3xl flex flex-col justify-center text-center relative overflow-hidden group hover:border-secondary/30 transition-all duration-300 flex-1"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans text-5xl font-black tracking-tight mb-2">
                99%
              </span>
              <p className="font-mono text-xs font-bold tracking-widest text-on-surface-variant">
                EFICIENCIA OPERATIVA
              </p>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              variants={itemVariants}
              className="glass-panel p-10 rounded-3xl flex flex-col justify-center text-center relative overflow-hidden group hover:border-secondary/30 transition-all duration-300 flex-1"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-secondary font-sans text-5xl font-black tracking-tight mb-2">
                24/7
              </span>
              <p className="font-mono text-xs font-bold tracking-widest text-on-surface-variant">
                SOPORTE INTELIGENTE
              </p>
            </motion.div>
          </div>

          {/* Three Column Additional Features */}
          {/* Card 1: Quantum Security */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:border-secondary/30 transition-all duration-300"
          >
            <Shield className="text-secondary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-sans text-xl font-bold text-on-surface">
              Seguridad Cuántica
            </h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Protocolos de encriptado avanzados para proteger los datos de usuario y transacciones más sensibles de tu empresa.
            </p>
          </motion.div>

          {/* Card 2: Speed Limits */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:border-secondary/30 transition-all duration-300"
          >
            <Zap className="text-secondary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-sans text-xl font-bold text-on-surface">
              Velocidad Extrema
            </h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Páginas optimizadas para cargar en milisegundos, impulsando la retención de clientes y mejorando drásticamente el posicionamiento SEO.
            </p>
          </motion.div>

          {/* Card 3: Real analytics */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 glass-panel p-8 rounded-3xl flex flex-col gap-4 group hover:border-secondary/30 transition-all duration-300"
          >
            <TrendingUp className="text-secondary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-sans text-xl font-bold text-on-surface">
              Analítica Real
            </h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Sistemas de telemetría y dashboards empotrados que interpretan tendencias de mercado y sugieren mejoras autónomamente vía agentes integrados.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
