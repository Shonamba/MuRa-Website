/**
 * MudduRamana Manasu — App
 * All strings via t() from i18n.js
 * Load order: data.js → i18n.js → app.js
 */

// ── THEME ─────────────────────────────────────────────────────────────────────
function getTheme() { return localStorage.getItem('mrm_theme') || 'light'; }

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  var btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('mrm_theme', theme);
}

function toggleTheme() { applyTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

// ── CONFIG ────────────────────────────────────────────────────────────────────
var VERSES_PER_PAGE  = 24;
var currentPage      = 1;
var filteredVerses   = [];
var currentModalIdx  = 0;
var _lastRandomVerse = null;

// ── FAVORITES ─────────────────────────────────────────────────────────────────
function getFavs() {
  try { return JSON.parse(localStorage.getItem('mrm_favorites') || '[]'); } catch(e) { return []; }
}
function saveFavs(a) { localStorage.setItem('mrm_favorites', JSON.stringify(a)); }
function isFav(id)   { return getFavs().indexOf(id) > -1; }
function toggleFav(id) {
  var a = getFavs(), i = a.indexOf(id);
  if (i > -1) a.splice(i, 1); else a.push(id);
  saveFavs(a);
  return a.indexOf(id) > -1;
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast(msg) {
  var el = document.getElementById('toastEl');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toastEl'; el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(function() { el.classList.remove('show'); }, 2600);
}

// ── SHARE / PRINT ─────────────────────────────────────────────────────────────
function shareVerse(verse) {
  var text = 'MudduRamana Manasu — ' + t('card_verse') + ' ' + verse.id + '\n\n' + verse.kannada + '\n\n' + verse.meaning;
  if (navigator.share) {
    navigator.share({ title: 'MudduRamana Manasu — ' + t('card_verse') + ' ' + verse.id, text: text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() { showToast(t('toast_copied')); });
  }
}

function printVerse(verse) {
  var w = window.open('', '_blank');
  w.document.write('<!DOCTYPE html><html><head>'
    + '<title>MudduRamana Manasu — ' + t('card_verse') + ' ' + verse.id + '</title>'
    + '<link href="https://fonts.googleapis.com/css2?family=Tiro+Kannada&family=Crimson+Pro:ital@0;1&display=swap" rel="stylesheet"/>'
    + '<style>body{font-family:\'Crimson Pro\',serif;max-width:600px;margin:40px auto;color:#2c1a0e}'
    + 'h1{font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#b8860b;margin-bottom:24px}'
    + '.kn{font-family:\'Tiro Kannada\',serif;font-size:1.1rem;line-height:2.2;border-left:3px solid #b8860b;padding-left:16px;margin-bottom:20px}'
    + '.tr{font-style:italic;color:#8a6a4a;line-height:1.9;margin-bottom:20px}'
    + '.mn{line-height:1.85;color:#5c3d1e;background:#fdf5dc;padding:16px 20px;border-radius:4px}'
    + '.ft{margin-top:40px;font-size:12px;color:#b8860b}</style></head><body>'
    + '<h1>' + t('card_verse') + ' ' + verse.id + '</h1>'
    + '<div class="kn">' + verse.kannada.replace(/\n/g,'<br/>') + '</div>'
    + '<div class="tr">' + verse.translit.replace(/\n/g,'<br/>') + '</div>'
    + '<div class="mn">' + verse.meaning + '</div>'
    + '<div class="ft">MudduRamana Manasu — K.C. Shivappa</div>'
    + '</body></html>');
  w.document.close(); w.print();
}

// ── VERSE CARD ────────────────────────────────────────────────────────────────
function buildVerseCard(verse, onClick) {
  var fav = isFav(verse.id);
  var div = document.createElement('div');
  div.className = 'verse-card';

  var tagsHtml = (verse.themes || []).slice(0,2).map(function(th) {
    return '<span class="verse-tag">' + th + '</span>';
  }).join('');

  div.innerHTML =
    '<div class="verse-card-header">'
    +   '<span class="verse-number">' + t('card_verse') + ' ' + verse.id + '</span>'
    +   '<div class="verse-tags">' + tagsHtml + '</div>'
    + '</div>'
    + (verse.chapter ? '<div class="verse-chapter">' + verse.chapter + '</div>' : '')
    + '<div class="verse-kannada">' + verse.kannada.replace(/\n/g,'<br/>') + '</div>'
    + '<div class="verse-meaning-preview">' + verse.meaning + '</div>'
    + '<div class="verse-card-footer">'
    +   '<button class="verse-like-btn' + (fav ? ' liked' : '') + '" data-id="' + verse.id + '">'
    +     '<svg width="16" height="16" viewBox="0 0 24 24" fill="' + (fav ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2">'
    +     '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
    +     ' <span class="like-label">' + (fav ? t('card_saved') : t('card_save')) + '</span>'
    +   '</button>'
    +   '<span class="verse-read-link">' + t('card_read_more') + '</span>'
    + '</div>';

  // Clicks
  function openThis() { onClick(verse); }
  div.querySelector('.verse-kannada').addEventListener('click', openThis);
  div.querySelector('.verse-meaning-preview').addEventListener('click', openThis);
  div.querySelector('.verse-number').addEventListener('click', openThis);
  div.querySelector('.verse-read-link').addEventListener('click', function(e) { e.stopPropagation(); openThis(); });

  div.querySelector('.verse-like-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    var now = toggleFav(verse.id);
    var btn = e.currentTarget;
    btn.classList.toggle('liked', now);
    btn.querySelector('svg').setAttribute('fill', now ? 'currentColor' : 'none');
    btn.querySelector('.like-label').textContent = now ? t('card_saved') : t('card_save');
    showToast(now ? t('toast_saved', {n: verse.id}) : t('toast_removed'));
  });

  return div;
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
function openModal(verseId) {
  var idx = filteredVerses.findIndex(function(v) { return v.id === verseId; });
  if (idx === -1) {
    var gi = VERSES.findIndex(function(v) { return v.id === verseId; });
    if (gi === -1) return;
    filteredVerses = VERSES;
    currentModalIdx = gi;
  } else {
    currentModalIdx = idx;
  }
  renderModal();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModal() {
  var verse = filteredVerses[currentModalIdx];
  if (!verse) return;
  var fav = isFav(verse.id);
  var tagsHtml = verse.themes && verse.themes.length
    ? '<div class="modal-tags">' + verse.themes.map(function(th) { return '<span class="verse-tag">' + th + '</span>'; }).join('') + '</div>'
    : '';
  var chapHtml = verse.chapter
    ? ' &nbsp;·&nbsp; <span style="font-family:var(--font-kannada);font-size:0.85rem;color:var(--ink-muted);">' + verse.chapter + '</span>'
    : '';

  document.getElementById('modalContent').innerHTML =
    '<div class="modal-verse-number">' + t('card_verse') + ' ' + verse.id + ' ' + t('modal_of') + ' ' + VERSES.length + chapHtml + '</div>'
    + '<div class="modal-kannada">' + verse.kannada.replace(/\n/g,'<br/>') + '</div>'
    + '<div class="modal-section-label">' + t('modal_translit_label') + '</div>'
    + '<div class="modal-translit">' + verse.translit.replace(/\n/g,'<br/>') + '</div>'
    + '<div class="modal-section-label">' + t('modal_meaning_label') + '</div>'
    + '<div class="modal-meaning">' + verse.meaning + '</div>'
    + tagsHtml
    + '<div class="modal-actions">'
    +   '<button class="modal-action-btn' + (fav?' liked':'') + '" id="modalFavBtn" onclick="handleModalFav(' + verse.id + ')">'
    +     '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + (fav?'currentColor':'none') + '" stroke="currentColor" stroke-width="2">'
    +     '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> '
    +     (fav ? t('modal_saved') : t('modal_save'))
    +   '</button>'
    +   '<button class="modal-action-btn" onclick="shareVerse(filteredVerses[' + currentModalIdx + '])">'
    +     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> '
    +     t('modal_share')
    +   '</button>'
    +   '<button class="modal-action-btn" onclick="printVerse(filteredVerses[' + currentModalIdx + '])">'
    +     '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg> '
    +     t('modal_print')
    +   '</button>'
    + '</div>';

  var prev = document.getElementById('prevBtn');
  var next = document.getElementById('nextBtn');
  if (prev) { prev.textContent = t('modal_prev'); prev.disabled = currentModalIdx <= 0; }
  if (next) { next.textContent = t('modal_next'); next.disabled = currentModalIdx >= filteredVerses.length - 1; }
}

function handleModalFav(verseId) {
  var now = toggleFav(verseId);
  showToast(now ? t('toast_saved', {n: verseId}) : t('toast_removed'));
  renderModal();
}

function navigateModal(dir) {
  var next = currentModalIdx + dir;
  if (next < 0 || next >= filteredVerses.length) return;
  currentModalIdx = next; renderModal();
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  var overlay = document.getElementById('modalOverlay');
  if (!overlay || !overlay.classList.contains('open')) return;
  if (e.key === 'Escape')      closeModalDirect();
  if (e.key === 'ArrowLeft')   navigateModal(-1);
  if (e.key === 'ArrowRight')  navigateModal(1);
});

// ── FILTER & SEARCH ───────────────────────────────────────────────────────────
function filterVerses() {
  var q       = ((document.getElementById('verseSearch') || {}).value || '').toLowerCase().trim();
  var theme   = (document.getElementById('themeFilter')   || {}).value || '';
  var chapter = (document.getElementById('chapterFilter') || {}).value || '';
  var sort    = (document.getElementById('sortOrder')     || {}).value || 'asc';

  filteredVerses = VERSES.filter(function(v) {
    var mT = !theme   || (v.themes  && v.themes.indexOf(theme) > -1);
    var mC = !chapter || v.chapter === chapter;
    if (!q) return mT && mC;
    var mQ = (v.kannada  && v.kannada.toLowerCase().indexOf(q)  > -1)
          || (v.translit && v.translit.toLowerCase().indexOf(q) > -1)
          || (v.meaning  && v.meaning.toLowerCase().indexOf(q)  > -1)
          || (String(v.id).indexOf(q) > -1)
          || (v.themes   && v.themes.some(function(th) { return th.toLowerCase().indexOf(q) > -1; }));
    return mT && mC && mQ;
  });

  if (sort === 'desc') filteredVerses = filteredVerses.slice().reverse();
  currentPage = 1;
  renderVerseList();
  renderPagination();
  updateResultsInfo();
}

function updateResultsInfo() {
  var el = document.getElementById('resultsInfo');
  if (!el) return;
  el.textContent = filteredVerses.length === VERSES.length
    ? t('results_all',      {n: VERSES.length})
    : t('results_filtered', {m: filteredVerses.length, n: VERSES.length});
}

function clearFilters() {
  ['verseSearch','themeFilter','chapterFilter'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });
  var s = document.getElementById('sortOrder');
  if (s) s.value = 'asc';
  filterVerses();
}

function jumpToVerse() {
  var n = parseInt((document.getElementById('jumpVerse') || {}).value);
  if (!n || n < 1 || n > VERSES.length) { showToast(t('toast_invalid')); return; }
  var idx = -1;
  for (var i = 0; i < filteredVerses.length; i++) { if (filteredVerses[i].id === n) { idx = i; break; } }
  if (idx === -1) { showToast(t('toast_not_found', {n: n})); return; }
  currentPage = Math.floor(idx / VERSES_PER_PAGE) + 1;
  renderVerseList(); renderPagination();
  setTimeout(function() {
    var cards = document.querySelectorAll('.verse-card');
    var ci = idx % VERSES_PER_PAGE;
    if (cards[ci]) cards[ci].scrollIntoView({behavior:'smooth', block:'center'});
  }, 100);
}

function doSearch() {
  var el = document.getElementById('heroSearch');
  if (!el || !el.value) return;
  window.location.href = 'verses.html?q=' + encodeURIComponent(el.value);
}

// ── RENDER VERSE LIST ─────────────────────────────────────────────────────────
function renderVerseList() {
  var list = document.getElementById('versesList');
  if (!list) return;
  list.innerHTML = '';
  var start = (currentPage - 1) * VERSES_PER_PAGE;
  var page  = filteredVerses.slice(start, start + VERSES_PER_PAGE);
  if (!page.length) {
    var msg = document.createElement('div');
    msg.style.cssText = 'grid-column:1/-1;text-align:center;padding:60px 0;color:var(--ink-muted);font-family:var(--font-serif);font-style:italic;font-size:1.1rem;';
    msg.textContent = t('no_results');
    list.appendChild(msg);
    return;
  }
  page.forEach(function(v) {
    list.appendChild(buildVerseCard(v, function(verse) { openModal(verse.id); }));
  });
}

// ── PAGINATION ────────────────────────────────────────────────────────────────
function renderPagination() {
  var pag = document.getElementById('pagination');
  if (!pag) return;
  pag.innerHTML = '';
  var total = Math.ceil(filteredVerses.length / VERSES_PER_PAGE);
  if (total <= 1) return;

  function mkBtn(label, disabled, active, nav, onClick) {
    var b = document.createElement('button');
    b.className = 'page-btn' + (active?' active':'') + (nav?' nav-page':'');
    b.textContent = label;
    b.disabled = !!disabled;
    if (!disabled && onClick) b.addEventListener('click', onClick);
    return b;
  }

  pag.appendChild(mkBtn('← Prev', currentPage <= 1, false, true, function() {
    currentPage--; renderVerseList(); renderPagination(); scrollTo({top:0,behavior:'smooth'});
  }));

  getPaginationPages(currentPage, total).forEach(function(p) {
    if (p === '...') {
      var e = document.createElement('button');
      e.className = 'page-btn ellipsis'; e.textContent = '…'; pag.appendChild(e);
    } else {
      pag.appendChild(mkBtn(p, false, p === currentPage, false, function() {
        currentPage = p; renderVerseList(); renderPagination(); scrollTo({top:0,behavior:'smooth'});
      }));
    }
  });

  pag.appendChild(mkBtn('Next →', currentPage >= total, false, true, function() {
    currentPage++; renderVerseList(); renderPagination(); scrollTo({top:0,behavior:'smooth'});
  }));
}

function getPaginationPages(cur, total) {
  if (total <= 7) {
    var p = []; for (var i=1;i<=total;i++) p.push(i); return p;
  }
  var pages = [1];
  if (cur > 3) pages.push('...');
  for (var i = Math.max(2, cur-1); i <= Math.min(total-1, cur+1); i++) pages.push(i);
  if (cur < total-2) pages.push('...');
  pages.push(total);
  return pages;
}

// ── FEATURED GRID ─────────────────────────────────────────────────────────────
function renderFeaturedGrid() {
  var grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = '';
  filteredVerses = VERSES;
  var toShow = (FEATURED_VERSES && FEATURED_VERSES.length) ? FEATURED_VERSES : VERSES.slice(0, 6);
  toShow.forEach(function(v) {
    grid.appendChild(buildVerseCard(v, function(verse) { openModal(verse.id); }));
  });
}

// ── RANDOM VERSE ─────────────────────────────────────────────────────────────
function renderRandomVerse() {
  var el = document.getElementById('randomVerse');
  if (!el || !VERSES || !VERSES.length) return;
  var v;
  do { v = VERSES[Math.floor(Math.random() * VERSES.length)]; }
  while (v === _lastRandomVerse && VERSES.length > 1);
  _lastRandomVerse = v;

  el.innerHTML =
    '<span class="verse-number">' + t('card_verse') + ' ' + v.id + '</span>'
    + '<div class="verse-kannada">' + v.kannada.replace(/\n/g,'<br/>') + '</div>'
    + '<div class="verse-translit">' + v.translit.replace(/\n/g,'<br/>') + '</div>'
    + '<div class="verse-meaning">' + v.meaning + '</div>';

  el.style.cursor = 'pointer';
  el.onclick = function() { filteredVerses = VERSES; openModal(v.id); };
}

// ── FAVORITES PAGE ────────────────────────────────────────────────────────────
function renderFavoritesPage() {
  var el = document.getElementById('favoritesContent');
  if (!el) return;
  el.innerHTML = '';
  var favIds = getFavs();
  var favVerses = VERSES.filter(function(v) { return favIds.indexOf(v.id) > -1; });
  filteredVerses = favVerses.length ? favVerses : VERSES;

  if (!favVerses.length) {
    el.innerHTML =
      '<div class="favorites-empty">'
      + '<div class="empty-icon">🤍</div>'
      + '<h2>' + t('fav_empty_title') + '</h2>'
      + '<p>' + t('fav_empty_desc') + '</p>'
      + '<a href="verses.html" class="btn-primary">' + t('fav_empty_btn') + '</a>'
      + '</div>';
    return;
  }

  var n = favVerses.length;
  var hdr = document.createElement('p');
  hdr.style.cssText = 'font-family:var(--font-display);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-muted);margin-bottom:24px;';
  hdr.textContent = n === 1 ? t('fav_count_one') : t('fav_count_many', {n: n});
  el.appendChild(hdr);

  var grid = document.createElement('div');
  grid.className = 'verses-list';
  favVerses.forEach(function(v) {
    grid.appendChild(buildVerseCard(v, function(verse) { openModal(verse.id); }));
  });
  el.appendChild(grid);
}

// ── POPULATE FILTER SELECTS ───────────────────────────────────────────────────
function populateThemeFilter() {
  var sel = document.getElementById('themeFilter');
  if (!sel) return;
  while (sel.options.length > 1) sel.remove(1);
  ALL_THEMES.forEach(function(th) {
    var o = document.createElement('option'); o.value = th; o.textContent = th; sel.appendChild(o);
  });
}

function populateChapterFilter() {
  var sel = document.getElementById('chapterFilter');
  if (!sel) return;
  while (sel.options.length > 1) sel.remove(1);
  ALL_CHAPTERS.forEach(function(ch) {
    var o = document.createElement('option'); o.value = ch; o.textContent = ch; sel.appendChild(o);
  });
}

// ── RE-RENDER ALL (called by applyLang after language switch) ─────────────────
window.rerenderAll = function() {
  renderFeaturedGrid();

  // Update random verse label only (keep same verse content)
  var rn = document.getElementById('randomVerse');
  if (rn && _lastRandomVerse) {
    var numEl = rn.querySelector('.verse-number');
    if (numEl) numEl.textContent = t('card_verse') + ' ' + _lastRandomVerse.id;
  }

  if (document.getElementById('versesList')) {
    renderVerseList();
    renderPagination();
    updateResultsInfo();
  }

  renderFavoritesPage();

  if (document.getElementById('modalOverlay') &&
      document.getElementById('modalOverlay').classList.contains('open')) {
    renderModal();
  }
};

// ── NAV ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  var burger  = document.getElementById('navBurger');
  var mobile  = document.getElementById('navMobile');
  if (burger && mobile) burger.addEventListener('click', function() { mobile.classList.toggle('open'); });

  window.addEventListener('scroll', function() {
    var nav = document.getElementById('mainNav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
  });

  var heroSearch = document.getElementById('heroSearch');
  if (heroSearch) heroSearch.addEventListener('keydown', function(e) { if (e.key==='Enter') doSearch(); });
});

// ── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // 1. Theme
  applyTheme(getTheme());
  var tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', toggleTheme);

  // 2. Lang toggle wiring
  var lt = document.getElementById('langToggle');
  if (lt) lt.addEventListener('click', toggleLang);

  // 3. Apply language (updates data-i18n elements + button label)
  applyLang();

  // 4. Verse count badges
  document.querySelectorAll('#totalVerses,#verseCount').forEach(function(el) {
    el.textContent = VERSES.length;
  });

  // 5. Homepage
  renderFeaturedGrid();
  renderRandomVerse();

  // 6. Verses page
  if (document.getElementById('versesList')) {
    filteredVerses = VERSES.slice();
    populateThemeFilter();
    populateChapterFilter();
    var q = new URLSearchParams(window.location.search).get('q');
    if (q) {
      var se = document.getElementById('verseSearch');
      if (se) se.value = q;
    }
    filterVerses();
  }

  // 7. Favorites page
  renderFavoritesPage();
});
