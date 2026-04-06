/**
 * MudduRamana Manasu — i18n Engine
 * Two languages: English (en) | ಕನ್ನಡ (kn)
 *
 * Usage:
 *   getLang()     → 'en' | 'kn'
 *   t('key')      → translated string (with optional {n} substitution)
 *   setLang('kn') → saves + re-renders everything
 *
 * In HTML:
 *   data-i18n="key"               → sets textContent
 *   data-i18n-attr="placeholder"  → sets that attribute instead
 *   data-i18n-html="key"          → sets innerHTML (for rich text / <em> etc.)
 *   data-i18n-n="1100"            → passes {n} substitution variable
 */

window.TRANSLATIONS = {
  en: {
    // ── NAV ──────────────────────────────────────────────
    nav_home:      'Home',
    nav_verses:    'All Verses',
    nav_about:     'About',
    nav_favorites: 'Favorites',
    nav_logo_sub:  'MudduRamana Manasu',

    // ── HERO ─────────────────────────────────────────────
    hero_subtitle:   'A Treasure of Kannada Literature',
    hero_title_en:   'MudduRamana Manasu',
    hero_author_pre: 'by',
    hero_desc:       'A profound collection of 1100 four-line verses exploring devotion, the human heart, and the eternal quest for meaning.',
    stat_verses_lbl: 'Verses',
    stat_chapters_lbl: 'Chapters',
    stat_themes_lbl: 'Themes',
    stat_access_val: 'Free',
    stat_access_lbl: 'Access',
    cta_read:        'Read All Verses',
    cta_explore:     'Explore Featured',
    scroll_hint:     'Scroll',

    // ── SEARCH ───────────────────────────────────────────
    search_ph:  'Search verses by keyword, theme, or verse number…',
    search_btn: 'Search',

    // ── FEATURES SECTION ─────────────────────────────────
    features_title:    'Complete MudduRamana Manasu Experience',
    features_subtitle: "Explore K.C. Shivappa's timeless wisdom through our comprehensive digital platform",
    feat1_title: '1100 Complete Verses',
    feat1_desc:  'Full collection with original Kannada script, transliteration, and detailed meanings for every verse.',
    feat2_title: 'Search & Filter',
    feat2_desc:  'Find verses by theme, chapter, keyword, or verse number — perfect for students and researchers.',
    feat3_title: 'Save Favorites',
    feat3_desc:  'Like and bookmark your favourite verses. Build your personal collection of meaningful wisdom.',
    feat4_title: 'Light & Dark Mode',
    feat4_desc:  'Read comfortably any time of day with beautiful themes designed for Kannada script.',

    // ── FEATURED SECTION ─────────────────────────────────
    featured_title:    'Featured Verses',
    featured_subtitle: 'Begin your journey with these timeless verses',
    featured_cta:      'Explore All 1100 Verses →',

    // ── ABOUT DUO (homepage) ─────────────────────────────
    about_duo_title:    'About the Work & the Poet',
    about_duo_subtitle: 'The book and the voice behind it',
    about_book_label:   'The Work',
    about_book_title:   'MudduRamana Manasu',
    about_book_hl:      'ಮುದ್ದುರಾಮನ ಮನಸು — The Heart of Beloved Rama',
    about_book_p1:      'MudduRamana Manasu is a collection of 1100 four-line verses (chatushpadi) in the grand tradition of Kannada philosophical poetry. Each verse is a standalone meditation — on devotion, nature, love, fate, and the mystery of existence.',
    about_book_p2:      'Organised across 18 chapters — from ಗುರುವೆನಗೆ ಶ್ರೀರಕ್ಷೆ (Blessing of the Guru) to ಮೌನ ಸುಂದರ ಭಾಷೆ (The Beauty of Silence) — the work moves through the full range of human experience with rare lyrical grace.',
    about_book_more:    'Read More →',
    about_auth_label:   'The Poet',
    about_auth_title:   'K.C. Shivappa',
    about_auth_hl:      'ಕೆ.ಸಿ. ಶಿವಪ್ಪ — Poet, Philosopher, Kannada Voice',
    about_auth_p1:      "K.C. Shivappa is the author of MudduRamana Manasu, a distinguished contribution to modern Kannada literary tradition. Following in the footsteps of great poet-philosophers like D.V. Gundappa, Shivappa brings a deeply personal and reflective voice to the four-line verse form.",
    about_auth_p2:      'His verses move between classical Kannada resonance and everyday clarity — making profound philosophical thought accessible to all readers, from scholars to those seeking meaning.',
    about_auth_more:    'Read More →',

    // ── RANDOM VERSE ─────────────────────────────────────
    rand_label: 'Verse of the Moment',
    rand_title: 'A Random Verse',
    rand_p1:    'Each reading of MudduRamana Manasu opens a new door. Click the verse to read its full transliteration and meaning, or discover another.',
    rand_p2:    'Like the best philosophical poetry, these verses grow with you — their meaning deepening with every re-reading as life brings new experience.',
    rand_btn:   'Another Verse →',

    // ── VERSE CARD ───────────────────────────────────────
    card_verse:     'Verse',
    card_save:      'Save',
    card_saved:     'Saved',
    card_read_more: 'Read More →',

    // ── MODAL ────────────────────────────────────────────
    modal_of:             'of',
    modal_translit_label: 'Transliteration',
    modal_meaning_label:  'Meaning',
    modal_save:           'Save to Favorites',
    modal_saved:          'Saved',
    modal_share:          'Share',
    modal_print:          'Print',
    modal_prev:           '← Previous',
    modal_next:           'Next →',

    // ── VERSES PAGE ──────────────────────────────────────
    page_verses_title:    'All Verses',
    page_verses_sub:      'Complete collection of {n} verses from MudduRamana Manasu',
    filter_search_ph:     'Search verses…',
    filter_jump_label:    'Jump to verse:',
    filter_jump_ph:       '1–1100',
    filter_jump_go:       'Go',
    filter_theme_label:   'Theme:',
    filter_theme_all:     'All Themes',
    filter_chapter_label: 'Chapter:',
    filter_chapter_all:   'All Chapters',
    filter_sort_label:    'Sort:',
    filter_sort_asc:      '1 → 1100',
    filter_sort_desc:     '1100 → 1',
    filter_clear:         'Clear',
    results_all:          'Showing all {n} verses',
    results_filtered:     'Showing {m} of {n} verses',
    no_results:           'No verses found. Try a different search.',

    // ── FAVORITES PAGE ───────────────────────────────────
    page_fav_title:  'My Favorites',
    page_fav_sub:    'Your personal collection of saved verses',
    fav_empty_title: 'No favorites yet',
    fav_empty_desc:  'Tap the heart icon on any verse to save it here for quick access.',
    fav_empty_btn:   'Browse All Verses',
    fav_count_one:   '1 saved verse',
    fav_count_many:  '{n} saved verses',

    // ── ABOUT PAGE ───────────────────────────────────────
    page_about_title:         'About',
    page_about_sub:           'The book, the author, the tradition, and this repository',
    about_s_book_title:       'About MudduRamana Manasu',
    about_s_book_p1:          'MudduRamana Manasu — literally "The Heart (Mind) of Beloved Rama" — is a remarkable collection of 1100 four-line verses (chatushpadi) written by K.C. Shivappa. In the grand tradition of Kannada philosophical poetry — most famously exemplified by DVG\'s Mankutimmana Kagga — each verse is a self-contained meditation on life, love, devotion, nature, and the eternal questions of human existence.',
    about_s_book_p2:          'The work is organised into <strong>18 chapters</strong>, each carrying a Kannada title that sets its thematic mood — from <em>ಗುರುವೆನಗೆ ಶ್ರೀರಕ್ಷೆ</em> (The Guru\'s Blessing) and <em>ಸೃಷ್ಟಿ ಕೌತುಕದೊಡಲು</em> (The Wondrous Body of Creation) to <em>ಸಾವೆಂದರೇಕೆ ಭಯ</em> (Why Fear Death?) and <em>ಮೌನ ಸುಂದರ ಭಾಷೆ</em> (Silence, the Beautiful Language). Together they trace the full arc of a contemplative human life.',
    about_s_book_p3:          'Each verse consists of four lines following classical Kannada prosodic conventions. The work is written with a lyrical intimacy that has made it beloved among readers of Kannada literature. Like the great philosophical kavyas of Karnataka, the verses can be read in sequence or opened at random — each one yielding its own complete world of meaning.',
    about_s_book_p4:          "The title's invocation of <em>Muddu Rama</em> — Beloved Rama — anchors the work in the devotional tradition while simultaneously opening it to universal philosophical inquiry. This tension between the personal and the cosmic is what gives the work its enduring power.",
    about_s_auth_title:       'About K.C. Shivappa',
    about_s_auth_p1:          'K.C. Shivappa (ಕೆ.ಸಿ. ಶಿವಪ್ಪ) is the author of MudduRamana Manasu, a distinguished contribution to modern Kannada literary tradition. Writing in the beloved four-line verse form, Shivappa brings a voice that is at once classical in its sensibility and deeply personal in its expression.',
    about_s_auth_p2:          'The verses of MudduRamana Manasu reflect a lifetime of reflection — on the nature of the divine, the texture of human relationships, the passage of time, and the search for inner peace. Unlike more distant philosophical treatises, Shivappa\'s poetry speaks with the directness of lived experience: a friend thinking aloud, a sage pausing mid-walk to share a thought.',
    about_s_auth_p3:          "Shivappa's language moves fluidly between the richness of classical Kannada vocabulary and the clarity of everyday speech, making the work accessible to scholars and first-time readers alike.",
    about_s_auth_p4:          "The poet's choice of <em>Muddu Rama</em> — a name that carries both devotional warmth and philosophical weight — as the presiding spirit speaks to a vision of the divine that is intimate rather than distant, loving rather than austere.",
    about_s_trad_title:       'The Tradition: Kannada Philosophical Verse',
    about_s_trad_p1:          "Karnataka has a long and distinguished tradition of four-line philosophical verse — from the Vachanas of the 12th-century Basavanna and the Sharanas, to the Keertanas of Purandaradasa, to DVG's landmark Mankutimmana Kagga (1943). These short, standalone poems became a beloved vehicle for profound thought precisely because of their brevity.",
    about_s_trad_p2:          'The four-line form demands extraordinary compression. Every word must carry weight; every line must earn its place. This is not a form for padding or ornamentation — it rewards and requires deep thought.',
    about_s_trad_p3:          "MudduRamana Manasu belongs to this tradition. It carries the DNA of the Vachana and the Kagga — the questioning spirit, the devotional undertone, and the deep conviction that poetry is not decoration but a primary mode of understanding the world.",
    about_s_repo_title:       'About This Repository',
    about_s_repo_p1:          'This website was built to make MudduRamana Manasu freely and beautifully accessible to all — whether you are a Kannada scholar, a student, a devotee, or simply someone drawn to philosophical poetry. Every verse is presented with the original Kannada text, transliteration, and English meaning.',
    about_s_repo_p2:          'This is a labour of love for Kannada literature. There are no advertisements, no paywalls, and no registration required. Just poetry, presented with care.',
    about_s_repo_p3:          'If you love what you read here, please consider finding and purchasing the original published book to support the work of K.C. Shivappa and the publishers who brought this collection to the world.',

    // ── FOOTER ───────────────────────────────────────────
    footer_brand_desc:  "A comprehensive digital repository dedicated to preserving and sharing the profound wisdom of K.C. Shivappa's MudduRamana Manasu — freely accessible to all lovers of Kannada literature.",
    footer_quick_links: 'Quick Links',
    footer_resources:   'Resources',
    footer_lnk_home:    'Home',
    footer_lnk_verses:  'All Verses',
    footer_lnk_favs:    'My Favorites',
    footer_lnk_book:    'About the Book',
    footer_lnk_author:  'About K.C. Shivappa',
    footer_res_search:  'Search Verses',
    footer_res_theme:   'Browse by Theme',
    footer_res_chapter: 'Browse by Chapter',
    footer_res_trad:    'Kannada Tradition',
    footer_res_site:    'About This Site',
    footer_made_with:   'Made with',
    footer_for_lit:     'for Kannada literature',
    footer_copy:        '© 2026 MudduRamana Manasu Digital Repository. All rights reserved.',

    // ── TOASTS ───────────────────────────────────────────
    toast_saved:     'Verse {n} saved to favorites!',
    toast_removed:   'Removed from favorites',
    toast_copied:    'Verse copied to clipboard!',
    toast_invalid:   'Invalid verse number',
    toast_not_found: 'Verse {n} not in current filter',
  },

  kn: {
    // ── NAV ──────────────────────────────────────────────
    nav_home:      'ಮುಖಪುಟ',
    nav_verses:    'ಎಲ್ಲ ಪದ್ಯಗಳು',
    nav_about:     'ಬಗ್ಗೆ',
    nav_favorites: 'ಮೆಚ್ಚಿನವು',
    nav_logo_sub:  'ಮುದ್ದುರಾಮನ ಮನಸು',

    // ── HERO ─────────────────────────────────────────────
    hero_subtitle:   'ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಅಮೂಲ್ಯ ರತ್ನ',
    hero_title_en:   'ಮುದ್ದುರಾಮನ ಮನಸು',
    hero_author_pre: 'ಕರ್ತೃ',
    hero_desc:       'ಭಕ್ತಿ, ಮಾನವ ಹೃದಯ ಮತ್ತು ಜೀವನದ ಶಾಶ್ವತ ಅರ್ಥವನ್ನು ಹುಡುಕುವ ೧೧೦೦ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯಗಳ ಅಪೂರ್ವ ಸಂಗ್ರಹ.',
    stat_verses_lbl: 'ಪದ್ಯಗಳು',
    stat_chapters_lbl: 'ಅಧ್ಯಾಯಗಳು',
    stat_themes_lbl: 'ವಿಷಯಗಳು',
    stat_access_val: 'ಉಚಿತ',
    stat_access_lbl: 'ಪ್ರವೇಶ',
    cta_read:        'ಎಲ್ಲ ಪದ್ಯಗಳನ್ನು ಓದಿ',
    cta_explore:     'ಆಯ್ದ ಪದ್ಯಗಳು',
    scroll_hint:     'ಕೆಳಗೆ',

    // ── SEARCH ───────────────────────────────────────────
    search_ph:  'ಕೀಲಿಪದ, ವಿಷಯ ಅಥವಾ ಪದ್ಯ ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ…',
    search_btn: 'ಹುಡುಕಿ',

    // ── FEATURES ─────────────────────────────────────────
    features_title:    'ಸಂಪೂರ್ಣ ಮುದ್ದುರಾಮನ ಮನಸು ಅನುಭವ',
    features_subtitle: 'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರ ಕಾಲಾತೀತ ಜ್ಞಾನವನ್ನು ನಮ್ಮ ಸಮಗ್ರ ಡಿಜಿಟಲ್ ವೇದಿಕೆ ಮೂಲಕ ಅನ್ವೇಷಿಸಿ',
    feat1_title: '೧೧೦೦ ಸಂಪೂರ್ಣ ಪದ್ಯಗಳು',
    feat1_desc:  'ಮೂಲ ಕನ್ನಡ ಲಿಪಿ, ಲಿಪ್ಯಂತರಣ ಮತ್ತು ಪ್ರತಿ ಪದ್ಯದ ವಿವರವಾದ ಅರ್ಥದೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಸಂಗ್ರಹ.',
    feat2_title: 'ಹುಡುಕಿ ಮತ್ತು ಶೋಧಿಸಿ',
    feat2_desc:  'ವಿಷಯ, ಅಧ್ಯಾಯ, ಕೀಲಿಪದ ಅಥವಾ ಪದ್ಯ ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ — ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಂಶೋಧಕರಿಗೆ ಸೂಕ್ತ.',
    feat3_title: 'ಮೆಚ್ಚಿನವು ಉಳಿಸಿ',
    feat3_desc:  'ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಪದ್ಯಗಳನ್ನು ಗುರುತಿಸಿ. ಅರ್ಥಪೂರ್ಣ ಜ್ಞಾನದ ವೈಯಕ್ತಿಕ ಸಂಗ್ರಹ ನಿರ್ಮಿಸಿ.',
    feat4_title: 'ಬೆಳಕು ಮತ್ತು ಕತ್ತಲೆ ಮೋಡ್',
    feat4_desc:  'ಕನ್ನಡ ಲಿಪಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸುಂದರ ಥೀಮ್‌ಗಳೊಂದಿಗೆ ಯಾವ ಸಮಯದಲ್ಲಾದರೂ ಆರಾಮದಾಯಕವಾಗಿ ಓದಿ.',

    // ── FEATURED ─────────────────────────────────────────
    featured_title:    'ಆಯ್ದ ಪದ್ಯಗಳು',
    featured_subtitle: 'ಈ ಕಾಲಾತೀತ ಪದ್ಯಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ',
    featured_cta:      'ಎಲ್ಲ ೧೧೦೦ ಪದ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ →',

    // ── ABOUT DUO ────────────────────────────────────────
    about_duo_title:    'ಕೃತಿ ಮತ್ತು ಕವಿಯ ಬಗ್ಗೆ',
    about_duo_subtitle: 'ಪುಸ್ತಕ ಮತ್ತು ಅದರ ಹಿಂದಿನ ಧ್ವನಿ',
    about_book_label:   'ಕೃತಿ',
    about_book_title:   'ಮುದ್ದುರಾಮನ ಮನಸು',
    about_book_hl:      'ಮುದ್ದುರಾಮನ ಮನಸು — ಪ್ರಿಯ ರಾಮನ ಹೃದಯ',
    about_book_p1:      'ಮುದ್ದುರಾಮನ ಮನಸು ಕನ್ನಡ ತಾತ್ವಿಕ ಕಾವ್ಯ ಪರಂಪರೆಯಲ್ಲಿ ೧೧೦೦ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯಗಳ ಸಂಗ್ರಹ. ಪ್ರತಿ ಪದ್ಯವೂ ಭಕ್ತಿ, ಪ್ರಕೃತಿ, ಪ್ರೇಮ, ವಿಧಿ ಮತ್ತು ಅಸ್ತಿತ್ವದ ರಹಸ್ಯದ ಮೇಲಿನ ಸ್ವತಂತ್ರ ಧ್ಯಾನ.',
    about_book_p2:      '೧೮ ಅಧ್ಯಾಯಗಳಲ್ಲಿ ಹಂಚಿಕೊಂಡಿದೆ — ಗುರುವೆನಗೆ ಶ್ರೀರಕ್ಷೆಯಿಂದ ಮೌನ ಸುಂದರ ಭಾಷೆಯವರೆಗೆ — ಕೃತಿ ಮಾನವ ಅನುಭವದ ಸಂಪೂರ್ಣ ಪರಿಧಿ ಮೂಲಕ ಸಾಗುತ್ತದೆ.',
    about_book_more:    'ಇನ್ನಷ್ಟು ಓದಿ →',
    about_auth_label:   'ಕವಿ',
    about_auth_title:   'ಕೆ.ಸಿ. ಶಿವಪ್ಪ',
    about_auth_hl:      'ಕೆ.ಸಿ. ಶಿವಪ್ಪ — ಕವಿ, ತತ್ವಜ್ಞಾನಿ, ಕನ್ನಡ ಸ್ವರ',
    about_auth_p1:      'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರು ಮುದ್ದುರಾಮನ ಮನಸು ಕೃತಿಯ ಕರ್ತೃ. ಡಿ.ವಿ. ಗುಂಡಪ್ಪನಂತಹ ಮಹಾ ಕವಿ-ತತ್ವಜ್ಞಾನಿಗಳ ಹೆಜ್ಜೆಗಳನ್ನು ಅನುಸರಿಸಿ, ಶಿವಪ್ಪ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯ ರೂಪಕ್ಕೆ ಆಳವಾದ ವೈಯಕ್ತಿಕ ಧ್ವನಿ ತರುತ್ತಾರೆ.',
    about_auth_p2:      'ಅವರ ಪದ್ಯಗಳು ಶಾಸ್ತ್ರೀಯ ಕನ್ನಡ ಮತ್ತು ದೈನಂದಿನ ಭಾಷೆಯ ನಡುವೆ ಸಂಚರಿಸುತ್ತವೆ — ತಾತ್ವಿಕ ಚಿಂತನೆಯನ್ನು ವಿದ್ವಾಂಸರಿಂದ ಸಾಮಾನ್ಯ ಓದುಗರವರೆಗೆ ಎಲ್ಲರಿಗೂ ಸ್ಪರ್ಶಿಸುವಂತೆ ಮಾಡುತ್ತವೆ.',
    about_auth_more:    'ಇನ್ನಷ್ಟು ಓದಿ →',

    // ── RANDOM VERSE ─────────────────────────────────────
    rand_label: 'ಈ ಕ್ಷಣದ ಪದ್ಯ',
    rand_title: 'ಒಂದು ಯಾದೃಚ್ಛಿಕ ಪದ್ಯ',
    rand_p1:    'ಮುದ್ದುರಾಮನ ಮನಸು ಪ್ರತಿ ಓದಿನಲ್ಲಿ ಹೊಸ ಬಾಗಿಲು ತೆರೆಯುತ್ತದೆ. ಪೂರ್ಣ ಲಿಪ್ಯಂತರಣ ಮತ್ತು ಅರ್ಥ ಓದಲು ಪದ್ಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    rand_p2:    'ಅತ್ಯುತ್ತಮ ತಾತ್ವಿಕ ಕಾವ್ಯದಂತೆ, ಈ ಪದ್ಯಗಳು ನಿಮ್ಮೊಂದಿಗೆ ಬೆಳೆಯುತ್ತವೆ — ಜೀವನ ಹೊಸ ಅನುಭವ ತರುತ್ತಿದ್ದಂತೆ ಅವುಗಳ ಅರ್ಥ ಆಳವಾಗುತ್ತದೆ.',
    rand_btn:   'ಇನ್ನೊಂದು ಪದ್ಯ →',

    // ── VERSE CARD ───────────────────────────────────────
    card_verse:     'ಪದ್ಯ',
    card_save:      'ಉಳಿಸಿ',
    card_saved:     'ಉಳಿಸಲಾಗಿದೆ',
    card_read_more: 'ಇನ್ನಷ್ಟು ಓದಿ →',

    // ── MODAL ────────────────────────────────────────────
    modal_of:             'ರಲ್ಲಿ',
    modal_translit_label: 'ಲಿಪ್ಯಂತರಣ',
    modal_meaning_label:  'ಅರ್ಥ',
    modal_save:           'ಮೆಚ್ಚಿನವುಗಳಿಗೆ ಉಳಿಸಿ',
    modal_saved:          'ಉಳಿಸಲಾಗಿದೆ',
    modal_share:          'ಹಂಚಿಕೊಳ್ಳಿ',
    modal_print:          'ಮುದ್ರಿಸಿ',
    modal_prev:           '← ಹಿಂದಿನದು',
    modal_next:           'ಮುಂದಿನದು →',

    // ── VERSES PAGE ──────────────────────────────────────
    page_verses_title:    'ಎಲ್ಲ ಪದ್ಯಗಳು',
    page_verses_sub:      'ಮುದ್ದುರಾಮನ ಮನಸುವಿನ {n} ಪದ್ಯಗಳ ಸಂಪೂರ್ಣ ಸಂಗ್ರಹ',
    filter_search_ph:     'ಪದ್ಯಗಳನ್ನು ಹುಡುಕಿ…',
    filter_jump_label:    'ಪದ್ಯಕ್ಕೆ ಹೋಗಿ:',
    filter_jump_ph:       '೧–೧೧೦೦',
    filter_jump_go:       'ಹೋಗಿ',
    filter_theme_label:   'ವಿಷಯ:',
    filter_theme_all:     'ಎಲ್ಲ ವಿಷಯಗಳು',
    filter_chapter_label: 'ಅಧ್ಯಾಯ:',
    filter_chapter_all:   'ಎಲ್ಲ ಅಧ್ಯಾಯಗಳು',
    filter_sort_label:    'ವಿಂಗಡಿಸಿ:',
    filter_sort_asc:      '೧ → ೧೧೦೦',
    filter_sort_desc:     '೧೧೦೦ → ೧',
    filter_clear:         'ತೆರವುಗೊಳಿಸಿ',
    results_all:          'ಎಲ್ಲ {n} ಪದ್ಯಗಳು ತೋರಿಸಲಾಗುತ್ತಿದೆ',
    results_filtered:     '{n} ರಲ್ಲಿ {m} ಪದ್ಯಗಳು ತೋರಿಸಲಾಗುತ್ತಿದೆ',
    no_results:           'ಯಾವ ಪದ್ಯಗಳೂ ಕಂಡುಬಂದಿಲ್ಲ. ಬೇರೆ ಹುಡುಕಾಟ ಪ್ರಯತ್ನಿಸಿ.',

    // ── FAVORITES PAGE ───────────────────────────────────
    page_fav_title:  'ಮೆಚ್ಚಿನ ಪದ್ಯಗಳು',
    page_fav_sub:    'ನಿಮ್ಮ ಉಳಿಸಿದ ಪದ್ಯಗಳ ವೈಯಕ್ತಿಕ ಸಂಗ್ರಹ',
    fav_empty_title: 'ಇನ್ನೂ ಮೆಚ್ಚಿನವಿಲ್ಲ',
    fav_empty_desc:  'ಯಾವುದೇ ಪದ್ಯದ ಮೇಲೆ ಹೃದಯ ಐಕಾನ್ ಟ್ಯಾಪ್ ಮಾಡಿ ಅದನ್ನು ಇಲ್ಲಿ ಉಳಿಸಿ.',
    fav_empty_btn:   'ಎಲ್ಲ ಪದ್ಯಗಳನ್ನು ನೋಡಿ',
    fav_count_one:   '೧ ಪದ್ಯ ಉಳಿಸಲಾಗಿದೆ',
    fav_count_many:  '{n} ಪದ್ಯಗಳು ಉಳಿಸಲಾಗಿವೆ',

    // ── ABOUT PAGE ───────────────────────────────────────
    page_about_title:   'ಬಗ್ಗೆ',
    page_about_sub:     'ಪುಸ್ತಕ, ಕರ್ತೃ, ಪರಂಪರೆ ಮತ್ತು ಈ ಭಂಡಾರ',
    about_s_book_title: 'ಮುದ್ದುರಾಮನ ಮನಸು ಬಗ್ಗೆ',
    about_s_book_p1:    'ಮುದ್ದುರಾಮನ ಮನಸು — ಅಂದರೆ "ಪ್ರಿಯ ರಾಮನ ಹೃದಯ/ಮನಸ್ಸು" — ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರು ಬರೆದ ೧೧೦೦ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯಗಳ (ಚತುಷ್ಪದಿ) ಅಮೂಲ್ಯ ಸಂಗ್ರಹ. ಕನ್ನಡ ತಾತ್ವಿಕ ಕಾವ್ಯದ ಮಹಾ ಪರಂಪರೆಯಲ್ಲಿ — ಅದರಲ್ಲಿಯೂ ಡಿ.ವಿ.ಜಿ. ಅವರ ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗದ ಪ್ರಭಾವದಲ್ಲಿ — ಪ್ರತಿ ಪದ್ಯವೂ ಜೀವನ, ಪ್ರೇಮ, ಭಕ್ತಿ, ಪ್ರಕೃತಿ ಮತ್ತು ಶಾಶ್ವತ ಪ್ರಶ್ನೆಗಳ ಮೇಲಿನ ಸ್ವತಂತ್ರ ಧ್ಯಾನ.',
    about_s_book_p2:    '<strong>೧೮ ಅಧ್ಯಾಯಗಳಲ್ಲಿ</strong> ಹಂಚಿಕೊಂಡಿದೆ — <em>ಗುರುವೆನಗೆ ಶ್ರೀರಕ್ಷೆ</em>ಯಿಂದ <em>ಮೌನ ಸುಂದರ ಭಾಷೆ</em>ಯವರೆಗೆ. ಪ್ರತಿ ಅಧ್ಯಾಯ ಮಾನವ ಅನುಭವದ ಒಂದು ಮಜಲನ್ನು ಆಳವಾಗಿ ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.',
    about_s_book_p3:    'ಪ್ರತಿ ಪದ್ಯ ಶಾಸ್ತ್ರೀಯ ಕನ್ನಡ ಛಂದೋಬಂಧವನ್ನು ಅನುಸರಿಸುತ್ತದೆ. ಕೃತಿ ಓದುಗರ ಹೃದಯ ಮುಟ್ಟುವ ಕಾವ್ಯಾತ್ಮಕ ಆತ್ಮೀಯತೆಯಿಂದ ತುಂಬಿದೆ. ಕ್ರಮದಲ್ಲಿ ಓದಬಹುದು ಅಥವಾ ಯಾದೃಚ್ಛಿಕವಾಗಿ ತೆರೆಯಬಹುದು — ಪ್ರತಿ ಬಾರಿ ಹೊಸ ಅರ್ಥ ಹೊಳೆಯುತ್ತದೆ.',
    about_s_book_p4:    '<em>ಮುದ್ದು ರಾಮ</em> ಎಂಬ ಹೆಸರಿನ ಆಹ್ವಾನ — ಪ್ರಿಯ ರಾಮ — ಕೃತಿಯನ್ನು ಭಕ್ತಿ ಪರಂಪರೆಯಲ್ಲಿ ನೆಲೆಗೊಳಿಸುತ್ತದೆ, ಆದರೆ ಏಕಕಾಲದಲ್ಲಿ ಸಾರ್ವತ್ರಿಕ ತಾತ್ವಿಕ ಅನ್ವೇಷಣೆಗೂ ತೆರೆದುಕೊಳ್ಳುತ್ತದೆ.',
    about_s_auth_title: 'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಬಗ್ಗೆ',
    about_s_auth_p1:    'ಕೆ.ಸಿ. ಶಿವಪ್ಪ (K.C. Shivappa) ಮುದ್ದುರಾಮನ ಮನಸು ಕೃತಿಯ ಕರ್ತೃ — ಆಧುನಿಕ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಂಪರೆಗೆ ಮಹತ್ವದ ಕೊಡುಗೆ. ಪ್ರಿಯ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯ ರೂಪದಲ್ಲಿ ಬರೆದ ಶಿವಪ್ಪ, ತಮ್ಮ ಬರವಣಿಗೆಗೆ ಶಾಸ್ತ್ರೀಯ ಸೊಬಗು ಮತ್ತು ಆಳವಾದ ವೈಯಕ್ತಿಕ ಅಭಿವ್ಯಕ್ತಿ ಎರಡನ್ನೂ ತಂದಿದ್ದಾರೆ.',
    about_s_auth_p2:    'ಮುದ್ದುರಾಮನ ಮನಸುವಿನ ಪದ್ಯಗಳು ಒಂದು ಜೀವಿತಕಾಲದ ಚಿಂತನೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತವೆ — ದೈವದ ಸ್ವರೂಪ, ಮಾನವ ಸಂಬಂಧಗಳ ಸೊಗಸು, ಕಾಲದ ಸಂಚಾರ, ಮತ್ತು ಮನಶ್ಶಾಂತಿಯ ಹುಡುಕಾಟ. ದೂರದ ತಾತ್ವಿಕ ಗ್ರಂಥಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ಶಿವಪ್ಪ ಅವರ ಕಾವ್ಯ ನೇರ ಜೀವನಾನುಭವದ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುತ್ತದೆ.',
    about_s_auth_p3:    'ಶಿವಪ್ಪ ಅವರ ಭಾಷೆ ಶಾಸ್ತ್ರೀಯ ಕನ್ನಡದ ಸಮೃದ್ಧಿ ಮತ್ತು ದೈನಂದಿನ ಸ್ಪಷ್ಟತೆಯ ನಡುವೆ ಮುಕ್ತವಾಗಿ ಸಂಚರಿಸುತ್ತದೆ — ವಿದ್ವಾಂಸರಿಂದ ಮೊದಲ ಬಾರಿ ಓದುಗರವರೆಗೆ ಎಲ್ಲರಿಗೂ ಸ್ಪರ್ಶಿಸುವಂತೆ ಮಾಡುತ್ತದೆ.',
    about_s_auth_p4:    '<em>ಮುದ್ದು ರಾಮ</em> ಎಂಬ ಹೆಸರು — ಭಕ್ತಿಯ ಬೆಚ್ಚಗಿನ ಸ್ಪರ್ಶ ಮತ್ತು ತಾತ್ವಿಕ ಆಳ ಎರಡನ್ನೂ ಒಳಗೊಂಡ ಹೆಸರು — ದೇವರ ಬಗ್ಗೆ ದೂರದ ಭಕ್ತಿಗಿಂತ ಆತ್ಮೀಯ, ಕಠಿಣ ಧರ್ಮಗಿಂತ ಪ್ರೀತಿಯ ದೃಷ್ಟಿಕೋನ ಸಾರುತ್ತದೆ.',
    about_s_trad_title: 'ಪರಂಪರೆ: ಕನ್ನಡ ತಾತ್ವಿಕ ಕಾವ್ಯ',
    about_s_trad_p1:    'ಕರ್ನಾಟಕದಲ್ಲಿ ನಾಲ್ಕು-ಸಾಲಿನ ತಾತ್ವಿಕ ಕಾವ್ಯದ ದೀರ್ಘ ಪರಂಪರೆ ಇದೆ — ೧೨ನೇ ಶತಮಾನದ ಬಸವಣ್ಣ ಮತ್ತು ಶರಣರ ವಚನಗಳಿಂದ, ಪುರಂದರದಾಸರ ಕೀರ್ತನೆಗಳಿಂದ, ಡಿ.ವಿ.ಜಿ. ಅವರ ಮಂಕುತಿಮ್ಮನ ಕಗ್ಗ (೧೯೪೩)ದವರೆಗೆ. ಈ ಸಣ್ಣ, ಸ್ವತಂತ್ರ ಪದ್ಯಗಳು ಗಹನ ಚಿಂತನೆಗೆ ಪ್ರಿಯ ಮಾಧ್ಯಮವಾಗಿ ಮಾರ್ಪಟ್ಟಿವೆ.',
    about_s_trad_p2:    'ನಾಲ್ಕು-ಸಾಲಿನ ರೂಪ ಅಸಾಧಾರಣ ಸಂಕ್ಷೇಪಣವನ್ನು ಬೇಡುತ್ತದೆ. ಪ್ರತಿ ಶಬ್ದ ತೂಕ ಹೊರಬೇಕು; ಪ್ರತಿ ಸಾಲು ತನ್ನ ಸ್ಥಾನ ಸಂಪಾದಿಸಬೇಕು. ಇದು ಆಲಂಕಾರಕ್ಕಲ್ಲ — ಆಳ ಚಿಂತನೆಗೆ ಇದು ಬೇಕು.',
    about_s_trad_p3:    'ಮುದ್ದುರಾಮನ ಮನಸು ಈ ಪರಂಪರೆಗೆ ಸೇರಿದ್ದು. ಅದು ವಚನ ಮತ್ತು ಕಗ್ಗದ ಗುಣಗಳನ್ನು ಒಳಗೊಂಡಿದೆ — ಪ್ರಶ್ನಾ ಮನೋಭಾವ, ಭಕ್ತಿಯ ಆಧಾರ, ಮತ್ತು ಕಾವ್ಯ ಅಲಂಕಾರ ಮಾತ್ರವಲ್ಲ, ವಿಶ್ವವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಪ್ರಾಥಮಿಕ ವಿಧಾನ ಎಂಬ ನಂಬಿಕೆ.',
    about_s_repo_title: 'ಈ ಭಂಡಾರದ ಬಗ್ಗೆ',
    about_s_repo_p1:    'ಮುದ್ದುರಾಮನ ಮನಸುವನ್ನು ಎಲ್ಲರಿಗೂ ಉಚಿತವಾಗಿ ಮತ್ತು ಸುಂದರವಾಗಿ ಲಭ್ಯಪಡಿಸಲು ಈ ತಾಣ ನಿರ್ಮಿಸಲಾಗಿದೆ — ಕನ್ನಡ ವಿದ್ವಾಂಸರು, ವಿದ್ಯಾರ್ಥಿಗಳು, ಭಕ್ತರು ಅಥವಾ ತಾತ್ವಿಕ ಕಾವ್ಯಕ್ಕೆ ಆಕರ್ಷಿತರಾದ ಎಲ್ಲರಿಗೂ. ಪ್ರತಿ ಪದ್ಯ ಮೂಲ ಕನ್ನಡ ಲಿಪಿ, ಲಿಪ್ಯಂತರಣ ಮತ್ತು ಅರ್ಥದೊಂದಿಗೆ ನೀಡಲಾಗಿದೆ.',
    about_s_repo_p2:    'ಇದು ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಮೇಲಿನ ಪ್ರೀತಿಯ ಪ್ರಯಾಸ. ಯಾವುದೇ ಜಾಹೀರಾತು, ಶುಲ್ಕ ಅಥವಾ ನೋಂದಣಿ ಇಲ್ಲ. ಕೇವಲ ಕಾವ್ಯ, ಜತನದಿಂದ ನೀಡಲಾಗಿದೆ.',
    about_s_repo_p3:    'ಇಲ್ಲಿ ಓದಿ ಮನಸು ತಣಿದರೆ, ಮೂಲ ಪ್ರಕಟಿತ ಪುಸ್ತಕ ಖರೀದಿಸಿ ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರ ಕೃತಿ ಮತ್ತು ಪ್ರಕಾಶಕರನ್ನು ಬೆಂಬಲಿಸಿ.',

    // ── FOOTER ───────────────────────────────────────────
    footer_brand_desc:  'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರ ಮುದ್ದುರಾಮನ ಮನಸುವಿನ ಗಹನ ಜ್ಞಾನವನ್ನು ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಲು ಸಮರ್ಪಿತ ಸಮಗ್ರ ಡಿಜಿಟಲ್ ಭಂಡಾರ — ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪ್ರೇಮಿಗಳಿಗೆ ಉಚಿತವಾಗಿ ಲಭ್ಯ.',
    footer_quick_links: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    footer_resources:   'ಸಂಪನ್ಮೂಲಗಳು',
    footer_lnk_home:    'ಮುಖಪುಟ',
    footer_lnk_verses:  'ಎಲ್ಲ ಪದ್ಯಗಳು',
    footer_lnk_favs:    'ಮೆಚ್ಚಿನ ಪದ್ಯಗಳು',
    footer_lnk_book:    'ಪುಸ್ತಕದ ಬಗ್ಗೆ',
    footer_lnk_author:  'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಬಗ್ಗೆ',
    footer_res_search:  'ಪದ್ಯಗಳನ್ನು ಹುಡುಕಿ',
    footer_res_theme:   'ವಿಷಯದ ಮೂಲಕ ನೋಡಿ',
    footer_res_chapter: 'ಅಧ್ಯಾಯದ ಮೂಲಕ ನೋಡಿ',
    footer_res_trad:    'ಕನ್ನಡ ಪರಂಪರೆ',
    footer_res_site:    'ಈ ತಾಣದ ಬಗ್ಗೆ',
    footer_made_with:   'ಕನ್ನಡ ಸಾಹಿತ್ಯಕ್ಕಾಗಿ ♥ ಇಂದ ತಯಾರಿಸಲಾಗಿದೆ',
    footer_for_lit:     '',
    footer_copy:        '© ೨೦೨೬ ಮುದ್ದುರಾಮನ ಮನಸು ಡಿಜಿಟಲ್ ಭಂಡಾರ. ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿವೆ.',

    // ── TOASTS ───────────────────────────────────────────
    toast_saved:     'ಪದ್ಯ {n} ಮೆಚ್ಚಿನವುಗಳಿಗೆ ಉಳಿಸಲಾಗಿದೆ!',
    toast_removed:   'ಮೆಚ್ಚಿನವುಗಳಿಂದ ತೆಗೆದಿದೆ',
    toast_copied:    'ಪದ್ಯ ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಾಗಿದೆ!',
    toast_invalid:   'ತಪ್ಪಾದ ಪದ್ಯ ಸಂಖ್ಯೆ',
    toast_not_found: 'ಪದ್ಯ {n} ಪ್ರಸ್ತುತ ಶೋಧನೆಯಲ್ಲಿಲ್ಲ',
  }
};

// ─── Core API ────────────────────────────────────────────────────────────────

window.getLang = function() {
  return localStorage.getItem('mrm_lang') || 'en';
};

window.t = function(key, vars) {
  vars = vars || {};
  const lang = window.getLang();
  const dict = window.TRANSLATIONS;
  let str = (dict[lang] && dict[lang][key] !== undefined ? dict[lang][key] : null)
         || (dict['en'] && dict['en'][key] !== undefined ? dict['en'][key] : null)
         || key;
  Object.keys(vars).forEach(function(k) { str = str.replace('{' + k + '}', vars[k]); });
  return str;
};

window.setLang = function(lang) {
  localStorage.setItem('mrm_lang', lang);
  window.applyLang();
};

window.toggleLang = function() {
  window.setLang(window.getLang() === 'en' ? 'kn' : 'en');
};

window.applyLang = function() {
  const lang = window.getLang();
  document.documentElement.setAttribute('data-lang', lang);

  // Update toggle button
  var btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'en' ? 'ಕನ್ನಡ' : 'English';
  }

  // Process [data-i18n] — textContent
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key  = el.getAttribute('data-i18n');
    var attr = el.getAttribute('data-i18n-attr');
    var n    = el.getAttribute('data-i18n-n');
    var str  = window.t(key, n ? {n: n} : {});
    if (attr) { el.setAttribute(attr, str); }
    else      { el.textContent = str; }
  });

  // Process [data-i18n-html] — innerHTML (for bold/em in about prose)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    var n   = el.getAttribute('data-i18n-n');
    el.innerHTML = window.t(key, n ? {n: n} : {});
  });

  // Re-render dynamic content if app is loaded
  if (typeof window.rerenderAll === 'function') window.rerenderAll();
};

// Apply data-lang immediately so CSS selectors work before paint
(function() {
  var lang = localStorage.getItem('mrm_lang') || 'en';
  document.documentElement.setAttribute('data-lang', lang);
})();
