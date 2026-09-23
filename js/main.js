// Site-wide utilities

// Dynamic copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// TryHackMe stats — update values here when they change; propagates to any element with matching data-thm attribute
const thmStats = {
  percentile: '3%',
  rooms: '144',
  rank: '0xA'
};

Object.keys(thmStats).forEach(key => {
  document.querySelectorAll(`[data-thm="${key}"]`).forEach(el => {
    el.textContent = thmStats[key];
  });
});

// Active-nav indicator — marks the current page's nav link (progressive enhancement)
(function () {
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    if (href === path || (href === '/index.html' && path === '/')) {
      a.setAttribute('aria-current', 'page');
    }
  });
  // Write-up pages live under the "CTF Write-ups" dropdown — mark its parent
  if (path.startsWith('/writeups/')) {
    const parent = document.querySelector('nav li.dropdown > a');
    if (parent) parent.setAttribute('aria-current', 'page');
  }
})();
