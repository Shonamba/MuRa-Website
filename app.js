/**
 * MudduRamana Manasu — Main App
 * i18n-aware: all user-facing strings use t()
 */

// ---- THEME ----
function getTheme() { return localStorage.getItem('mrm_theme') || 'light'; }
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('mrm_theme', theme);
}
function toggleTheme() { applyTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

// Apply immediately
(function() {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('mrm_theme') || 'light');
})();

// ---- CONFIG ----
const VERSES_PER_PAGE = 24;
let currentPage = 1;
let filteredVerses = [];
let currentModalIndex = 0;

// ---- FAVORITES ----
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('mrm_favorites') || '[]'); } catch { return []; }
}
function setFavorites(favs) { localStorage.setItem('mrm_favorites', JSON.stringify(favs)); }
function isFavorite(id) { return getFavorites().includes(id); }
function toggleFavorite(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx > -1) favs.splice(idx, 1); else favs.push(id);
  setFavorites(favs);
  return favs.includes(id);
}

// ---- TOAST ----
function showToast(msg) {
  let el = document.getElementById('toastEl');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toastEl'; el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2500);
}

// ---- SHARE / PRINT ----
function shareVerse(verse) {
  const text = `MudduRamana Manasu — ${t('card_verse')} ${verse.id}\n\n${verse.kannada}\n\n${verse.meaning}`;
  if (navigator.share) {
    navigator.share({ title: `MudduRamana Manasu — ${t('card_verse')} ${verse.id}`, text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(t('toast_copied')));
  }
}

function printVerse(verse) {
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html><head>
    <title>MudduRamana Manasu — ${t('card_verse')} ${verse.id}</title>
    <link href="https://fonts.googleapis.com/css2?family=Tiro+Kannada&family=Crimson+Pro:ital@0;1&display=swap" rel="stylesheet"/>
    <style>
      body{font-family:'Crimson Pro',serif;max-width:600px;margin:40px auto;color:#2c1a0e}
      h1{font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#b8860b;margin-bottom:24px}
      .kn{font-family:'Tiro Kannada',serif;font-size:1.1rem;line-height:2.2;border-left:3px solid #b8860b;padding-left:16px;margin-bottom:20px}
      .tr{font-style:italic;color:#8a6a4a;line-height:1.9;margin-bottom:20px}
      .mn{line-height:1.85;color:#5c3d1e;background:#fdf5dc;padding:16px 20px;border-radius:4px}
      .ft{margin-top:40px;font-size:12px;color:#b8860b}
    </style></head><body>
    <h1>${t('card_verse')} ${verse.id}</h1>
    <div class="kn">${verse.kannada.replace(/\n/g,'<br/>')}</div>
    <div class="tr">${verse.translit.replace(/\n/g,'<br/>')}</div>
    <div class="mn">${verse.meaning}</div>
    <div class="ft">MudduRamana Manasu — K.C. Shivappa</div>
  </body></html>`);
  w.document.close(); w.print();
}

// ---- VERSE CARD ----
function buildVerseCard(verse, onClick) {
  const fav = isFavorite(verse.id);
  const div = document.createElement('div');
  div.className = 'verse-card';
  div.innerHTML = `
    <div class="verse-card-header">
      <span class="verse-number">${t('card_verse')} ${verse.id}</span>
      <div class="verse-tags">
        ${(verse.themes || []).slice(0,2).map(th => `<span class="verse-tag">${th}</span>`).join('')}
      </div>
    </div>
    ${verse.chapter ? `<div class="verse-chapter">${verse.chapter}</div>` : ''}
    <div class="verse-kannada">${verse.kannada.replace(/\n/g,'<br/>')}</div>
    <div class="verse-meaning-preview">${verse.meaning}</div>
    <div class="verse-card-footer">
      <button class="verse-like-btn ${fav ? 'liked' : ''}" data-id="${verse.id}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${fav?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        ${fav ? t('card_saved') : t('card_save')}
      </button>
      <span class="verse-read-link">${t('card_read_more')}</span>
    </div>
  `;
  div.querySelector('.verse-read-link').addEventListener('click', e => { e.stopPropagation(); onClick(verse); });
  div.querySelector('.verse-kannada').addEventListener('click', () => onClick(verse));
  div.querySelector('.verse-meaning-preview').addEventListener('click', () => onClick(verse));
  div.querySelector('.verse-number').addEventListener('click', () => onClick(verse));
  div.querySelector('.verse-like-btn').addEventListener('click', e => {
    e.stopPropagation();
    const nowFav = toggleFavorite(verse.id);
    const btn = e.currentTarget;
    btn.classList.toggle('liked', nowFav);
    btn.querySelector('svg').setAttribute('fill', nowFav ? 'currentColor' : 'none');
    const txt = btn.childNodes[btn.childNodes.length - 1];
    if (txt) txt.textContent = ' ' + (nowFav ? t('card_saved') : t('card_save'));
    showToast(nowFav ? t('toast_saved', {n: verse.id}) : t('toast_removed'));
  });
  return div;
}

// ---- MODAL ----
function openModal(verseId) {
  const idx = filteredVerses.findIndex(v => v.id === verseId);
  if (idx === -1) {
    const gi = VERSES.findIndex(v => v.id === verseId);
    if (gi === -1) return;
    currentModalIndex = gi; filteredVerses = VERSES;
  } else {
    currentModalIndex = idx;
  }
  renderModal();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModal() {
  const verse = filteredVerses[currentModalIndex];
  if (!verse) return;
  const fav = isFavorite(verse.id);
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-verse-number">
      ${t('card_verse')} ${verse.id} ${t('modal_of')} ${VERSES.length}
      ${verse.chapter ? `&nbsp;·&nbsp;<span style="font-family:var(--font-kannada);font-size:0.85rem;color:var(--ink-muted);">${verse.chapter}</span>` : ''}
    </div>
    <div class="modal-kannada">${verse.kannada.replace(/\n/g,'<br/>')}</div>
    <div class="modal-section-label">${t('modal_translit_label')}</div>
    <div class="modal-translit">${verse.translit.replace(/\n/g,'<br/>')}</div>
    <div class="modal-section-label">${t('modal_meaning_label')}</div>
    <div class="modal-meaning">${verse.meaning}</div>
    ${verse.themes?.length ? `<div class="modal-tags">${verse.themes.map(th=>`<span class="verse-tag">${th}</span>`).join('')}</div>` : ''}
    <div class="modal-actions">
      <button class="modal-action-btn ${fav?'liked':''}" id="modalFavBtn" onclick="handleModalFav(${verse.id})">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="${fav?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        ${fav ? t('modal_saved') : t('modal_save')}
      </button>
      <button class="modal-action-btn" onclick="shareVerse(filteredVerses[${currentModalIndex}])">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
        ${t('modal_share')}
      </button>
      <button class="modal-action-btn" onclick="printVerse(filteredVerses[${currentModalIndex}])">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        ${t('modal_print')}
      </button>
    </div>
  `;
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  if (prev) { prev.textContent = t('modal_prev'); prev.disabled = currentModalIndex <= 0; }
  if (next) { next.textContent = t('modal_next'); next.disabled = currentModalIndex >= filteredVerses.length - 1; }
}

function handleModalFav(verseId) {
  const nowFav = toggleFavorite(verseId);
  showToast(nowFav ? t('toast_saved', {n: verseId}) : t('toast_removed'));
  renderModal();
}
function navigateModal(dir) {
  const next = currentModalIndex + dir;
  if (next < 0 || next >= filteredVerses.length) return;
  currentModalIndex = next; renderModal();
}
function closeModal(e) { if (e.target === document.getElementById('modalOverlay')) closeModalDirect(); }
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (!document.getElementById('modalOverlay')?.classList.contains('open')) return;
  if (e.key === 'Escape') closeModalDirect();
  if (e.key === 'ArrowLeft') navigateModal(-1);
  if (e.key === 'ArrowRight') navigateModal(1);
});

// ---- FILTER & SEARCH ----
function filterVerses() {
  const q = (document.getElementById('verseSearch')?.value || '').toLowerCase().trim();
  const theme = document.getElementById('themeFilter')?.value || '';
  const chapter = document.getElementById('chapterFilter')?.value || '';
  const sort = document.getElementById('sortOrder')?.value || 'asc';

  filteredVerses = VERSES.filter(v => {
    const mTheme = !theme || (v.themes?.includes(theme));
    const mChap = !chapter || v.chapter === chapter;
    if (!q) return mTheme && mChap;
    const mText =
      v.kannada?.toLowerCase().includes(q) ||
      v.translit?.toLowerCase().includes(q) ||
      v.meaning?.toLowerCase().includes(q) ||
      String(v.id).includes(q) ||
      v.themes?.some(th => th.toLowerCase().includes(q));
    return mTheme && mChap && mText;
  });

  if (sort === 'desc') filteredVerses = [...filteredVerses].reverse();
  currentPage = 1;
  renderVerseList();
  renderPagination();
  updateResultsInfo();
}

function updateResultsInfo() {
  const info = document.getElementById('resultsInfo');
  if (!info) return;
  info.textContent = filteredVerses.length === VERSES.length
    ? t('results_all', {n: VERSES.length})
    : t('results_filtered', {m: filteredVerses.length, n: VERSES.length});
}

function clearFilters() {
  ['verseSearch','themeFilter','chapterFilter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const s = document.getElementById('sortOrder');
  if (s) s.value = 'asc';
  filterVerses();
}

function jumpToVerse() {
  const n = parseInt(document.getElementById('jumpVerse')?.value);
  if (!n || n < 1 || n > VERSES.length) { showToast(t('toast_invalid')); return; }
  const idx = filteredVerses.findIndex(v => v.id === n);
  if (idx === -1) { showToast(t('toast_not_found', {n})); return; }
  currentPage = Math.floor(idx / VERSES_PER_PAGE) + 1;
  renderVerseList(); renderPagination();
  setTimeout(() => {
    const cards = document.querySelectorAll('.verse-card');
    const ci = idx % VERSES_PER_PAGE;
    if (cards[ci]) cards[ci].scrollIntoView({behavior:'smooth',block:'center'});
  }, 100);
}

function doSearch() {
  const q = document.getElementById('heroSearch')?.value;
  if (!q) return;
  window.location.href = `verses.html?q=${encodeURIComponent(q)}`;
}
document.getElementById('heroSearch')?.addEventListener('keydown', e => { if (e.key==='Enter') doSearch(); });

// ---- RENDER VERSE LIST ----
function renderVerseList() {
  const list = document.getElementById('versesList');
  if (!list) return;
  list.innerHTML = '';
  const start = (currentPage - 1) * VERSES_PER_PAGE;
  const pageVerses = filteredVerses.slice(start, start + VERSES_PER_PAGE);
  if (!pageVerses.length) {
    list.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--ink-muted);font-family:var(--font-serif);font-style:italic;font-size:1.1rem;">${t('no_results')}</div>`;
    return;
  }
  pageVerses.forEach(v => list.appendChild(buildVerseCard(v, verse => openModal(verse.id))));
}

// ---- PAGINATION ----
function renderPagination() {
  const pag = document.getElementById('pagination');
  if (!pag) return;
  const total = Math.ceil(filteredVerses.length / VERSES_PER_PAGE);
  pag.innerHTML = '';
  if (total <= 1) return;

  const mk = (label, disabled, onClick, active=false, nav=false) => {
    const b = document.createElement('button');
    b.className = `page-btn${active?' active':''}${nav?' nav-page':''}`;
    b.textContent = label; b.disabled = disabled;
    if (!disabled) b.addEventListener('click', onClick);
    return b;
  };

  pag.appendChild(mk(t('modal_prev').replace('←','←'), currentPage<=1, () => {
    currentPage--; renderVerseList(); renderPagination(); scrollTo({top:0,behavior:'smooth'});
  }, false, true));

  getPaginationPages(currentPage, total).forEach(p => {
    if (p === '...') {
      const e = document.createElement('button');
      e.className = 'page-btn ellipsis'; e.textContent = '…'; pag.appendChild(e);
    } else {
      pag.appendChild(mk(p, false, () => {
        currentPage = p; renderVerseList(); renderPagination(); scrollTo({top:0,behavior:'smooth'});
      }, p === currentPage));
    }
  });

  pag.appendChild(mk(t('modal_next').replace('→','→'), currentPage>=total, () => {
    currentPage++; renderVerseList(); renderPagination(); scrollTo({top:0,behavior:'smooth'});
  }, false, true));
}

function getPaginationPages(cur, total) {
  if (total <= 7) return Array.from({length:total},(_,i)=>i+1);
  const p = [1];
  if (cur > 3) p.push('...');
  for (let i=Math.max(2,cur-1); i<=Math.min(total-1,cur+1); i++) p.push(i);
  if (cur < total-2) p.push('...');
  p.push(total);
  return p;
}

// ---- FEATURED GRID ----
function renderFeaturedGrid() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = '';
  filteredVerses = VERSES;
  const toShow = FEATURED_VERSES.length ? FEATURED_VERSES : VERSES.slice(0,6);
  toShow.forEach(v => grid.appendChild(buildVerseCard(v, verse => openModal(verse.id))));
}

// ---- RANDOM VERSE ----
let _lastRandom = null;
function renderRandomVerse() {
  const el = document.getElementById('randomVerse');
  if (!el || !VERSES.length) return;
  let v;
  do { v = VERSES[Math.floor(Math.random() * VERSES.length)]; } while (v === _lastRandom && VERSES.length > 1);
  _lastRandom = v;
  el.innerHTML = `
    <span class="verse-number">${t('card_verse')} ${v.id}</span>
    <div class="verse-kannada">${v.kannada.replace(/\n/g,'<br/>')}</div>
    <div class="verse-translit">${v.translit.replace(/\n/g,'<br/>')}</div>
    <div class="verse-meaning">${v.meaning}</div>
  `;
  el.style.cursor = 'pointer';
  el.onclick = () => { filteredVerses = VERSES; openModal(v.id); };
}

// ---- FAVORITES PAGE ----
function renderFavoritesPage() {
  const el = document.getElementById('favoritesContent');
  if (!el) return;
  el.innerHTML = '';
  const favIds = getFavorites();
  const favVerses = VERSES.filter(v => favIds.includes(v.id));
  filteredVerses = favVerses.length ? favVerses : VERSES;

  if (!favVerses.length) {
    el.innerHTML = `
      <div class="favorites-empty">
        <div class="empty-icon">🤍</div>
        <h2>${t('fav_empty_title')}</h2>
        <p>${t('fav_empty_desc')}</p>
        <a href="verses.html" class="btn-primary">${t('fav_empty_btn')}</a>
      </div>`;
    return;
  }
  const n = favVerses.length;
  const header = document.createElement('p');
  header.style.cssText = 'font-family:var(--font-display);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:24px;';
  header.textContent = n === 1 ? t('fav_count_one') : t('fav_count_many', {n});
  el.appendChild(header);
  const grid = document.createElement('div');
  grid.className = 'verses-list';
  favVerses.forEach(v => grid.appendChild(buildVerseCard(v, verse => openModal(verse.id))));
  el.appendChild(grid);
}

// ---- POPULATE FILTERS ----
function populateThemeFilter() {
  const sel = document.getElementById('themeFilter');
  if (!sel) return;
  // Clear old options except first
  while (sel.options.length > 1) sel.remove(1);
  ALL_THEMES.forEach(th => {
    const o = document.createElement('option');
    o.value = th; o.textContent = th; sel.appendChild(o);
  });
}
function populateChapterFilter() {
  const sel = document.getElementById('chapterFilter');
  if (!sel) return;
  while (sel.options.length > 1) sel.remove(1);
  ALL_CHAPTERS.forEach(ch => {
    const o = document.createElement('option');
    o.value = ch; o.textContent = ch; sel.appendChild(o);
  });
}

// ---- RE-RENDER ALL (called after lang switch) ----
function rerenderAll() {
  // Verse list
  if (document.getElementById('versesList')) {
    renderVerseList();
    renderPagination();
    updateResultsInfo();
    populateThemeFilter();
    populateChapterFilter();
  }
  // Featured
  renderFeaturedGrid();
  // Random verse (keep same verse, just update labels)
  if (_lastRandom) {
    const el = document.getElementById('randomVerse');
    if (el) {
      el.querySelector('.verse-number').textContent = `${t('card_verse')} ${_lastRandom.id}`;
    }
  }
  // Favorites
  renderFavoritesPage();
  // Modal (if open)
  if (document.getElementById('modalOverlay')?.classList.contains('open')) {
    renderModal();
  }
}

// ---- NAV ----
document.getElementById('navBurger')?.addEventListener('click', () => {
  document.getElementById('navMobile')?.classList.toggle('open');
});
window.addEventListener('scroll', () => {
  document.getElementById('mainNav')?.classList.toggle('scrolled', scrollY > 10);
});

// ---- URL PARAMS ----
function getUrlParam(k) { return new URLSearchParams(location.search).get(k); }

// ---- INIT ----
function init() {
  // Theme
  applyTheme(getTheme());
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

  // Lang toggle
  document.getElementById('langToggle')?.addEventListener('click', toggleLang);

  // Apply initial lang (data-i18n elements)
  applyLang();

  // Verse count displays
  document.querySelectorAll('#totalVerses,#verseCount').forEach(el => el.textContent = VERSES.length);

  // Homepage
  renderFeaturedGrid();
  renderRandomVerse();

  // Verses page
  if (document.getElementById('versesList')) {
    filteredVerses = [...VERSES];
    populateThemeFilter();
    populateChapterFilter();
    const q = getUrlParam('q');
    if (q) {
      const s = document.getElementById('verseSearch');
      if (s) s.value = q;
    }
    filterVerses();
  }

  // Favorites page
  renderFavoritesPage();
}

document.addEventListener('DOMContentLoaded', init);
