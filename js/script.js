// Mobile menu -----------------------------------------------------------------

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function setMenu(open) {
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    navMenu.classList.toggle('active', open);
}

hamburger.addEventListener('click', () => {
    setMenu(hamburger.getAttribute('aria-expanded') !== 'true');
});

navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
});

// Theme -----------------------------------------------------------------------
// The initial theme is applied inline in <head>; this only handles user toggles.

const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
        localStorage.setItem('theme', next);
    } catch (e) {
        // Storage unavailable (private mode); the toggle still works for this visit.
    }
});

// Follow the system theme as long as the visitor has not picked one.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let stored = null;
    try {
        stored = localStorage.getItem('theme');
    } catch (err) {
        /* ignore */
    }
    if (!stored) root.dataset.theme = e.matches ? 'dark' : 'light';
});

// Smooth scrolling is handled by CSS (scroll-behavior + scroll-padding-top),
// which keeps anchors from landing under the sticky navbar.
