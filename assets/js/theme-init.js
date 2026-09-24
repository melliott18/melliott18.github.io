try {
  const saved = localStorage.getItem('portfolioReviewTheme') || localStorage.getItem('portfolioTheme');
  if (['light', 'dark', 'system'].includes(saved)) document.documentElement.dataset.theme = saved;
} catch (_) { /* CSS follows the system preference when storage is unavailable. */ }
