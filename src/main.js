const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    toggle.click(); toggle.focus();
  }
});
const search = document.querySelector('#paper-search');
const year = document.querySelector('#paper-year');
function filterPapers() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  document.querySelectorAll('.publication-year').forEach(section => {
    let visible = 0;
    section.querySelectorAll('.paper').forEach(paper => {
      const match = (year.value === 'all' || section.dataset.year === year.value) && paper.textContent.toLowerCase().includes(query);
      paper.hidden = !match;
      if (match) { visible++; count++; }
    });
    section.hidden = !visible;
  });
  document.querySelectorAll('#publications > div').forEach(category => {
    category.hidden = ![...category.querySelectorAll('.publication-year')].some(section => !section.hidden);
  });
  document.querySelector('#paper-count').textContent = `${count} selected record${count === 1 ? '' : 's'}`;
  document.querySelector('#no-results').hidden = count > 0;
}
search?.addEventListener('input', filterPapers);
year?.addEventListener('change', filterPapers);
const topLink = document.querySelector('.back-to-top');
const updateScroll = () => { topLink.hidden = window.scrollY < 450; };
window.addEventListener('scroll', updateScroll, {passive:true});
updateScroll();
