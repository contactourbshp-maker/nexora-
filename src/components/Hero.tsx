import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Glow backdrop with digital flares and dark space"
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLCF2ANJD7xYJrXTCXIOwl9kBdyG5w4jgUrW38CZWNWx_GcEYkXNiHM22UXjFkhn2ICvJKPfYhwHf4vvVGstQX2WrqWf-fUC3osxocF1anPwmK8OBMEPpk08utla3f7ghJkHZU3lNJ1c_jguP6CI9bhLOWCWtmDhWlWwD0M32F_G7QiH9H0PIZ5r3X1FvJal9Wjc30rTMPhg4M6S4FlqNHEMCloYE3-OS_x8XtOPaRN3ypcxjVC-k7DofJiFeB3UZcYzigIMJjhIE"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/80 to-surface" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Animated Tech Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-surface-container-low/60 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-secondary">
              INGENIERÍA WEB DE PRÓXIMA GENERACIÓN
            </span>
          </motion.div>

          {/* Majestic Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tight"
          >
            Webs del{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary-fixed to-secondary">
              Futuro
            </span>{" "}
            para Empresas de Hoy
          </motion.h1>

          {/* Descriptive Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-on-surface-variant mb-10 max-w-2xl leading-relaxed"
          >
            Potenciamos tu negocio con Inteligencia Artificial. Creamos experiencias digitales interactivas que no solo impresionan, sino que transforman tu productividad.
          </motion.p>

          {/* Call to Actions with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <button
              onClick={() => scrollTo("blueprint-generator")}
              className="group relative bg-gradient-to-r from-primary-container to-secondary-container px-8 py-4 rounded-xl font-mono text-sm tracking-wider font-bold text-on-primary-container shadow-lg shadow-primary-container/20 group hover:shadow-[0_0_25px_rgba(3,181,211,0.4)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-on-primary-container" />
              <span>DISEÑAR PROPUESTA IA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("quienes-somos")}
              className="glass-panel hover:bg-white/5 border border-white/20 px-8 py-4 rounded-xl font-mono text-sm tracking-wider font-bold text-on-surface active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>EXPLORAR ADN</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
