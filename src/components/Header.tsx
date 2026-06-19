import { useState, useEffect } from "react";
import { Network } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 h-20 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(3,181,211,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        {/* Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 cursor-pointer transition-transform duration-200 active:scale-95 group"
        >
          <Network className="text-secondary w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-sans text-2xl font-extrabold tracking-tighter text-on-surface bg-gradient-to-r from-on-surface via-on-surface to-secondary-fixed bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all">
            Nexora
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm font-semibold tracking-wider font-mono text-secondary hover:text-white transition-colors duration-200 text-left cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => scrollTo("quienes-somos")}
            className="text-sm font-semibold tracking-wider font-mono text-on-surface-variant hover:text-secondary transition-colors duration-200 text-left cursor-pointer"
          >
            TECNOLOGÍA
          </button>
          <button
            onClick={() => scrollTo("calculator")}
            className="text-sm font-semibold tracking-wider font-mono text-on-surface-variant hover:text-secondary transition-colors duration-200 text-left cursor-pointer"
          >
            ROICOMPARATOR
          </button>
          <button
            onClick={() => scrollTo("reseñas")}
            className="text-sm font-semibold tracking-wider font-mono text-on-surface-variant hover:text-secondary transition-colors duration-200 text-left cursor-pointer"
          >
            PARTNERS
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="text-sm font-semibold tracking-wider font-mono text-on-surface-variant hover:text-secondary transition-colors duration-200 text-left cursor-pointer"
          >
            CONTACTO
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary-container text-on-primary-container hover:bg-primary-container/90 px-6 py-2 rounded-full font-semibold tracking-wider font-mono text-xs hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all cursor-pointer active:scale-95 duration-200"
          >
            GET STARTED
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50 text-on-surface"
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-[2px] bg-on-surface rounded-full transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`w-full h-[2px] bg-on-surface rounded-full transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-[2px] bg-on-surface rounded-full transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-20 left-0 w-full bg-surface-container/95 backdrop-blur-xl border-b border-white/10 p-6 z-40 transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col gap-5 font-mono text-sm tracking-wider">
          <button
            onClick={() => scrollTo("hero")}
            className="text-secondary text-left py-2 font-bold cursor-pointer"
          >
            HOME
          </button>
          <button
            onClick={() => scrollTo("quienes-somos")}
            className="text-on-surface-variant hover:text-secondary text-left py-2 cursor-pointer"
          >
            TECNOLOGÍA (ADN)
          </button>
          <button
            onClick={() => scrollTo("calculator")}
            className="text-on-surface-variant hover:text-secondary text-left py-2 cursor-pointer"
          >
            ROICOMPARATOR
          </button>
          <button
            onClick={() => scrollTo("reseñas")}
            className="text-on-surface-variant hover:text-secondary text-left py-2 cursor-pointer"
          >
            PARTNERS
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="text-on-surface-variant hover:text-secondary text-left py-2 cursor-pointer"
          >
            CONTACTO
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary-container text-on-primary-container py-3 rounded-xl font-bold tracking-wider font-mono text-xs w-full mt-2 cursor-pointer"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </header>
  );
}
