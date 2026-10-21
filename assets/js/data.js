/* Dữ liệu nội dung của Career Navigator.
   Nhóm có thể sửa trực tiếp file này để thêm câu hỏi hoặc nghề mới. */

window.CN_DATA = {
  /* 6 nhóm sở thích theo mô hình RIASEC */
  groups: {
    R: {
      code: "R",
      name: "Kỹ thuật",
      full: "Kỹ thuật – thực hành",
      color: "#3168D2",
      soft: "#E0EEFF",
      examples: "Lắp ráp, sửa chữa, vận hành thiết bị",
      fields: ["Cơ khí – chế tạo", "Điện – điện tử", "Xây dựng", "Nông nghiệp công nghệ cao"],
      why: "Bạn thích làm việc bằng tay, với máy móc, dụng cụ và thấy kết quả cụ thể."
    },
    I: {
      code: "I",
      name: "Nghiên cứu",
      full: "Nghiên cứu – khoa học",
      color: "#1F8579",
      soft: "#DDF3F0",
      examples: "Tìm hiểu nguyên nhân, phân tích, thí nghiệm",
      fields: ["Công nghệ thông tin", "Khoa học tự nhiên", "Y – dược", "Khoa học dữ liệu"],
      why: "Bạn tò mò, thích đặt câu hỏi, tìm nguyên nhân và giải quyết vấn đề bằng tư duy logic."
    },
    A: {
      code: "A",
      name: "Sáng tạo",
      full: "Sáng tạo – nghệ thuật",
      color: "#7D5BBE",
      soft: "#EFE8FC",
      examples: "Vẽ, thiết kế, viết, sáng tạo nội dung",
      fields: ["Thiết kế – mỹ thuật", "Truyền thông đa phương tiện", "Kiến trúc", "Âm nhạc – biểu diễn"],
      why: "Bạn thích thể hiện ý tưởng riêng qua hình ảnh, chữ viết, âm thanh hoặc sản phẩm sáng tạo."
    },
    S: {
      code: "S",
      name: "Xã hội",
      full: "Xã hội – hỗ trợ con người",
      color: "#2B915B",
      soft: "#E8F6E7",
      examples: "Dạy học, chăm sóc, tư vấn, giúp đỡ người khác",
      fields: ["Giáo dục", "Y tế – chăm sóc sức khỏe", "Tâm lý – công tác xã hội", "Du lịch – dịch vụ"],
      why: "Bạn quan tâm đến người khác, thích lắng nghe, hướng dẫn và hỗ trợ mọi người."
    },
    E: {
      code: "E",
      name: "Quản lý",
      full: "Kinh doanh – quản lý",
      color: "#D27A12",
      soft: "#FFF1DC",
      examples: "Tổ chức hoạt động, thuyết phục, kinh doanh",
      fields: ["Quản trị kinh doanh", "Marketing – truyền thông", "Luật", "Khởi nghiệp"],
      why: "Bạn tự tin, thích dẫn dắt, thuyết phục người khác và biến ý tưởng thành hành động."
    },
    C: {
      code: "C",
      name: "Nghiệp vụ",
      full: "Nghiệp vụ – tổ chức",
      color: "#56647A",
      soft: "#E9EEF4",
      examples: "Sắp xếp hồ sơ, xử lý dữ liệu, làm việc theo quy trình",
      fields: ["Kế toán – kiểm toán", "Tài chính – ngân hàng", "Hành chính – văn phòng", "Logistics"],
      why: "Bạn cẩn thận, ngăn nắp, thích làm việc có kế hoạch, quy trình và số liệu rõ ràng."
    }
  },

  order: ["R", "I", "A", "S", "E", "C"],

  /* Câu 1: mỗi nhóm có 3 hoạt động để kết quả ổn định hơn
     (6 hoạt động đầu tiên giống bộ câu hỏi trong tài liệu hướng dẫn). */
  questions: [
    { g: "R", text: "Lắp ráp, sửa chữa thiết bị" },
    { g: "I", text: "Tìm hiểu nguyên nhân và giải quyết vấn đề" },
    { g: "A", text: "Vẽ, thiết kế hoặc sáng tạo sản phẩm" },
    { g: "S", text: "Hướng dẫn và giúp đỡ người khác" },
    { g: "E", text: "Tổ chức hoạt động, thuyết phục người khác" },
    { g: "C", text: "Sắp xếp dữ liệu và hồ sơ theo quy trình" },
    { g: "R", text: "Dùng dụng cụ, máy móc để tự làm ra một sản phẩm" },
    { g: "I", text: "Làm thí nghiệm, quan sát các hiện tượng tự nhiên" },
    { g: "A", text: "Viết truyện, làm thơ, quay và dựng video" },
    { g: "S", text: "Lắng nghe, chia sẻ khi bạn bè gặp khó khăn" },
    { g: "E", text: "Làm trưởng nhóm, dẫn dắt cả đội hoàn thành nhiệm vụ" },
    { g: "C", text: "Lập kế hoạch, thời gian biểu chi tiết cho công việc" },
    { g: "R", text: "Làm việc ngoài trời, trồng cây hoặc chăm sóc vật nuôi" },
    { g: "I", text: "Giải bài toán khó, câu đố logic hoặc lập trình" },
    { g: "A", text: "Chơi nhạc, hát, diễn kịch hoặc nhảy" },
    { g: "S", text: "Tham gia hoạt động tình nguyện, chăm sóc người khác" },
    { g: "E", text: "Lên ý tưởng bán hàng hoặc một dự án kinh doanh nhỏ" },
    { g: "C", text: "Làm việc với bảng tính, số liệu và kiểm tra lỗi" }
  ],

  scale: [
    { v: 1, label: "Rất không thích" },
    { v: 2, label: "Không thích" },
    { v: 3, label: "Bình thường" },
    { v: 4, label: "Thích" },
    { v: 5, label: "Rất thích" }
  ],

  /* Ví dụ trường có đào tạo ngành liên quan (tham khảo). Học sinh cần kiểm tra
     ngành và phương thức tuyển sinh từng năm trên website chính thức của trường. */
  schools: {
    "ky-thuat-vien-dien": [
      { name: "Trường Đại học Điện lực", short: "EPU", city: "Hà Nội", major: "Kỹ thuật điện" },
      { name: "Trường Đại học Bách khoa Hà Nội", short: "HUST", city: "Hà Nội", major: "Kỹ thuật điện" },
      { name: "Trường Cao đẳng Kỹ thuật Cao Thắng", short: "CAO THẮNG", city: "TP.HCM", major: "Điện công nghiệp" }
    ],
    "ky-thuat-vien-o-to": [
      { name: "Trường Đại học Công nghiệp Hà Nội", short: "HaUI", city: "Hà Nội", major: "Công nghệ kỹ thuật ô tô" },
      { name: "Trường Đại học Sư phạm Kỹ thuật TP.HCM", short: "HCMUTE", city: "TP.HCM", major: "Công nghệ kỹ thuật ô tô" },
      { name: "Trường Cao đẳng Kỹ thuật Cao Thắng", short: "CAO THẮNG", city: "TP.HCM", major: "Công nghệ ô tô" }
    ],
    "ky-su-xay-dung": [
      { name: "Trường Đại học Xây dựng Hà Nội", short: "HUCE", city: "Hà Nội", major: "Kỹ thuật xây dựng" },
      { name: "Trường Đại học Bách khoa – ĐHQG TP.HCM", short: "HCMUT", city: "TP.HCM", major: "Kỹ thuật xây dựng" },
      { name: "Trường Đại học Giao thông Vận tải", short: "UTC", city: "Hà Nội", major: "Kỹ thuật xây dựng" }
    ],
    "ky-su-phan-mem": [
      { name: "Trường Đại học Bách khoa Hà Nội", short: "HUST", city: "Hà Nội", major: "Khoa học máy tính, Kỹ thuật phần mềm" },
      { name: "Trường Đại học Công nghệ – ĐHQG Hà Nội", short: "UET", city: "Hà Nội", major: "Công nghệ thông tin" },
      { name: "Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM", short: "UIT", city: "TP.HCM", major: "Kỹ thuật phần mềm" }
    ],
    "ky-thuat-vien-phong-thi-nghiem": [
      { name: "Trường Đại học Y Hà Nội", short: "HMU", city: "Hà Nội", major: "Kỹ thuật xét nghiệm y học" },
      { name: "Trường Đại học Khoa học Tự nhiên – ĐHQG Hà Nội", short: "HUS", city: "Hà Nội", major: "Công nghệ sinh học, Hóa học" },
      { name: "Đại học Y Dược TP.HCM", short: "UMP", city: "TP.HCM", major: "Kỹ thuật xét nghiệm y học" }
    ],
    "chuyen-vien-phan-tich-du-lieu": [
      { name: "Đại học Kinh tế Quốc dân", short: "NEU", city: "Hà Nội", major: "Khoa học dữ liệu, Thống kê" },
      { name: "Trường Đại học Bách khoa Hà Nội", short: "HUST", city: "Hà Nội", major: "Khoa học dữ liệu" },
      { name: "Trường Đại học Khoa học Tự nhiên – ĐHQG TP.HCM", short: "HCMUS", city: "TP.HCM", major: "Khoa học dữ liệu" }
    ],
    "thiet-ke-do-hoa": [
      { name: "Trường Đại học Mỹ thuật Công nghiệp", short: "MTCN", city: "Hà Nội", major: "Thiết kế đồ họa" },
      { name: "Trường Đại học Kiến trúc TP.HCM", short: "UAH", city: "TP.HCM", major: "Thiết kế đồ họa" },
      { name: "Cao đẳng FPT Polytechnic", short: "FPT", city: "Nhiều tỉnh, thành", major: "Thiết kế đồ họa" }
    ],
    "kien-truc-su": [
      { name: "Trường Đại học Kiến trúc Hà Nội", short: "HAU", city: "Hà Nội", major: "Kiến trúc" },
      { name: "Trường Đại học Kiến trúc TP.HCM", short: "UAH", city: "TP.HCM", major: "Kiến trúc" },
      { name: "Trường Đại học Xây dựng Hà Nội", short: "HUCE", city: "Hà Nội", major: "Kiến trúc" }
    ],
    "sang-tao-noi-dung-so": [
      { name: "Học viện Báo chí và Tuyên truyền", short: "AJC", city: "Hà Nội", major: "Báo chí, Truyền thông đa phương tiện" },
      { name: "Học viện Công nghệ Bưu chính Viễn thông", short: "PTIT", city: "Hà Nội, TP.HCM", major: "Truyền thông đa phương tiện" },
      { name: "Trường ĐH Khoa học Xã hội và Nhân văn – ĐHQG TP.HCM", short: "USSH", city: "TP.HCM", major: "Báo chí, Truyền thông" }
    ],
    "giao-vien": [
      { name: "Trường Đại học Sư phạm Hà Nội", short: "HNUE", city: "Hà Nội", major: "Các ngành Sư phạm" },
      { name: "Trường Đại học Sư phạm TP.HCM", short: "HCMUE", city: "TP.HCM", major: "Các ngành Sư phạm" },
      { name: "Trường Đại học Sư phạm – ĐH Đà Nẵng", short: "UED", city: "Đà Nẵng", major: "Các ngành Sư phạm" }
    ],
    "dieu-duong": [
      { name: "Trường Đại học Y Hà Nội", short: "HMU", city: "Hà Nội", major: "Điều dưỡng" },
      { name: "Trường Đại học Điều dưỡng Nam Định", short: "NDUN", city: "Nam Định", major: "Điều dưỡng" },
      { name: "Đại học Y Dược TP.HCM", short: "UMP", city: "TP.HCM", major: "Điều dưỡng" }
    ],
    "tu-van-tam-ly": [
      { name: "Trường ĐH Khoa học Xã hội và Nhân văn – ĐHQG Hà Nội", short: "USSH", city: "Hà Nội", major: "Tâm lý học, Công tác xã hội" },
      { name: "Trường Đại học Sư phạm Hà Nội", short: "HNUE", city: "Hà Nội", major: "Tâm lý học giáo dục" },
      { name: "Trường Đại học Sư phạm TP.HCM", short: "HCMUE", city: "TP.HCM", major: "Tâm lý học" }
    ],
    "chuyen-vien-marketing": [
      { name: "Đại học Kinh tế Quốc dân", short: "NEU", city: "Hà Nội", major: "Marketing" },
      { name: "Trường Đại học Thương mại", short: "TMU", city: "Hà Nội", major: "Marketing" },
      { name: "Đại học Kinh tế TP.HCM", short: "UEH", city: "TP.HCM", major: "Marketing" }
    ],
    "to-chuc-su-kien": [
      { name: "Trường Đại học Văn hóa Hà Nội", short: "HUC", city: "Hà Nội", major: "Quản lý văn hóa, Du lịch" },
      { name: "Trường Đại học Thương mại", short: "TMU", city: "Hà Nội", major: "Quản trị dịch vụ du lịch và lữ hành" },
      { name: "Trường Đại học Văn hóa TP.HCM", short: "HCMUC", city: "TP.HCM", major: "Quản lý văn hóa" }
    ],
    "nha-quan-ly-kinh-doanh": [
      { name: "Trường Đại học Ngoại thương", short: "FTU", city: "Hà Nội, TP.HCM", major: "Quản trị kinh doanh, Kinh doanh quốc tế" },
      { name: "Đại học Kinh tế Quốc dân", short: "NEU", city: "Hà Nội", major: "Quản trị kinh doanh" },
      { name: "Đại học Kinh tế TP.HCM", short: "UEH", city: "TP.HCM", major: "Quản trị kinh doanh" }
    ],
    "ke-toan": [
      { name: "Học viện Tài chính", short: "AOF", city: "Hà Nội", major: "Kế toán, Kiểm toán" },
      { name: "Đại học Kinh tế Quốc dân", short: "NEU", city: "Hà Nội", major: "Kế toán" },
      { name: "Đại học Kinh tế TP.HCM", short: "UEH", city: "TP.HCM", major: "Kế toán" }
    ],
    "hanh-chinh-van-phong": [
      { name: "Học viện Hành chính và Quản trị công", short: "NAPA", city: "Hà Nội", major: "Quản trị văn phòng" },
      { name: "Trường ĐH Khoa học Xã hội và Nhân văn – ĐHQG Hà Nội", short: "USSH", city: "Hà Nội", major: "Lưu trữ học, Quản trị văn phòng" },
      { name: "Trường ĐH Khoa học Xã hội và Nhân văn – ĐHQG TP.HCM", short: "USSH", city: "TP.HCM", major: "Lưu trữ học" }
    ],
    "chuyen-vien-logistics": [
      { name: "Trường Đại học Giao thông Vận tải", short: "UTC", city: "Hà Nội", major: "Logistics và quản lý chuỗi cung ứng" },
      { name: "Trường Đại học Ngoại thương", short: "FTU", city: "Hà Nội, TP.HCM", major: "Logistics và quản lý chuỗi cung ứng" },
      { name: "Trường Đại học Hàng hải Việt Nam", short: "VMU", city: "Hải Phòng", major: "Logistics" }
    ]
  },

  /* Danh mục nghề. Nhóm thay hoặc bổ sung bằng nghề đã nghiên cứu và kiểm chứng.
     photo: tên tệp ảnh trên Wikimedia Commons (ảnh giấy phép tự do), ví dụ "Electrician_Working.jpg". */
  careers: [
    {
      id: "ky-thuat-vien-dien", photo: "Electrician_Working.jpg", g: "R", also: ["I"],
      name: "Kỹ thuật viên điện", field: "Điện – điện tử",
      short: "Lắp đặt, kiểm tra và bảo trì hệ thống, thiết bị điện.",
      work: "Lắp đặt đường dây, thiết bị điện; đo kiểm, phát hiện và sửa chữa sự cố; bảo trì định kỳ để hệ thống vận hành an toàn.",
      skills: "Hiểu biết về mạch điện, đọc bản vẽ kỹ thuật, khéo léo, cẩn thận, tuân thủ an toàn lao động.",
      subjects: "Vật lý, Công nghệ, Toán",
      study: "Tìm hiểu ngành Điện công nghiệp, Điện dân dụng tại các trường trung cấp, cao đẳng nghề hoặc ngành Kỹ thuật điện tại đại học."
    },
    {
      id: "ky-thuat-vien-o-to", photo: "Mechanic_repairing_car_engine.jpg", g: "R", also: ["I"],
      name: "Kỹ thuật viên ô tô", field: "Cơ khí – động lực",
      short: "Kiểm tra, bảo dưỡng và sửa chữa xe ô tô.",
      work: "Chẩn đoán lỗi động cơ, hệ thống điện và khung gầm; bảo dưỡng định kỳ; thay thế phụ tùng; sử dụng thiết bị chẩn đoán hiện đại.",
      skills: "Kỹ năng thực hành cơ khí, tư duy tìm lỗi, sử dụng máy móc, kiên nhẫn và tỉ mỉ.",
      subjects: "Vật lý, Công nghệ, Tin học",
      study: "Tìm hiểu ngành Công nghệ ô tô tại trường trung cấp, cao đẳng hoặc đại học kỹ thuật."
    },
    {
      id: "ky-su-xay-dung", photo: "Ingenieria_civil_01.jpg", g: "R", also: ["I", "C"],
      name: "Kỹ sư xây dựng", field: "Xây dựng",
      short: "Thiết kế, giám sát thi công nhà và công trình.",
      work: "Tính toán kết cấu, lập bản vẽ, dự toán vật liệu; giám sát công trường, đảm bảo chất lượng và an toàn thi công.",
      skills: "Toán và tư duy không gian, đọc và vẽ bản vẽ kỹ thuật, quản lý công việc, làm việc nhóm.",
      subjects: "Toán, Vật lý, Công nghệ",
      study: "Tìm hiểu ngành Kỹ thuật xây dựng tại các trường đại học hoặc cao đẳng xây dựng."
    },
    {
      id: "ky-su-phan-mem", photo: "Programmer_at_work_(Unsplash).jpg", g: "I", also: ["R", "A"],
      name: "Kỹ sư phần mềm", field: "Công nghệ thông tin",
      short: "Xây dựng và kiểm thử ứng dụng, phần mềm.",
      work: "Thiết kế, xây dựng và kiểm thử phần mềm; tìm và sửa lỗi; phối hợp với nhóm để phát triển sản phẩm theo nhu cầu người dùng.",
      skills: "Tư duy logic, giải quyết vấn đề, lập trình, tiếng Anh chuyên ngành, làm việc nhóm.",
      subjects: "Toán, Tin học, Tiếng Anh",
      study: "Tìm hiểu ngành Kỹ thuật phần mềm, Công nghệ thông tin tại trường cao đẳng hoặc đại học."
    },
    {
      id: "ky-thuat-vien-phong-thi-nghiem", photo: "Close-up_of_a_lab_technitian_applying_a_sample_to_a_microscope_glass_slide_with_a_pipette.jpg", g: "I", also: ["R", "C"],
      name: "Kỹ thuật viên phòng thí nghiệm", field: "Khoa học ứng dụng",
      short: "Hỗ trợ thí nghiệm, phân tích mẫu và ghi dữ liệu.",
      work: "Chuẩn bị dụng cụ, hóa chất; thực hiện xét nghiệm, phân tích mẫu theo quy trình; ghi chép và báo cáo kết quả chính xác.",
      skills: "Cẩn thận, chính xác, quan sát tốt, hiểu biết về hóa học – sinh học, tuân thủ quy trình an toàn.",
      subjects: "Hóa học, Sinh học, Toán",
      study: "Tìm hiểu ngành Kỹ thuật xét nghiệm, Công nghệ sinh học, Công nghệ kỹ thuật hóa học tại cao đẳng hoặc đại học."
    },
    {
      id: "chuyen-vien-phan-tich-du-lieu", photo: "Statistics_on_a_laptop_(Unsplash).jpg", g: "I", also: ["C"],
      name: "Chuyên viên phân tích dữ liệu", field: "Khoa học dữ liệu",
      short: "Thu thập và phân tích số liệu để hỗ trợ ra quyết định.",
      work: "Thu thập, làm sạch và phân tích dữ liệu; tạo biểu đồ, báo cáo; tìm ra xu hướng giúp tổ chức đưa ra quyết định tốt hơn.",
      skills: "Toán thống kê, bảng tính, lập trình cơ bản, tư duy phản biện, trình bày rõ ràng.",
      subjects: "Toán, Tin học, Tiếng Anh",
      study: "Tìm hiểu ngành Khoa học dữ liệu, Hệ thống thông tin, Thống kê tại các trường đại học."
    },
    {
      id: "thiet-ke-do-hoa", photo: "Pantural_graphic_designer.jpg", g: "A", also: ["E"],
      name: "Nhà thiết kế đồ họa", field: "Thiết kế – mỹ thuật",
      short: "Tạo hình ảnh và nội dung số cho sản phẩm, thương hiệu.",
      work: "Thiết kế logo, poster, giao diện, ấn phẩm truyền thông; làm việc với khách hàng để hiểu ý tưởng và chỉnh sửa sản phẩm.",
      skills: "Sáng tạo, cảm nhận màu sắc và bố cục, sử dụng công cụ thiết kế, giao tiếp và nhận góp ý.",
      subjects: "Mỹ thuật, Tin học, Ngữ văn",
      study: "Tìm hiểu ngành Thiết kế đồ họa, Thiết kế đa phương tiện tại trường cao đẳng hoặc đại học mỹ thuật, công nghệ."
    },
    {
      id: "kien-truc-su", photo: "Architecture_Studio,_Northeastern_University.jpg", g: "A", also: ["R", "I"],
      name: "Kiến trúc sư", field: "Kiến trúc",
      short: "Thiết kế không gian sống, nhà ở và công trình.",
      work: "Lên ý tưởng, vẽ phác thảo và bản vẽ kiến trúc; dựng mô hình 3D; phối hợp với kỹ sư để hiện thực hóa công trình.",
      skills: "Vẽ tay, tư duy không gian, thẩm mỹ, phần mềm thiết kế, hiểu biết về vật liệu và kỹ thuật.",
      subjects: "Toán, Mỹ thuật, Vật lý",
      study: "Tìm hiểu ngành Kiến trúc tại các trường đại học kiến trúc hoặc xây dựng (thường có thi năng khiếu vẽ)."
    },
    {
      id: "sang-tao-noi-dung-so", photo: "Youtuber.jpg", g: "A", also: ["E", "S"],
      name: "Nhà sáng tạo nội dung số", field: "Truyền thông đa phương tiện",
      short: "Viết, quay và dựng nội dung cho các nền tảng số.",
      work: "Lên ý tưởng, viết kịch bản, quay và dựng video, viết bài; theo dõi phản hồi của người xem để cải thiện nội dung.",
      skills: "Kể chuyện, viết tốt, quay dựng cơ bản, bắt xu hướng, hiểu biết về an toàn và văn hóa mạng.",
      subjects: "Ngữ văn, Tin học, Mỹ thuật",
      study: "Tìm hiểu ngành Truyền thông đa phương tiện, Báo chí, Quan hệ công chúng tại cao đẳng hoặc đại học."
    },
    {
      id: "giao-vien", photo: "Students_are_learning_in_the_classroom.jpg", g: "S", also: ["A", "E"],
      name: "Giáo viên", field: "Giáo dục",
      short: "Hỗ trợ học sinh học tập và phát triển.",
      work: "Soạn bài, giảng dạy, tổ chức hoạt động học tập; đánh giá sự tiến bộ và đồng hành cùng học sinh, phụ huynh.",
      skills: "Giao tiếp, thuyết trình, kiên nhẫn, thấu hiểu học sinh, kiến thức vững về môn dạy.",
      subjects: "Môn học muốn giảng dạy, Ngữ văn",
      study: "Tìm hiểu các ngành Sư phạm tại trường đại học hoặc cao đẳng sư phạm."
    },
    {
      id: "dieu-duong", photo: "Nurse_attending_to_a_patient.jpg", g: "S", also: ["I", "C"],
      name: "Điều dưỡng", field: "Y tế – chăm sóc sức khỏe",
      short: "Chăm sóc, theo dõi và hỗ trợ người bệnh.",
      work: "Theo dõi sức khỏe người bệnh, thực hiện chăm sóc theo chỉ định; hỗ trợ bác sĩ; hướng dẫn người bệnh và gia đình.",
      skills: "Tận tâm, cẩn thận, chịu áp lực, giao tiếp tốt, kiến thức về sinh học và y khoa.",
      subjects: "Sinh học, Hóa học",
      study: "Tìm hiểu ngành Điều dưỡng tại trường cao đẳng hoặc đại học y – dược."
    },
    {
      id: "tu-van-tam-ly", photo: "Counselling_session.jpg", g: "S", also: ["I"],
      name: "Chuyên viên tư vấn tâm lý", field: "Tâm lý học",
      short: "Lắng nghe, hỗ trợ mọi người vượt qua khó khăn.",
      work: "Trò chuyện, lắng nghe và hỗ trợ người cần giúp đỡ; tổ chức hoạt động kỹ năng sống; phối hợp với gia đình, nhà trường.",
      skills: "Lắng nghe, thấu cảm, giữ bí mật, giao tiếp, hiểu biết về tâm lý con người.",
      subjects: "Ngữ văn, Giáo dục công dân, Sinh học",
      study: "Tìm hiểu ngành Tâm lý học, Tâm lý học giáo dục, Công tác xã hội tại các trường đại học."
    },
    {
      id: "chuyen-vien-marketing", photo: "Brainstorming.jpg", g: "E", also: ["A", "S"],
      name: "Chuyên viên marketing", field: "Marketing – truyền thông",
      short: "Tìm hiểu nhu cầu khách hàng và truyền thông sản phẩm.",
      work: "Nghiên cứu thị trường, lên kế hoạch quảng bá; tổ chức chiến dịch trên mạng xã hội, sự kiện; đo lường hiệu quả.",
      skills: "Sáng tạo, giao tiếp, thuyết phục, phân tích số liệu cơ bản, làm việc nhóm.",
      subjects: "Ngữ văn, Toán, Tiếng Anh",
      study: "Tìm hiểu ngành Marketing, Quản trị kinh doanh tại cao đẳng hoặc đại học kinh tế."
    },
    {
      id: "to-chuc-su-kien", photo: "Focusing_stage_lights.jpg", g: "E", also: ["S", "C"],
      name: "Chuyên viên tổ chức sự kiện", field: "Quản trị dịch vụ",
      short: "Lên kế hoạch và điều phối các sự kiện.",
      work: "Lên ý tưởng chương trình, lập kế hoạch và ngân sách; làm việc với đối tác; điều phối đội ngũ trong ngày diễn ra sự kiện.",
      skills: "Tổ chức, lãnh đạo, giao tiếp, xử lý tình huống nhanh, quản lý thời gian.",
      subjects: "Ngữ văn, Tiếng Anh, Toán",
      study: "Tìm hiểu ngành Quản trị sự kiện, Quản trị dịch vụ du lịch và lữ hành tại cao đẳng hoặc đại học."
    },
    {
      id: "nha-quan-ly-kinh-doanh", photo: "Business_man_and_woman_handshake_in_work_office.jpg", g: "E", also: ["C"],
      name: "Chuyên viên kinh doanh", field: "Quản trị kinh doanh",
      short: "Tìm kiếm khách hàng và phát triển doanh số.",
      work: "Tìm hiểu nhu cầu khách hàng, giới thiệu sản phẩm, đàm phán; chăm sóc khách hàng và báo cáo kết quả kinh doanh.",
      skills: "Giao tiếp, thuyết phục, đàm phán, tự tin, đặt mục tiêu và theo đuổi đến cùng.",
      subjects: "Toán, Ngữ văn, Tiếng Anh",
      study: "Tìm hiểu ngành Quản trị kinh doanh, Kinh doanh thương mại tại cao đẳng hoặc đại học."
    },
    {
      id: "ke-toan", photo: "Calculator_Office.jpg", g: "C", also: ["I"],
      name: "Kế toán", field: "Kế toán – kiểm toán",
      short: "Ghi chép, theo dõi thu chi và lập báo cáo tài chính.",
      work: "Ghi chép chứng từ, theo dõi thu chi; lập báo cáo tài chính, báo cáo thuế; kiểm tra số liệu chính xác theo quy định.",
      skills: "Cẩn thận, trung thực, giỏi tính toán, sử dụng bảng tính và phần mềm kế toán.",
      subjects: "Toán, Tin học",
      study: "Tìm hiểu ngành Kế toán, Kiểm toán tại trường trung cấp, cao đẳng hoặc đại học kinh tế."
    },
    {
      id: "hanh-chinh-van-phong", photo: "Secretary_at_work.jpg", g: "C", also: ["S"],
      name: "Nhân viên hành chính – văn phòng", field: "Hành chính – văn phòng",
      short: "Quản lý hồ sơ, giấy tờ và hỗ trợ vận hành tổ chức.",
      work: "Soạn thảo, lưu trữ văn bản; sắp xếp lịch làm việc; quản lý hồ sơ, tài sản văn phòng; hỗ trợ các phòng ban.",
      skills: "Ngăn nắp, tin học văn phòng, soạn thảo văn bản, giao tiếp lịch sự, quản lý thời gian.",
      subjects: "Ngữ văn, Tin học",
      study: "Tìm hiểu ngành Quản trị văn phòng, Văn thư – lưu trữ tại trung cấp, cao đẳng hoặc đại học."
    },
    {
      id: "chuyen-vien-logistics", photo: "Container_loading_with_forklift_at_warehouse_in_Thailand.jpg", g: "C", also: ["E"],
      name: "Chuyên viên logistics", field: "Logistics – chuỗi cung ứng",
      short: "Điều phối vận chuyển, kho bãi và hàng hóa.",
      work: "Lên kế hoạch vận chuyển, theo dõi đơn hàng, quản lý kho; xử lý chứng từ xuất nhập khẩu; phối hợp với đối tác.",
      skills: "Tổ chức, xử lý số liệu, tiếng Anh, giải quyết vấn đề, làm việc theo quy trình.",
      subjects: "Toán, Tiếng Anh, Địa lý",
      study: "Tìm hiểu ngành Logistics và quản lý chuỗi cung ứng tại cao đẳng hoặc đại học."
    }
  ]
};
