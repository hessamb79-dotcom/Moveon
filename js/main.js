/* =========================================================
   Move On | main.js
   ========================================================= */
(function () {
  "use strict";
  var D = window.MOVEON || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var fa = function (n) { return String(n).replace(/\d/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹"[d]; }); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- REC timecode ---------- */
  var tc = $("#tc"), f = 0, p = function (n) { return (n < 10 ? "0" : "") + n; };
  if (tc && !reduce) setInterval(function () {
    f++; tc.textContent = p(Math.floor(f / 90000)) + ":" + p(Math.floor(f / 1500) % 60) + ":" + p(Math.floor(f / 25) % 60) + ":" + p(f % 25);
  }, 40);

  /* ---------- offer countdown (Tehran time) ----------
     ۲۶ تا ۲۹ مهر ۱۴۰۵ = ۱۸ تا ۲۱ اکتبر ۲۰۲۶ */
  var left = $("#left");
  if (left) {
    var now = new Date(Date.now() + 3.5 * 3600e3),
        day = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
        start = Date.UTC(2026, 9, 18), end = Date.UTC(2026, 9, 21);
    if (day < start) left.textContent = fa(Math.round((start - day) / 864e5)) + " روز تا شروع نمایشگاه";
    else if (day < end) left.textContent = fa(Math.round((end - day) / 864e5) + 1) + " روز تا پایان این پیشنهاد";
    else if (day === end) left.textContent = "امروز آخرین روز این پیشنهاد است";
    else left.textContent = "پیشنهاد نمایشگاه به پایان رسیده؛ برای مشاوره همچنان تماس بگیرید";
  }

  /* ---------- reveal on scroll ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -6% 0px" }) : null;
  function watch(el) { if (io) io.observe(el); else el.classList.add("in"); }
  document.querySelectorAll(".reveal").forEach(watch);

  /* ---------- local videos ---------- */
  var rail = $("#reelRail");
  var soundIcon = '<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>';
  if (rail && D.videos) {
    D.videos.forEach(function (v) {
      var el = document.createElement("figure");
      el.className = "reel" + (v.shape === "wide" ? " wide" : "");
      el.innerHTML =
        '<div class="screen"><video muted loop playsinline preload="none" poster="assets/posters/' + v.poster + '" aria-label="' + v.title + '">' +
        '<source src="assets/videos/' + v.file + '" type="video/mp4"></video>' +
        '<button class="sound" type="button" aria-label="پخش با صدا">' + soundIcon + "</button></div>" +
        '<figcaption class="cap"><b>' + v.title + "</b><span>" + v.tag + "</span></figcaption>";
      rail.appendChild(el);
      var vid = el.querySelector("video");
      el.querySelector(".sound").addEventListener("click", function () {
        vid.muted = false; vid.currentTime = 0; vid.play();
        if (vid.requestFullscreen) vid.requestFullscreen().catch(function () {});
        else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen();
      });
    });
    // play only what is on screen (saves mobile data)
    if ("IntersectionObserver" in window && !reduce) {
      var vio = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) { var pr = v.play(); if (pr) pr.catch(function () {}); }
          else { v.pause(); if (!document.fullscreenElement) v.muted = true; }
        });
      }, { threshold: .6 });
      rail.querySelectorAll("video").forEach(function (v) { vio.observe(v); });
    }
  }

  /* ---------- Aparat (loads only when tapped) ---------- */
  var ag = $("#aparatGrid");
  if (ag && D.aparat) {
    D.aparat.forEach(function (a, i) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "apa reveal" + (i % 3 ? " d" + (i % 3) : "");
      b.setAttribute("aria-label", "پخش " + a.title + " از آپارات");
      b.innerHTML = '<span class="play"></span><span class="t">' + a.title + "</span>";
      b.addEventListener("click", function () {
        if (b.querySelector("iframe")) return;
        b.innerHTML = '<iframe src="https://www.aparat.com/video/video/embed/videohash/' + a.id +
          '/vt/frame?autoplay=true" allow="autoplay; fullscreen" allowfullscreen title="' + a.title + '"></iframe>';
      });
      ag.appendChild(b); watch(b);
    });
  }

  /* ---------- graphic works: filters, masonry, lightbox ---------- */
  var grid = $("#worksGrid"), filters = $("#filters"), moreBtn = $("#moreBtn");
  var STEP = 10, shown = STEP, current = "all", list = [];
  function render() {
    list = (D.works || []).filter(function (w) { return current === "all" || w.cat === current; });
    grid.innerHTML = "";
    list.slice(0, shown).forEach(function (w, i) {
      var t = document.createElement("button");
      t.type = "button"; t.className = "tile" + (w.wide ? " wide" : "");
      t.innerHTML = '<img loading="lazy" decoding="async" src="assets/works/' + w.thumb + '" alt="' + w.title + '"><span class="lab">' + w.title + "</span>";
      var im = t.querySelector("img");
      im.addEventListener("load", function () { if (im.naturalWidth / im.naturalHeight > 1.25) t.classList.add("wide"); });
      t.addEventListener("click", function () { openLB(i); });
      grid.appendChild(t); watch(t);
    });
    moreBtn.parentElement.style.display = list.length > shown ? "" : "none";
  }
  if (grid && D.works) {
    var cats = [["all", "همه"]].concat(Object.keys(D.categories || {}).filter(function (k) {
      return D.works.some(function (w) { return w.cat === k; });
    }).map(function (k) { return [k, D.categories[k]]; }));
    cats.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button"; b.setAttribute("role", "tab"); b.textContent = c[1];
      b.setAttribute("aria-selected", c[0] === "all");
      b.addEventListener("click", function () {
        current = c[0]; shown = STEP;
        filters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
        render(); setTimeout(buildFlow, 400);
      });
      filters.appendChild(b);
    });
    moreBtn.addEventListener("click", function () { shown += STEP; render(); setTimeout(buildFlow, 400); });
    render();
  }

  var lb = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), idx = 0, lastFocus;
  function show(i) {
    idx = (i + list.length) % list.length;
    lbImg.src = "assets/works/" + list[idx].src; lbImg.alt = list[idx].title; lbCap.textContent = list[idx].title;
  }
  function openLB(i) { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
  function closeLB() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  if (lb) {
    $("#lbClose").addEventListener("click", closeLB);
    $("#lbNext").addEventListener("click", function () { show(idx + 1); });
    $("#lbPrev").addEventListener("click", function () { show(idx - 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
    addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLB();
      if (e.key === "ArrowLeft") show(idx + 1);
      if (e.key === "ArrowRight") show(idx - 1);
    });
    var sx = 0;
    lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(idx + (dx > 0 ? 1 : -1)); });
  }

  /* ---------- client logos (falls back to name) ---------- */
  var logos = $("#logos");
  if (logos && D.clients) {
    D.clients.forEach(function (c) {
      var li = document.createElement("li");
      li.innerHTML = "<span>" + c.name + "</span>";
      if (c.logo) {
        var img = new Image();
        img.alt = c.name; img.loading = "lazy";
        img.onload = function () { li.classList.add("has-logo"); li.insertBefore(img, li.firstChild); };
        img.src = "assets/logos/" + c.logo;
      }
      logos.appendChild(li);
    });
  }

  /* ---------- continuity line ---------- */
  var svg = $("#flow"), path = $("#flowPath"), ghost = $("#flowGhost"), dot = $("#flowDot"), len = 0;
  function buildFlow() {
    var W = document.documentElement.clientWidth, H = document.documentElement.scrollHeight;
    svg.setAttribute("width", W); svg.setAttribute("height", H); svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    var pts = [[W * .9, 0]], side = 0;
    document.querySelectorAll("main > section").forEach(function (s) {
      var r = s.getBoundingClientRect(); pts.push([side ? W * .93 : W * .07, r.top + scrollY + r.height * .5]); side = 1 - side;
    });
    pts.push([W * .5, H - 60]);
    var d = "M" + pts[0][0] + " " + pts[0][1];
    for (var i = 1; i < pts.length; i++) { var a = pts[i - 1], b = pts[i], my = (a[1] + b[1]) / 2; d += " C" + a[0] + " " + my + " " + b[0] + " " + my + " " + b[0] + " " + b[1]; }
    path.setAttribute("d", d); ghost.setAttribute("d", d); len = path.getTotalLength(); path.style.strokeDasharray = len; drawFlow();
  }
  function drawFlow() {
    if (!len) return;
    var max = document.documentElement.scrollHeight - innerHeight,
        k = reduce ? 1 : Math.min(1, Math.max(0, (scrollY + innerHeight * .6) / (max + innerHeight * .6)));
    path.style.strokeDashoffset = len * (1 - k);
    var pt = path.getPointAtLength(len * k); dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y);
  }

  /* ---------- sticky call bar ---------- */
  var dock = $("#dock"), heroCta = $(".hero-actions"), contact = $("#contact");
  function dockUpd() {
    var past = heroCta.getBoundingClientRect().bottom < 0, c = contact.getBoundingClientRect();
    dock.classList.toggle("show", past && !(c.top < innerHeight && c.bottom > 0));
  }

  var ticking = false;
  addEventListener("scroll", function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { drawFlow(); dockUpd(); ticking = false; });
  }, { passive: true });
  var rt; addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(buildFlow, 200); });
  addEventListener("load", buildFlow);
  if (document.fonts) document.fonts.ready.then(buildFlow);
  buildFlow(); dockUpd();
})();
