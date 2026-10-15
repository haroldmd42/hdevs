import React from 'react';
import { Code } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Rol Principal', value: 'Software Developer', desc: 'React, JS/TS, Python, APIs' },
    { label: 'Experiencia Práctica', value: 'QA & Automatización', desc: 'Playwright, Cypress, E2E' },
    { label: 'Extensiones Web', value: 'Manifest V3', desc: 'Chrome & Edge Extensions' },
    { label: 'Metodología', value: 'Agile & DevOps', desc: 'Azure DevOps, CI/CD, Scrum' },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-[#1E2023] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#5A6068]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2D31] border border-[#5A6068]/40 text-xs font-mono text-[#FF6B4A]">
            <Code className="w-3.5 h-3.5" />
            <span>PERFIL PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F5]">
            Desarrollo de Software con <span className="text-[#FF6B4A]">Criterio de Calidad</span>
          </h2>
          <p className="text-base text-[#D8DADD]/80">
            Conoce cómo aplico mis habilidades de desarrollo combinadas con experiencia práctica en pruebas y automatización.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Decorative Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl p-2 bg-gradient-to-tr from-[#2B2D31] via-[#5A6068]/40 to-[#FF6B4A]/30 border border-[#5A6068]/40 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden bg-[#2B2D31]">
                <img
                  src={`${process.env.PUBLIC_URL}/img/developer-profile.jpg`}
                  alt="Harold Muñoz - Desarrollador de Software"
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2023] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#2B2D31]/90 backdrop-blur-md border border-[#5A6068]/30">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#F7F7F5]">Harold Muñoz</span>
                    <span className="text-[#FF6B4A] font-mono font-bold">Dev &amp; QA Experience</span>
                  </div>
                  <div className="text-[11px] text-[#D8DADD]/70 font-mono mt-0.5">
                    HDevs Soluciones Digitales
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-[#D8DADD]/90 space-y-4 text-base leading-relaxed">
              <p>
                Soy un <strong className="text-[#F7F7F5]">Desarrollador de Software</strong> con una base sólida en programación web full stack y una valiosa trayectoria práctica en <strong className="text-[#F7F7F5]">Quality Assurance (QA) y automatización de pruebas</strong>. Aunque no me enfoco exclusivamente como especialista de QA, poseo el conocimiento técnico y la experiencia directa para diseñar, estructurar y ejecutar pruebas que aseguren la robustez de las aplicaciones.
              </p>
              <p>
                Cuento con experiencia implementando suites de pruebas automatizadas con <strong className="text-[#FF6B4A]">Playwright</strong> y <strong className="text-[#D8DADD]">Cypress</strong> bajo el patrón <em>Page Object Model</em> (POM), integrándolas en flujos de trabajo colaborativos y plataformas como <strong>Azure DevOps</strong>. Además, me apasiona el desarrollo de extensiones de navegador basadas en <em>Manifest V3</em> y herramientas interactivas orientadas a la productividad técnica.
              </p>
              <p>
                Esta combinación me permite aportar valor tanto en la concepción y codificación de nuevas funcionalidades como en la validación preventiva de errores, logrando entregas estables y de alto nivel.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#2B2D31]/70 border border-[#5A6068]/30 hover:border-[#FF6B4A]/40 transition-colors"
                >
                  <div className="text-xs font-mono text-[#D8DADD]/70">{stat.label}</div>
                  <div className="text-base sm:text-lg font-bold text-[#F7F7F5] mt-1">{stat.value}</div>
                  <div className="text-xs text-[#FF6B4A] mt-0.5">{stat.desc}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
