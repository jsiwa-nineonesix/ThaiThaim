// Language toggle
function initLangToggle() {
  const btn = document.querySelector('.lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('thai');
    btn.textContent = document.body.classList.contains('thai')
      ? '🇹🇭 TH | 🇬🇧 EN'
      : '🇬🇧 EN | 🇹🇭 TH';
  });
}

// Menu tab switching (menu.html)
function initMenuTabs() {
  const tabs = document.querySelectorAll('.tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
}

// Jump to menu tab from home category cards
function goToMenu(tab) {
  window.location.href = 'menu.html#' + tab;
}

// On menu.html load, activate tab from URL hash
function activateTabFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;
  const tab = document.querySelector(`.tab[data-tab="${hash}"]`);
  if (tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(hash);
    if (panel) panel.classList.add('active');
  }
}

// Highlight active nav link based on current page
function highlightNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  initMenuTabs();
  activateTabFromHash();
  highlightNav();
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
});
