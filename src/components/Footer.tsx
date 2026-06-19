import { Network } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Brand Block */}
        <div className="md:col-span-5 space-y-6">
          <div 
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 cursor-pointer transition-transform duration-200 active:scale-95 text-on-surface group inline-flex"
          >
            <Network className="text-primary w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-sans text-xl font-black tracking-tighter">Nexora</span>
          </div>
          <p className="font-mono text-xs text-on-surface-variant max-w-sm leading-relaxed">
            © 2026 Nexora AI. Engineered for the future.
            <br />
            Ecosistemas digitales de alta velocidad impulsados por Inteligencia Artificial y diseño Glassmorphism.
          </p>
        </div>

        {/* Links: Solutions */}
        <div className="md:col-span-2 space-y-4">
          <h6 className="font-mono text-[10px] font-extrabold text-[#4cd7f6] tracking-widest uppercase mb-1">
            SOLUTIONS
          </h6>
          <ul className="space-y-2.5 font-mono text-xs text-on-surface-variant">
            <li>
              <button onClick={() => scrollTo("blueprint-generator")} className="hover:text-[#4cd7f6] transition-colors cursor-pointer text-left">
                Blueprints IA
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-[#4cd7f6] transition-colors">
                AI Core
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4cd7f6] transition-colors">
                Digital Identity
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4cd7f6] transition-colors">
                Cloud Systems
              </a>
            </li>
          </ul>
        </div>

        {/* Links: Company */}
        <div className="md:col-span-2 space-y-4">
          <h6 className="font-mono text-[10px] font-extrabold text-[#4cd7f6] tracking-widest uppercase mb-1">
            COMPANY
          </h6>
          <ul className="space-y-2.5 font-mono text-xs text-on-surface-variant">
            <li>
              <button onClick={() => scrollTo("quienes-somos")} className="hover:text-[#4cd7f6] transition-colors cursor-pointer text-left">
                ADN
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-[#4cd7f6] transition-colors">
                Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4cd7f6] transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4cd7f6] transition-colors">
                Ethics
              </a>
            </li>
          </ul>
        </div>

        {/* Links: Connect */}
        <div className="md:col-span-3 space-y-4">
          <h6 className="font-mono text-[10px] font-extrabold text-[#4cd7f6] tracking-widest uppercase mb-1">
            CONNECT
          </h6>
          <ul className="space-y-2.5 font-mono text-xs text-on-surface-variant">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#4cd7f6] transition-colors">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#4cd7f6] transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <button onClick={() => scrollTo("contacto")} className="hover:text-[#4cd7f6] transition-colors cursor-pointer text-left">
                Contact
              </button>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
