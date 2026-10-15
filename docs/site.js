(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-menu');
  if (!toggle || !menu) return;
  toggle.hidden = false;
  document.documentElement.classList.add('nav-enhanced');
  const close = () => toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true')));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); }
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('click', event => { if (!event.target.closest('.site-nav')) close(); });
  // Thumbnail images repeat the adjacent title. Name the link and mark its image decorative.
  for (const link of document.querySelectorAll('.quarto-listing .thumbnail a')) {
    const title = link.closest('.quarto-post')?.querySelector('.listing-title')?.textContent.trim();
    if (title) link.setAttribute('aria-label', `Read ${title}`);
    const thumbnail = link.querySelector('img');
    if (thumbnail) thumbnail.setAttribute('alt', '');
  }
  for (const link of menu.querySelectorAll('a')) {
    if (new URL(link.href).pathname === window.location.pathname) link.setAttribute('aria-current', 'page');
  }
})();
