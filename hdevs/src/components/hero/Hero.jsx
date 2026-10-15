import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal, Code2, Sparkles, ExternalLink, FileCode } from 'lucide-react';

export const Hero = () => {
  const [activeCodeTab, setActiveCodeTab] = useState('profile');

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#1E2023] via-[#24262B] to-[#1E2023]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#5A6068]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#5A6068_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2B2D31]/90 border border-[#5A6068]/40 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B4A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B4A]" />
              </span>
              <span className="text-xs font-mono font-medium text-[#D8DADD]">
                Desarrollador de Software <span className="text-[#5A6068]">•</span> Exp. en QA &amp; Automatización
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F7F5] leading-tight">
                Hola, soy <span className="text-[#FF6B4A] relative inline-block">Harold Muñoz</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#D8DADD] flex flex-wrap items-center gap-2">
                Desarrollador de Software con experiencia en{' '}
                <span className="text-white underline decoration-[#FF6B4A] decoration-wavy decoration-2">
                  QA &amp; Automatización
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#D8DADD]/90 max-w-2xl leading-relaxed">
              Soy un desarrollador apasionado por el código limpio y la creación de soluciones web interactivas y extensiones de navegador. Cuento con <strong className="text-[#F7F7F5] font-semibold">experiencia práctica en Quality Assurance (QA)</strong> y automatización de pruebas con herramientas como <strong className="text-[#FF6B4A] font-semibold">Playwright</strong>, garantizando que el software funcione de manera óptima y sin fisuras.
            </p>

            {/* Dual Highlights Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#2B2D31]/70 border border-[#5A6068]/30">
                <div className="p-2 rounded-lg bg-[#FF6B4A]/15 text-[#FF6B4A] shrink-0 mt-0.5">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F7F5]">Desarrollo de Software</h4>
                  <p className="text-xs text-[#D8DADD]/70">React, JavaScript/TypeScript, Python, Extensiones (MV3) y APIs REST.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#2B2D31]/70 border border-[#5A6068]/30">
                <div className="p-2 rounded-lg bg-[#D8DADD]/15 text-[#D8DADD] shrink-0 mt-0.5">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F7F5]">QA &amp; Automatización</h4>
                  <p className="text-xs text-[#D8DADD]/70">Experiencia en pruebas E2E con Playwright, Page Object Model y Azure DevOps.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#FF6B4A] hover:bg-[#E85837] shadow-lg shadow-[#FF6B4A]/30 transition-all duration-200 hover:scale-105"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-[#F7F7F5] bg-[#2B2D31] hover:bg-[#34373C] border border-[#5A6068]/50 transition-all duration-200 hover:border-[#D8DADD]"
              >
                <span>Hablemos</span>
              </a>

              <a
                href="https://haroldmd42.github.io/contador_caracteres/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-[#D8DADD] hover:text-[#FF6B4A] hover:bg-[#2B2D31]/60 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B4A]" />
                <span>QA Tools Suite</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://github.com/haroldmd42/state_news.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-[#D8DADD] hover:text-[#FF6B4A] hover:bg-[#2B2D31]/60 transition-colors"
              >
                <i className="fa-brands fa-github text-sm text-[#FF6B4A]" />
                <span>Extensión State News</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Tech Badges Strip */}
            <div className="pt-3 border-t border-[#5A6068]/20 flex flex-wrap items-center gap-2 text-xs font-mono text-[#D8DADD]/80">
              <span className="text-[#5A6068] font-bold">STACK:</span>
              <span className="px-2.5 py-1 rounded-md bg-[#2B2D31] border border-[#5A6068]/40 text-[#F7F7F5]">
                React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#2B2D31] border border-[#5A6068]/40 text-[#F7F7F5]">
                JavaScript/TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#2B2D31] border border-[#FF6B4A]/40 text-[#FF6B4A] font-medium">
                Playwright
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#2B2D31] border border-[#5A6068]/40">
                Manifest V3
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#2B2D31] border border-[#5A6068]/40">
                Python
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#2B2D31] border border-[#5A6068]/40">
                Node.js
              </span>
            </div>

          </div>

          {/* Right Column: Code Editor & Programmer Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame (Modern IDE) */}
              <div className="rounded-2xl bg-[#2B2D31] border border-[#5A6068]/40 shadow-2xl shadow-black/60 overflow-hidden transform transition-all duration-300 hover:border-[#FF6B4A]/50">
                
                {/* IDE Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#1E2023] border-b border-[#5A6068]/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF6B4A]/90" />
                    <div className="w-3 h-3 rounded-full bg-[#5A6068]" />
                    <div className="w-3 h-3 rounded-full bg-[#D8DADD]/40" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#D8DADD]/60">
                    <i className="fa-brands fa-git-alt text-[#FF6B4A]" />
                    <span>main*</span>
                    <span className="text-[#5A6068]">•</span>
                    <span>hdevs-workspace</span>
                  </div>
                  <div className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#2B2D31] text-[#D8DADD]/60 border border-[#5A6068]/20">
                    IDE
                  </div>
                </div>

                {/* IDE Tabs */}
                <div className="flex items-center bg-[#1E2023]/80 border-b border-[#5A6068]/30 px-2 overflow-x-auto text-xs font-mono">
                  <button
                    onClick={() => setActiveCodeTab('profile')}
                    className={`flex items-center gap-2 px-3.5 py-2 border-b-2 transition-all ${
                      activeCodeTab === 'profile'
                        ? 'border-[#FF6B4A] bg-[#2B2D31] text-[#F7F7F5] font-semibold'
                        : 'border-transparent text-[#D8DADD]/60 hover:text-[#D8DADD]'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    <span>DeveloperProfile.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveCodeTab('playwright')}
                    className={`flex items-center gap-2 px-3.5 py-2 border-b-2 transition-all ${
                      activeCodeTab === 'playwright'
                        ? 'border-[#FF6B4A] bg-[#2B2D31] text-[#F7F7F5] font-semibold'
                        : 'border-transparent text-[#D8DADD]/60 hover:text-[#D8DADD]'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>playwright.test.ts</span>
                  </button>
                </div>

                {/* Code Editor Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-[#D8DADD] bg-[#1E2023]/95 overflow-x-auto min-h-[260px]">
                  {activeCodeTab === 'profile' ? (
                    <div>
                      <div className="text-[#5A6068]">{'// Developer Profile — Harold Muñoz'}</div>
                      <div>
                        <span className="text-[#FF6B4A]">const</span> <span className="text-amber-300">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-[#D8DADD]">name</span>: <span className="text-emerald-400">'Harold Muñoz'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#D8DADD]">primaryRole</span>: <span className="text-emerald-400">'Software Developer'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#D8DADD]">experience</span>: [
                      </div>
                      <div className="pl-8 text-emerald-400">
                        'Full Stack Web Development',
                      </div>
                      <div className="pl-8 text-emerald-400">
                        'QA Testing &amp; Playwright Automation',
                      </div>
                      <div className="pl-8 text-emerald-400">
                        'Browser Extensions (Manifest V3)'
                      </div>
                      <div className="pl-4 text-[#D8DADD]">],</div>
                      <div className="pl-4">
                        <span className="text-[#D8DADD]">mindset</span>: <span className="text-cyan-300">'Clean code + Thorough automated tests'</span>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-[#5A6068]">{'// Playwright E2E Test Suite'}</div>
                      <div>
                        <span className="text-[#FF6B4A]">import</span> &#123; test, expect &#125; <span className="text-[#FF6B4A]">from</span> <span className="text-emerald-400">'@playwright/test'</span>;
                      </div>
                      <div className="mt-1">
                        <span className="text-[#D8DADD]">test</span>(<span className="text-emerald-400">'Validar flujo crítico sin fallos'</span>, <span className="text-[#FF6B4A]">async</span> (&#123; page &#125;) =&gt; &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-[#FF6B4A]">await</span> page.<span className="text-amber-300">goto</span>(<span className="text-emerald-400">'https://app.dev'</span>);
                      </div>
                      <div className="pl-4">
                        <span className="text-[#FF6B4A]">await</span> <span className="text-cyan-300">expect</span>(page.<span className="text-amber-300">locator</span>(<span className="text-emerald-400">'#status'</span>))
                      </div>
                      <div className="pl-8 text-emerald-400">
                        .<span className="text-amber-300">toBeVisible</span>();
                      </div>
                      <div>&#125;);</div>
                    </div>
                  )}

                  {/* Terminal Execution Output */}
                  <div className="mt-4 pt-3 border-t border-[#5A6068]/30 space-y-1.5 font-mono text-xs">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>$ npm test -- playwright (All tests passed)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#D8DADD]/80 pl-6">
                      <span>Chromium, Firefox, WebKit</span>
                      <span className="text-[#FF6B4A] font-bold">100% Passed</span>
                    </div>
                  </div>
                </div>

                {/* IDE Bottom Status Bar */}
                <div className="px-4 py-2 bg-[#2B2D31] border-t border-[#5A6068]/30 flex items-center justify-between text-xs text-[#D8DADD]/70 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>TypeScript 5.x</span>
                  </div>
                  <span className="text-[#FF6B4A]">UTF-8 • Spaces: 2</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
