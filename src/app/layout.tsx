import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tatmedia.vn'),
  title: "TATMEDIA | Đơn vị Tổ chức Sự kiện Cao cấp & Chuyên nghiệp",
  description: "Chúng tôi định hình các ý tưởng sáng tạo thành hiện thực bằng các giải pháp thiết kế, âm thanh ánh sáng đỉnh cao cùng sự chỉn chu trong từng chi tiết tổ chức.",
  openGraph: {
    title: "TATMEDIA | Đơn vị Tổ chức Sự kiện Cao cấp & Chuyên nghiệp",
    description: "Nhà cung cấp giải pháp sự kiện cao cấp kết hợp nghệ thuật sáng tạo và công nghệ tương tác hàng đầu tại Việt Nam.",
    siteName: "TATMEDIA",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/assets/Concert The Mirror/z7962792838900_beef0c4186462261fccee367620f17c2.jpg",
        width: 1200,
        height: 630,
        alt: "TATMEDIA Premium Stage Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TATMEDIA | Đơn vị Tổ chức Sự kiện Cao cấp & Chuyên nghiệp",
    description: "Nhà cung cấp giải pháp sự kiện cao cấp kết hợp nghệ thuật sáng tạo và công nghệ tương tác hàng đầu tại Việt Nam.",
    images: ["/assets/Concert The Mirror/z7962792838900_beef0c4186462261fccee367620f17c2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-theme="dark"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          precedence="default"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
