# TAT Media & Event - Comprehensive Design System & UI Guide

Tài liệu này là cẩm nang đặc tả chi tiết toàn bộ ngôn ngữ thiết kế, quy chuẩn mã nguồn, mã màu, kiểu chữ, hiệu ứng chuyển động và cấu trúc bố cục trang (Layout Architecture) của website **TAT Media & Event**.

---

## 1. Brand Identity & core Concept (Giá trị Cốt lõi & Triết lý)

* **Branding Heritage & Global Vision (Di sản & Tầm nhìn)**: Sự đan xen tinh tế giữa bản sắc văn hóa truyền thông Việt Nam và định hướng quy chuẩn chuyên nghiệp toàn cầu. Giao diện thể hiện tính thẩm mỹ đáng tin cậy cho các đối tác tập đoàn lớn (C-suite).
* **Architectural Precision (Độ chính xác Kiến trúc)**: Sử dụng các đường kẻ kỹ thuật thanh mảnh (hairline rules), cấu trúc Bento Grid bất đối xứng nhưng cân bằng hoàn hảo, mô phỏng các bản vẽ kỹ thuật chi tiết của sự kiện.
* **Premium Dark Theme**: Nền tối sâu thẳm giúp tôn vinh hình ảnh các dự án thực tế, tăng độ tương phản của các dải màu thương hiệu.

---

## 2. Color System (Hệ thống màu sắc)

Bảng màu được tích hợp trực tiếp qua cấu hình Tailwind v4 trong tệp `index.css`:

### 2.1. Màu nền & Bố cục (Background & Surface Colors)
* **Primary Deep Blue (`--color-primary` / `#081223`)**:
  * *Ứng dụng*: Màu nền toàn trang (body background). Tạo cảm giác chiều sâu không gian huyền ảo.
* **Primary Light Blue (`--color-primary-light` / `#16243d`)**:
  * *Ứng dụng*: Phân tách các phần nền phụ, trạng thái hover của các thẻ hoặc nền nút tối.
* **Surface Dark (`--color-surface-dark` / `#0a162b`)**:
  * *Ứng dụng*: Nền các hộp chức năng chính (Bento Card, Zalo Connect Card). Tạo độ nổi nhẹ so với nền body tối.
* **Surface Light (`--color-surface-light` / `#fdf8f8`)**:
  * *Ứng dụng*: Sử dụng rất ít cho văn bản hoặc icon cần tương phản cực cao trên nền tối.

### 2.2. Màu thương hiệu & Điểm nhấn (Brand Accent Colors)
* **Secondary Royal Blue (`--color-secondary` / `#3755c3`)**:
  * *Ứng dụng*: Màu nhấn chính cho đường kẻ, icon tiêu đề, chữ nhấn mạnh và màu nền của nút kêu gọi hành động (CTA) mặc định.
* **Secondary Light Blue (`--color-secondary-light` / `#4c6ee3`)**:
  * *Ứng dụng*: Trạng thái hover (`hover:bg-secondary-light`) của các nút bấm và liên kết.
* **Zalo Accent Blue (`#0068FF` / `#0052cc`)**:
  * *Ứng dụng*: Dải màu gradient chính thức cho các thành phần liên quan đến Zalo Official.
* **Success Emerald Green (`#34d399` / `rgba(52, 211, 153, 0.1)`)**:
  * *Ứng dụng*: Trạng thái hoạt động trực tuyến (*Active status indicator*) của Zalo Official.

---

## 3. Typography (Hệ thống Chữ)

Quy định phông chữ (Typography Scale) để đảm bảo tính phân cấp thông tin rõ ràng:

### 3.1. Phông chữ trưng bày / Tiêu đề (`font-display` - Cormorant Garamond)
* **Đặc tính**: Phông chữ Serif nghệ thuật cổ điển. Có nét thanh nét đậm tương phản cao.
* **Sử dụng**:
  * **Hero Title**: `text-4xl md:text-6xl font-extrabold`
  * **Section Headings (H2)**: `text-3xl md:text-5xl font-extrabold tracking-tight`
  * **Quote & Key Stats**: `text-5xl md:text-7xl font-bold`

### 3.2. Phông chữ nội dung / Thông số (`font-sans` - Plus Jakarta Sans)
* **Đặc tính**: Phông chữ Sans-serif hiện đại, nét đều, khoảng cách chữ mở rộng.
* **Sử dụng**:
  * **Văn bản thường / Mô tả**: `text-sm md:text-base leading-relaxed text-white/50`
  * **Nhãn nhỏ / Hạng mục**: `text-[10px] tracking-[0.25em] font-bold uppercase text-white/40`
  * **Hotline / Zalo Link**: `text-sm md:text-base font-bold text-secondary`
  * **CTA Button Text**: `text-xs tracking-[0.15em] font-bold uppercase`

---

## 4. UI Components & Layout Systems (Thành phần & Hệ thống Bố cục)

### 4.1. Thanh điều hướng cố định (Header Navigation)
* **Kích thước**: Chiều cao mặc định `h-16` đến `h-20`.
* **Hiệu ứng**: `glass-nav` (Nền trong suốt 85%, làm mờ hậu cảnh `backdrop-blur-16px`, viền hairline dưới `border-white/10`).
* **Menu điều hướng**:
  * Khoảng cách giữa các liên kết: `gap-8 lg:gap-12`.
  * Liên kết hoạt động (Active): Hiển thị màu `--color-secondary` kèm đường gạch chân mỏng `border-b-2`.

### 4.2. Khung lưới Bento (Bento Layout Grid)
* **Cấu trúc lưới**: Sử dụng lưới Tailwind `grid-cols-12` với khoảng cách `gap-16` ở máy tính và `gap-8` trên thiết bị di động.
* **Thẻ Bento Card**:
  * Bo góc: `rounded-2xl` (16px) hoặc `rounded-3xl` (24px) tùy thuộc vào kích thước thẻ.
  * Hiệu ứng viền: Đường viền mảnh `border border-white/10` kết hợp bóng đổ nhẹ `shadow-2xl`.

### 4.3. Zalo Connect Panel (Thẻ kết nối Zalo)
* **Khung viền hài hòa**: Khung viền đơn `bg-[#0a162b] border border-white/10 rounded-2xl p-6 md:p-10`.
* **Trình diễn mã QR**: Mã QR nằm chính giữa, bọc trong khung màu trắng thuần khiết size cố định `168x168px` với bóng đổ mạnh `shadow-[0_20px_50px_rgba(0,0,0,0.4)]`.
* **Nút bấm Zalo**: Thiết kế dạng pill dài tràn khung, nền gradient `linear-gradient(135deg, #0068FF 0%, #0052cc 100%)` cùng hiệu ứng hover nhẹ.

### 4.4. Bản đồ Google Map
* **Khung chứa**: Chiều cao cố định `200px`, bo góc `rounded-2xl` khớp 100% với Zalo Card.
* **Giao diện sáng (Light Theme)**: Hiển thị bản đồ sáng tự nhiên, loại bỏ các filter tối màu để giữ cho bản đồ rõ ràng, dễ định vị.

---

## 5. Page Sections & Layout Architecture (Bố cục Chi tiết các Trang/Phần)

Dưới đây là chi tiết thiết kế cấu trúc bố cục các phần của website:

### 5.1. Hero Section (Trải nghiệm - `#trai-nghiem`)
* **Thiết kế**: Phần đầu trang tràn màn hình (`min-h-[100dvh]`).
* **Nền**: Ảnh nền kích thước lớn, phủ mờ và làm tối bằng lớp phủ gradient (`bg-gradient-to-t from-[#081223] via-transparent to-[#081223]/80`).
* **Nội dung chính**:
  * Dòng thông điệp chính dạng Serif xếp chồng (3 dòng).
  * 2 nút hành động (CTA): Một nút màu trắng tương phản cao để "Đăng ký tư vấn" và một nút trong suốt viền mỏng để "Xem dự án".

### 5.2. Vision & Mission Section (Tầm nhìn & Sứ mệnh)
* **Thiết kế**: Grid chia 12 cột.
* **Cột trái (6/12)**:
  * Tiêu đề giới thiệu di sản TAT.
  * Lưới Bento 4 ô tính năng nhỏ: Các thẻ kính mờ nhỏ đại diện cho 4 sứ mệnh của công ty.
* **Cột phải (5/12)**:
  * Khung ảnh trình diễn sân khấu biểu diễn trực tiếp với bo góc cực lớn (`rounded-[2.5rem]`).

### 5.3. Core Values Section (Triết lý Sáng tạo - `T.A.T`)
* **Thiết kế**: Bố cục 3 cột đều nhau, hiển thị 3 giá trị cốt lõi:
  * **T — Trust**: Thấu hiểu đối tác.
  * **A — Authentic**: Sự độc bản của thương hiệu.
  * **T — Transformation**: Đột phá sáng tạo.
* **Chi tiết thẻ**: Mỗi cột gồm 1 khung chứa ảnh bo góc (`rounded-3xl`) phía trên và nội dung chữ chi tiết ở phía dưới.

### 5.4. Ecosystem comparison Section (Chiến lược - `#chien-luoc`)
* **Thiết kế**: Phần câu hỏi và so sánh hệ sinh thái dạng Accordion.
* **Cấu trúc**: Danh sách các khối câu hỏi xếp chồng, tự động giãn nở khi click, sử dụng màu chữ tương phản nhẹ và chuyển động mượt.

### 5.5. Comprehensive Services (Dịch vụ - `#studio`)
* **Thiết kế**: Khối trình diễn dịch vụ 360 độ gồm các tab dịch vụ (Event, Media, Production).
* **Nội dung**: Các thẻ dịch vụ chứa biểu tượng tối giản, danh sách tính năng và hình ảnh đại diện trực quan.

### 5.6. Project Showcase Gallery (Di sản - `#di-san`)
* **Thiết kế**: Hệ thống thư viện dự án với thanh lọc danh mục (Hội nghị, Gala, Sản xuất, Kết nối).
* **Lưới ảnh**: 2 cột hiển thị các dự án dạng thẻ lớn. Mỗi thẻ tích hợp tính năng xem nhanh chi tiết dự án qua Modal Overlay trượt mượt.

### 5.7. Zalo & Contact Section (Liên hệ - `#tu-van`)
* **Thiết kế**: Grid chia 12 cột đối xứng.
* **Cột trái (5/12)**:
  * Tiêu đề liên hệ chính.
  * Danh sách thông tin dạng xếp dọc (Văn phòng chính, Hotline, Email liên hệ) phân cách bằng nét kẻ mỏng.
  * Bản đồ Google Map sáng tự nhiên, bo góc đồng điệu.
* **Cột phải (7/12)**:
  * Hộp liên kết Zalo Official Connect kính mờ, căn giữa mã QR 3D và nút chat Zalo bản rộng ở chân thẻ.

---

## 6. Micro-animations & Transitions (Hiệu ứng & Chuyển động)

Các chuyển động tương tác của TAT Media & Event được tinh chỉnh để tạo ra cảm giác cao cấp bậc nhất:

* **Premium Transition Curve (`transition-premium`)**:
  * Định nghĩa: `transition-all duration-700 cubic-bezier(0.32, 0.72, 0, 1)`
  * Ứng dụng: Dành cho chuyển động mở Modal dự án, rê chuột phóng to thẻ bento, thay đổi kích thước ảnh.
* **Tương tác nút bấm (CTA States)**:
  * Trạng thái mặc định: Tương phản rõ ràng.
  * Hover: Phóng to nhẹ `hover:scale-[1.03]` kết hợp chuyển đổi độ sáng nền.
  * Click: Thu nhỏ nhẹ `active:scale-[0.98]` để tạo phản hồi vật lý chân thực.
* **Trạng thái nháy sáng (Status Pulse)**:
  * Trạng thái trực tuyến `animate-pulse` chu kỳ `2s` dành cho dấu chấm trạng thái online của Zalo Official.

---

## 7. Development Best Practices & Hacks (Mẹo Lập trình để Biên dịch chuẩn)

Khi phát triển giao diện trên Next.js/React kết hợp Tailwind, để tránh lỗi compile CSS động hoặc cache từ hệ thống đóng gói (bundler), hãy tuân thủ các quy tắc sau:

1. **Inline Style Overrides cho Gradient và Filters**:
   * Khi sử dụng màu nền gradient tùy chỉnh hoặc hiệu ứng bộ lọc bản đồ, hãy viết trực tiếp qua thuộc tính `style={{ ... }}` của React thay vì dùng class Tailwind động.
   * *Ví dụ*: `style={{ background: 'linear-gradient(135deg, #0068FF, #0052cc)' }}`
2. **Kích thước cố định (Hardcoded Dimensions)**:
   * Đối với mã QR hoặc container bản đồ cố định, hãy dùng style inline để tránh việc Tailwind gộp lớp hoặc loại bỏ (purge) các kích thước không phổ dụng.
   * *Ví dụ*: `style={{ width: '136px', height: '136px' }}`
3. **Chống gãy dòng văn bản CTA**:
   * Luôn thêm lớp `whitespace-nowrap` vào các nút bấm chính có biểu tượng đi kèm để đảm bảo nội dung chữ luôn nằm trên một dòng trên mọi kích thước màn hình.
