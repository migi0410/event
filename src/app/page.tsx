'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import StatCounterRow from '@/components/StatCounter';
import PortfolioFilter from '@/components/PortfolioFilter';
import BudgetEstimator from '@/components/BudgetEstimator';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [estimateMessage, setEstimateMessage] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // 1. Scroll Active Section Navigation Link Highlight (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Highlight sections when they pass through the viewport's center range
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 2. Scroll Reveal Animations (Intersection Observer)
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.fade-in-up');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    scrollElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Handle newsletter registration submit
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cảm ơn bạn! Email ${newsletterEmail} đã được đăng ký nhận bản tin thành công.`);
    setNewsletterEmail('');
  };

  // Close modal when clicking on the overlay
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalActive(false);
    }
  };

  return (
    <>
      {/* Background Glows */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Header / Navigation */}
      <header className="header" id="header">
        <div className="container navbar">
          <a href="#" className="logo" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '2px', textDecoration: 'none' }}>
            <span style={{ color: 'var(--text-primary)' }}>TAT</span>
            <span style={{ background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--primary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 300, marginLeft: '2px' }}>MEDIA</span>
          </a>
          
          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </a>
            <a
              href="#philosophy"
              className={`nav-link ${activeSection === 'philosophy' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Triết lý TAT
            </a>
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dịch vụ
            </a>
            <a
              href="#portfolio"
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dự án
            </a>
            <a
              href="#estimator"
              className={`nav-link ${activeSection === 'estimator' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Báo giá
            </a>
            <a
              href="#comparison"
              className={`nav-link ${activeSection === 'comparison' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Điểm khác biệt
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </a>
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary btn-nav">Nhận tư vấn</a>
            <button
              className="mobile-menu-btn"
              id="mobileMenuBtn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container hero-container">
          <div className="hero-content fade-in-up">
            <span className="badge">TATMEDIA Premium Event & Media Agency</span>
            <h1 className="hero-title">
              Kiến Tạo Những <br />
              <span className="gradient-text">Trải Nghiệm Độc Bản</span>
            </h1>
            <p className="hero-desc">
              Chúng tôi định hình các ý tưởng sáng tạo thành hiện thực bằng các giải pháp thiết kế, 
              âm thanh ánh sáng đỉnh cao cùng sự chỉn chu trong từng chi tiết tổ chức.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-large">Tổ chức sự kiện ngay</a>
              <a href="#portfolio" className="btn btn-secondary btn-large">Khám phá dự án <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            
            {/* Stats Row */}
            <StatCounterRow />
          </div>
          
          <div className="hero-visual fade-in-up delay-200">
            <div className="hero-img-wrapper glass-card">
              <img src="/assets/Concert The Mirror/z7962792838900_beef0c4186462261fccee367620f17c2.jpg" alt="TAT MEDIA Premium Stage Event" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* TAT Philosophy Section */}
      <section className="services-section" id="philosophy" style={{ borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="sub-title">Triết Lý Hoạt Động</span>
            <h2 className="section-title">Giá Trị Cốt Lõi TAT</h2>
            <p className="section-desc">TAT không chỉ đơn thuần là một cái tên, đó là lời cam kết mạnh mẽ về cách chúng tôi làm việc và tạo dựng giá trị.</p>
          </div>

          <div className="services-grid" style={{ marginBottom: '60px' }}>
            {/* Philosophy T */}
            <div className="service-card glass-card fade-in-up">
              <div className="service-icon-box cyan-glow" style={{ fontSize: '1.8rem', fontWeight: 800 }}>T</div>
              <h3 className="service-name">Trust — Sự Uy Tín</h3>
              <p className="service-text">Uy tín là nền tảng cốt lõi trong mọi giao dịch và hành động. Chúng tôi luôn cam kết giữ vững lòng tin, bảo đảm chất lượng dịch vụ tốt nhất trên từng dự án được giao phó.</p>
            </div>

            {/* Philosophy A */}
            <div className="service-card glass-card fade-in-up delay-100">
              <div className="service-icon-box purple-glow" style={{ fontSize: '1.8rem', fontWeight: 800 }}>A</div>
              <h3 className="service-name">Action — Sự Chủ Động</h3>
              <p className="service-text">Luôn giữ thế chủ động trong việc tiếp nhận thông tin, triển khai giải pháp và sẵn sàng ứng biến chuyên nghiệp trước mọi tình huống phát sinh trong quá trình vận hành sự kiện.</p>
            </div>

            {/* Philosophy T */}
            <div className="service-card glass-card fade-in-up delay-200">
              <div className="service-icon-box gold-glow" style={{ fontSize: '1.8rem', fontWeight: 800 }}>T</div>
              <h3 className="service-name">Transformation — Sự Đột Phá</h3>
              <p className="service-text">Không ngừng đổi mới tư duy sáng tạo, cập nhật xu thế công nghệ trình chiếu và decor nghệ thuật để đem lại những giải pháp độc bản và đột phá nhất cho doanh nghiệp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="sub-title">Dịch Vụ Của Chúng Tôi</span>
            <h2 className="section-title">Giải Pháp Sự Kiện & Truyền Thông</h2>
            <p className="section-desc">TATMEDIA mang lại chuỗi giải pháp khép kín chuyên nghiệp từ lên ý tưởng, thiết kế đến khâu thực thi trọn gói.</p>
          </div>

          <div className="services-grid">
            {/* Service Card 1: Tổ chức Sự Kiện */}
            <div className="service-card glass-card fade-in-up">
              <div className="service-icon-box cyan-glow">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h3 className="service-name">Tổ Chức Sự Kiện</h3>
              <p className="service-text">Chúng tôi cung cấp dịch vụ tổ chức các giải đấu thể thao cao cấp và các sự kiện doanh nghiệp mang đậm dấu ấn thương hiệu.</p>
              <ul className="service-features">
                <li><i className="fa-solid fa-check text-cyan"></i> Giải thể thao cao cấp (Golf, Pickleball)</li>
                <li><i className="fa-solid fa-check text-cyan"></i> Gala Dinner & Hội nghị khách hàng</li>
                <li><i className="fa-solid fa-check text-cyan"></i> Lễ khai trương, khánh thành & Ra mắt</li>
              </ul>
            </div>

            {/* Service Card 2: Truyền Thông Thương Hiệu */}
            <div className="service-card glass-card fade-in-up delay-100">
              <div className="service-icon-box purple-glow">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h3 className="service-name">Truyền Thông Thương Hiệu</h3>
              <p className="service-text">Giải pháp lan tỏa hình ảnh doanh nghiệp mạnh mẽ thông qua báo chí, tư liệu hình ảnh và chiến dịch marketing bài bản.</p>
              <ul className="service-features">
                <li><i className="fa-solid fa-check text-purple"></i> PR Báo chí & Truyền thông trọn gói</li>
                <li><i className="fa-solid fa-check text-purple"></i> Quay phim, chụp ảnh & sản xuất TVC</li>
                <li><i className="fa-solid fa-check text-purple"></i> Quản trị mạng xã hội & Booking KOC</li>
              </ul>
            </div>

            {/* Service Card 3: Thiết Bị & Decor */}
            <div className="service-card glass-card fade-in-up delay-200">
              <div className="service-icon-box gold-glow">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <h3 className="service-name">Thiết Bị & Decor Sân Khấu</h3>
              <p className="service-text">Sở hữu trang thiết bị trình chiếu hiện đại cùng đội ngũ thi công nghệ thuật có gu thẩm mỹ cao.</p>
              <ul className="service-features">
                <li><i className="fa-solid fa-check text-gold"></i> Âm thanh, ánh sáng & Màn hình LED</li>
                <li><i className="fa-solid fa-check text-gold"></i> Thiết kế & Thi công sân khấu 3D</li>
                <li><i className="fa-solid fa-check text-gold"></i> Thiết kế khu check-in & Tiểu cảnh hoa tươi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients & Connections Section */}
      <section className="services-section" id="targets" style={{ borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="sub-title">Khách Hàng & Đối Tác</span>
            <h2 className="section-title">Lĩnh Vực Chuyên Sâu</h2>
            <p className="section-desc">TATMEDIA đồng hành cùng các doanh nghiệp, hiệp hội và câu lạc bộ thể thao để mang lại giá trị kết nối bền vững.</p>
          </div>

          <div className="services-grid">
            {/* Target 1 */}
            <div className="service-card glass-card fade-in-up" style={{ padding: '32px 24px' }}>
              <div className="service-icon-box cyan-glow" style={{ width: '48px', height: '48px', fontSize: '1.2rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-building"></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>Doanh Nghiệp SME & Ngân Hàng</h4>
              <p className="service-text" style={{ fontSize: '0.85rem' }}>Đồng hành cùng hệ sinh thái doanh nghiệp lớn, tổ chức các chương trình tri ân khách hàng, kỷ niệm ngày thành lập và hội nghị thường niên chuyên nghiệp.</p>
            </div>

            {/* Target 2 */}
            <div className="service-card glass-card fade-in-up delay-100" style={{ padding: '32px 24px' }}>
              <div className="service-icon-box purple-glow" style={{ width: '48px', height: '48px', fontSize: '1.2rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-golf-ball-tee"></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>CLB Thể Thao (Golf & Pickleball)</h4>
              <p className="service-text" style={{ fontSize: '0.85rem' }}>Thiết kế giải đấu bài bản, chuyên nghiệp, hỗ trợ tối đa trong công tác truyền thông, tài trợ và sản xuất hình ảnh riêng biệt cho từng giải đấu phong trào.</p>
            </div>

            {/* Target 3 */}
            <div className="service-card glass-card fade-in-up delay-200" style={{ padding: '32px 24px' }}>
              <div className="service-icon-box gold-glow" style={{ width: '48px', height: '48px', fontSize: '1.2rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-house-chimney-window"></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>Bất Động Sản & Bảo Hiểm</h4>
              <p className="service-text" style={{ fontSize: '0.85rem' }}>Tổ chức các buổi lễ ra mắt dự án, lễ mở bán sang trọng, các hội thảo khách hàng, cung cấp các gian hàng triển lãm và booth trải nghiệm độc đáo.</p>
            </div>

            {/* Target 4 */}
            <div className="service-card glass-card fade-in-up delay-300" style={{ padding: '32px 24px' }}>
              <div className="service-icon-box cyan-glow" style={{ width: '48px', height: '48px', fontSize: '1.2rem', marginBottom: '20px' }}>
                <i className="fa-solid fa-users"></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>Hiệp Hội & Cộng Đồng</h4>
              <p className="service-text" style={{ fontSize: '0.85rem' }}>Thiết lập các sự kiện kết nối giao thương (Business Connection), hội thảo chuyên đề, workshop networking, gắn kết bền chặt các hội viên doanh nhân.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section" id="portfolio" style={{ borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="sub-title">Hồ Sơ Năng Lực</span>
            <h2 className="section-title">Những Tuyệt Tác Sự Kiện</h2>
            <p className="section-desc">Khám phá các dự án tiêu biểu được TATMEDIA thực hiện với chuẩn mực khắt khe nhất.</p>
          </div>

          <PortfolioFilter />
        </div>
      </section>

      {/* Budget Estimator Section */}
      <section className="estimator-section" id="estimator" style={{ borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="estimator-layout">
            <div className="estimator-info fade-in-up">
              <span className="sub-title">Công Cụ Độc Quyền</span>
              <h2 className="section-title text-left">Dự Toán Chi Phí Sự Kiện Trong 1 Phút</h2>
              <p className="section-desc text-left">
                Chúng tôi cung cấp công cụ tự động tính toán chi phí sơ bộ dựa trên quy mô và 
                các tùy chọn mong muốn của bạn, giúp bạn dễ dàng lập kế hoạch tài chính.
              </p>
              
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon"><i className="fa-solid fa-bolt"></i></div>
                  <div>
                    <h4>Nhanh chóng & Trực quan</h4>
                    <p>Cập nhật giá trị ngân sách ngay lập tức khi thay đổi tùy chọn.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"><i className="fa-solid fa-sliders"></i></div>
                  <div>
                    <h4>Cá nhân hóa tối đa</h4>
                    <p>Tự do lựa chọn quy mô khách mời và chất lượng trang thiết bị.</p>
                  </div>
                </div>
              </div>
            </div>

            <BudgetEstimator onEstimateBook={(msg) => setEstimateMessage(msg)} />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="testimonials-section" id="comparison" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="sub-title">Khác Biệt Thực Sự</span>
            <h2 className="section-title">Tại Sao Chọn TAT Media?</h2>
            <p className="section-desc">Chúng tôi là đối tác toàn diện đồng hành cùng thương hiệu của bạn, vượt trội hơn các dịch vụ truyền thống.</p>
          </div>

          <div className="comparison-container">
            {/* Standard Company Card */}
            <div className="comparison-card glass-card muted-card fade-in-up">
              <h3 className="comparison-card-title">Đơn Vị Sự Kiện Thông Thường</h3>
              <ul className="comparison-list">
                <li><i className="fa-solid fa-xmark text-danger"></i> Chỉ dừng lại ở việc tổ chức sự kiện</li>
                <li><i className="fa-solid fa-xmark text-danger"></i> Không có dữ liệu &amp; kết nối doanh nghiệp</li>
                <li><i className="fa-solid fa-xmark text-danger"></i> Không hỗ trợ kêu gọi tài trợ</li>
                <li><i className="fa-solid fa-xmark text-danger"></i> Không hỗ trợ truyền thông, PR báo chí</li>
                <li><i className="fa-solid fa-xmark text-danger"></i> Thiếu liên kết kinh doanh sau sự kiện</li>
              </ul>
            </div>

            {/* TAT Media Card */}
            <div className="comparison-card glass-card active-card cyan-glow fade-in-up delay-100">
              <h3 className="comparison-card-title gradient-text">TAT Media (Đối Tác Toàn Diện)</h3>
              <ul className="comparison-list">
                <li><i className="fa-solid fa-check text-cyan"></i> Tổ chức + Truyền thông + Kết nối doanh nghiệp</li>
                <li><i className="fa-solid fa-check text-cyan"></i> Sở hữu hệ sinh thái khách hàng TAVITAX</li>
                <li><i className="fa-solid fa-check text-cyan"></i> Có dịch vụ kêu gọi tài trợ chuyên nghiệp</li>
                <li><i className="fa-solid fa-check text-cyan"></i> Cung cấp dịch vụ PR báo chí đầy đủ</li>
                <li><i className="fa-solid fa-check text-cyan"></i> Có cộng đồng doanh nghiệp lớn hỗ trợ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact" style={{ borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info fade-in-up">
              <span className="sub-title">Liên Hệ Trực Tiếp</span>
              <h2 className="section-title text-left">Đồng Hành Cùng Sự Kiện Của Bạn</h2>
              <p className="section-desc text-left">
                Hãy điền thông tin bên dưới hoặc kết nối trực tiếp với chúng tôi để nhận 
                tư vấn chi tiết và kịch bản thiết kế sơ bộ miễn phí.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <a href="tel:0784938687" className="contact-detail-link">
                    <div className="detail-icon"><i className="fa-solid fa-phone"></i></div>
                    <div>
                      <p>Hotline tư vấn</p>
                      <h4>0784 938 687</h4>
                    </div>
                  </a>
                </div>
                <div className="contact-detail-item">
                  <a 
                    href="https://zalo.me/3091927136451133517" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-detail-link"
                  >
                    <div className="detail-icon"><i className="fa-solid fa-comments text-cyan"></i></div>
                    <div>
                      <p>Kết nối Zalo</p>
                      <h4>Zalo</h4>
                    </div>
                  </a>
                </div>
                <div className="contact-detail-item">
                  <a href="mailto:tavitaxgroup@gmail.com" className="contact-detail-link">
                    <div className="detail-icon"><i className="fa-solid fa-envelope"></i></div>
                    <div>
                      <p>Gửi Email yêu cầu</p>
                      <h4>tavitaxgroup@gmail.com</h4>
                    </div>
                  </a>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <p>Trụ sở chính</p>
                    <h4>25 Bàu Cát 2, Phường 14, Quận Tân Bình, TP. Hồ Chí Minh</h4>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon"><i className="fa-solid fa-building"></i></div>
                  <div>
                    <p>Văn phòng đại diện</p>
                    <h4>91 Đường B4, Phường An Khánh, TP. Thủ Đức, TP. Hồ Chí Minh</h4>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm
              initialMessage={estimateMessage}
              onSuccess={() => setModalActive(true)}
            />
          </div>
        </div>
      </section>

      {/* Success Modal Dialog */}
      <div className={`modal ${modalActive ? 'active' : ''}`} id="successModal" onClick={handleModalClick}>
        <div className="modal-content glass-card">
          <div className="modal-icon"><i className="fa-solid fa-circle-check"></i></div>
          <h2>Đã Nhận Yêu Cầu!</h2>
          <p>
            Cảm ơn bạn đã gửi thông tin. Chuyên viên sự kiện của TATMEDIA sẽ liên hệ trực tiếp 
            qua số điện thoại của bạn trong vòng 15-30 phút để khảo sát chi tiết.
          </p>
          <button className="btn btn-primary" id="btnClsModal" onClick={() => setModalActive(false)} style={{ border: 'none' }}>
            Xác nhận
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-area">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '2px', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
              <span style={{ color: 'var(--text-primary)' }}>TAT</span>
              <span style={{ background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--primary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 300, marginLeft: '2px' }}>MEDIA</span>
            </a>
            <p className="brand-bio">
              Nhà cung cấp giải pháp sự kiện cao cấp kết hợp nghệ thuật sáng tạo và công nghệ 
              tương tác hàng đầu tại Việt Nam.
            </p>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-nav">
            <h4>Khám Phá</h4>
            <ul className="footer-links">
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#philosophy">Triết lý TAT</a></li>
              <li><a href="#services">Dịch vụ sáng tạo</a></li>
              <li><a href="#portfolio">Dự án thực tế</a></li>
              <li><a href="#estimator">Dự toán ngân sách</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Bản Tin Sự Kiện</h4>
            <p>Đăng ký email để nhận xu hướng thiết kế sự kiện và báo cáo chi phí mới nhất.</p>
            <form className="newsletter-form" id="newsletterForm" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Địa chỉ email của bạn..."
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" title="Đăng ký"><i className="fa-solid fa-arrow-right"></i></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container bottom-content">
            <p>&copy; 2026 TATMEDIA Agency. Bảo lưu mọi quyền.</p>
            <div className="bottom-links">
              <a href="#">Điều khoản bảo mật</a>
              <a href="#">Chính sách hoạt động</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
