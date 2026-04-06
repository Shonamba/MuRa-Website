/**
 * MudduRamana Manasu — Internationalisation (i18n)
 * Supports: English (en) | ಕನ್ನಡ (kn)
 *
 * Usage:
 *   getLang()          → 'en' | 'kn'
 *   setLang('kn')      → saves + applies
 *   t('key')           → translated string
 *   applyLang()        → re-renders all [data-i18n] elements
 */

const TRANSLATIONS = {
  en: {
    // NAV
    nav_home:        'Home',
    nav_verses:      'All Verses',
    nav_about:       'About',
    nav_favorites:   'Favorites',

    // HERO
    hero_subtitle:   'A Treasure of Kannada Literature',
    hero_title_en:   'MudduRamana Manasu',
    hero_author_pre: 'by',
    hero_desc:       'A profound collection of 1100 four-line verses exploring devotion, the human heart, and the eternal quest for meaning.',
    stat_verses:     'Verses',
    stat_chapters:   'Chapters',
    stat_themes:     'Themes',
    stat_access:     'Free',
    stat_access_lbl: 'Access',
    cta_read:        'Read All Verses',
    cta_explore:     'Explore Featured',
    scroll_hint:     'Scroll',

    // SEARCH
    search_placeholder: 'Search verses by keyword, theme, or verse number…',
    search_btn:         'Search',

    // FEATURES SECTION
    features_title:    'Complete MudduRamana Manasu Experience',
    features_subtitle: 'Explore K.C. Shivappa\'s timeless wisdom through our comprehensive digital platform',
    feat1_title: '1100 Complete Verses',
    feat1_desc:  'Full collection with original Kannada script, transliteration, and detailed meanings for every verse.',
    feat2_title: 'Search & Filter',
    feat2_desc:  'Find verses by theme, chapter, keyword, or verse number — perfect for students and researchers.',
    feat3_title: 'Save Favorites',
    feat3_desc:  'Like and bookmark your favourite verses. Build your personal collection of meaningful wisdom.',
    feat4_title: 'Light & Dark Mode',
    feat4_desc:  'Read comfortably any time of day with beautiful themes designed for Kannada script.',

    // FEATURED
    featured_title:    'Featured Verses',
    featured_subtitle: 'Begin your journey with these timeless verses',
    featured_cta:      'Explore All 1100 Verses →',

    // ABOUT DUO (homepage)
    about_duo_title:    'About the Work & the Poet',
    about_duo_subtitle: 'The book and the voice behind it',
    about_book_label:   'The Work',
    about_book_title:   'MudduRamana Manasu',
    about_book_kn:      'ಮುದ್ದುರಾಮನ ಮನಸು — The Heart of Beloved Rama',
    about_book_p1:      'MudduRamana Manasu is a collection of 1100 four-line verses (chatushpadi) in the grand tradition of Kannada philosophical poetry. Each verse is a standalone meditation — on devotion, nature, love, fate, and the mystery of existence.',
    about_book_p2:      'Organised across 18 chapters — from ಗುರುವೆನಗೆ ಶ್ರೀರಕ್ಷೆ (Blessing of the Guru) to ಮೌನ ಸುಂದರ ಭಾಷೆ (The Beauty of Silence) — the work moves through the full range of human experience with rare lyrical grace.',
    about_book_more:    'Read More →',
    about_auth_label:   'The Poet',
    about_auth_title:   'K.C. Shivappa',
    about_auth_kn:      'ಕೆ.ಸಿ. ಶಿವಪ್ಪ — Poet, Philosopher, Kannada Voice',
    about_auth_p1:      'K.C. Shivappa is the author of MudduRamana Manasu, a distinguished contribution to modern Kannada literary tradition. Following in the footsteps of great poet-philosophers like D.V. Gundappa, Shivappa brings a deeply personal and reflective voice to the four-line verse form.',
    about_auth_p2:      'His verses move between classical Kannada resonance and everyday clarity — making profound philosophical thought accessible to all readers, from scholars to those seeking meaning.',
    about_auth_more:    'Read More →',

    // RANDOM VERSE
    rand_label:    'Verse of the Moment',
    rand_title:    'A Random Verse',
    rand_p1:       'Each reading of MudduRamana Manasu opens a new door. Click the verse to read its full transliteration and meaning, or discover another.',
    rand_p2:       'Like the best philosophical poetry, these verses grow with you — their meaning deepening with every re-reading as life brings new experience.',
    rand_btn:      'Another Verse →',

    // VERSE CARD
    card_verse:      'Verse',
    card_save:       'Save',
    card_saved:      'Saved',
    card_read_more:  'Read More →',

    // MODAL
    modal_translit_label: 'Transliteration',
    modal_meaning_label:  'Meaning',
    modal_save:           'Save to Favorites',
    modal_saved:          'Saved',
    modal_share:          'Share',
    modal_print:          'Print',
    modal_prev:           '← Previous',
    modal_next:           'Next →',
    modal_of:             'of',

    // VERSES PAGE
    page_verses_title:   'All Verses',
    page_verses_sub:     'Complete collection of {n} verses from MudduRamana Manasu',
    filter_search_ph:    'Search verses…',
    filter_jump_label:   'Jump to verse:',
    filter_jump_ph:      '1–1100',
    filter_jump_go:      'Go',
    filter_theme_label:  'Theme:',
    filter_theme_all:    'All Themes',
    filter_chapter_label:'Chapter:',
    filter_chapter_all:  'All Chapters',
    filter_sort_label:   'Sort:',
    filter_sort_asc:     '1 → 1100',
    filter_sort_desc:    '1100 → 1',
    filter_clear:        'Clear',
    results_all:         'Showing all {n} verses',
    results_filtered:    'Showing {m} of {n} verses',
    no_results:          'No verses found. Try a different search.',

    // FAVORITES PAGE
    page_fav_title:  'My Favorites',
    page_fav_sub:    'Your personal collection of saved verses',
    fav_empty_title: 'No favorites yet',
    fav_empty_desc:  'Tap the heart icon on any verse to save it here for quick access.',
    fav_empty_btn:   'Browse All Verses',
    fav_count_one:   '1 saved verse',
    fav_count_many:  '{n} saved verses',

    // ABOUT PAGE
    page_about_title: 'About',
    page_about_sub:   'The book, the author, the tradition, and this repository',
    about_section_book_title:   'About MudduRamana Manasu',
    about_section_auth_title:   'About K.C. Shivappa',
    about_section_trad_title:   'The Tradition: Kannada Philosophical Verse',
    about_section_repo_title:   'About This Repository',

    // FOOTER
    footer_brand_desc:   'A comprehensive digital repository dedicated to preserving and sharing the profound wisdom of K.C. Shivappa\'s MudduRamana Manasu — freely accessible to all lovers of Kannada literature.',
    footer_quick_links:  'Quick Links',
    footer_resources:    'Resources',
    footer_link_home:    'Home',
    footer_link_verses:  'All Verses',
    footer_link_favs:    'My Favorites',
    footer_link_book:    'About the Book',
    footer_link_author:  'About K.C. Shivappa',
    footer_res_search:   'Search Verses',
    footer_res_theme:    'Browse by Theme',
    footer_res_chapter:  'Browse by Chapter',
    footer_res_trad:     'Kannada Tradition',
    footer_res_site:     'About This Site',
    footer_made_with:    'Made with',
    footer_for:          'for Kannada literature',
    footer_copy:         '© 2026 MudduRamana Manasu Digital Repository. All rights reserved.',

    // TOAST
    toast_saved:    'Verse {n} saved to favorites!',
    toast_removed:  'Removed from favorites',
    toast_copied:   'Verse copied to clipboard!',
    toast_invalid:  'Invalid verse number',
    toast_not_found:'Verse {n} not in current filter',
  },

  kn: {
    // NAV
    nav_home:        'ಮುಖಪುಟ',
    nav_verses:      'ಎಲ್ಲ ಪದ್ಯಗಳು',
    nav_about:       'ಬಗ್ಗೆ',
    nav_favorites:   'ಮೆಚ್ಚಿನವು',

    // HERO
    hero_subtitle:   'ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಅಮೂಲ್ಯ ರತ್ನ',
    hero_title_en:   'ಮುದ್ದುರಾಮನ ಮನಸು',
    hero_author_pre: 'ಕರ್ತೃ',
    hero_desc:       'ಭಕ್ತಿ, ಮಾನವ ಹೃದಯ ಮತ್ತು ಜೀವನದ ಶಾಶ್ವತ ಅರ್ಥವನ್ನು ಹುಡುಕುವ ೧೧೦೦ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯಗಳ ಅಪೂರ್ವ ಸಂಗ್ರಹ.',
    stat_verses:     'ಪದ್ಯಗಳು',
    stat_chapters:   'ಅಧ್ಯಾಯಗಳು',
    stat_themes:     'ವಿಷಯಗಳು',
    stat_access:     'ಉಚಿತ',
    stat_access_lbl: 'ಪ್ರವೇಶ',
    cta_read:        'ಎಲ್ಲ ಪದ್ಯಗಳನ್ನು ಓದಿ',
    cta_explore:     'ಆಯ್ದ ಪದ್ಯಗಳು',
    scroll_hint:     'ಕೆಳಗೆ',

    // SEARCH
    search_placeholder: 'ಕೀಲಿಪದ, ವಿಷಯ ಅಥವಾ ಪದ್ಯ ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ…',
    search_btn:         'ಹುಡುಕಿ',

    // FEATURES SECTION
    features_title:    'ಸಂಪೂರ್ಣ ಮುದ್ದುರಾಮನ ಮನಸು ಅನುಭವ',
    features_subtitle: 'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರ ಕಾಲಾತೀತ ಜ್ಞಾನವನ್ನು ನಮ್ಮ ಸಮಗ್ರ ಡಿಜಿಟಲ್ ವೇದಿಕೆ ಮೂಲಕ ಅನ್ವೇಷಿಸಿ',
    feat1_title: '೧೧೦೦ ಸಂಪೂರ್ಣ ಪದ್ಯಗಳು',
    feat1_desc:  'ಮೂಲ ಕನ್ನಡ ಲಿಪಿ, ಲಿಪ್ಯಂತರಣ ಮತ್ತು ಪ್ರತಿ ಪದ್ಯದ ವಿವರವಾದ ಅರ್ಥದೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಸಂಗ್ರಹ.',
    feat2_title: 'ಹುಡುಕಿ ಮತ್ತು ಶೋಧಿಸಿ',
    feat2_desc:  'ವಿಷಯ, ಅಧ್ಯಾಯ, ಕೀಲಿಪದ ಅಥವಾ ಪದ್ಯ ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ — ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಂಶೋಧಕರಿಗೆ ಸೂಕ್ತ.',
    feat3_title: 'ಮೆಚ್ಚಿನವು ಉಳಿಸಿ',
    feat3_desc:  'ನಿಮ್ಮ ಮೆಚ್ಚಿನ ಪದ್ಯಗಳನ್ನು ಗುರುತಿಸಿ. ಅರ್ಥಪೂರ್ಣ ಜ್ಞಾನದ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಂಗ್ರಹ ನಿರ್ಮಿಸಿ.',
    feat4_title: 'ಬೆಳಕು ಮತ್ತು ಕತ್ತಲೆ ಮೋಡ್',
    feat4_desc:  'ಕನ್ನಡ ಲಿಪಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸುಂದರ ಥೀಮ್‌ಗಳೊಂದಿಗೆ ಯಾವ ಸಮಯದಲ್ಲಾದರೂ ಆರಾಮದಾಯಕವಾಗಿ ಓದಿ.',

    // FEATURED
    featured_title:    'ಆಯ್ದ ಪದ್ಯಗಳು',
    featured_subtitle: 'ಈ ಕಾಲಾತೀತ ಪದ್ಯಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ',
    featured_cta:      'ಎಲ್ಲ ೧೧೦೦ ಪದ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ →',

    // ABOUT DUO (homepage)
    about_duo_title:    'ಕೃತಿ ಮತ್ತು ಕವಿಯ ಬಗ್ಗೆ',
    about_duo_subtitle: 'ಪುಸ್ತಕ ಮತ್ತು ಅದರ ಹಿಂದಿನ ಧ್ವನಿ',
    about_book_label:   'ಕೃತಿ',
    about_book_title:   'ಮುದ್ದುರಾಮನ ಮನಸು',
    about_book_kn:      'ಮುದ್ದುರಾಮನ ಮನಸು — ಪ್ರಿಯ ರಾಮನ ಹೃದಯ',
    about_book_p1:      'ಮುದ್ದುರಾಮನ ಮನಸು ಕನ್ನಡ ತಾತ್ವಿಕ ಕಾವ್ಯ ಪರಂಪರೆಯಲ್ಲಿ ೧೧೦೦ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯಗಳ ಸಂಗ್ರಹ. ಪ್ರತಿ ಪದ್ಯವೂ ಭಕ್ತಿ, ಪ್ರಕೃತಿ, ಪ್ರೇಮ, ವಿಧಿ ಮತ್ತು ಅಸ್ತಿತ್ವದ ರಹಸ್ಯದ ಮೇಲಿನ ಸ್ವತಂತ್ರ ಧ್ಯಾನ.',
    about_book_p2:      '೧೮ ಅಧ್ಯಾಯಗಳಲ್ಲಿ ಹಂಚಿಕೊಂಡಿದೆ — ಗುರುವೆನಗೆ ಶ್ರೀರಕ್ಷೆಯಿಂದ ಮೌನ ಸುಂದರ ಭಾಷೆಯವರೆಗೆ — ಕೃತಿ ಮಾನವ ಅನುಭವದ ಸಂಪೂರ್ಣ ಸ್ಪೆಕ್ಟ್ರಮ್ ಮೂಲಕ ಸಾಗುತ್ತದೆ.',
    about_book_more:    'ಇನ್ನಷ್ಟು ಓದಿ →',
    about_auth_label:   'ಕವಿ',
    about_auth_title:   'ಕೆ.ಸಿ. ಶಿವಪ್ಪ',
    about_auth_kn:      'ಕೆ.ಸಿ. ಶಿವಪ್ಪ — ಕವಿ, ತತ್ವಜ್ಞಾನಿ, ಕನ್ನಡ ಸ್ವರ',
    about_auth_p1:      'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರು ಆಧುನಿಕ ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪರಂಪರೆಗೆ ಮಹತ್ವದ ಕೊಡುಗೆಯಾದ ಮುದ್ದುರಾಮನ ಮನಸು ಕೃತಿಯ ಕರ್ತೃ. ಡಿ.ವಿ. ಗುಂಡಪ್ಪನಂತಹ ಮಹಾ ಕವಿ-ತತ್ವಜ್ಞಾನಿಗಳ ಹೆಜ್ಜೆಗಳನ್ನು ಅನುಸರಿಸಿ, ಶಿವಪ್ಪ ನಾಲ್ಕು-ಸಾಲಿನ ಪದ್ಯ ರೂಪಕ್ಕೆ ಆಳವಾದ ವೈಯಕ್ತಿಕ ಮತ್ತು ಆತ್ಮೀಯ ಧ್ವನಿ ತರುತ್ತಾರೆ.',
    about_auth_p2:      'ಅವರ ಪದ್ಯಗಳು ಶಾಸ್ತ್ರೀಯ ಕನ್ನಡ ಪ್ರತಿಧ್ವನಿ ಮತ್ತು ದೈನಂದಿನ ಸ್ಪಷ್ಟತೆಯ ನಡುವೆ ಸಂಚರಿಸುತ್ತವೆ — ತಾತ್ವಿಕ ಚಿಂತನೆಯನ್ನು ವಿದ್ವಾಂಸರಿಂದ ಸಾಮಾನ್ಯ ಓದುಗರವರೆಗೆ ಎಲ್ಲರಿಗೂ ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವಂತೆ ಮಾಡುತ್ತವೆ.',
    about_auth_more:    'ಇನ್ನಷ್ಟು ಓದಿ →',

    // RANDOM VERSE
    rand_label:    'ಈ ಕ್ಷಣದ ಪದ್ಯ',
    rand_title:    'ಒಂದು ಯಾದೃಚ್ಛಿಕ ಪದ್ಯ',
    rand_p1:       'ಮುದ್ದುರಾಮನ ಮನಸು ಪ್ರತಿ ಓದಿನಲ್ಲಿ ಹೊಸ ಬಾಗಿಲು ತೆರೆಯುತ್ತದೆ. ಪೂರ್ಣ ಲಿಪ್ಯಂತರಣ ಮತ್ತು ಅರ್ಥ ಓದಲು ಪದ್ಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    rand_p2:       'ಅತ್ಯುತ್ತಮ ತಾತ್ವಿಕ ಕಾವ್ಯದಂತೆ, ಈ ಪದ್ಯಗಳು ನಿಮ್ಮೊಂದಿಗೆ ಬೆಳೆಯುತ್ತವೆ — ಜೀವನ ಹೊಸ ಅನುಭವ ತರುತ್ತಿದ್ದಂತೆ ಅವುಗಳ ಅರ್ಥ ಆಳವಾಗುತ್ತದೆ.',
    rand_btn:      'ಇನ್ನೊಂದು ಪದ್ಯ →',

    // VERSE CARD
    card_verse:      'ಪದ್ಯ',
    card_save:       'ಉಳಿಸಿ',
    card_saved:      'ಉಳಿಸಲಾಗಿದೆ',
    card_read_more:  'ಇನ್ನಷ್ಟು ಓದಿ →',

    // MODAL
    modal_translit_label: 'ಲಿಪ್ಯಂತರಣ',
    modal_meaning_label:  'ಅರ್ಥ',
    modal_save:           'ಮೆಚ್ಚಿನವುಗಳಿಗೆ ಉಳಿಸಿ',
    modal_saved:          'ಉಳಿಸಲಾಗಿದೆ',
    modal_share:          'ಹಂಚಿಕೊಳ್ಳಿ',
    modal_print:          'ಮುದ್ರಿಸಿ',
    modal_prev:           '← ಹಿಂದಿನದು',
    modal_next:           'ಮುಂದಿನದು →',
    modal_of:             'ರಲ್ಲಿ',

    // VERSES PAGE
    page_verses_title:   'ಎಲ್ಲ ಪದ್ಯಗಳು',
    page_verses_sub:     'ಮುದ್ದುರಾಮನ ಮನಸುವಿನ {n} ಪದ್ಯಗಳ ಸಂಪೂರ್ಣ ಸಂಗ್ರಹ',
    filter_search_ph:    'ಪದ್ಯಗಳನ್ನು ಹುಡುಕಿ…',
    filter_jump_label:   'ಪದ್ಯಕ್ಕೆ ಹೋಗಿ:',
    filter_jump_ph:      '೧–೧೧೦೦',
    filter_jump_go:      'ಹೋಗಿ',
    filter_theme_label:  'ವಿಷಯ:',
    filter_theme_all:    'ಎಲ್ಲ ವಿಷಯಗಳು',
    filter_chapter_label:'ಅಧ್ಯಾಯ:',
    filter_chapter_all:  'ಎಲ್ಲ ಅಧ್ಯಾಯಗಳು',
    filter_sort_label:   'ವಿಂಗಡಿಸಿ:',
    filter_sort_asc:     '೧ → ೧೧೦೦',
    filter_sort_desc:    '೧೧೦೦ → ೧',
    filter_clear:        'ತೆರವುಗೊಳಿಸಿ',
    results_all:         'ಎಲ್ಲ {n} ಪದ್ಯಗಳು ತೋರಿಸಲಾಗುತ್ತಿದೆ',
    results_filtered:    '{n} ರಲ್ಲಿ {m} ಪದ್ಯಗಳು ತೋರಿಸಲಾಗುತ್ತಿದೆ',
    no_results:          'ಯಾವ ಪದ್ಯಗಳೂ ಕಂಡುಬಂದಿಲ್ಲ. ಬೇರೆ ಹುಡುಕಾಟ ಪ್ರಯತ್ನಿಸಿ.',

    // FAVORITES PAGE
    page_fav_title:  'ಮೆಚ್ಚಿನ ಪದ್ಯಗಳು',
    page_fav_sub:    'ನಿಮ್ಮ ಉಳಿಸಿದ ಪದ್ಯಗಳ ವೈಯಕ್ತಿಕ ಸಂಗ್ರಹ',
    fav_empty_title: 'ಇನ್ನೂ ಮೆಚ್ಚಿನವಿಲ್ಲ',
    fav_empty_desc:  'ಯಾವುದೇ ಪದ್ಯದ ಮೇಲೆ ಹೃದಯ ಐಕಾನ್ ಟ್ಯಾಪ್ ಮಾಡಿ ಅದನ್ನು ಇಲ್ಲಿ ಉಳಿಸಿ.',
    fav_empty_btn:   'ಎಲ್ಲ ಪದ್ಯಗಳನ್ನು ನೋಡಿ',
    fav_count_one:   '೧ ಪದ್ಯ ಉಳಿಸಲಾಗಿದೆ',
    fav_count_many:  '{n} ಪದ್ಯಗಳು ಉಳಿಸಲಾಗಿವೆ',

    // ABOUT PAGE
    page_about_title: 'ಬಗ್ಗೆ',
    page_about_sub:   'ಪುಸ್ತಕ, ಕರ್ತೃ, ಪರಂಪರೆ ಮತ್ತು ಈ ಭಂಡಾರ',
    about_section_book_title:   'ಮುದ್ದುರಾಮನ ಮನಸು ಬಗ್ಗೆ',
    about_section_auth_title:   'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಬಗ್ಗೆ',
    about_section_trad_title:   'ಪರಂಪರೆ: ಕನ್ನಡ ತಾತ್ವಿಕ ಕಾವ್ಯ',
    about_section_repo_title:   'ಈ ಭಂಡಾರದ ಬಗ್ಗೆ',

    // FOOTER
    footer_brand_desc:   'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಅವರ ಮುದ್ದುರಾಮನ ಮನಸುವಿನ ಗಹನ ಜ್ಞಾನವನ್ನು ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಲು ಸಮರ್ಪಿತ ಸಮಗ್ರ ಡಿಜಿಟಲ್ ಭಂಡಾರ — ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪ್ರೇಮಿಗಳಿಗೆ ಉಚಿತವಾಗಿ ಲಭ್ಯ.',
    footer_quick_links:  'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    footer_resources:    'ಸಂಪನ್ಮೂಲಗಳು',
    footer_link_home:    'ಮುಖಪುಟ',
    footer_link_verses:  'ಎಲ್ಲ ಪದ್ಯಗಳು',
    footer_link_favs:    'ಮೆಚ್ಚಿನ ಪದ್ಯಗಳು',
    footer_link_book:    'ಪುಸ್ತಕದ ಬಗ್ಗೆ',
    footer_link_author:  'ಕೆ.ಸಿ. ಶಿವಪ್ಪ ಬಗ್ಗೆ',
    footer_res_search:   'ಪದ್ಯಗಳನ್ನು ಹುಡುಕಿ',
    footer_res_theme:    'ವಿಷಯದ ಮೂಲಕ ನೋಡಿ',
    footer_res_chapter:  'ಅಧ್ಯಾಯದ ಮೂಲಕ ನೋಡಿ',
    footer_res_trad:     'ಕನ್ನಡ ಪರಂಪರೆ',
    footer_res_site:     'ಈ ತಾಣದ ಬಗ್ಗೆ',
    footer_made_with:    'ಕನ್ನಡ ಸಾಹಿತ್ಯಕ್ಕಾಗಿ',
    footer_for:          '',
    footer_copy:         '© ೨೦೨೬ ಮುದ್ದುರಾಮನ ಮನಸು ಡಿಜಿಟಲ್ ಭಂಡಾರ. ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿವೆ.',

    // TOAST
    toast_saved:    'ಪದ್ಯ {n} ಮೆಚ್ಚಿನವುಗಳಿಗೆ ಉಳಿಸಲಾಗಿದೆ!',
    toast_removed:  'ಮೆಚ್ಚಿನವುಗಳಿಂದ ತೆಗೆದಿದೆ',
    toast_copied:   'ಪದ್ಯ ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಾಗಿದೆ!',
    toast_invalid:  'ತಪ್ಪಾದ ಪದ್ಯ ಸಂಖ್ಯೆ',
    toast_not_found:'ಪದ್ಯ {n} ಪ್ರಸ್ತುತ ಶೋಧನೆಯಲ್ಲಿಲ್ಲ',
  }
};

// ---- Core i18n functions ----

function getLang() {
  return localStorage.getItem('mrm_lang') || 'en';
}

function t(key, vars = {}) {
  const lang = getLang();
  let str = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key] || key;
  Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{${k}}`, v); });
  return str;
}

function setLang(lang) {
  localStorage.setItem('mrm_lang', lang);
  applyLang();
}

function toggleLang() {
  setLang(getLang() === 'en' ? 'kn' : 'en');
}

function applyLang() {
  const lang = getLang();
  document.documentElement.setAttribute('data-lang', lang);

  // Update toggle button label
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'en' ? 'ಕನ್ನಡ' : 'English';
    btn.title = lang === 'en' ? 'Switch to Kannada' : 'English ಗೆ ಬದಲಿಸಿ';
  }

  // Apply all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr'); // e.g. "placeholder"
    const n = el.getAttribute('data-i18n-n');
    const vars = n ? { n } : {};
    const str = t(key, vars);
    if (attr) {
      el.setAttribute(attr, str);
    } else {
      el.textContent = str;
    }
  });

  // Also update dynamically-rendered content
  if (typeof rerenderAll === 'function') rerenderAll();
}

// Apply immediately before paint
(function() {
  const lang = localStorage.getItem('mrm_lang') || 'en';
  document.documentElement.setAttribute('data-lang', lang);
})();
