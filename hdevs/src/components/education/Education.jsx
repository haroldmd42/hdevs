import React from 'react';
import { educationData } from '../../data/educationData';
import { GraduationCap, Award, CheckCheck, BookOpen } from 'lucide-react';

export const Education = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#FF6B4A]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#FF6B4A]" />;
      default:
        return <CheckCheck className="w-6 h-6 text-[#FF6B4A]" />;
    }
  };

  return (
    <section id="estudios" className="py-24 bg-[#24262B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF6B4A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2D31] border border-[#5A6068]/40 text-xs font-mono text-[#FF6B4A]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TRAYECTORIA ACADÉMICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F7F5]">
            Estudios &amp; <span className="text-[#FF6B4A]">Certificaciones</span>
          </h2>
          <p className="text-base text-[#D8DADD]/80">
            Formación técnica estructurada y continua en ingeniería de software, desarrollo frontend y calidad de software.
          </p>
        </div>

        {/* Education Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#2B2D31] border border-[#5A6068]/30 hover:border-[#FF6B4A]/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                {/* Header Icon + Type */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#1E2023] border border-[#5A6068]/30 group-hover:border-[#FF6B4A]/40 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#1E2023] text-[#D8DADD]/80 border border-[#5A6068]/30">
                    {item.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#F7F7F5] group-hover:text-[#FF6B4A] transition-colors leading-snug">
                    {item.degree}
                  </h3>
                  <div className="text-xs font-mono text-[#FF6B4A] font-medium">
                    {item.emphasis}
                  </div>
                  <p className="text-xs text-[#D8DADD]/70 font-semibold">{item.institution}</p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#D8DADD]/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-[#5A6068]/20 flex flex-wrap gap-1.5">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1E2023] text-[#D8DADD]/80 border border-[#5A6068]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
