import React, { useState } from 'react';
import { skillCategories } from '../../data/skillsData';
import { CheckCircle2, Code2, Database, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#FF6B4A]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#FF6B4A]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#FF6B4A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#FF6B4A]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#FF6B4A]" />;
    }
  };

  const selectedCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 bg-[#24262B] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B4A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5A6068]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2D31] border border-[#5A6068]/40 text-xs font-mono text-[#FF6B4A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARSENAL TÉCNICO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F5]">
            Habilidades &amp; Tecnologías
          </h2>
          <p className="text-base text-[#D8DADD]/80">
            Stack especializado diseñado para automatizar pruebas rigurosas y construir software confiable y escalable.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF6B4A] text-white shadow-lg shadow-[#FF6B4A]/25 scale-105'
                    : 'bg-[#2B2D31] text-[#D8DADD] hover:text-[#F7F7F5] hover:bg-[#34373C] border border-[#5A6068]/30'
                }`}
              >
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content Card */}
        <div className="bg-[#2B2D31]/90 rounded-2xl border border-[#5A6068]/30 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#5A6068]/20 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#1E2023] border border-[#5A6068]/30">
                {getIcon(selectedCategory.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F7F7F5]">{selectedCategory.name}</h3>
                <p className="text-xs sm:text-sm text-[#D8DADD]/70 mt-0.5">{selectedCategory.description}</p>
              </div>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#1E2023] text-[#D8DADD]/80 border border-[#5A6068]/30 w-fit">
              {selectedCategory.skills.length} competencias activas
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {selectedCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#1E2023]/70 border border-[#5A6068]/30 hover:border-[#FF6B4A]/40 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-semibold text-[#F7F7F5]">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#2B2D31] text-[#D8DADD]/80 border border-[#5A6068]/30">
                    {skill.tag}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#2B2D31] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#FF6B4A] to-[#FF896E] h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
