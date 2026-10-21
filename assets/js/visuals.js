/* Hình minh họa SVG cho từng nghề và cho các trường đào tạo.
   Mỗi nghề có một "motif" vẽ trong khung 200x200. */

(function () {
  "use strict";

  var N = "#1C355E", A = "#F5A442", W = "#FFFFFF";

  /* Mỗi motif nhận màu nhóm (c) và màu nền nhạt (s) */
  var MOTIFS = {
    "ky-su-phan-mem": function (c, s) {
      return '<rect x="22" y="38" width="156" height="104" rx="10" fill="' + N + '"/>' +
        '<rect x="32" y="48" width="136" height="84" rx="4" fill="#0F2240"/>' +
        '<circle cx="42" cy="56" r="3" fill="#FF6B6B"/><circle cx="52" cy="56" r="3" fill="' + A + '"/><circle cx="62" cy="56" r="3" fill="#4CD08A"/>' +
        '<rect x="42" y="68" width="40" height="6" rx="3" fill="' + c + '"/><rect x="88" y="68" width="30" height="6" rx="3" fill="' + A + '"/>' +
        '<rect x="52" y="82" width="56" height="6" rx="3" fill="#8DB3F5"/><rect x="114" y="82" width="22" height="6" rx="3" fill="' + W + '" opacity=".6"/>' +
        '<rect x="52" y="96" width="34" height="6" rx="3" fill="#4CD08A"/><rect x="92" y="96" width="44" height="6" rx="3" fill="#8DB3F5"/>' +
        '<rect x="42" y="110" width="26" height="6" rx="3" fill="' + c + '"/>' +
        '<path d="M8 146h184l-12 14H20z" fill="#B9C6D8"/>' +
        '<g transform="translate(132 4)"><rect width="58" height="40" rx="12" fill="' + A + '"/>' +
        '<text x="29" y="27" text-anchor="middle" font-family="monospace" font-weight="700" font-size="18" fill="' + N + '">&lt;/&gt;</text></g>';
    },
    "ky-thuat-vien-dien": function (c, s) {
      return '<circle cx="100" cy="74" r="44" fill="' + A + '" opacity=".25"/>' +
        '<path d="M100 32a34 34 0 0 0-20 61c5 4 7 9 7 14h26c0-5 2-10 7-14a34 34 0 0 0-20-61z" fill="' + A + '"/>' +
        '<rect x="86" y="110" width="28" height="8" rx="3" fill="' + N + '"/><rect x="88" y="121" width="24" height="8" rx="3" fill="' + N + '"/>' +
        '<path d="M104 48l-14 26h12l-6 22 18-30h-12l8-18z" fill="' + W + '"/>' +
        '<path d="M20 160c30 0 30-26 60-26s34 26 60 26 30-18 44-18" fill="none" stroke="' + c + '" stroke-width="6" stroke-linecap="round"/>' +
        '<rect x="160" y="128" width="26" height="30" rx="6" fill="' + c + '"/><rect x="165" y="118" width="5" height="12" fill="' + N + '"/><rect x="176" y="118" width="5" height="12" fill="' + N + '"/>';
    },
    "ky-thuat-vien-o-to": function (c, s) {
      return '<path d="M24 120l14-34c3-8 10-12 18-12h70c8 0 14 4 18 10l20 30h10c7 0 12 5 12 12v14H16v-12c0-4 3-8 8-8z" fill="' + c + '"/>' +
        '<path d="M54 82h34v26H44zM96 82h30l16 26H96z" fill="#CFE0FA"/>' +
        '<circle cx="56" cy="140" r="20" fill="' + N + '"/><circle cx="56" cy="140" r="8" fill="#B9C6D8"/>' +
        '<circle cx="146" cy="140" r="20" fill="' + N + '"/><circle cx="146" cy="140" r="8" fill="#B9C6D8"/>' +
        '<rect x="168" y="116" width="14" height="8" rx="3" fill="' + A + '"/>' +
        '<g transform="translate(140 10) rotate(35)"><rect x="-6" y="0" width="12" height="54" rx="6" fill="' + N + '"/>' +
        '<path d="M-16 -4a16 16 0 1 0 32 0l-8 0v10h-16v-10z" fill="' + N + '"/></g>';
    },
    "ky-su-xay-dung": function (c, s) {
      return '<rect x="34" y="20" width="8" height="140" fill="' + A + '"/><rect x="34" y="20" width="120" height="8" fill="' + A + '"/>' +
        '<path d="M42 28l20 0-20 20z" fill="' + A + '"/><line x1="130" y1="28" x2="130" y2="62" stroke="' + N + '" stroke-width="2"/>' +
        '<rect x="120" y="62" width="20" height="14" rx="2" fill="' + N + '"/>' +
        '<rect x="82" y="84" width="96" height="76" fill="' + c + '"/>' +
        '<g fill="#CFE0FA"><rect x="92" y="96" width="16" height="14"/><rect x="122" y="96" width="16" height="14"/><rect x="152" y="96" width="16" height="14"/>' +
        '<rect x="92" y="122" width="16" height="14"/><rect x="122" y="122" width="16" height="14"/><rect x="152" y="122" width="16" height="14"/></g>' +
        '<rect x="122" y="144" width="18" height="16" fill="' + N + '"/>' +
        '<path d="M8 160h184" stroke="' + N + '" stroke-width="4"/>' +
        '<path d="M48 128a20 20 0 0 1 40 0z" fill="' + A + '"/><rect x="44" y="126" width="48" height="6" rx="3" fill="' + A + '"/>';
    },
    "ky-thuat-vien-phong-thi-nghiem": function (c, s) {
      return '<path d="M70 26h36M78 26v44l-36 66c-4 8 2 18 11 18h70c9 0 15-10 11-18l-36-66V26" fill="' + W + '" stroke="' + N + '" stroke-width="5" stroke-linejoin="round"/>' +
        '<path d="M56 112h64l14 26c3 6-1 12-8 12H50c-7 0-11-6-8-12z" fill="' + c + '"/>' +
        '<circle cx="76" cy="128" r="5" fill="' + W + '" opacity=".8"/><circle cx="96" cy="138" r="4" fill="' + W + '" opacity=".8"/><circle cx="104" cy="120" r="3" fill="' + W + '" opacity=".8"/>' +
        '<g transform="translate(140 50)"><rect x="0" y="0" width="14" height="80" rx="7" fill="' + W + '" stroke="' + N + '" stroke-width="4"/><rect x="2" y="42" width="10" height="36" rx="5" fill="' + A + '"/>' +
        '<rect x="22" y="14" width="14" height="66" rx="7" fill="' + W + '" stroke="' + N + '" stroke-width="4"/><rect x="24" y="48" width="10" height="30" rx="5" fill="#7D5BBE"/></g>' +
        '<circle cx="54" cy="44" r="7" fill="' + c + '" opacity=".5"/><circle cx="40" cy="64" r="5" fill="' + A + '" opacity=".7"/>';
    },
    "chuyen-vien-phan-tich-du-lieu": function (c, s) {
      return '<rect x="20" y="24" width="160" height="128" rx="12" fill="' + W + '" stroke="#DCE4EE" stroke-width="3"/>' +
        '<rect x="40" y="104" width="20" height="34" rx="4" fill="' + c + '" opacity=".5"/><rect x="68" y="84" width="20" height="54" rx="4" fill="' + c + '" opacity=".7"/>' +
        '<rect x="96" y="64" width="20" height="74" rx="4" fill="' + c + '"/><rect x="124" y="46" width="20" height="92" rx="4" fill="' + N + '"/>' +
        '<path d="M44 96l30-22 28 10 40-42" fill="none" stroke="' + A + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="142" cy="42" r="6" fill="' + A + '"/>' +
        '<circle cx="158" cy="142" r="24" fill="' + W + '" stroke="' + N + '" stroke-width="6"/><path d="M175 159l18 18" stroke="' + N + '" stroke-width="9" stroke-linecap="round"/>';
    },
    "thiet-ke-do-hoa": function (c, s) {
      return '<rect x="18" y="22" width="134" height="110" rx="10" fill="' + W + '" stroke="#DCE4EE" stroke-width="3"/>' +
        '<circle cx="62" cy="68" r="26" fill="' + c + '"/><rect x="74" y="72" width="54" height="40" rx="6" fill="' + A + '" opacity=".9"/>' +
        '<path d="M40 112l22-28 18 22" fill="none" stroke="' + N + '" stroke-width="4" stroke-linejoin="round"/>' +
        '<g fill="none" stroke="' + N + '" stroke-width="2" stroke-dasharray="4 4"><rect x="74" y="72" width="54" height="40"/></g>' +
        '<g fill="' + W + '" stroke="' + N + '" stroke-width="2"><rect x="70" y="68" width="8" height="8"/><rect x="124" y="68" width="8" height="8"/><rect x="70" y="108" width="8" height="8"/><rect x="124" y="108" width="8" height="8"/></g>' +
        '<g transform="translate(150 96) rotate(30)"><path d="M0 0l12 40h-24z" fill="' + N + '"/><rect x="-12" y="40" width="24" height="44" rx="4" fill="' + c + '"/><circle cx="0" cy="22" r="4" fill="' + W + '"/></g>' +
        '<g><circle cx="34" cy="160" r="10" fill="' + c + '"/><circle cx="60" cy="160" r="10" fill="' + A + '"/><circle cx="86" cy="160" r="10" fill="#2B915B"/><circle cx="112" cy="160" r="10" fill="' + N + '"/></g>';
    },
    "kien-truc-su": function (c, s) {
      return '<rect x="14" y="30" width="172" height="130" rx="8" fill="#2F5FC0"/>' +
        '<g stroke="' + W + '" stroke-opacity=".18" stroke-width="1">' +
        '<path d="M14 56h172M14 82h172M14 108h172M14 134h172M40 30v130M66 30v130M92 30v130M118 30v130M144 30v130M170 30v130"/></g>' +
        '<path d="M50 140V96l50-36 50 36v44z" fill="none" stroke="' + W + '" stroke-width="4" stroke-linejoin="round"/>' +
        '<rect x="88" y="108" width="24" height="32" fill="none" stroke="' + W + '" stroke-width="3"/>' +
        '<rect x="60" y="104" width="18" height="16" fill="none" stroke="' + W + '" stroke-width="3"/><rect x="122" y="104" width="18" height="16" fill="none" stroke="' + W + '" stroke-width="3"/>' +
        '<g transform="translate(150 6) rotate(20)"><rect x="-4" y="0" width="8" height="70" fill="' + A + '"/><path d="M-4 70h8l-4 14z" fill="' + N + '"/></g>' +
        '<path d="M18 176l48-30 6 10-48 30z" fill="' + A + '"/>';
    },
    "sang-tao-noi-dung-so": function (c, s) {
      return '<rect x="56" y="14" width="88" height="156" rx="16" fill="' + N + '"/>' +
        '<rect x="64" y="30" width="72" height="120" rx="6" fill="' + c + '"/>' +
        '<circle cx="100" cy="86" r="22" fill="' + W + '"/><path d="M94 74l18 12-18 12z" fill="' + c + '"/>' +
        '<rect x="74" y="122" width="52" height="5" rx="2.5" fill="' + W + '" opacity=".7"/><rect x="74" y="132" width="34" height="5" rx="2.5" fill="' + W + '" opacity=".5"/>' +
        '<g transform="translate(150 40)"><path d="M18 2c-10-8-24 4-18 14l18 18 18-18c6-10-8-22-18-14z" fill="#FF6B8A"/></g>' +
        '<g transform="translate(20 104)"><rect x="0" y="0" width="16" height="30" rx="8" fill="' + A + '"/><path d="M-6 22a14 14 0 0 0 28 0" fill="none" stroke="' + N + '" stroke-width="3"/><rect x="6" y="36" width="4" height="12" fill="' + N + '"/></g>' +
        '<g transform="translate(150 110)"><rect width="38" height="24" rx="12" fill="' + A + '"/><text x="19" y="17" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="' + N + '">LIVE</text></g>';
    },
    "giao-vien": function (c, s) {
      return '<rect x="18" y="20" width="164" height="104" rx="8" fill="#2E5E4E"/><rect x="18" y="20" width="164" height="104" rx="8" fill="none" stroke="#B88A5A" stroke-width="8"/>' +
        '<text x="40" y="66" font-family="sans-serif" font-weight="700" font-size="26" fill="' + W + '">A B C</text>' +
        '<text x="40" y="104" font-family="sans-serif" font-size="20" fill="' + A + '">1 + 2 = 3</text>' +
        '<path d="M140 92l26-26" stroke="' + W + '" stroke-width="3" stroke-linecap="round"/>' +
        '<rect x="70" y="124" width="60" height="6" fill="#B88A5A"/>' +
        '<g transform="translate(46 138)"><path d="M0 4c18-6 36-6 54 0v30c-18-6-36-6-54 0z" fill="' + c + '"/><path d="M54 4c18-6 36-6 54 0v30c-18-6-36-6-54 0z" fill="' + A + '"/></g>';
    },
    "dieu-duong": function (c, s) {
      return '<path d="M100 160S26 116 26 66c0-26 20-42 40-42 16 0 28 10 34 22 6-12 18-22 34-22 20 0 40 16 40 42 0 50-74 94-74 94z" fill="' + c + '"/>' +
        '<rect x="88" y="54" width="24" height="64" rx="4" fill="' + W + '"/><rect x="68" y="74" width="64" height="24" rx="4" fill="' + W + '"/>' +
        '<path d="M150 20v26a20 20 0 0 1-40 0" fill="none" stroke="' + N + '" stroke-width="5" opacity="0"/>' +
        '<g transform="translate(140 108)"><path d="M0 0v20a16 16 0 0 0 32 0V0" fill="none" stroke="' + N + '" stroke-width="5" stroke-linecap="round"/>' +
        '<path d="M16 36v14a14 14 0 0 0 28 0v-8" fill="none" stroke="' + N + '" stroke-width="5" stroke-linecap="round"/><circle cx="44" cy="38" r="8" fill="' + A + '" stroke="' + N + '" stroke-width="4"/></g>';
    },
    "tu-van-tam-ly": function (c, s) {
      return '<path d="M20 30h104a12 12 0 0 1 12 12v50a12 12 0 0 1-12 12H58l-24 20v-20H20a12 12 0 0 1-12-12V42a12 12 0 0 1 12-12z" fill="' + c + '"/>' +
        '<rect x="26" y="52" width="80" height="7" rx="3.5" fill="' + W + '" opacity=".8"/><rect x="26" y="68" width="56" height="7" rx="3.5" fill="' + W + '" opacity=".6"/>' +
        '<path d="M88 92h88a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12h-14v18l-22-18H88a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12z" fill="' + A + '"/>' +
        '<path d="M132 140s-22-12-22-26c0-7 5-12 11-12 5 0 9 3 11 7 2-4 6-7 11-7 6 0 11 5 11 12 0 14-22 26-22 26z" fill="' + W + '"/>';
    },
    "chuyen-vien-marketing": function (c, s) {
      return '<path d="M30 80h24l70-40v110l-70-40H30a10 10 0 0 1-10-10V90a10 10 0 0 1 10-10z" fill="' + c + '"/>' +
        '<rect x="124" y="34" width="14" height="122" rx="7" fill="' + N + '"/>' +
        '<path d="M44 120l10 40h18l-8-40z" fill="' + N + '"/>' +
        '<path d="M152 70c10 8 10 42 0 50M164 56c18 14 18 64 0 78" fill="none" stroke="' + A + '" stroke-width="6" stroke-linecap="round"/>' +
        '<g transform="translate(140 6)"><rect width="52" height="28" rx="8" fill="' + A + '"/><path d="M8 20l10-8 8 4 16-10" fill="none" stroke="' + N + '" stroke-width="3" stroke-linecap="round"/></g>';
    },
    "to-chuc-su-kien": function (c, s) {
      return '<path d="M60 10l-34 120h20zM140 10l34 120h-20z" fill="' + A + '" opacity=".35"/>' +
        '<rect x="48" y="4" width="24" height="14" rx="4" fill="' + N + '"/><rect x="128" y="4" width="24" height="14" rx="4" fill="' + N + '"/>' +
        '<rect x="14" y="124" width="172" height="20" rx="4" fill="' + c + '"/><rect x="24" y="144" width="152" height="22" fill="' + N + '"/>' +
        '<path d="M100 54l8 16 18 3-13 12 3 18-16-9-16 9 3-18-13-12 18-3z" fill="' + A + '"/>' +
        '<g fill="' + c + '"><rect x="36" y="58" width="8" height="8" transform="rotate(20 40 62)"/><circle cx="160" cy="70" r="5"/><rect x="150" y="96" width="8" height="8" transform="rotate(-20 154 100)"/></g>' +
        '<g fill="#7D5BBE"><circle cx="48" cy="98" r="5"/><rect x="138" y="40" width="7" height="7" transform="rotate(30 141 43)"/></g>';
    },
    "nha-quan-ly-kinh-doanh": function (c, s) {
      return '<path d="M26 64l12-36h124l12 36z" fill="' + c + '"/>' +
        '<path d="M26 64a18 18 0 0 0 37 0 18 18 0 0 0 37 0 18 18 0 0 0 37 0 18 18 0 0 0 37 0" fill="' + W + '" stroke="' + c + '" stroke-width="4"/>' +
        '<rect x="34" y="82" width="132" height="78" fill="' + W + '" stroke="#DCE4EE" stroke-width="3"/>' +
        '<rect x="48" y="96" width="44" height="64" fill="' + N + '"/><rect x="104" y="96" width="50" height="34" rx="4" fill="#CFE0FA"/>' +
        '<g transform="translate(130 120) rotate(-15)"><path d="M0 10l14-14h40v28H14z" fill="' + A + '"/><circle cx="14" cy="10" r="4" fill="' + W + '"/>' +
        '<text x="34" y="16" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="12" fill="' + N + '">%</text></g>';
    },
    "ke-toan": function (c, s) {
      return '<rect x="40" y="16" width="100" height="148" rx="14" fill="' + N + '"/>' +
        '<rect x="52" y="30" width="76" height="34" rx="6" fill="#CFF5E4"/>' +
        '<text x="122" y="55" text-anchor="end" font-family="monospace" font-weight="700" font-size="18" fill="' + N + '">1.250</text>' +
        '<g fill="' + W + '" opacity=".9"><rect x="52" y="76" width="20" height="16" rx="4"/><rect x="80" y="76" width="20" height="16" rx="4"/>' +
        '<rect x="52" y="100" width="20" height="16" rx="4"/><rect x="80" y="100" width="20" height="16" rx="4"/>' +
        '<rect x="52" y="124" width="20" height="16" rx="4"/><rect x="80" y="124" width="20" height="16" rx="4"/></g>' +
        '<rect x="108" y="76" width="20" height="40" rx="4" fill="' + A + '"/><rect x="108" y="124" width="20" height="28" rx="4" fill="' + c + '"/>' +
        '<g transform="translate(150 110)"><ellipse cx="20" cy="46" rx="20" ry="7" fill="#C98A12"/><rect x="0" y="34" width="40" height="12" fill="' + A + '"/>' +
        '<ellipse cx="20" cy="34" rx="20" ry="7" fill="#FFD27A"/><rect x="0" y="20" width="40" height="14" fill="' + A + '"/><ellipse cx="20" cy="20" rx="20" ry="7" fill="#FFD27A"/></g>';
    },
    "hanh-chinh-van-phong": function (c, s) {
      return '<path d="M20 50h50l12 14h78a10 10 0 0 1 10 10v76a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10V60a10 10 0 0 1 10-10z" fill="' + c + '"/>' +
        '<rect x="34" y="34" width="110" height="80" rx="4" fill="' + W + '" stroke="#DCE4EE" stroke-width="2"/>' +
        '<g fill="#B9C6D8"><rect x="46" y="48" width="70" height="6" rx="3"/><rect x="46" y="62" width="86" height="6" rx="3"/><rect x="46" y="76" width="60" height="6" rx="3"/></g>' +
        '<path d="M10 84h160v66a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10z" fill="' + c + '" opacity=".85"/>' +
        '<g transform="translate(140 10)"><rect width="50" height="50" rx="8" fill="' + W + '" stroke="' + N + '" stroke-width="3"/><rect width="50" height="14" rx="6" fill="' + A + '"/>' +
        '<text x="25" y="42" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="20" fill="' + N + '">21</text></g>';
    },
    "chuyen-vien-logistics": function (c, s) {
      return '<rect x="10" y="62" width="108" height="72" rx="6" fill="' + c + '"/>' +
        '<path d="M118 82h38l24 28v24h-62z" fill="' + N + '"/><path d="M126 90h26l16 20h-42z" fill="#CFE0FA"/>' +
        '<circle cx="44" cy="140" r="16" fill="' + N + '"/><circle cx="44" cy="140" r="6" fill="#B9C6D8"/>' +
        '<circle cx="150" cy="140" r="16" fill="' + N + '"/><circle cx="150" cy="140" r="6" fill="#B9C6D8"/>' +
        '<g transform="translate(26 18)"><rect width="36" height="34" rx="3" fill="#C99A5B"/><rect x="14" width="8" height="12" fill="#E7C08C"/></g>' +
        '<g transform="translate(66 28)"><rect width="30" height="24" rx="3" fill="' + A + '"/><rect x="11" width="8" height="9" fill="#FFD27A"/></g>' +
        '<text x="64" y="106" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="16" fill="' + W + '">GO</text>' +
        '<path d="M190 36h-22m22 0l-8-8m8 8l-8 8" stroke="' + A + '" stroke-width="5" stroke-linecap="round" fill="none"/>';
    }
  };

  /* Hình đặc trưng của nghề: khung cảnh chung + motif riêng */
  function careerScene(career, group) {
    var c = group.color, s = group.soft;
    var motif = MOTIFS[career.id] ? MOTIFS[career.id](c, s) : "";
    var uid = "sc" + career.id.replace(/[^a-z0-9]/g, "");
    return '<svg viewBox="0 0 480 300" role="img" aria-label="Hình minh họa nghề ' + career.name + '" preserveAspectRatio="xMidYMid meet" class="scene">' +
      '<defs><linearGradient id="' + uid + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + s + '"/><stop offset="1" stop-color="#FFFFFF"/></linearGradient></defs>' +
      '<rect x="-720" y="-300" width="1920" height="900" fill="url(#' + uid + ')"/>' +
      '<circle cx="400" cy="70" r="120" fill="' + c + '" opacity=".10"/>' +
      '<circle cx="70" cy="250" r="90" fill="' + c + '" opacity=".08"/>' +
      '<g fill="' + c + '" opacity=".25">' + dots() + "</g>" +
      '<ellipse cx="240" cy="262" rx="150" ry="14" fill="' + N + '" opacity=".08"/>' +
      '<g transform="translate(130 50) scale(1.1)">' + motif + "</g>" +
      '<g transform="translate(36 44)"><rect width="46" height="46" rx="14" fill="' + c + '"/>' +
      '<text x="23" y="31" text-anchor="middle" font-family="Be Vietnam Pro, sans-serif" font-weight="800" font-size="22" fill="#fff">' + career.g + "</text></g>" +
      "</svg>";
  }

  function dots() {
    var out = "";
    for (var r = 0; r < 4; r++) for (var k = 0; k < 5; k++) out += '<circle cx="' + (380 + k * 16) + '" cy="' + (210 + r * 16) + '" r="2.5"/>';
    return out;
  }

  /* Hình minh họa khuôn viên trường (không phải ảnh thật) */
  var CAMPUS_TONES = ["#3168D2", "#1F8579", "#7D5BBE", "#D27A12", "#2B915B", "#C2410C"];
  function campusScene(school, i) {
    var t = CAMPUS_TONES[i % CAMPUS_TONES.length];
    var initials = school.short || school.name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 4);
    return '<svg viewBox="0 0 320 180" role="img" aria-label="Hình minh họa ' + school.name + '" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="320" height="180" fill="#EAF2FF"/>' +
      '<circle cx="270" cy="38" r="16" fill="#FFD27A"/>' +
      '<path d="M0 150c60-18 120-18 180-6s100 8 140-4v40H0z" fill="#CFE8D5"/>' +
      '<g transform="translate(70 40)">' +
        '<path d="M-10 40L90 4l100 36z" fill="' + t + '"/>' +
        '<rect x="0" y="40" width="180" height="84" fill="#FFFFFF"/>' +
        '<rect x="-6" y="118" width="192" height="10" fill="' + N + '" opacity=".85"/>' +
        '<g fill="#DCE4EE">' + [12, 42, 72, 102, 132, 162].map(function (x) { return '<rect x="' + x + '" y="48" width="8" height="70"/>'; }).join("") + "</g>" +
        '<rect x="74" y="80" width="32" height="38" rx="16" fill="' + N + '" opacity=".8"/>' +
        '<rect x="56" y="22" width="68" height="18" rx="4" fill="#FFFFFF"/>' +
        '<text x="90" y="35.5" text-anchor="middle" font-family="Be Vietnam Pro, sans-serif" font-weight="800" font-size="11" fill="' + t + '">' + initials + "</text>" +
        '<rect x="88" y="-24" width="3" height="30" fill="' + N + '"/><path d="M91 -24h22l-6 7 6 7H91z" fill="#E53935"/>' +
      "</g>" +
      tree(30, 150, "#2B915B") + tree(290, 152, "#1F8579") + tree(262, 156, "#2B915B") +
      "</svg>";
  }

  function tree(x, y, col) {
    return '<rect x="' + (x - 2) + '" y="' + (y - 18) + '" width="4" height="18" fill="#8A6A4A"/>' +
      '<circle cx="' + x + '" cy="' + (y - 28) + '" r="14" fill="' + col + '"/>';
  }

  window.CN_VISUALS = { careerScene: careerScene, campusScene: campusScene };
})();
