const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const themeButton = document.querySelector('[data-theme-toggle]');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function storedTheme() {
  try { return localStorage.getItem('pk-theme'); } catch (_) { return null; }
}

function applyTheme(theme, persist = false) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;
  if (themeMeta) themeMeta.content = nextTheme === 'dark' ? '#14091f' : '#fff3ed';
  if (themeButton) {
    const dark = nextTheme === 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    themeButton.setAttribute('title', `Switch to ${dark ? 'light' : 'dark'} mode`);
    themeButton.querySelector('[data-theme-icon]').textContent = dark ? '☀' : '☾';
    themeButton.querySelector('[data-theme-label]').textContent = dark ? 'Light' : 'Dark';
  }
  if (persist) {
    try { localStorage.setItem('pk-theme', nextTheme); } catch (_) { /* Preference remains active for this page. */ }
  }
}

applyTheme(document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));

if (themeButton) {
  themeButton.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });
}

systemTheme.addEventListener?.('change', event => {
  if (!storedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
}

document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}
