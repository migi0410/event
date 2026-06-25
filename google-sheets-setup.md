# Hướng Dẫn Kết Nối Google Sheets API Trực Tiếp

Bạn đã chọn kết nối trực tiếp từ mã nguồn Next.js tới Google Sheets API bằng Client ID & Client Secret. Dưới đây là hướng dẫn chi tiết các bước cấu hình:

---

## Bước 1: Tạo Google Sheet & Lấy Spreadsheet ID
1. Truy cập [Google Sheets](https://sheets.google.com) và tạo một bảng tính mới.
2. Tại dòng đầu tiên (dòng 1), điền các tiêu đề cột theo đúng thứ tự:
   - Cột A: `Thời gian`
   - Cột B: `Họ tên`
   - Cột C: `Email`
   - Cột D: `Số điện thoại`
   - Cột E: `Tên doanh nghiệp`
   - Cột F: `Nội dung yêu cầu`
3. Sao chép **Spreadsheet ID** từ URL trình duyệt của bạn:
   - Ví dụ URL: `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit#gid=0`
   - Spreadsheet ID sẽ là: `1A2B3C4D5E6F7G8H9I0J`

---
   
## Bước 2: Cấu Hình Redirect URI trong Google Cloud Console
Vì bạn đã tạo Client ID và Client Secret (như hiển thị trong ảnh chụp màn hình):
1. Truy cập [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials).
2. Chọn Client ID bạn đang sử dụng.
3. Tại phần **Authorized redirect URIs** (Đường dẫn chuyển hướng hợp lệ), thêm đường dẫn sau:
   - Chạy Local: `http://localhost:3000/api/auth/google/callback`
   - Chạy Production (khi deploy trang web): `https://<domain-cua-ban>.com/api/auth/google/callback`
4. Nhấn **Lưu** (Save).

---

## Bước 3: Cấu Hình Biến Môi Trường Ban Đầu
Tạo hoặc mở file `.env.local` ở thư mục gốc của dự án này và cấu hình các biến sau:

```env
GOOGLE_CLIENT_ID=789616368186-nspcl6sm8dlik874ben90u607qmfgv9i.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_SPREADSHEET_ID=YOUR_SPREADSHEET_ID_HERE
GOOGLE_SHEET_RANGE=Sheet1!A:F
```
*(Thay thế `YOUR_GOOGLE_CLIENT_SECRET_HERE` bằng Client Secret bí mật của bạn và `YOUR_SPREADSHEET_ID_HERE` bằng ID lấy ở Bước 1).*

---

## Bước 4: Chạy Tự Động Lấy Refresh Token
Chúng tôi đã tích hợp một luồng tự động sinh Refresh Token ngay trong ứng dụng Next.js:
1. Chạy dự án ở môi trường local (`npm run dev`).
2. Mở trình duyệt và truy cập đường dẫn: **`http://localhost:3000/api/auth/google`**
3. Hệ thống sẽ tự động chuyển hướng bạn tới trang đăng nhập và xác thực của Google.
4. Đăng nhập bằng tài khoản Google sở hữu bảng tính của bạn, chọn **Cho phép** cấp quyền ghi dữ liệu vào Google Sheets.
5. Sau khi thành công, trình duyệt sẽ hiển thị mã **`GOOGLE_REFRESH_TOKEN`** của bạn trên màn hình.
6. Sao chép mã này và dán thêm dòng sau vào file `.env.local`:

```env
GOOGLE_REFRESH_TOKEN=YOUR_GENERATED_REFRESH_TOKEN_HERE
```

7. Khởi động lại dự án (`npm run dev` hoặc deploy lại). Từ bây giờ, mọi dữ liệu đăng ký tư vấn từ form sẽ tự động được ghi thẳng vào Google Sheet của bạn!

---

## Các Phương Án Thay Thế Để Lấy Token Hoặc Kết Nối

Nếu bạn gặp khó khăn trong việc chạy luồng Redirect ở Bước 4 hoặc không muốn cấu hình Redirect URI, bạn có thể lựa chọn 1 trong 2 phương án thay thế dưới đây:

### Phương Án A: Sử Dụng Google OAuth2 Playground (Không cần code local)
Đây là công cụ chính thức của Google giúp nhà phát triển tạo nhanh Refresh Token qua giao diện trực quan:
1. Thêm URL chuyển hướng sau vào Client ID của bạn trong Google Cloud Console:
   - `https://developers.google.com/oauthplayground`
2. Truy cập trang [Google OAuth2 Playground](https://developers.google.com/oauthplayground).
3. Bấm vào biểu tượng **Cài đặt (bánh răng)** ở góc trên bên phải:
   - Tích chọn **"Use your own OAuth credentials"** (Sử dụng thông tin xác thực của riêng bạn).
   - Nhập **OAuth Client ID** và **OAuth Client Secret** của bạn vào.
4. Ở cột bên trái (Mục 1 - Select & authorize APIs):
   - Nhập scope sau vào ô nhập liệu: `https://www.googleapis.com/auth/spreadsheets`
   - Bấm nút **Authorize APIs** và tiến hành đăng nhập tài khoản Google để cấp quyền.
5. Ở Mục 2 (Exchange authorization code for tokens):
   - Bấm nút **Exchange authorization code for tokens**.
   - Copy mã **Refresh Token** vừa được tạo ra và dán vào biến `GOOGLE_REFRESH_TOKEN` trong file `.env.local`.

---

### Phương Án B: Sử dụng Service Account (Không cần Refresh Token - Khuyên Dùng)
Đây là phương án chuẩn công nghiệp cho các kết nối Server-to-Server, hoạt động bằng mã Key bảo mật mà không cần người dùng đăng nhập hoặc gia hạn token.
1. Truy cập [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials).
2. Nhấp vào **Create Credentials** > **Service Account** (Tài khoản dịch vụ). Đặt tên và tạo tài khoản.
3. Khi đã tạo xong, nhấp vào tên Service Account vừa tạo, chuyển sang tab **Keys** (Khóa) > **Add Key** > **Create new key** dạng **JSON**. Tệp key sẽ tự động được tải xuống máy tính của bạn.
4. Mở tệp JSON đó lên, sao chép toàn bộ nội dung của tệp.
5. Mở file Google Sheet của bạn ra, nhấn nút **Chia sẻ (Share)** ở góc phải và chia sẻ quyền **Người chỉnh sửa (Editor)** cho địa chỉ email của Service Account (dạng `email-cua-ban@project-id.iam.gserviceaccount.com` trong file JSON).
6. Thêm biến môi trường sau vào file `.env.local`:
   ```env
   GOOGLE_SERVICE_ACCOUNT_KEY={"type": "service_account", "project_id": ...} 
   ```
   *(Dán toàn bộ chuỗi JSON của tệp key vào biến trên).*

