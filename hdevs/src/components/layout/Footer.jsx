import React from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1C1F] border-t border-[#5A6068]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#FF6B4A]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Bio / Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                alt="Logo HDevs"
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-[#F7F7F5]">
                Harold Muñoz <span className="text-[#FF6B4A]">| HDevs</span>
              </span>
            </div>
            <p className="text-sm text-[#D8DADD]/80 max-w-md leading-relaxed">
              Desarrollador de Software con experiencia en QA y Automatización de Pruebas. Apasionado por la creación de soluciones web interactivas, extensiones de navegador y suites de pruebas automatizadas con Playwright.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8DADD]/70 bg-[#2B2D31] px-3 py-1.5 rounded-md border border-[#5A6068]/30 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B4A]" />
              <span>Disponible para desarrollo de software &amp; proyectos</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-[#F7F7F5] uppercase font-mono">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-[#D8DADD]/80">
              <li>
                <a href="#inicio" className="hover:text-[#FF6B4A] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-[#FF6B4A] transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FF6B4A] transition-colors">
                  Habilidades &amp; Stack
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-[#FF6B4A] transition-colors">
                  Proyectos Destacados
                </a>
              </li>
              <li>
                <a href="#estudios" className="hover:text-[#FF6B4A] transition-colors">
                  Estudios &amp; Certificaciones
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#FF6B4A] transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-[#F7F7F5] uppercase font-mono">
              Conectar
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-[#D8DADD]/80">
              <a
                href="https://github.com/haroldmd42"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FF6B4A] transition-colors"
              >
                <i className="fa-brands fa-github text-base w-4 text-center" />
                <span>GitHub (@haroldmd42)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yan-harold-mu%C3%B1oz-dominguez-44a2a6b9/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FF6B4A] transition-colors"
              >
                <i className="fa-brands fa-linkedin text-base w-4 text-center" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.link/kcceff"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FF6B4A] transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-base w-4 text-center text-emerald-400" />
                <span>WhatsApp Directo</span>
              </a>
              <a
                href="https://www.instagram.com/hdevs421/?igsh=ODA1NTc5OTg5Nw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FF6B4A] transition-colors"
              >
                <i className="fa-brands fa-instagram text-base w-4 text-center" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#5A6068]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8DADD]/60">
          <p>
            © {new Date().getFullYear()} Harold Muñoz (HDevs). Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Diseñado con precisión &amp; pasión por el código
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#2B2D31] hover:bg-[#5A6068]/40 text-[#D8DADD] hover:text-[#FF6B4A] border border-[#5A6068]/30 transition-all"
              aria-label="Volver arriba"
              title="Volver al inicio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
