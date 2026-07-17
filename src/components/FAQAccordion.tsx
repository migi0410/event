import React, { useState } from 'react';
import { ECOSYSTEM_BENEFITS } from '../data';
import { Plus, Minus, Zap, Globe, ShieldCheck } from 'lucide-react';

export default function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string>('benefit-1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'benefit-1':
        return <Globe className="w-5 h-5 text-secondary shrink-0" />;
      case 'benefit-2':
        return <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />;
      case 'benefit-3':
        return <Zap className="w-5 h-5 text-secondary shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section id="chien-luoc" className="py-24 md:py-32 bg-[#081223] text-white">
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Interactive Accordion */}
          <div className="space-y-8">
            <div>
              <span className="font-display font-bold text-xs text-secondary tracking-[0.25em] uppercase mb-4 block">
                SỰ KHÁC BIỆT ĐẶC QUYỀN
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight tracking-tight">
                Tại sao chọn hệ sinh thái TAT Media?
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-0 border-t border-white/10">
              {ECOSYSTEM_BENEFITS.map((benefit) => {
                const isExpanded = expandedId === benefit.id;
                return (
                  <div 
                    key={benefit.id} 
                    className="py-6 border-b border-white/10 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleExpand(benefit.id)}
                      className="w-full flex justify-between items-center text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        {getIcon(benefit.id)}
                        <h4 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-secondary transition-colors duration-300">
                          {benefit.title}
                        </h4>
                      </div>
                      <span className="p-1.5 border border-white/10 rounded-full group-hover:border-secondary group-hover:text-secondary transition-colors">
                        {isExpanded ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {/* Expandable content details */}
                    <div 
                      className={`grid transition-all duration-500 overflow-hidden ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4 pl-9' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans max-w-lg">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Comparison Card Block */}
          <div className="bg-[#0a162b] border border-white/10 text-white p-8 md:p-12 relative overflow-hidden rounded-[2rem] min-h-[480px]">
            {/* Atmospheric Blue glow overlay */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-light/50 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="grid grid-cols-2 pb-4 border-b border-white/10 text-[10px] font-display font-bold tracking-wider uppercase">
                <div className="text-white/40">Công ty Event thông thường</div>
                <div className="text-secondary text-glow">TAT Media</div>
              </div>

              {[
                { normal: 'Chỉ tổ chức sự kiện', tat: 'Tổ chức + Truyền thông + Kết nối doanh nghiệp' },
                { normal: 'Không có data doanh nghiệp', tat: 'Có hệ sinh thái khách hàng TAVITAX' },
                { normal: 'Không hỗ trợ tài trợ', tat: 'Có dịch vụ kêu gọi tài trợ chuyên nghiệp' },
                { normal: 'Không có PR báo chí', tat: 'Có dịch vụ PR báo chí đầy đủ' },
                { normal: 'Không có kết nối kinh doanh', tat: 'Có cộng đồng doanh nghiệp hỗ trợ' }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-2 py-4 border-b border-white/5 text-xs md:text-sm font-sans items-center gap-4">
                  <div className="text-white/50">{item.normal}</div>
                  <div className="text-white font-semibold flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_#3755c3] mt-2 shrink-0" />
                    <span>{item.tat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
