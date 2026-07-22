'use client';

import React, { useState, useEffect } from 'react';
import { Project, ConsultationInquiry } from './types';
import { PROJECTS, INITIAL_INQUIRIES } from './data';
import Header from './components/Header';
import ProjectModal from './components/ProjectModal';
import ServiceShowcase from './components/ServiceShowcase';
import FAQAccordion from './components/FAQAccordion';
import StatsCounter from './components/StatsCounter';
import { 
  Briefcase, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Flame, 
  Network, 
  Layers, 
  Volume2, 
  Users, 
  Target, 
  CheckCircle2,
  Calendar,
  Building,
  ExternalLink
} from 'lucide-react';

export default function App() {
  // Navigation active section tracker
  const [activeSection, setActiveSection] = useState('trai-nghiem');
  
  // Featured projects category filter
  const [projectFilter, setProjectFilter] = useState<'all' | 'strategic' | 'creative' | 'business'>('all');
  
  // Project detail modal state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  

  // Intersection observer to track active navbar links on scroll
  useEffect(() => {
    const sections = ['trai-nghiem', 'chien-luoc', 'studio', 'di-san'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const filteredProjects = projectFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-primary text-white select-text selection:bg-secondary selection:text-white">
      {/* Top Header Glass Navigation */}
      <Header 
        onOpenConsultation={() => {
          const formElement = document.getElementById('tu-van');
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
          }
        }} 
        activeSection={activeSection}
      />

      {/* Hero Block (Section: Trải nghiệm) */}
      <section 
        id="trai-nghiem" 
        className="relative min-h-[100dvh] w-full flex items-center overflow-hidden py-32"
      >
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[15%] brightness-[0.4]" 
            src="/assets/concert-the-mirror/z7962792863491_a18c5bdbd74b2f00f69ba22ef30dccbf.jpg"
            alt="TAT corporate executive background arena"
          />
          {/* Rich blueprint gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#081223] via-transparent to-[#081223]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081223]/90 via-transparent to-[#081223]/20" />
        </div>

        {/* Hero Slogan Container */}
        <div className="relative z-10 px-6 md:px-20 w-full max-w-7xl mx-auto space-y-10">
          <div className="asymmetric-rule w-40" />
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[64px] leading-[1.2] max-w-5xl tracking-tight text-white">
            Uy tín trong cam kết.<br />Chủ động trong hành động.<br />Khác biệt trong <span 
              className="inline-block font-semibold italic drop-shadow-[0_2px_10px_rgba(126,160,255,0.35)]"
              style={{
                background: 'linear-gradient(135deg, #b3c5ff 0%, #7ea0ff 50%, #4c6ee3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                paddingLeft: '0.15em',
                marginLeft: '-0.15em',
                paddingRight: '0.1em',
                marginRight: '-0.1em'
              }}
            >
              giá trị mang lại
            </span>.
          </h1>
          <p className="text-white/70 max-w-2xl text-base md:text-lg font-sans leading-relaxed">
            Đơn vị tổ chức sự kiện và truyền thông doanh nghiệp toàn diện trên phạm vi toàn quốc.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button 
              onClick={() => {
                const element = document.getElementById('tu-van');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-white hover:bg-secondary text-primary hover:text-white pl-8 pr-3 py-3 rounded-full font-sans font-bold text-xs tracking-widest uppercase transition-premium flex items-center gap-4 cursor-pointer active:scale-95 shadow-xl border-0"
            >
              <span>Đăng ký tư vấn ngay</span>
              <span className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('di-san');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white pl-8 pr-3 py-3 rounded-full font-sans font-bold text-xs tracking-widest uppercase transition-premium flex items-center gap-4 cursor-pointer active:scale-95"
            >
              <span>Xem dự án tiêu biểu</span>
              <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/15 flex items-center justify-center transition-colors">
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Segment */}
      <section className="py-24 md:py-36 bg-[#081223] relative">
        <div className="absolute top-1/2 right-0 w-1/3 h-1/2 opacity-5 pointer-events-none select-none">
          <img 
            alt="TAT corporate watermark" 
            className="w-full h-full object-contain" 
            src="/assets/logo-inverted.png"
          />
        </div>

        <div className="px-6 md:px-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Editorial copy blocks */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-2">
                <span className="font-display font-bold text-xs text-secondary tracking-[0.4em] uppercase">
                  TẦM NHÌN & SỨ MỆNH
                </span>
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white leading-tight tracking-tight">
                  Tầm nhìn chiến lược
                </h2>
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans">
                Trở thành đơn vị tổ chức sự kiện và truyền thông doanh nghiệp uy tín hàng đầu khu vực phía Nam, cung cấp giải pháp <strong>Event – Media – Branding toàn diện</strong>. Xây dựng hệ sinh thái kết nối doanh nghiệp, đối tác và khách hàng.
              </p>
              
              <div className="asymmetric-rule w-full opacity-30" />

              {/* Grid characteristic subcards for Sứ mệnh */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 border border-white/10 hover:border-secondary/30 hover:bg-white/[0.02] transition-premium rounded-2xl group active:scale-[0.99] space-y-2">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wide text-white group-hover:text-secondary transition-colors">
                    Sự kiện khác biệt
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-sans">
                    Mang đến chương trình sự kiện chất lượng, chuyên nghiệp và khác biệt.
                  </p>
                </div>
                <div className="p-5 border border-white/10 hover:border-secondary/30 hover:bg-white/[0.02] transition-premium rounded-2xl group active:scale-[0.99] space-y-2">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wide text-white group-hover:text-secondary transition-colors">
                    Thương hiệu bền vững
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-sans">
                    Hỗ trợ doanh nghiệp xây dựng hình ảnh thương hiệu bền vững lâu dài.
                  </p>
                </div>
                <div className="p-5 border border-white/10 hover:border-secondary/30 hover:bg-white/[0.02] transition-premium rounded-2xl group active:scale-[0.99] space-y-2">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wide text-white group-hover:text-secondary transition-colors">
                    Giá trị kết nối
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-sans">
                    Tạo ra giá trị kết nối thiết thực giữa doanh nghiệp, khách hàng và cộng đồng.
                  </p>
                </div>
                <div className="p-5 border border-white/10 hover:border-secondary/30 hover:bg-white/[0.02] transition-premium rounded-2xl group active:scale-[0.99] space-y-2">
                  <h4 className="font-display font-bold text-sm uppercase tracking-wide text-white group-hover:text-secondary transition-colors">
                    Giải pháp sáng tạo
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed font-sans">
                    Đồng hành cùng sự phát triển qua các giải pháp truyền thông sáng tạo.
                  </p>
                </div>
              </div>
            </div>

            {/* Skyscrapers photograph container */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="bg-white/[0.02] p-2 border border-white/10 rounded-[2.5rem] group transition-premium">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2.5rem-0.5rem)] bg-secondary/10">
                  <img 
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 select-none" 
                    src="/assets/liveshow-song/untitled--2.jpg" 
                    alt="TAT Live Concert Stage Show"
                  />
                  {/* Decorative absolute element overlay */}
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/20 blur-3xl rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-36 bg-[#0a162b] relative border-y border-white/5">
        <div className="px-6 md:px-20 max-w-7xl mx-auto">
          
          <div className="text-center mb-24">
            <span className="font-display font-bold text-xs text-secondary tracking-[0.4em] uppercase block mb-3">
              TRIẾT LÝ SÁNG TẠO
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4 tracking-tight">
              Giá trị cốt lõi
            </h2>
            <p className="font-display font-bold text-[10px] tracking-[0.50em] text-white/40 uppercase italic mt-4">
              TRUST • AUTHENTIC • TRANSFORM
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Trust value card */}
            <div className="group space-y-6">
              <div className="bg-white/[0.02] p-1.5 border border-white/10 rounded-3xl transition-premium">
                <div className="core-value-img-container overflow-hidden rounded-[calc(1.5rem-0.375rem)] relative bg-[#081223]">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] select-none" 
                    src="/assets/generated/core_value_trust.png" 
                    alt="TAT Trust core value"
                  />
                  <div className="absolute inset-0 bg-[#081223]/40 group-hover:bg-[#081223]/10 transition-colors duration-500" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl md:text-2xl text-secondary text-glow uppercase tracking-wide">
                  T — Trust
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans pl-1">
                  Uy tín làm nền tảng trong mọi hoạt động. Cam kết được giữ vững trong từng dự án.
                </p>
              </div>
            </div>

            {/* Authentic value card */}
            <div className="group space-y-6 md:mt-12 lg:mt-16">
              <div className="bg-white/[0.02] p-1.5 border border-white/10 rounded-3xl transition-premium">
                <div className="core-value-img-container overflow-hidden rounded-[calc(1.5rem-0.375rem)] relative bg-[#081223]">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] select-none" 
                    src="/assets/generated/core_value_action.png" 
                    alt="TAT Authentic core value"
                  />
                  <div className="absolute inset-0 bg-[#081223]/40 group-hover:bg-[#081223]/10 transition-colors duration-500" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl md:text-2xl text-secondary text-glow uppercase tracking-wide">
                  A — Authentic
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans pl-1">
                  Chân thực trong cam kết, trung thực trong hành động. Kiến tạo các giá trị độc bản và giữ vững bản sắc cốt lõi của thương hiệu.
                </p>
              </div>
            </div>

            {/* Transform value card */}
            <div className="group space-y-6">
              <div className="bg-white/[0.02] p-1.5 border border-white/10 rounded-3xl transition-premium">
                <div className="core-value-img-container overflow-hidden rounded-[calc(1.5rem-0.375rem)] relative bg-[#081223]">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] select-none" 
                    src="/assets/generated/core_value_transform.png" 
                    alt="TAT Transformation core value"
                  />
                  <div className="absolute inset-0 bg-[#081223]/40 group-hover:bg-[#081223]/10 transition-colors duration-500" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl md:text-2xl text-secondary text-glow uppercase tracking-wide">
                  T — Transformation
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans pl-1">
                  Không ngừng sáng tạo để mang lại giá trị khác biệt và đột phá cho khách hàng.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why TAT Ecosystem Comparison Block (Section: Chiến lược) */}
      <FAQAccordion />

      {/* 360 Degree Comprehensive Services Showcase (Section: Studio) */}
      <ServiceShowcase />

      {/* Featured Projects Grid Area (Section: Di sản) */}
      <section id="di-san" className="py-24 md:py-32 bg-[#081223] border-t border-white/5 relative">
        
        <div className="px-6 md:px-20 max-w-7xl mx-auto space-y-16">
          
          {/* Section titles */}
          <div className="text-center space-y-4">
            <span className="font-display font-bold text-xs text-secondary tracking-[0.4em] uppercase block">
              DI SẢN THỰC CHIẾN
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
              Dự án tiêu biểu
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
          </div>

          {/* Filtering control bar */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto bg-primary/40 p-1.5 border border-white/5">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'strategic', label: 'Hội nghị & Gala' },
              { id: 'creative', label: 'Sản xuất & Truyền thông' },
              { id: 'business', label: 'Kết nối & Tài trợ' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setProjectFilter(cat.id as any)}
                className={`px-5 py-2.5 text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  projectFilter === cat.id 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Gallery grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 max-w-5xl mx-auto">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white/[0.02] p-2 border border-white/5 hover:border-secondary/20 transition-premium rounded-3xl flex flex-col justify-between active:scale-[0.99]"
              >
                <div className="aspect-[16/10] overflow-hidden relative rounded-2xl bg-secondary/5">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105 select-none" 
                    src={project.image} 
                    alt={project.title}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081223]/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 md:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-display font-bold text-[9px] tracking-[0.25em] text-secondary uppercase block">
                      {project.categoryLabel}
                    </span>
                    <h4 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed font-sans line-clamp-2">
                      TAT Media đồng hành thực hiện toàn diện dự án với cam kết vận hành không tì vết. Nhấp để xem chi tiết thư viện ảnh thực tế.
                    </p>
                  </div>
                  <div className="w-10 h-0.5 bg-secondary mt-4 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Redesigned Contact & Zalo Section (Minimalist & Premium) */}
      <section id="tu-van" className="relative py-28 md:py-36 bg-[#081223] border-t border-white/5 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="px-6 md:px-20 max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Left Side: Typography & Core Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div className="space-y-6">
                <span className="font-display font-bold text-xs text-secondary tracking-[0.3em] uppercase block">
                  — LIÊN HỆ & HỢP TÁC
                </span>
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight">
                  Khởi đầu hành trình cùng TAT Media & Event.
                </h2>
              </div>

              {/* Minimal Contact List (Stacked Premium Typography) */}
              <div className="space-y-8 border-t border-white/10 pt-8">
                {/* Office */}
                <div className="space-y-1.5">
                  <span className="font-display font-bold text-[10px] tracking-[0.25em] text-white/40 uppercase block">Văn phòng chính</span>
                  <p className="text-sm md:text-base text-white/80 font-sans leading-relaxed">
                    14 đường D33, phường Phước Long, TP.HCM
                  </p>
                </div>
                
                {/* Hotline */}
                <div className="space-y-1.5">
                  <span className="font-display font-bold text-[10px] tracking-[0.25em] text-white/40 uppercase block">Hotline / Zalo</span>
                  <a href="tel:0335700373" className="text-sm md:text-base text-secondary hover:text-secondary-light font-sans font-bold transition-all duration-300 inline-block">
                    0335700373
                  </a>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <span className="font-display font-bold text-[10px] tracking-[0.25em] text-white/40 uppercase block">Email liên hệ</span>
                  <a href="mailto:huynhthitham.081003@gmail.com" className="text-sm md:text-base text-white/80 hover:text-secondary transition-all duration-300 inline-block break-all font-sans">
                    huynhthitham.081003@gmail.com
                  </a>
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="relative w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl group mt-2" style={{ height: '200px' }}>
                <iframe 
                  className="w-full h-full border-0"
                  src="https://maps.google.com/maps?q=14%20%C4%91%C6%B0%E1%BB%9Dng%20D33%2C%20ph%C6%B0%E1%BB%9Bc%20long%2C%20TP.HCM&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TAT Media & Event Map"
                />
              </div>
            </div>

            {/* Right Side: Zalo Connect Panel (Harmonious Single Bezel Card) */}
            <div className="lg:col-span-7 bg-[#0a162b] border border-white/10 rounded-2xl p-6 md:p-10 space-y-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Subtle internal glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none" style={{ backgroundColor: 'rgba(0, 104, 255, 0.1)' }} />

              {/* Zalo official header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#0068FF' }} />
                  <span className="font-display font-bold text-xs tracking-[0.2em] uppercase" style={{ color: '#0068FF' }}>
                    ZALO OFFICIAL
                  </span>
                </div>
                <span className="text-[10px] font-display font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase">
                  ● Trực tuyến 24/7
                </span>
              </div>

              <div className="space-y-3 relative z-10">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-tight">
                  Trò chuyện trực tuyến
                </h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-sans">
                  Quét mã QR bằng ứng dụng Zalo trên điện thoại hoặc bấm nút bên dưới để bắt đầu trò chuyện trực tiếp cùng chuyên gia chiến lược TAT Media.
                </p>
              </div>

              {/* QR Code Center Showcase */}
              <div className="flex flex-col items-center justify-center space-y-4 py-4 relative z-10">
                <div className="bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 hover:scale-[1.03] transition-transform duration-500 flex items-center justify-center shrink-0" style={{ width: '168px', height: '168px' }}>
                  <img 
                    src="/assets/zalo-qr.png" 
                    alt="Zalo QR Code" 
                    className="object-contain rounded-xl"
                    style={{ width: '136px', height: '136px' }}
                  />
                </div>
                <span className="text-[9px] font-display font-bold tracking-[0.25em] text-white/40 uppercase">
                  QUÉT MÃ ZALO QR
                </span>
              </div>

              {/* Horizontal Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-white/10 py-6 relative z-10">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-xs text-white/70 font-sans">Phản hồi 5 - 15 phút</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-xs text-white/70 font-sans">Tư vấn miễn phí</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2.5} />
                  <span className="text-xs text-white/70 font-sans">Bảo mật chiến dịch</span>
                </div>
              </div>

              {/* Direct Action Link */}
              <div className="relative z-10 w-full">
                <a 
                  href="https://zalo.me/0335700373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/zalo w-full text-white py-4 px-8 rounded-full font-sans font-bold text-xs tracking-[0.15em] uppercase transition-premium flex items-center justify-center gap-3 active:scale-[0.98] border-0 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #0068FF 0%, #0052cc 100%)', boxShadow: '0 10px 25px rgba(0, 104, 255, 0.2)' }}
                >
                  <span className="whitespace-nowrap">Bắt đầu cuộc trò chuyện</span>
                  <span className="w-6 h-6 rounded-full bg-white/10 group-hover/zalo:bg-white/20 flex items-center justify-center transition-colors">
                    <ExternalLink className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </span>
                </a>
              </div>

              {/* Bottom Status bar */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[10px] text-white/40 font-sans relative z-10">
                <span>Hotline hỗ trợ: <strong className="text-white font-medium">0335700373</strong></span>
                <span>Email: <strong className="text-white font-medium">huynhthitham.081003@gmail.com</strong></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <footer className="w-full px-6 md:px-20 py-24 flex flex-col lg:flex-row justify-between items-start bg-primary border-t border-white/10 gap-16">
        <div className="space-y-6">
          <img 
            alt="TAT Media & Events footer logo" 
            className="h-10 md:h-12 w-auto object-contain mb-4" 
            src="/assets/logo-footer-light.png"
          />
          <div className="text-xs text-white/50 leading-relaxed font-sans max-w-sm">
            <span className="select-none font-medium">
              © 2026 TAT Media & Event.
            </span>{' '}
            Branding Heritage & Global Vision. 
            <p className="mt-2 text-white/40">Đơn vị hàng đầu về tổ chức sự kiện chiến lược và truyền thông tổng lực cho doanh nghiệp lớn tại Việt Nam.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <h5 className="font-display font-bold text-[10px] tracking-widest text-white uppercase mb-6">Khám phá</h5>
            <ul className="space-y-3.5 font-sans text-xs text-white/50">
              <li><a href="#trai-nghiem" className="hover:text-secondary transition-colors">Giới thiệu</a></li>
              <li><a href="#chien-luoc" className="hover:text-secondary transition-colors">Khác biệt</a></li>
              <li><a href="#studio" className="hover:text-secondary transition-colors">Dịch vụ</a></li>
              <li><a href="#di-san" className="hover:text-secondary transition-colors">Dự án</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-display font-bold text-[10px] tracking-widest text-white uppercase mb-6">Chính sách</h5>
            <ul className="space-y-3.5 font-sans text-xs text-white/50">
              <li><a href="#" className="hover:text-secondary transition-colors">Bảo mật thông tin</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Chính sách tài trợ</a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h5 className="font-display font-bold text-[10px] tracking-widest text-white uppercase mb-6">Theo dõi</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-secondary hover:text-secondary transition-all font-display font-bold text-xs">
                FB
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-secondary hover:text-secondary transition-all font-display font-bold text-xs">
                IN
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-secondary hover:text-secondary transition-all font-display font-bold text-xs">
                YT
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Case Study Modal Overlays */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
