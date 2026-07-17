# TAT Media & Event

Website giới thiệu hệ sinh thái truyền thông và tổ chức sự kiện TAT Media & Event, đã được chuyển sang cấu trúc Next.js App Router.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Cấu trúc chính

- `src/app/layout.tsx`: root layout và metadata của Next.js
- `src/app/page.tsx`: route `/`, render giao diện chính
- `src/App.tsx`: client component chứa landing page, form, modal, admin lead manager
- `src/components/`: các component UI hiện có
- `src/data.ts`, `src/types.ts`: dữ liệu mẫu và kiểu TypeScript

## Chạy local

```bash
npm install
npm run dev
```

Mặc định app chạy tại `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```
