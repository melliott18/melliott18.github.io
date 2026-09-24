(() => {
  const menu = document.querySelector('.section-menu');
  const mobile = window.matchMedia('(max-width: 50em)');
  const syncMenu = () => { menu.open = !mobile.matches; };
  syncMenu();
  mobile.addEventListener('change', syncMenu);
  const menuSummary = menu.querySelector('summary');
  const header = document.querySelector('.site-header');
  const sidebar = document.querySelector('.sidebar');
  const sidebarContent = sidebar.querySelector('.sidebar-content');
  const identity = document.querySelector('.identity');
  const headerCopy = document.querySelector('.header-copy');
  const focus = header.querySelector('.focus');
  const portrait = identity.querySelector('img');
  const name = identity.querySelector('span');
  const pixels = (style, property) => parseFloat(style[property]) || 0;
  const outerHeight = (element) => {
    const style = getComputedStyle(element);
    return element.getBoundingClientRect().height + pixels(style, 'marginTop') + pixels(style, 'marginBottom');
  };
  const verticalFrame = (style) => ['paddingTop', 'paddingBottom', 'borderTopWidth', 'borderBottomWidth']
    .reduce((height, property) => height + pixels(style, property), 0);
  const alignHeader = () => {
    if (mobile.matches) {
      header.style.removeProperty('--header-height');
      identity.style.removeProperty('--identity-height');
      return;
    }
    const sidebarStyle = getComputedStyle(sidebar);
    const contentStyle = getComputedStyle(sidebarContent);
    const identityStyle = getComputedStyle(identity);
    const gap = pixels(getComputedStyle(document.querySelector('main')), 'paddingTop');
    const profileOffset = pixels(sidebarStyle, 'borderTopWidth') + pixels(contentStyle, 'paddingTop')
      + pixels(identityStyle, 'marginTop') + pixels(identityStyle, 'marginBottom');
    const profileHeight = outerHeight(portrait) + outerHeight(name) + verticalFrame(identityStyle);
    const contentHeight = outerHeight(headerCopy) + outerHeight(focus) + verticalFrame(getComputedStyle(header));
    // Align About's top with the Sections control, allowing for the gap below the header.
    const height = Math.max(contentHeight, profileOffset + profileHeight - gap);
    header.style.setProperty('--header-height', `${height}px`);
    identity.style.setProperty('--identity-height', `${height + gap - profileOffset}px`);
  };
  alignHeader();
  mobile.addEventListener('change', alignHeader);
  menu.addEventListener('toggle', alignHeader);
  if (typeof ResizeObserver !== 'undefined') {
    const headerObserver = new ResizeObserver(alignHeader);
    [sidebar, portrait, name, headerCopy, focus].forEach((element) => headerObserver.observe(element));
  } else {
    window.addEventListener('resize', alignHeader);
  }
  menu.addEventListener('click', (event) => {
    if (!mobile.matches || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="#"]');
    const target = link && document.getElementById(link.hash.slice(1));
    if (!target) return;
    menu.open = false;
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && menu.open) {
      menu.open = false;
      menuSummary.focus();
    }
  });
  const downloads = document.querySelector('.download-menu');
  downloads.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && downloads.open) {
      downloads.open = false;
      downloads.querySelector('summary').focus();
    }
  });
  const select = document.getElementById('theme');
  select.value = document.documentElement.dataset.theme || 'system';
  select.closest('.theme-control').hidden = false;
  select.addEventListener('change', () => {
    document.documentElement.dataset.theme = select.value;
    try { localStorage.setItem('portfolioReviewTheme', select.value); } catch (_) {}
  });
})();
