# Career Navigator

**Khám phá sở thích • Tìm hiểu nghề nghiệp • Xây dựng thương mại**

Website hướng nghiệp tĩnh (HTML/CSS/JS, không cần máy chủ) dành cho học sinh THCS và THPT, dựa trên tài liệu *Hướng dẫn học sinh làm Career-Navigator 4.0* và mẫu demo 6 màn hình.

## Các phần của trang

| Màn hình (theo mẫu demo) | Trên website |
| --- | --- |
| 1. Trang chủ | Hero với 3 nút: Bắt đầu khảo sát, Khám phá nghề nghiệp, Kế hoạch của tôi |
| 2. Khảo sát | 18 hoạt động (3 cho mỗi nhóm R, I, A, S, E, C), thang 1–5, kèm câu hỏi lĩnh vực quan tâm |
| 3. Kết quả | Tính điểm trung bình từng nhóm ngay trên trình duyệt, nêu nhóm nổi bật, lĩnh vực gợi ý và lý do |
| 4. Chọn nghề | 18 nghề, lọc theo nhóm, tìm kiếm, và bộ lọc "Phù hợp với tôi" |
| 5. Hồ sơ nghề | Công việc, kiến thức – kỹ năng, môn học liên quan, hướng học tập |
| 6. Kế hoạch | 5 ô kế hoạch, lưu trên trình duyệt (localStorage), in được |

Câu trả lời và kế hoạch chỉ lưu trên trình duyệt của học sinh, không gửi đi đâu.

## Chỉnh sửa nội dung

Toàn bộ câu hỏi, nhóm sở thích và danh mục nghề nằm trong `assets/js/data.js`. Thêm nghề mới bằng cách thêm một mục vào mảng `careers`.

## Chạy thử

Mở `index.html` bằng trình duyệt, hoặc bật GitHub Pages cho nhánh chính (thư mục gốc).
