// Site-wide utilities

// Dynamic copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// TryHackMe stats — update values here when they change; propagates to any element with matching data-thm attribute
const thmStats = {
  percentile: '3%',
  rooms: '137',
  rank: '0xA'
};

Object.keys(thmStats).forEach(key => {
  document.querySelectorAll(`[data-thm="${key}"]`).forEach(el => {
    el.textContent = thmStats[key];
  });
});