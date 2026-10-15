import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Lock,
  Terminal,
  Puzzle,
  ShieldCheck,
  Wrench,
  Bot,
} from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;

  const renderIconBanner = () => {
    switch (project.iconType) {
      case 'qatools':
        return (
          <div className="flex flex-col items-center justify-center py-6 px-4 text-center bg-gradient-to-b from-[#1E2023] to-[#2B2D31] rounded-xl border border-[#5A6068]/20 group-hover:border-[#FF6B4A]/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#FF6B4A_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
            <div className="p-3.5 rounded-2xl bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] shadow-lg shadow-[#FF6B4A]/15 mb-2.5 transform transition-transform duration-300 group-hover:scale-110">
              <Wrench className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-semibold text-[#F7F7F5] tracking-wider uppercase">
              QA Tools • Suite de 18+ Módulos
            </span>
            <span className="text-[11px] font-mono text-[#D8DADD]/60 mt-0.5">
              GenAI • Responsive • QA Faker CO • APIs • ISTQB
            </span>
          </div>
        );
      case 'extension':
        return (
          <div className="flex flex-col items-center justify-center py-6 px-4 text-center bg-gradient-to-b from-[#1E2023] to-[#2B2D31] rounded-xl border border-[#5A6068]/20 group-hover:border-[#FF6B4A]/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#FF6B4A]/10 rounded-full blur-xl pointer-events-none" />
            <div className="p-3.5 rounded-2xl bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] shadow-lg shadow-[#FF6B4A]/15 mb-2.5 transform transition-transform duration-300 group-hover:scale-110">
              <Puzzle className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-semibold text-[#F7F7F5] tracking-wider uppercase">
              Browser Extension • Manifest V3
            </span>
            <span className="text-[11px] font-mono text-[#D8DADD]/60 mt-0.5">
              Chrome &amp; Edge • Azure DevOps Real-Time Notifier
            </span>
          </div>
        );
      case 'playwright':
        return (
          <div className="flex flex-col items-center justify-center py-6 px-4 text-center bg-gradient-to-b from-[#1E2023] to-[#2B2D31] rounded-xl border border-[#5A6068]/20 group-hover:border-[#FF6B4A]/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-[#FF6B4A]/10 rounded-full blur-xl pointer-events-none" />
            <div className="p-3.5 rounded-2xl bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] shadow-lg shadow-[#FF6B4A]/15 mb-2.5 transform transition-transform duration-300 group-hover:scale-110">
              <Terminal className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-semibold text-[#F7F7F5] tracking-wider uppercase">
              Playwright E2E • Test Framework
            </span>
            <span className="text-[11px] font-mono text-[#D8DADD]/60 mt-0.5">
              Page Object Model • Multi-Browser • CI/CD
            </span>
          </div>
        );
      case 'testing':
        return (
          <div className="flex flex-col items-center justify-center py-6 px-4 text-center bg-gradient-to-b from-[#1E2023] to-[#2B2D31] rounded-xl border border-[#5A6068]/20 group-hover:border-[#FF6B4A]/40 transition-all duration-300 relative overflow-hidden">
            <div className="p-3.5 rounded-2xl bg-[#5A6068]/20 border border-[#5A6068]/40 text-[#FF6B4A] shadow-lg mb-2.5 transform transition-transform duration-300 group-hover:scale-110">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-semibold text-[#F7F7F5] tracking-wider uppercase">
              QA Functional &amp; Regression Suite
            </span>
            <span className="text-[11px] font-mono text-[#D8DADD]/60 mt-0.5">
              Validación de Negocio • Flujos Críticos
            </span>
          </div>
        );
      case 'python':
      default:
        return (
          <div className="flex flex-col items-center justify-center py-6 px-4 text-center bg-gradient-to-b from-[#1E2023] to-[#2B2D31] rounded-xl border border-[#5A6068]/20 group-hover:border-[#FF6B4A]/40 transition-all duration-300 relative overflow-hidden">
            <div className="p-3.5 rounded-2xl bg-[#5A6068]/20 border border-[#5A6068]/40 text-[#FF6B4A] shadow-lg mb-2.5 transform transition-transform duration-300 group-hover:scale-110">
              <Bot className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-semibold text-[#F7F7F5] tracking-wider uppercase">
              Python Automation Engine
            </span>
            <span className="text-[11px] font-mono text-[#D8DADD]/60 mt-0.5">
              Web Scraping • Tareas Programadas &amp; Bots
            </span>
          </div>
        );
    }
  };

  return (
    <div
      className={`group relative rounded-2xl bg-[#2B2D31] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isFeatured
          ? 'border-[#FF6B4A]/50 shadow-xl shadow-black/40 hover:border-[#FF6B4A] hover:shadow-[#FF6B4A]/15'
          : 'border-[#5A6068]/30 shadow-lg hover:border-[#D8DADD]/50 hover:-translate-y-1'
      }`}
    >
      {/* Top Header Bar with Clean Flow (No absolute overlapping!) */}
      <div className="p-5 pb-3 space-y-3 border-b border-[#5A6068]/20 bg-[#26282D]">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {project.badge && (
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide ${
                project.badgeType === 'coral'
                  ? 'bg-[#FF6B4A] text-white shadow-md shadow-[#FF6B4A]/30'
                  : 'bg-[#1E2023] text-[#D8DADD] border border-[#5A6068]/40'
              }`}
            >
              {isFeatured && <Sparkles className="w-3 h-3" />}
              {project.badge}
            </span>
          )}

          {project.role && (
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#1E2023] text-[#D8DADD]/80 border border-[#5A6068]/30">
              {project.role}
            </span>
          )}
        </div>

        {/* Visual Tech Banner */}
        {renderIconBanner()}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#F7F7F5] group-hover:text-[#FF6B4A] transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#D8DADD]/70">{project.subtitle}</p>
          </div>

          <p className="text-sm text-[#D8DADD]/90 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="pt-2 space-y-2">
              {project.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#D8DADD]/85">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B4A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech tags & Actions */}
        <div className="space-y-4 pt-4 border-t border-[#5A6068]/20">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1E2023] text-[#D8DADD]/90 border border-[#5A6068]/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links or Confidentiality Indicator */}
          <div className="pt-1">
            {project.isPrivate ? (
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1E2023] border border-[#5A6068]/30 text-xs text-[#D8DADD]/80">
                <Lock className="w-4 h-4 text-[#FF6B4A] shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-[#F7F7F5]">Proyecto de Producción Privado</span>
                  <span className="text-[11px] text-[#5A6068]">Código confidencial bajo acuerdo NDA</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#FF6B4A] hover:bg-[#E85837] text-white shadow-md shadow-[#FF6B4A]/20 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>Explorar en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F7F7F5] bg-[#1E2023] hover:bg-[#34373C] border border-[#5A6068]/40 hover:border-[#FF6B4A]/50 transition-all duration-200 ${
                      !project.demoUrl ? 'flex-1' : ''
                    }`}
                    title="Ver repositorio en GitHub"
                  >
                    <i className="fa-brands fa-github text-sm" />
                    <span>Repositorio</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
