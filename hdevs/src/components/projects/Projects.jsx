import React, { useState } from 'react';
import { projectsData, categories } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import { Sparkles } from 'lucide-react';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="proyectos" className="py-24 bg-[#1E2023] relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#FF6B4A]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#5A6068]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2D31] border border-[#5A6068]/40 text-xs font-mono text-[#FF6B4A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTAFOLIO DE PROYECTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F5]">
            Proyectos de <span className="text-[#FF6B4A]">QA Automation</span> &amp; <span className="text-[#D8DADD]">Desarrollo</span>
          </h2>
          <p className="text-base text-[#D8DADD]/80">
            Explora soluciones especializadas en pruebas automatizadas con Playwright, extensiones de navegador con Manifest V3 y aplicaciones web dinámicas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF6B4A] text-white shadow-lg shadow-[#FF6B4A]/25 scale-105'
                    : 'bg-[#2B2D31] text-[#D8DADD] hover:text-[#F7F7F5] hover:bg-[#34373C] border border-[#5A6068]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#2B2D31]/40 rounded-2xl border border-[#5A6068]/30 max-w-md mx-auto">
            <p className="text-[#D8DADD] text-sm">No hay proyectos en esta categoría por el momento.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
