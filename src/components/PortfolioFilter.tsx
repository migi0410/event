'use client';

import { useState } from 'react';

interface PortfolioItem {
  id: number;
  category: 'corporate' | 'launch' | 'art';
  tag: string;
  title: string;
  client: string;
  imgSrc: string;
  description: string;
  moreImages: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: 'art',
    tag: 'Đại nhạc hội',
    title: 'Đại Nhạc Hội Sinh Viên "The Mirror"',
    client: 'Đại học HUTECH',
    imgSrc: '/assets/Concert The Mirror/z7962792863491_a18c5bdbd74b2f00f69ba22ef30dccbf.jpg',
    description: 'Đại nhạc hội quy tụ hàng ngàn sinh viên Đại học HUTECH, mang đến không gian âm nhạc bùng nổ kết hợp hiệu ứng âm thanh, ánh sáng và màn hình LED trình chiếu đỉnh cao nghệ thuật sân khấu 3D.',
    moreImages: [
      '/assets/Concert The Mirror/z7962792784108_728f50d3daca9ebf2eefc9a01b70cb5b.jpg',
      '/assets/Concert The Mirror/z7962792838900_beef0c4186462261fccee367620f17c2.jpg',
      '/assets/Concert The Mirror/z7962792863491_a18c5bdbd74b2f00f69ba22ef30dccbf.jpg',
      '/assets/Concert The Mirror/z7962792904084_8114c0f72a8ef5f3ebf5f361aede6cae.jpg',
      '/assets/Concert The Mirror/z7962792935376_3a01d4dc1f4aac0ebd6d1fccab43b00f.jpg',
      '/assets/Concert The Mirror/z7962792938078_ec0319b2993c2a59b4ce5d34847b0f86.jpg'
    ]
  },
  {
    id: 2,
    category: 'art',
    tag: 'Sự kiện Âm nhạc',
    title: 'Liveshow Ca Nhạc "Sóng"',
    client: '',
    imgSrc: '/assets/Liveshow Sóng/untitled--13.jpg',
    description: 'Đêm diễn liveshow nghệ thuật mang tính biểu tượng "Sóng", kiến tạo không gian trình diễn ngoài trời thơ mộng kết hợp hệ thống ánh sáng la-zer hiện đại và thiết kế hoa cảnh quan độc bản.',
    moreImages: [
      '/assets/Liveshow Sóng/untitled-.jpg',
      '/assets/Liveshow Sóng/untitled--2.jpg',
      '/assets/Liveshow Sóng/untitled--3.jpg',
      '/assets/Liveshow Sóng/untitled--4.jpg',
      '/assets/Liveshow Sóng/untitled--5.jpg',
      '/assets/Liveshow Sóng/untitled--6.jpg',
      '/assets/Liveshow Sóng/untitled--7.jpg',
      '/assets/Liveshow Sóng/untitled--8.jpg',
      '/assets/Liveshow Sóng/untitled--9.jpg',
      '/assets/Liveshow Sóng/untitled--10.jpg',
      '/assets/Liveshow Sóng/untitled--11.jpg',
      '/assets/Liveshow Sóng/untitled--13.jpg'
    ]
  },
  {
    id: 3,
    category: 'corporate',
    tag: 'Giải đấu Thể thao',
    title: 'Giải Quần Vợt Doanh Nhân "Tavitax Cup"',
    client: 'Tavitax Group & CLB Doanh nhân',
    imgSrc: '/assets/Tavitax CUP/Hong Quan-64.JPG',
    description: 'Giải Pickleball và quần vợt tranh cúp thường niên lớn nhất dành cho các doanh nhân và câu lạc bộ phong trào trong hệ sinh thái Tavitax Group, thúc đẩy giao lưu và kết nối kinh tế.',
    moreImages: [
      '/assets/Tavitax CUP/Hong Quan-64.JPG',
      '/assets/Tavitax CUP/Hong Quan-172.JPG',
      '/assets/Tavitax CUP/Hong Quan-193.JPG',
      '/assets/Tavitax CUP/Hong Quan-223.JPG',
      '/assets/Tavitax CUP/Hong Quan-235.JPG',
      '/assets/Tavitax CUP/Hong Quan-266.JPG',
      '/assets/Tavitax CUP/Hong Quan-319.JPG',
      '/assets/Tavitax CUP/Hong Quan-356.JPG',
      '/assets/Tavitax CUP/Hong Quan-4.JPG',
      '/assets/Tavitax CUP/Hong Quan-450.JPG',
      '/assets/Tavitax CUP/Hong Quan-5.JPG',
      '/assets/Tavitax CUP/Hong Quan-508.JPG',
      '/assets/Tavitax CUP/Hong Quan-509.JPG',
      '/assets/Tavitax CUP/Hong Quan-516.JPG',
      '/assets/Tavitax CUP/Hong Quan-548.JPG',
      '/assets/Tavitax CUP/Hong Quan-551.JPG',
      '/assets/Tavitax CUP/Hong Quan-581.JPG',
      '/assets/Tavitax CUP/Hong Quan-590.JPG',
      '/assets/Tavitax CUP/Hong Quan-611.JPG',
      '/assets/Tavitax CUP/Hong Quan-815.JPG',
      '/assets/Tavitax CUP/Hong Quan-971.JPG',
      '/assets/Tavitax CUP/Hong Quan-1023.JPG',
      '/assets/Tavitax CUP/Hong Quan-1038.JPG',
      '/assets/Tavitax CUP/Hong Quan-1059.JPG',
      '/assets/Tavitax CUP/Hong Quan-1161.JPG',
      '/assets/Tavitax CUP/Hong Quan-1192.JPG',
      '/assets/Tavitax CUP/Hong Quan-1232.JPG',
      '/assets/Tavitax CUP/Hong Quan-1265.JPG',
      '/assets/Tavitax CUP/Hong Quan-246 (1).JPG'
    ]
  },
  {
    id: 4,
    category: 'launch',
    tag: 'Hội nghị & Toạ đàm',
    title: 'Diễn Đàn Giao Thương Doanh Nghiệp "Toạ đàm VCCI"',
    client: 'Phòng Thương mại và Công nghiệp Việt Nam (VCCI)',
    imgSrc: '/assets/Toạ đàm VCCI/untitled-1433.jpg',
    description: 'Hội nghị đối thoại kinh tế và diễn đàn kết nối đầu tư thương mại toàn diện, quy tụ hàng trăm doanh nghiệp trong nước và quốc tế dưới sự chủ trì của VCCI.',
    moreImages: [
      '/assets/Toạ đàm VCCI/untitled-1433.jpg',
      '/assets/Toạ đàm VCCI/untitled-1091.jpg',
      '/assets/Toạ đàm VCCI/untitled-1127.jpg',
      '/assets/Toạ đàm VCCI/untitled-1217.jpg',
      '/assets/Toạ đàm VCCI/untitled-1223.jpg',
      '/assets/Toạ đàm VCCI/untitled-1242.jpg',
      '/assets/Toạ đàm VCCI/untitled-1315.jpg',
      '/assets/Toạ đàm VCCI/untitled-1388.jpg',
      '/assets/Toạ đàm VCCI/untitled-1066.jpg',
      '/assets/Toạ đàm VCCI/untitled-1448.jpg'
    ]
  }
];

export default function PortfolioFilter() {
  const [filter, setFilter] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState<PortfolioItem[]>(PORTFOLIO_ITEMS);
  const [animating, setAnimating] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);
  const [modalFeaturedImg, setModalFeaturedImg] = useState<string>('');

  const handleFilterChange = (newFilter: string) => {
    if (newFilter === filter) return;

    setAnimating(true);

    setTimeout(() => {
      setFilter(newFilter);
      if (newFilter === 'all') {
        setVisibleItems(PORTFOLIO_ITEMS);
      } else {
        setVisibleItems(PORTFOLIO_ITEMS.filter((item) => item.category === newFilter));
      }

      setTimeout(() => {
        setAnimating(false);
      }, 50);
    }, 300);
  };

  const openProjectModal = (project: PortfolioItem) => {
    setActiveProject(project);
    setModalFeaturedImg(project.imgSrc);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    setModalFeaturedImg('');
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Portfolio Filters */}
      <div className="portfolio-filters fade-in-up appear">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          Tất cả dự án
        </button>
        <button
          className={`filter-btn ${filter === 'corporate' ? 'active' : ''}`}
          onClick={() => handleFilterChange('corporate')}
        >
          Sự kiện Doanh nghiệp
        </button>
        <button
          className={`filter-btn ${filter === 'launch' ? 'active' : ''}`}
          onClick={() => handleFilterChange('launch')}
        >
          Hội nghị & Ra mắt
        </button>
        <button
          className={`filter-btn ${filter === 'art' ? 'active' : ''}`}
          onClick={() => handleFilterChange('art')}
        >
          Nghệ thuật & Giải trí
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-item glass-card fade-in-up appear"
            style={{
              transform: animating ? 'scale(0.8)' : 'scale(1)',
              opacity: animating ? '0' : '1',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => openProjectModal(item)}
          >
            <div className="portfolio-img-container">
              <img src={item.imgSrc} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="portfolio-overlay">
                <span className="portfolio-tag">{item.tag}</span>
                <h4 className="portfolio-item-title">{item.title}</h4>
                <p className="portfolio-item-client">Khách hàng: {item.client}</p>
                <div className="portfolio-link">
                  <span style={{ fontSize: '0.85rem', marginRight: '8px', fontWeight: 500 }}>Xem album ảnh</span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Portfolio Detail Modal */}
      {activeProject && (
        <div
          className="portfolio-modal-overlay"
          onClick={(e) => e.target === e.currentTarget && closeProjectModal()}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(2, 6, 23, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '20px'
          }}
        >
          <div
            className="portfolio-modal-content glass-card"
            style={{
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '24px',
              border: '1px solid var(--card-border)',
              padding: '32px',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              background: 'rgba(15, 23, 42, 0.8)'
            }}
          >
            <button
              onClick={closeProjectModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--card-border)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <i className="fa-solid fa-xmark" style={{ fontSize: '1.2rem' }}></i>
            </button>

            <span className="portfolio-tag" style={{ display: 'inline-block', marginBottom: '12px' }}>{activeProject.tag}</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>
              {activeProject.title}
            </h2>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '24px' }}>
              Đối tác / Khách hàng: {activeProject.client}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '32px' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '450px',
                  border: '1px solid var(--card-border)',
                  position: 'relative',
                  background: '#020617',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Prev Button */}
                <button
                  onClick={() => {
                    const currentIdx = activeProject.moreImages.indexOf(modalFeaturedImg);
                    const prevIdx = (currentIdx - 1 + activeProject.moreImages.length) % activeProject.moreImages.length;
                    setModalFeaturedImg(activeProject.moreImages[prevIdx]);
                  }}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    zIndex: 5,
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(6, 182, 212, 0.4)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.7)'; e.currentTarget.style.borderColor = 'var(--card-border)'; }}
                  title="Ảnh trước"
                >
                  <i className="fa-solid fa-chevron-left" style={{ fontSize: '1.1rem' }}></i>
                </button>

                {/* Main Image */}
                <img
                  src={modalFeaturedImg}
                  alt={activeProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />

                {/* Next Button */}
                <button
                  onClick={() => {
                    const currentIdx = activeProject.moreImages.indexOf(modalFeaturedImg);
                    const nextIdx = (currentIdx + 1) % activeProject.moreImages.length;
                    setModalFeaturedImg(activeProject.moreImages[nextIdx]);
                  }}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    zIndex: 5,
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(6, 182, 212, 0.4)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.7)'; e.currentTarget.style.borderColor = 'var(--card-border)'; }}
                  title="Ảnh sau"
                >
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: '1.1rem' }}></i>
                </button>

                {/* Slide Counter Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                    border: '1px solid var(--card-border)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {(activeProject.moreImages.indexOf(modalFeaturedImg) !== -1 ? activeProject.moreImages.indexOf(modalFeaturedImg) : 0) + 1} / {activeProject.moreImages.length}
                </div>
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Giới thiệu dự án
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {activeProject.description}
                </p>
              </div>
            </div>

            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
              Album hình ảnh sự kiện ({activeProject.moreImages.length} ảnh)
            </h4>

            <div
              className="modal-gallery-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '12px',
                maxHeight: '300px',
                overflowY: 'auto',
                paddingRight: '6px'
              }}
            >
              {activeProject.moreImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setModalFeaturedImg(imgUrl)}
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '85px',
                    cursor: 'pointer',
                    border: modalFeaturedImg === imgUrl ? '2px solid var(--accent-cyan)' : '1px solid var(--card-border)',
                    opacity: modalFeaturedImg === imgUrl ? 1 : 0.7,
                    transition: 'all 0.2s ease',
                    background: '#090d16'
                  }}
                  onMouseEnter={(e) => { if (modalFeaturedImg !== imgUrl) e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { if (modalFeaturedImg !== imgUrl) e.currentTarget.style.opacity = '0.7'; }}
                >
                  <img src={imgUrl} alt={`Album ${idx + 1}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
