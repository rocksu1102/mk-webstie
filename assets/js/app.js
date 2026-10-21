(function () {
  "use strict";

  var D = window.CN_DATA;
  var G = D.groups;
  var KEY_ANSWERS = "cn.answers";
  var KEY_INTERESTS = "cn.interests";
  var KEY_PLAN = "cn.plan";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Lưu trữ an toàn: trình duyệt có thể chặn localStorage */
  var store = {
    get: function (k, fallback) {
      try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* bỏ qua */ } }
  };

  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  var ICONS = {
    R: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
    I: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.3-4.3"/><path d="M9 11h4M11 9v4"/>',
    A: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.5-1.5 0-1.2-1-1.5-1-2.5s.8-1.5 2-1.5H17a4 4 0 0 0 4-4c0-4.7-4-8.5-9-8.5z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="14.5" cy="7" r="1"/>',
    S: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    E: '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
    C: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'
  };
  function icon(code) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[code] + "</svg>";
  }

  /* ---------- Hình ảnh: minh họa SVG hoặc ảnh do học sinh tải lên ---------- */
  var V = window.CN_VISUALS;
  var IMG_PREFIX = "cn.img.";

  function careerById(id) { return D.careers.filter(function (x) { return x.id === id; })[0]; }
  function careerByName(name) {
    var n = norm(name || "").trim();
    if (!n) return null;
    return D.careers.filter(function (c) { return norm(c.name) === n; })[0] || null;
  }

  function customImage(key) {
    try { return localStorage.getItem(IMG_PREFIX + key); } catch (e) { return null; }
  }

  /* Khung ảnh: hiện ảnh tự tải nếu có, nếu không thì hiện hình minh họa */
  function imageSlot(key, fallbackSvg, alt, editable) {
    var src = customImage(key);
    var inner = src ? '<img src="' + src + '" alt="' + esc(alt) + '">' : fallbackSvg;
    var tools = "";
    if (editable) {
      tools = '<div class="slot-tools">' +
        '<label class="slot-btn">Đổi ảnh<input type="file" accept="image/*" data-img-key="' + esc(key) + '"></label>' +
        (src ? '<button type="button" class="slot-btn" data-img-reset="' + esc(key) + '">Dùng hình minh họa</button>' : "") +
        "</div>";
    }
    return '<figure class="img-slot' + (src ? " has-photo" : "") + '">' + inner + tools + "</figure>";
  }

  /* Thu nhỏ ảnh trước khi lưu để không vượt dung lượng trình duyệt */
  function readImage(file, cb) {
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        var max = 900, w = img.width, h = img.height, k = Math.min(1, max / Math.max(w, h));
        var cv = document.createElement("canvas");
        cv.width = Math.round(w * k); cv.height = Math.round(h * k);
        cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
        cb(cv.toDataURL("image/jpeg", 0.82));
      };
      img.onerror = function () { cb(null); };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function bindImageSlots(root, rerender) {
    $$("input[data-img-key]", root).forEach(function (inp) {
      inp.addEventListener("change", function () {
        var f = inp.files && inp.files[0];
        if (!f) return;
        readImage(f, function (data) {
          if (!data) { toast("Không đọc được ảnh này, bạn thử ảnh khác nhé."); return; }
          try {
            localStorage.setItem(IMG_PREFIX + inp.getAttribute("data-img-key"), data);
            toast("Đã cập nhật ảnh.");
          } catch (e) {
            toast("Trình duyệt hết chỗ lưu ảnh. Hãy xóa bớt ảnh hoặc dùng ảnh nhỏ hơn.");
          }
          rerender();
        });
      });
    });
    $$("[data-img-reset]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        try { localStorage.removeItem(IMG_PREFIX + b.getAttribute("data-img-reset")); } catch (e) { /* bỏ qua */ }
        rerender();
      });
    });
  }

  /* ---------- Điều hướng ---------- */
  function initNav() {
    var toggle = $(".nav-toggle");
    var nav = $("#site-nav");
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    $$("#site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    var links = $$(".site-nav a:not(.nav-cta)");
    var sections = ["home", "survey", "results", "careers", "plan"].map(function (id) { return document.getElementById(id); });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { io.observe(s); });
    }

    window.addEventListener("scroll", function () {
      $(".site-header").classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  /* ---------- 6 nhóm sở thích ---------- */
  function renderGroups() {
    $("#group-grid").innerHTML = D.order.map(function (c) {
      var g = G[c];
      return '<article class="group-card" style="--c:' + g.color + ";--soft:" + g.soft + '">' +
        '<div class="group-top"><span class="group-code">' + c + "</span>" + icon(c) + "</div>" +
        "<h3>" + esc(g.full) + "</h3>" +
        "<p>" + esc(g.examples) + "</p>" +
        '<button type="button" class="link-btn" data-filter="' + c + '">Xem nghề nhóm ' + c + " →</button>" +
        "</article>";
    }).join("");
    $$("#group-grid [data-filter]").forEach(function (b) {
      b.addEventListener("click", function () {
        setFilter(b.getAttribute("data-filter"));
        document.getElementById("careers").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ---------- Khảo sát ---------- */
  var answers = store.get(KEY_ANSWERS, {});

  function renderSurvey() {
    var list = $("#question-list");
    list.innerHTML = D.questions.map(function (q, i) {
      var g = G[q.g];
      var name = "q" + i;
      var opts = D.scale.map(function (s) {
        var checked = answers[i] === s.v ? " checked" : "";
        return '<label class="rate" title="' + s.label + '">' +
          '<input type="radio" name="' + name + '" value="' + s.v + '"' + checked + ">" +
          '<span aria-hidden="true">' + s.v + '</span><span class="sr-only">' + s.label + "</span></label>";
      }).join("");
      return '<fieldset class="q" id="q-' + i + '" style="--c:' + g.color + ";--soft:" + g.soft + '">' +
        '<legend><span class="q-num">' + (i + 1) + "</span>" + esc(q.text) + "</legend>" +
        '<div class="rates">' + opts + "</div></fieldset>";
    }).join("");
    $("#progress-total").textContent = D.questions.length;

    list.addEventListener("change", function (e) {
      if (e.target.type !== "radio") return;
      var i = +e.target.name.slice(1);
      answers[i] = +e.target.value;
      store.set(KEY_ANSWERS, answers);
      $("#q-" + i).classList.remove("missing");
      updateProgress();
    });

    var interests = store.get(KEY_INTERESTS, []);
    var chipItems = D.order.map(function (c) { return { v: c, label: G[c].full }; })
      .concat([{ v: "?", label: "Chưa xác định" }]);
    $("#interest-chips").innerHTML = chipItems.map(function (it) {
      var on = interests.indexOf(it.v) > -1 ? " checked" : "";
      return '<label class="chip"><input type="checkbox" value="' + it.v + '"' + on + "><span>" + esc(it.label) + "</span></label>";
    }).join("");
    $("#interest-chips").addEventListener("change", function () {
      store.set(KEY_INTERESTS, $$("#interest-chips input:checked").map(function (x) { return x.value; }));
    });

    $("#survey-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var missing = D.questions.map(function (_, i) { return i; }).filter(function (i) { return !answers[i]; });
      $$(".q.missing").forEach(function (f) { f.classList.remove("missing"); });
      if (missing.length) {
        missing.forEach(function (i) { $("#q-" + i).classList.add("missing"); });
        $("#survey-msg").textContent = "Bạn còn " + missing.length + " câu chưa trả lời. Các câu được đánh dấu màu cam.";
        $("#q-" + missing[0]).scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      $("#survey-msg").textContent = "";
      renderResults();
      document.getElementById("results").scrollIntoView({ behavior: "smooth" });
    });

    $("#survey-reset").addEventListener("click", function () {
      answers = {};
      store.del(KEY_ANSWERS);
      store.del(KEY_INTERESTS);
      $$("#survey-form input").forEach(function (x) { x.checked = false; });
      $$(".q.missing").forEach(function (f) { f.classList.remove("missing"); });
      $("#survey-msg").textContent = "";
      updateProgress();
      renderResults();
      toast("Đã xóa câu trả lời. Bạn có thể làm lại từ đầu.");
    });

    updateProgress();
  }

  function answeredCount() {
    return D.questions.filter(function (_, i) { return answers[i]; }).length;
  }

  function updateProgress() {
    var n = answeredCount();
    var total = D.questions.length;
    $("#progress-count").textContent = n;
    $("#progress-bar").style.width = (n / total * 100) + "%";
    $(".progress").setAttribute("aria-valuenow", n);
  }

  /* ---------- Tính điểm & kết quả ---------- */
  function computeScores() {
    var sum = {}, cnt = {};
    D.order.forEach(function (c) { sum[c] = 0; cnt[c] = 0; });
    D.questions.forEach(function (q, i) {
      if (answers[i]) { sum[q.g] += answers[i]; cnt[q.g]++; }
    });
    return D.order.map(function (c) {
      return { code: c, score: cnt[c] ? sum[c] / cnt[c] : 0 };
    });
  }

  function ranked() {
    return computeScores().sort(function (a, b) {
      return b.score - a.score || D.order.indexOf(a.code) - D.order.indexOf(b.code);
    });
  }

  function isComplete() { return answeredCount() === D.questions.length; }

  var topCodes = [];

  function renderResults() {
    var done = isComplete();
    $("#results-empty").hidden = done;
    $("#results-content").hidden = !done;
    if (!done) { topCodes = []; updateMatchHint(); if (filter === "match") renderCareers(); return; }

    var scores = computeScores();
    var r = ranked();
    var max = r[0].score;
    /* Nhóm nổi bật: cao nhất và các nhóm sát nút (chênh không quá 0,34 điểm) */
    topCodes = r.filter(function (x) { return x.score >= max - 0.34; }).slice(0, 3).map(function (x) { return x.code; });

    $("#holland-code").textContent = "Mã của bạn: " + r.slice(0, 3).map(function (x) { return x.code; }).join("");

    $("#result-bars").innerHTML = scores.map(function (s) {
      var g = G[s.code];
      var top = topCodes.indexOf(s.code) > -1;
      return '<li class="' + (top ? "is-top" : "") + '" style="--c:' + g.color + '">' +
        '<span class="bar-label"><b>' + s.code + "</b> " + esc(g.name) + "</span>" +
        '<span class="bar-track"><span class="bar-fill" style="width:' + (s.score / 5 * 100) + '%"></span></span>' +
        '<span class="bar-val">' + s.score.toFixed(1).replace(".", ",") + "</span></li>";
    }).join("");

    $("#top-card").innerHTML =
      "<h3>Lĩnh vực có thể khám phá</h3>" +
      '<div class="top-groups">' + topCodes.map(function (c) {
        var g = G[c];
        return '<div class="top-group" style="--c:' + g.color + ";--soft:" + g.soft + '">' +
          '<span class="tg-icon">' + icon(c) + "</span>" +
          "<div><b>" + c + " • " + esc(g.full) + "</b>" +
          "<small>" + g.fields.map(esc).join(" • ") + "</small></div></div>";
      }).join("") + "</div>";

    var names = topCodes.map(function (c) { return "<b>" + c + " (" + esc(G[c].name) + ")</b>"; });
    var nameText = names.length > 1 ? names.slice(0, -1).join(", ") + " và " + names[names.length - 1] : names[0];
    $("#why-text").innerHTML = "Điểm nhóm " + nameText + " của bạn cao nhất. " +
      topCodes.map(function (c) { return esc(G[c].why); }).join(" ");

    updateMatchHint();
    if (filter === "match") renderCareers();
  }

  /* ---------- Danh mục nghề ---------- */
  var filter = "all";
  var query = "";

  function norm(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  }

  function renderFilters() {
    var items = [{ v: "all", label: "Tất cả" }, { v: "match", label: "Phù hợp với tôi" }]
      .concat(D.order.map(function (c) { return { v: c, label: c + " • " + G[c].name, color: G[c].color }; }));
    $("#career-filters").innerHTML = items.map(function (it) {
      return '<button type="button" class="filter' + (it.v === filter ? " active" : "") + '" data-v="' + it.v + '"' +
        (it.color ? ' style="--c:' + it.color + '"' : "") + ' aria-pressed="' + (it.v === filter) + '">' + esc(it.label) + "</button>";
    }).join("");
    $$("#career-filters .filter").forEach(function (b) {
      b.addEventListener("click", function () { setFilter(b.getAttribute("data-v")); });
    });
  }

  function setFilter(v) {
    filter = v;
    renderFilters();
    renderCareers();
    updateMatchHint();
  }

  function updateMatchHint() {
    var hint = $("#match-hint");
    if (filter !== "match") { hint.hidden = true; return; }
    hint.hidden = false;
    hint.innerHTML = topCodes.length
      ? "Đang hiển thị các nghề liên quan đến nhóm <b>" + topCodes.join(", ") + "</b> theo kết quả khảo sát của bạn."
      : 'Bạn chưa có kết quả khảo sát. <a href="#survey">Làm khảo sát</a> để xem nghề phù hợp với mình.';
  }

  function careerMatches(c) {
    if (filter === "match") {
      if (!topCodes.length) return false;
      var codes = [c.g].concat(c.also || []);
      if (!codes.some(function (x) { return topCodes.indexOf(x) > -1; })) return false;
    } else if (filter !== "all" && c.g !== filter) {
      return false;
    }
    if (query) {
      var hay = norm(c.name + " " + c.field + " " + c.short + " " + G[c.g].full);
      return hay.indexOf(norm(query)) > -1;
    }
    return true;
  }

  function renderCareers() {
    var list = D.careers.filter(careerMatches);
    if (filter === "match") {
      list.sort(function (a, b) {
        var ra = topCodes.indexOf(a.g), rb = topCodes.indexOf(b.g);
        return (ra < 0 ? 9 : ra) - (rb < 0 ? 9 : rb);
      });
    }
    $("#career-empty").hidden = list.length > 0 || filter === "match";
    $("#career-grid").innerHTML = list.map(function (c) {
      var g = G[c.g];
      return '<article class="career-card" style="--c:' + g.color + ";--soft:" + g.soft + '">' +
        '<div class="cc-top"><span class="tag">' + esc(g.full.split(" – ")[0]) + "</span>" +
        '<span class="cc-codes">' + [c.g].concat(c.also || []).join("") + "</span></div>" +
        '<div class="cc-icon">' + icon(c.g) + "</div>" +
        "<h3>" + esc(c.name) + "</h3>" +
        "<p>" + esc(c.short) + "</p>" +
        '<button type="button" class="btn btn-sm btn-fill" data-id="' + c.id + '">Xem chi tiết</button>' +
        "</article>";
    }).join("");
    $$("#career-grid [data-id]").forEach(function (b) {
      b.addEventListener("click", function () { openCareer(b.getAttribute("data-id")); });
    });
  }

  function initCareers() {
    renderFilters();
    renderCareers();
    $("#career-search").addEventListener("input", function (e) {
      query = e.target.value.trim();
      renderCareers();
    });
    $("#explore-matched").addEventListener("click", function () { setFilter("match"); });
    $("#career-options").innerHTML = D.careers.map(function (c) { return '<option value="' + esc(c.name) + '">'; }).join("");
  }

  /* ---------- Hồ sơ nghề ---------- */
  var dialog;
  function openCareer(id) {
    var c = D.careers.filter(function (x) { return x.id === id; })[0];
    if (!c) return;
    var g = G[c.g];
    var codes = [c.g].concat(c.also || []);
    $("#cd-content").innerHTML =
      '<div class="cd-head" style="--c:' + g.color + ";--soft:" + g.soft + '">' +
        '<span class="cd-icon">' + icon(c.g) + "</span>" +
        "<div><p class=\"eyebrow\">Hồ sơ nghề nghiệp</p>" +
        '<h2 id="cd-title">' + esc(c.name) + "</h2>" +
        "<p>Lĩnh vực: " + esc(c.field) + "</p>" +
        '<div class="cd-codes">' + codes.map(function (x) {
          return '<span style="--c:' + G[x].color + '">' + x + " • " + esc(G[x].name) + "</span>";
        }).join("") + "</div></div>" +
        '<button type="button" class="cd-close" aria-label="Đóng">×</button>' +
      "</div>" +
      '<div class="cd-hero">' + imageSlot("career:" + c.id, V.careerScene(c, g), c.name, false) + "</div>" +
      '<div class="cd-body">' +
        block("Công việc", c.work, "#3168D2") +
        block("Kiến thức – kỹ năng", c.skills, "#1F8579") +
        block("Môn học liên quan", c.subjects, "#7D5BBE") +
        block("Hướng học tập", c.study, "#D27A12") +
      "</div>" +
      schoolList(c) +
      '<p class="cd-source">Nguồn tham khảo: thông tin mang tính khái quát. Hãy kiểm chứng trên website chính thức của trường đào tạo, trung tâm hướng nghiệp và ghi lại nguồn trong kế hoạch của bạn.</p>' +
      '<div class="cd-actions">' +
        '<button type="button" class="btn btn-ghost" data-act="back">Quay lại danh mục</button>' +
        '<button type="button" class="btn btn-primary" data-act="plan">Lập kế hoạch</button>' +
      "</div>";

    $(".cd-close", dialog).onclick = closeCareer;
    $('[data-act="back"]', dialog).onclick = closeCareer;
    $('[data-act="plan"]', dialog).onclick = function () {
      closeCareer();
      $("#p-career").value = c.name;
      applyCareerToPlan(c, true);
      document.getElementById("plan").scrollIntoView({ behavior: "smooth" });
      toast("Đã điền sẵn nghề " + c.name + " vào kế hoạch.");
    };

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    document.body.classList.add("no-scroll");
  }

  function schoolList(c) {
    var list = (D.schools && D.schools[c.id]) || [];
    if (!list.length) return "";
    return '<section class="cd-schools"><h3>Trường đào tạo tham khảo</h3><ul>' +
      list.map(function (sc) {
        return "<li><b>" + esc(sc.name) + "</b><span>" + esc(sc.major) + " • " + esc(sc.city) + "</span></li>";
      }).join("") + "</ul></section>";
  }

  function block(title, text, color) {
    return '<section class="cd-block" style="--c:' + color + '"><h3>' + title + "</h3><p>" + esc(text) + "</p></section>";
  }

  function closeCareer() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    document.body.classList.remove("no-scroll");
  }

  function initDialog() {
    dialog = $("#career-dialog");
    dialog.addEventListener("click", function (e) { if (e.target === dialog) closeCareer(); });
    dialog.addEventListener("close", function () { document.body.classList.remove("no-scroll"); });
  }

  /* ---------- Kế hoạch ---------- */
  var planCareer = null;

  /* Điền kỹ năng và việc cần làm theo nghề đã chọn. Chỉ ghi đè ô trống
     hoặc ô còn giữ nội dung tự điền của nghề trước, không xóa nội dung học sinh tự viết. */
  function applyCareerToPlan(c, announce) {
    var prev = planCareer;
    [["#p-skills", "skills"], ["#p-actions", "study"]].forEach(function (pair) {
      var el = $(pair[0]);
      var cur = el.value.trim();
      if (!cur || (prev && cur === prev[pair[1]])) el.value = c[pair[1]];
    });
    planCareer = c;
    renderPlanVisual();
    if (announce) toast("Đã điền sẵn nghề " + c.name + " vào kế hoạch.");
  }

  function renderPlanVisual() {
    var box = $("#plan-visual");
    var c = planCareer;
    if (!c) { box.hidden = true; return; }
    var g = G[c.g];
    var schools = (D.schools && D.schools[c.id]) || [];
    box.hidden = false;
    box.style.setProperty("--c", g.color);
    box.style.setProperty("--soft", g.soft);
    $("#pv-career").innerHTML =
      imageSlot("career:" + c.id, V.careerScene(c, g), c.name, true) +
      '<div class="pv-info">' +
        '<p class="eyebrow">Nghề bạn chọn</p>' +
        "<h3>" + esc(c.name) + "</h3>" +
        '<p class="pv-field">' + esc(c.field) + " • Nhóm " + c.g + " (" + esc(g.name) + ")</p>" +
        "<p>" + esc(c.work) + "</p>" +
        '<p class="pv-subjects"><b>Môn học liên quan:</b> ' + esc(c.subjects) + "</p>" +
      "</div>";
    $("#school-grid").innerHTML = schools.map(function (sc, i) {
      return '<article class="school-card">' +
        imageSlot("school:" + sc.name, V.campusScene(sc, i), sc.name, true) +
        '<div class="sc-body"><h4>' + esc(sc.name) + "</h4>" +
        '<p class="sc-major">' + esc(sc.major) + "</p>" +
        '<p class="sc-city">' + esc(sc.city) + "</p></div></article>";
    }).join("");
    bindImageSlots(box, renderPlanVisual);
  }

  function initPlan() {
    var form = $("#plan-form");
    var saved = store.get(KEY_PLAN, null);
    if (saved) {
      Object.keys(saved).forEach(function (k) { if (form.elements[k]) form.elements[k].value = saved[k]; });
    }
    planCareer = careerByName(form.elements.career.value);
    renderPlanVisual();
    form.elements.career.addEventListener("input", function () {
      var c = careerByName(form.elements.career.value);
      if (c && c !== planCareer) applyCareerToPlan(c, false);
      else if (!c && planCareer) { planCareer = null; renderPlanVisual(); }
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {};
      ["career", "skills", "actions", "sources", "time"].forEach(function (k) { data[k] = form.elements[k].value.trim(); });
      if (!data.career) {
        $("#plan-msg").className = "form-msg";
        $("#plan-msg").textContent = "Hãy ghi nghề hoặc lĩnh vực bạn muốn tìm hiểu trước nhé.";
        form.elements.career.focus();
        return;
      }
      store.set(KEY_PLAN, data);
      $("#plan-msg").className = "form-msg ok";
      $("#plan-msg").textContent = "Đã lưu kế hoạch trên trình duyệt này.";
      toast("Đã lưu kế hoạch của bạn.");
    });
    $("#plan-clear").addEventListener("click", function () {
      form.reset();
      planCareer = null;
      renderPlanVisual();
      store.del(KEY_PLAN);
      $("#plan-msg").textContent = "";
      toast("Đã xóa kế hoạch.");
    });
    $("#plan-print").addEventListener("click", function () {
      document.body.setAttribute("data-print", "plan");
      window.print();
    });
    $("#print-result").addEventListener("click", function () {
      document.body.setAttribute("data-print", "results");
      window.print();
    });
    window.addEventListener("afterprint", function () { document.body.removeAttribute("data-print"); });
  }

  /* ---------- Khởi động ---------- */
  initNav();
  renderGroups();
  renderSurvey();
  initDialog();
  initCareers();
  renderResults();
  renderCareers();
  initPlan();
})();
