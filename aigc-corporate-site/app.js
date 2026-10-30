/* 澈光智能 LUMEN AI — 交互脚本
   1. 粒子流场（Hero 背景）
   2. 滚动 reveal
   3. 数字计数
   4. 导航换肤
   5. 移动端粘性 CTA
*/
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ========== 1. 粒子流场 ========== */
  var canvas = document.getElementById('field');
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext('2d');
    var W, H, particles, raf;
    var mouse = { x: -9999, y: -9999 };
    var COUNT = window.innerWidth < 700 ? 500 : 1500;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#070b14';
      ctx.fillRect(0, 0, W, H);
    }

    function makeParticles() {
      particles = [];
      for (var i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          px: 0, py: 0,
          speed: 0.4 + Math.random() * 1.1,
          hue: 200 + Math.random() * 40,
          alpha: 0.12 + Math.random() * 0.3
        });
        particles[i].px = particles[i].x;
        particles[i].py = particles[i].y;
      }
    }

    // 伪噪声流场：双三角函数叠加，成本低、视觉接近 Perlin
    function flowAngle(x, y, t) {
      return (
        Math.sin(x * 0.0016 + t) * Math.cos(y * 0.0016 - t * 0.6) +
        Math.sin((x + y) * 0.0009 - t * 0.4)
      ) * Math.PI;
    }

    var t = 0;
    function frame() {
      t += 0.004;
      // 半透明覆盖形成拖尾
      ctx.fillStyle = 'rgba(7, 11, 20, 0.09)';
      ctx.fillRect(0, 0, W, H);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var a = flowAngle(p.x, p.y, t);

        // 鼠标排斥
        var dx = p.x - mouse.x, dy = p.y - mouse.y;
        var dist2 = dx * dx + dy * dy;
        if (dist2 < 12000) {
          a = Math.atan2(dy, dx);
          p.speed = Math.min(p.speed + 0.35, 3.2);
        } else {
          p.speed += (0.4 + (i % 10) * 0.09 - p.speed) * 0.02;
        }

        p.px = p.x;
        p.py = p.y;
        p.x += Math.cos(a) * p.speed;
        p.y += Math.sin(a) * p.speed;

        // 出界回绕
        if (p.x < 0) { p.x = W; p.px = p.x; }
        if (p.x > W) { p.x = 0; p.px = p.x; }
        if (p.y < 0) { p.y = H; p.py = p.y; }
        if (p.y > H) { p.y = 0; p.py = p.y; }

        ctx.strokeStyle = 'hsla(' + p.hue + ', 90%, 72%, ' + p.alpha + ')';
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    }

    // 页面不可见时暂停，省电
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { cancelAnimationFrame(raf); }
      else { raf = requestAnimationFrame(frame); }
    });

    canvas.parentElement.addEventListener('pointermove', function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener('pointerleave', function () {
      mouse.x = -9999; mouse.y = -9999;
    });

    window.addEventListener('resize', function () {
      resize();
      makeParticles();
    });

    resize();
    makeParticles();
    frame();
  }

  /* ========== 2. 滚动 reveal ========== */
  var revealEls = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('on');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('on'); });
  }

  /* ========== 3. 数字计数 ========== */
  var counters = document.querySelectorAll('[data-count]');
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1600;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          animateCount(en.target);
          cio.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ========== 4. 导航换肤：滚出深色区后变浅色 ========== */
  var nav = document.getElementById('nav');
  var darkZone = document.querySelector('.dark-zone');
  function checkNav() {
    var threshold = darkZone.offsetHeight - 90;
    nav.classList.toggle('light', window.scrollY > threshold);
    checkMobileCta();
  }
  window.addEventListener('scroll', checkNav, { passive: true });
  window.addEventListener('resize', checkNav);

  /* ========== 5. 移动端粘性 CTA ========== */
  var mobileCta = document.getElementById('mobileCta');
  function checkMobileCta() {
    if (!mobileCta) return;
    var heroH = document.querySelector('.hero').offsetHeight;
    var nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 200;
    mobileCta.classList.toggle('show', window.scrollY > heroH * 0.6 && !nearBottom);
  }
  checkNav();
})();
