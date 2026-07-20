import { Project, ServiceItem, EcosystemBenefit, ConsultationInquiry } from './types';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    categoryCode: 'STRATEGIC EVENTS',
    title: 'Tổ chức sự kiện (Event)',
    shortDesc: 'Giải đấu Pickleball & Golf, Gala Dinner, hội thảo doanh nghiệp, lễ kỷ niệm và hoạt động Team Building chuyên nghiệp.',
    detailedDesc: 'TAT Media tự hào là đơn vị tổ chức giải đấu thể thao phong trào và doanh nhân (Golf, Pickleball) uy tín, lên kế hoạch trọn gói từ thiết kế thi công sân khấu, âm thanh ánh sáng LED đến điều phối chương trình chi tiết.',
    image: '/assets/generated/core_service_event.png',
    features: [
      'Giải đấu Pickleball & Golf chuyên nghiệp',
      'Gala Dinner & Hội nghị khách hàng tri ân',
      'Hội thảo doanh nghiệp & Team Building gắn kết',
      'Lễ khai trương, khánh thành & Kỷ niệm thành lập'
    ]
  },
  {
    id: 'service-2',
    categoryCode: 'CREATIVE MEDIA',
    title: 'Truyền thông đa phương tiện (Media)',
    shortDesc: 'Sản xuất TVC doanh nghiệp, Livestream sự kiện, chụp ảnh quay phim chuyên nghiệp và chiến lược PR báo chí.',
    detailedDesc: 'Cung cấp giải pháp phủ sóng thương hiệu tối đa thông qua hệ thống dịch vụ media khép kín: từ quay phim, chụp ảnh sự kiện đến sản xuất TVC, thiết kế đồ họa giới thiệu sản phẩm và quản trị fanpage chuyên nghiệp.',
    image: '/assets/generated/core_service_media.png',
    features: [
      'PR Báo chí & Định vị thương hiệu toàn diện',
      'Sản xuất TVC & Phim doanh nghiệp giới thiệu',
      'Dịch vụ quay phim & Chụp ảnh sự kiện trọn gói',
      'Livestream đa điểm cầu & Booking KOL/KOC'
    ]
  },
  {
    id: 'service-3',
    categoryCode: 'BUSINESS CONNECT',
    title: 'Kết nối doanh nghiệp (Connection)',
    shortDesc: 'Kích hoạt gói tài trợ sự kiện, mở rộng liên kết giao thương và gia nhập cộng đồng đối tác lớn.',
    detailedDesc: 'Đóng vai trò cầu nối xúc tiến thương mại đắc lực cho các doanh nghiệp SME, ngân hàng, hiệp hội kinh tế, giúp kêu gọi tài trợ hiệu quả và mở rộng tệp khách hàng tiềm năng bền vững.',
    image: '/assets/generated/core_service_connection.png',
    features: [
      'Kêu gọi tài trợ & Bảo trợ truyền thông sự kiện',
      'Kết nối đối tác trong hệ sinh thái TAVITAX',
      'Xúc tiến thương mại Doanh nghiệp SME & Ngân hàng',
      'Booking KOL/KOC & Hỗ trợ thiết lập liên minh'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    category: 'strategic',
    categoryLabel: '2024 — LIVE SHOW',
    year: '2024',
    client: 'TAT Media & Partners',
    title: 'Liveshow "Sóng" - Sân khấu nước 360°',
    image: '/assets/liveshow-song/untitled--11.jpg',
    description: 'Đại nhạc hội bùng nổ cảm xúc với thiết kế sân khấu nước 360 độ độc đáo ngoài trời và công nghệ trình chiếu ánh sáng laser lập thể đỉnh cao, thu hút hàng vạn khán giả.',
    challenge: 'Kiến tạo không gian biểu diễn nghệ thuật tích hợp yếu tố nước, ánh sáng và hệ thống âm thanh lập thể trong điều kiện không gian mở sát biển, chịu ảnh hưởng thời tiết.',
    solution: 'Ứng dụng thiết kế sân khấu đa tầng với hồ nước trung tâm tích hợp hệ thống vòi phun áp lực cao và ánh sáng laser định hình 3D. Đồng thời thiết kế kết cấu chống chịu gió biển cấp cao.',
    impact: [
      'Quy tụ hơn 15.000 khán giả tham gia trực tiếp và 2.5 triệu lượt xem trực tuyến',
      'Được đưa tin rộng rãi trên 80 trang báo và kênh truyền hình quốc gia',
      'Đạt giải thưởng vàng cho hạng mục Sân khấu & Trình diễn Ánh sáng xuất sắc nhất năm'
    ],
    gallery: [
      '/assets/liveshow-song/untitled--11.jpg',
      '/assets/liveshow-song/untitled-.jpg',
      '/assets/liveshow-song/untitled--2.jpg',
      '/assets/liveshow-song/untitled--3.jpg',
      '/assets/liveshow-song/untitled--4.jpg',
      '/assets/liveshow-song/untitled--5.jpg',
      '/assets/liveshow-song/untitled--6.jpg',
      '/assets/liveshow-song/untitled--7.jpg',
      '/assets/liveshow-song/untitled--8.jpg',
      '/assets/liveshow-song/untitled--9.jpg',
      '/assets/liveshow-song/untitled--10.jpg',
      '/assets/liveshow-song/untitled--12.jpg',
      '/assets/liveshow-song/untitled--13.jpg'
    ]
  },
  {
    id: 'project-3',
    category: 'creative',
    categoryLabel: '2023 — CONCERT',
    year: '2023',
    client: 'TAT Media & Partners',
    title: 'Concert "The Mirror" - Gương vô cực',
    image: '/assets/concert-the-mirror/z7962792863491_a18c5bdbd74b2f00f69ba22ef30dccbf.jpg',
    description: 'Đại nhạc hội nghệ thuật tương tác trong nhà kết hợp concept "Gương vô cực", mang đến trải nghiệm thị giác đa chiều độc nhất vô nhị cho giới trẻ.',
    challenge: 'Xử lý khúc xạ ánh sáng và tạo chiều sâu không gian vô cực trên sân khấu trong nhà có diện tích giới hạn.',
    solution: 'Bố trí hệ thống gương LED phản chiếu đối xứng kết hợp hiệu ứng hình ảnh Kinetic chuyển động theo thời gian thực và đèn chuyển động tự động lập trình sẵn.',
    impact: [
      'Quy tụ hơn 3.000 khán giả trực tiếp lấp đầy trung tâm triển lãm lớn',
      'Tạo làn sóng thảo luận lớn trên mạng xã hội với hơn 100.000 lượt tương tác chia sẻ',
      'Đặt nền móng tiêu chuẩn mới cho công nghệ trình diễn nghệ thuật thị giác tương tác'
    ],
    gallery: [
      '/assets/concert-the-mirror/z7962792863491_a18c5bdbd74b2f00f69ba22ef30dccbf.jpg',
      '/assets/concert-the-mirror/z7962792784108_728f50d3daca9ebf2eefc9a01b70cb5b.jpg',
      '/assets/concert-the-mirror/z7962792838900_beef0c4186462261fccee367620f17c2.jpg',
      '/assets/concert-the-mirror/z7962792904084_8114c0f72a8ef5f3ebf5f361aede6cae.jpg',
      '/assets/concert-the-mirror/z7962792935376_3a01d4dc1f4aac0ebd6d1fccab43b00f.jpg',
      '/assets/concert-the-mirror/z7962792938078_ec0319b2993c2a59b4ce5d34847b0f86.jpg'
    ]
  }
];

export const ECOSYSTEM_BENEFITS: EcosystemBenefit[] = [
  {
    id: 'benefit-1',
    title: 'Sự kiện chuyên nghiệp (Event)',
    description: 'Mang đến chương trình sự kiện chất lượng, ấn tượng, chuyên nghiệp và khác biệt, tạo dấu ấn sâu sắc cho mọi thương hiệu.'
  },
  {
    id: 'benefit-2',
    title: 'Truyền thông sáng tạo (Media)',
    description: 'Giải pháp truyền thông sáng tạo, lan tỏa thương hiệu mạnh mẽ, tiếp cận đa chiều qua các kênh truyền thông chính thống và kỹ thuật số.'
  },
  {
    id: 'benefit-3',
    title: 'Kết nối doanh nghiệp (Connection)',
    description: 'Xây dựng hệ sinh thái kết nối doanh nghiệp, đối tác và khách hàng, tạo ra giá trị cộng đồng bền vững từ dữ liệu khách hàng.'
  }
];

export const INITIAL_INQUIRIES: ConsultationInquiry[] = [
  {
    id: 'inq-1',
    fullName: 'Lê Hoàng Minh',
    phone: '0912345678',
    company: 'Vingroup JSC',
    request: 'Cần tư vấn tổ chức giải Golf Giao hữu Thống đốc Ngân hàng vào quý 4 năm 2026.',
    createdAt: '2026-07-15T10:30:00Z',
    status: 'new'
  },
  {
    id: 'inq-2',
    fullName: 'Trần Thị Thu Trang',
    phone: '0987654321',
    company: 'FPT Software',
    request: 'Yêu cầu sản xuất TVC 60s giới thiệu trung tâm AI mới tại Hà Nội và lên chiến lược PR báo chí.',
    createdAt: '2026-07-16T01:15:00Z',
    status: 'contacted'
  }
];
