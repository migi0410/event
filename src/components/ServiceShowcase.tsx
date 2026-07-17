import React, { useState } from 'react';
import { CORE_SERVICES } from '../data';
import { ServiceItem } from '../types';
import { ArrowRight, Sparkles, Shield, Compass, CheckCircle } from 'lucide-react';

export default function ServiceShowcase() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="studio" className="py-24 md:py-32 bg-[#081223] overflow-hidden">
      {/* Section Header */}
      <div className="px-6 md:px-20 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="font-display font-bold text-xs text-secondary tracking-[0.4em] uppercase mb-4 block">
            DỊCH VỤ CỐT LÕI
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight tracking-tight">
            Giải pháp toàn diện 360°
          </h2>
        </div>
        <div>
          <button 
            onClick={() => {
              const element = document.getElementById('trai-nghiem');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white pl-6 pr-2 py-2 rounded-full font-sans font-bold text-xs tracking-[0.1em] uppercase transition-premium flex items-center gap-3 cursor-pointer active:scale-95 shadow-lg"
          >
            <span>Tìm hiểu hệ sinh thái</span>
            <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* 360 Degree Comprehensive Services Cards with Flex Hover Expander */}
      <div className="flex flex-col lg:flex-row gap-4 px-6 md:px-10 max-w-8xl mx-auto">
        {CORE_SERVICES.map((service, index) => {
          const isHovered = activeHoverId === service.id;
          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveHoverId(service.id)}
              onMouseLeave={() => setActiveHoverId(null)}
              onClick={() => setSelectedService(service)}
              className={`bg-white/[0.02] p-2 border border-white/5 rounded-[2rem] transition-premium cursor-pointer flex-1 group active:scale-[0.99] overflow-hidden ${
                isHovered ? 'lg:flex-[2.2]' : 'lg:flex-1'
              }`}
            >
              <div className="relative w-full h-[520px] md:h-[660px] overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[#081223]">
                {/* Background image & gradient overlay */}
                <img 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 select-none" 
                  src={service.image} 
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081223] via-[#081223]/40 to-transparent transition-opacity duration-500 group-hover:via-[#081223]/25" />
                
                {/* Blue atmospheric corner glow on active cards */}
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/15 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  
                {/* Service Card content info panel */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col justify-end h-3/4 z-10">
                  {/* Categorical label */}
                  <div className="mb-4">
                    <span className="font-display font-bold text-[9px] tracking-[0.35em] text-white/95 bg-secondary/35 backdrop-blur-md px-3 py-1.5 inline-block rounded-md">
                      {service.categoryCode}
                    </span>
                  </div>
  
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
  
                  {/* Description - expanded smoothly under hover states */}
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6 font-sans line-clamp-3 lg:line-clamp-none lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 transform lg:translate-y-4 lg:group-hover:translate-y-0">
                    {service.shortDesc}
                  </p>
  
                  {/* Call-to-action details button */}
                  <div className="flex items-center gap-2.5 text-secondary group-hover:text-white font-display font-bold text-xs tracking-widest uppercase transition-colors duration-300">
                    <span>Khám phá</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Detailed Drawer / Bottom-Sheet Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          {/* Right sliding structural panel */}
          <div className="relative bg-[#0a162b] w-full max-w-xl h-full border-l border-white/10 shadow-2xl z-10 flex flex-col p-8 md:p-12 justify-between text-white overflow-y-auto">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 border border-white/10 hover:border-secondary hover:bg-secondary text-white p-2.5 transition-all cursor-pointer rounded-full"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-8 mt-6">
              <div>
                <span className="font-display font-bold text-[9px] tracking-[0.4em] text-secondary uppercase block mb-3">
                  CHI TIẾT DỊCH VỤ
                </span>
                <h3 className="font-display font-extrabold text-3xl text-white tracking-tight leading-tight">
                  {selectedService.title}
                </h3>
                <div className="asymmetric-rule w-32 mt-4" />
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5">
                <img 
                  className="w-full h-full object-cover" 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-white/70 leading-relaxed font-sans">
                {selectedService.detailedDesc}
              </p>

              {/* Service Features checklist */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-xs tracking-wider uppercase text-secondary">
                  Giải pháp chuyên sâu gồm có:
                </h4>
                <ul className="space-y-3 pl-1">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-white/80">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <span className="font-sans leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA action in slideout */}
            <div className="pt-8 mt-8 border-t border-white/5">
              <button 
                onClick={() => {
                  setSelectedService(null);
                  const formElement = document.getElementById('tu-van');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group w-full bg-secondary hover:bg-secondary-light text-white pl-8 pr-3 py-3 rounded-full font-sans font-bold text-xs tracking-[0.15em] uppercase transition-premium flex items-center justify-center gap-4 cursor-pointer active:scale-95 shadow-xl border-0"
              >
                <span>Nhận báo giá chi tiết dịch vụ này</span>
                <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
