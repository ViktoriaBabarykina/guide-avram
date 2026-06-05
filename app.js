  // данные и переводы приходят из i18n.js (window.*)
  const TOURS = window.TOURS, REVIEWS = window.REVIEWS, GALLERY = window.GALLERY, T = window.T;
  const TMAP = {}; TOURS.forEach(t => TMAP[t.id] = t);

  // ===== РЕНДЕР КАРТОЧЕК ТУРОВ =====
  const railDay = document.getElementById('rail-day'), railMulti = document.getElementById('rail-multi');
  const moreSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
  function tourCard(t) {
    const d = t[window.LANG] || t.ru;
    const foot = `<div class="foot"><div class="price"><b>${d.price}</b>${d.unit ? `<small>${d.unit}</small>` : ''}</div>
        <span class="more">${T('cardMore')} ${moreSvg}</span></div>`;
    if (t.build) {
      return `<button class="tcard build" data-id="${t.id}">
        <div class="grad"></div>
        <div class="info"><div class="meta">${d.meta}</div><h3>${d.title}</h3>${foot}</div>
      </button>`;
    }
    const tag = d.badge ? `<div class="tags"><span class="tag ${t.badgeClass}">${d.badge}</span></div>` : '';
    return `<button class="tcard" data-id="${t.id}">
      <div class="im" style="background-image:url('${t.img}')"></div>
      <div class="grad"></div>${tag}
      <div class="info"><div class="meta">${d.meta}</div><h3>${d.title}</h3>${foot}</div>
    </button>`;
  }
  function renderTours() {
    railDay.innerHTML = TOURS.filter(t => t.cat === 'day').map(tourCard).join('');
    railMulti.innerHTML = TOURS.filter(t => t.cat === 'multi').map(tourCard).join('');
  }
  renderTours();

  // ===== РЕНДЕР ОТЗЫВОВ =====
  const revRail = document.getElementById('revRail');
  function renderReviews() {
    revRail.innerHTML = REVIEWS.map(r => {
      const d = r[window.LANG] || r.ru;
      return `
      <div class="rev">
        <div class="st">★★★★★</div>
        <div class="src">${d.src}</div>
        <p>${d.text}</p>
        <button class="toggle">${T('reviewMore')}</button>
        <div class="who"><span class="av">${d.name.trim()[0]}</span><span>${d.name}<small>${d.city}</small></span></div>
      </div>`;
    }).join('');
    revRail.querySelectorAll('.rev').forEach(rev => {
      const p = rev.querySelector('p'), tg = rev.querySelector('.toggle');
      if (p.scrollHeight - p.clientHeight < 6) { tg.style.display = 'none'; }
      tg.addEventListener('click', () => { const ex = rev.classList.toggle('exp'); tg.textContent = ex ? T('reviewLess') : T('reviewMore'); });
    });
  }
  renderReviews();

  // перерисовка при смене языка
  if (window.onLang) { window.onLang(renderTours); window.onLang(renderReviews); }

  // ===== РЕНДЕР ГАЛЕРЕИ =====
  document.getElementById('galRail').innerHTML = GALLERY.map((g, i) => `
    <div class="gcell ${g.w}" data-i="${i}">
      <div class="im" style="background-image:url('${g.src}')"></div>
      <span class="zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4M11 8v6M8 11h6"/></svg></span>
    </div>`).join('');

  // ===== МОДАЛКА ТУРА =====
  const modal = document.getElementById('modal'), body = document.body;
  const mImg = document.getElementById('mImg'), mBadge = document.getElementById('mBadge'), mMeta = document.getElementById('mMeta'),
        mTitle = document.getElementById('mTitle'), mPrice = document.getElementById('mPrice'), mThumbs = document.getElementById('mThumbs'),
        mDesc = document.getElementById('mDesc'), mIncl = document.getElementById('mIncl');
  function openTour(id) {
    const t = TMAP[id]; if (!t) return;
    const d = t[window.LANG] || t.ru;
    const cover = t.img || t.gallery[0];
    mImg.style.backgroundImage = `url('${cover}')`;
    mBadge.textContent = d.badge || ''; mBadge.style.display = d.badge ? '' : 'none';
    mMeta.textContent = d.meta; mTitle.textContent = d.title;
    mPrice.innerHTML = d.unit ? `${d.price} <span>· ${d.unit}</span>` : d.price;
    mDesc.innerHTML = d.long;
    mIncl.innerHTML = d.incl.map(x => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12l5 5L20 6"/></svg>${x}</li>`).join('');
    const imgs = [cover, ...t.gallery].filter((s, i, a) => a.indexOf(s) === i);
    mThumbs.innerHTML = imgs.map((s, i) => `<button class="t ${i === 0 ? 'active' : ''}" data-src="${s}" style="background-image:url('${s}')"></button>`).join('');
    const fs = document.getElementById('formTour'); if (fs) { [...fs.options].forEach(o => { if (o.text.includes(d.title.split(':')[0].split(' —')[0])) fs.value = o.value; }); }
    openOverlay(modal);
  }
  mThumbs.addEventListener('click', e => { const b = e.target.closest('.t'); if (!b) return;
    mImg.style.backgroundImage = `url('${b.dataset.src}')`;
    mThumbs.querySelectorAll('.t').forEach(x => x.classList.remove('active')); b.classList.add('active'); });
  document.querySelectorAll('.tour-grid').forEach(r => r.addEventListener('click', e => { const c = e.target.closest('.tcard'); if (c) openTour(c.dataset.id); }));
  document.getElementById('mClose').addEventListener('click', () => closeOverlay(modal));
  modal.addEventListener('click', e => { if (e.target === modal) closeOverlay(modal); });
  document.getElementById('mBook').addEventListener('click', () => closeOverlay(modal));

  // ===== ЛАЙТБОКС =====
  const lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
  let lbIdx = 0;
  function showLb(i) { lbIdx = (i + GALLERY.length) % GALLERY.length; lbImg.src = GALLERY[lbIdx].src; lbCap.textContent = `${lbIdx + 1} / ${GALLERY.length}`; }
  document.getElementById('galRail').addEventListener('click', e => { const c = e.target.closest('.gcell'); if (!c) return; showLb(+c.dataset.i); openOverlay(lb); });
  document.getElementById('lbClose').addEventListener('click', () => closeOverlay(lb));
  document.getElementById('lbPrev').addEventListener('click', () => showLb(lbIdx - 1));
  document.getElementById('lbNext').addEventListener('click', () => showLb(lbIdx + 1));
  lb.addEventListener('click', e => { if (e.target === lb) closeOverlay(lb); });

  // ===== ОБЩЕЕ УПРАВЛЕНИЕ ОВЕРЛЕЯМИ =====
  function openOverlay(el) { el.classList.add('open'); el.setAttribute('aria-hidden', 'false'); body.classList.add('lock'); }
  function closeOverlay(el) { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); body.classList.remove('lock'); }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (lb.classList.contains('open')) closeOverlay(lb); else if (modal.classList.contains('open')) closeOverlay(modal); }
    if (lb.classList.contains('open')) { if (e.key === 'ArrowLeft') showLb(lbIdx - 1); if (e.key === 'ArrowRight') showLb(lbIdx + 1); }
  });

  // ===== СТРЕЛКИ РЕЙЛОВ =====
  document.querySelectorAll('.nav-btn').forEach(b => b.addEventListener('click', () => {
    const r = document.getElementById(b.dataset.rail);
    r.scrollBy({ left: b.classList.contains('next') ? 360 : -360, behavior: 'smooth' });
  }));

  // ===== ПЕРЕТАСКИВАНИЕ МЫШЬЮ (горизонтальный скролл на десктопе) =====
  function dragScroll(el) {
    if (!el) return;
    var down = false, startX = 0, startL = 0, dist = 0;
    el.addEventListener('mousedown', function (e) {
      if (e.button !== 0) return;
      down = true; dist = 0; startX = e.pageX; startL = el.scrollLeft; el.classList.add('grabbing');
    });
    window.addEventListener('mousemove', function (e) {
      if (!down) return;
      var dx = e.pageX - startX; dist = Math.abs(dx);
      if (dist > 3) { el.scrollLeft = startL - dx; e.preventDefault(); }
    });
    window.addEventListener('mouseup', function () {
      if (!down) return; down = false; el.classList.remove('grabbing');
      if (dist > 8) { el.__drag = true; setTimeout(function () { el.__drag = false; }, 40); }
    });
    el.addEventListener('click', function (e) { if (el.__drag) { e.stopPropagation(); e.preventDefault(); } }, true);
    el.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }
  ['galRail', 'revRail', 'mThumbs'].forEach(id => dragScroll(document.getElementById(id)));

  // ===== СВАЙП В ЛАЙТБОКСЕ (мобильные) =====
  let lbTouchX = 0;
  lb.addEventListener('touchstart', function (e) { lbTouchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    const dx = e.changedTouches[0].clientX - lbTouchX;
    if (Math.abs(dx) > 40) showLb(lbIdx + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // ===== ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ =====
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 3 * 0.08) + 's'; io.observe(el); });

  // ===== ШАПКА + ПОЛОСА ПРОГРЕССА =====
  const hdr = document.getElementById('hdr'), prog = document.querySelector('.progress i');
  const onScroll = () => { hdr.classList.toggle('scrolled', window.scrollY > 40);
    const d = document.documentElement, max = d.scrollHeight - d.clientHeight;
    prog.style.width = (max > 0 ? (d.scrollTop / max) * 100 : 0) + '%'; };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  // ===== СЧЁТЧИКИ =====
  const animCount = el => { const to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec || '0'), suf = el.dataset.suf || '', dur = 1500, t0 = performance.now();
    const tick = t => { const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3); let v = (to * e).toFixed(dec); if (dec > 0 && window.LANG === 'ru') v = v.replace('.', ',');
      el.textContent = v + suf; if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); };
  const co = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { animCount(e.target); co.unobserve(e.target); } }), { threshold: .4 });
  document.querySelectorAll('.count').forEach(el => co.observe(el));

  // ===== МОБИЛЬНОЕ МЕНЮ =====
  const burger = document.getElementById('burger'), mob = document.getElementById('mobile');
  burger.addEventListener('click', () => mob.classList.toggle('open'));
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

  // ===== ЗАЯВКА → WHATSAPP =====
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', e => {
      e.preventDefault();
      const f = leadForm.elements;
      const name = (f['name'].value || '').trim();
      const phone = (f['phone'].value || '').trim();
      const tour = f['tour'].value;
      const msg = (f['message'].value || '').trim();
      const text = T('msgGreeting') + '\n' +
        '👤 ' + T('msgName') + ': ' + name + '\n' +
        '📞 ' + T('msgPhone') + ': ' + phone + '\n' +
        '🗺️ ' + T('msgTour') + ': ' + tour +
        (msg ? ('\n📝 ' + T('msgNotes') + ': ' + msg) : '');
      if (window.ym) ym(109656305, 'reachGoal', 'lead');
      window.open('https://wa.me/' + leadForm.dataset.wa + '?text=' + encodeURIComponent(text), '_blank');
    });
  }
