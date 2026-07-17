import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, Trophy, AlertCircle, Sparkles, Building2, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
      {/* Dark overlay backdrop */}
      <div 
        className="fixed inset-0 bg-primary/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal content card */}
      <div className="relative bg-white/[0.02] p-2 border border-white/10 rounded-[2.5rem] shadow-2xl z-10 my-auto text-white max-w-4xl w-full">
        <div className="bg-[#0a162b] rounded-[calc(2.5rem-0.5rem)] overflow-hidden flex flex-col relative">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-30 bg-primary/80 hover:bg-secondary text-white p-2 rounded-full border border-white/10 hover:border-transparent transition-all cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Section: Visual Slider (aspect-16/9) */}
          <div className="relative p-2 pb-0">
            <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl group/modal bg-black/60">
              {/* Blurred background backdrop for filling letterbox space */}
              <img 
                src={project.gallery && project.gallery.length > 0 ? project.gallery[currentImageIndex] : project.image} 
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-105 pointer-events-none select-none"
              />
              {/* Main contained image to see everything */}
              <img 
                src={project.gallery && project.gallery.length > 0 ? project.gallery[currentImageIndex] : project.image} 
                alt={project.title}
                className="relative z-10 w-full h-full object-contain contrast-[1.05] transition-all duration-700 select-none"
              />
              {/* Subtle top/bottom shadow gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20" />
              
              {/* Gallery Navigation Controls */}
              {project.gallery && project.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? project.gallery!.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-secondary text-white p-2 border border-white/10 hover:border-transparent transition-all cursor-pointer z-20 rounded-full"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === project.gallery!.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/60 hover:bg-secondary text-white p-2 border border-white/10 hover:border-transparent transition-all cursor-pointer z-20 rounded-full"
                    aria-label="Ảnh tiếp theo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-primary/60 backdrop-blur-sm px-2.5 py-1.5 border border-white/5 rounded-full">
                    {project.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-1.5 h-1.5 transition-all rounded-full ${
                          idx === currentImageIndex ? 'bg-secondary w-3' : 'bg-white/40 hover:bg-white'
                        }`}
                        aria-label={`Chuyển tới ảnh ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Bottom Section: Content Area */}
          <div className="p-8 md:p-10 space-y-8 overflow-y-auto max-h-[50vh] md:max-h-[480px]">
            {/* Header info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <span className="font-display font-bold text-[9px] tracking-[0.25em] text-secondary uppercase block">
                  {project.categoryLabel}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight leading-snug">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50 bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-secondary shrink-0" />
                <span>Đối tác: <strong className="text-white">{project.client}</strong></span>
              </div>
            </div>

            {/* Grid details */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* Description */}
              <div className="md:col-span-7 space-y-4">
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-secondary font-display font-bold text-xs tracking-wider uppercase">
                    <Trophy className="w-4 h-4" />
                    <span>Chỉ số tác động di sản (KPIs)</span>
                  </div>
                  <ul className="space-y-2">
                    {project.impact.map((metric, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0" />
                        <span className="font-sans leading-relaxed">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="md:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-secondary font-display font-bold text-xs tracking-wider uppercase">
                    <AlertCircle className="w-4 h-4" />
                    <span>Thách thức chiến lược</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-secondary font-display font-bold text-xs tracking-wider uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>Giải pháp đột phá</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-sans">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Callback Button */}
            <div className="pt-4 border-t border-white/5">
              <button 
                onClick={() => {
                  onClose();
                  const formElement = document.getElementById('tu-van');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group w-full bg-secondary hover:bg-secondary-light text-white pl-8 pr-3 py-3.5 rounded-full font-sans font-bold text-xs tracking-[0.15em] uppercase transition-premium flex items-center justify-center gap-4 cursor-pointer active:scale-95 shadow-xl border-0"
              >
                <span>Đăng ký tư vấn giải pháp tương tự</span>
                <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
