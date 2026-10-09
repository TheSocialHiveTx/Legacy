'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const project = document.querySelector('#project');
if (project) {
  const chosen = new URLSearchParams(window.location.search).get('project');
  if ([...project.options].some(option => option.value === chosen)) project.value = chosen;
document.querySelectorAll('[data-project]').forEach(link => {
  link.addEventListener('click', () => { project.value = link.dataset.project; });
});
}

const viewer = document.querySelector('#image-viewer');
if (viewer) {
  const tiles = [...document.querySelectorAll('[data-image]')];
  let active = null;
  function showImage(button) {
    active = button;
    document.querySelector('#viewer-image').src = button.dataset.image;
    document.querySelector('#viewer-image').alt = button.dataset.caption;
    document.querySelector('#viewer-caption').textContent = button.dataset.caption;
  }
  function step(direction) {
    const visible = tiles.filter(tile => !tile.hidden);
    const index = visible.indexOf(active);
    showImage(visible[(index + direction + visible.length) % visible.length]);
  }
  tiles.forEach(button => button.addEventListener('click', () => {
    showImage(button);
    viewer.showModal();
  }));
  viewer.querySelector('.viewer-prev').addEventListener('click', () => step(-1));
  viewer.querySelector('.viewer-next').addEventListener('click', () => step(1));
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
  });
  const filters = [...document.querySelectorAll('[data-filter]')];
  function filter(category) {
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    tiles.forEach(tile => { tile.hidden = category !== 'all' && tile.dataset.category !== category; });
    const count = tiles.filter(tile => !tile.hidden).length;
    document.querySelector('#gallery-count').textContent = `${count} ${count === 1 ? 'photo' : 'photos'}`;
  }
  filters.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter)));
  const requested = new URLSearchParams(window.location.search).get('category');
  if (filters.some(button => button.dataset.filter === requested)) filter(requested);
}
const projectForm = document.querySelector('#project-form');
const projectStatus = document.querySelector('#form-status');

projectForm?.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(projectForm);
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const projectType = (formData.get('project') || '').toString().trim();
  const location = (formData.get('location') || '').toString().trim();
  const details = (formData.get('details') || '').toString().trim();

  if (!name || !email || !projectType || !location || !details) {
    projectStatus.textContent = 'Please complete all required fields before sending your project details.';
    projectStatus.classList.add('error');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    projectStatus.textContent = 'Please enter a valid email address.';
    projectStatus.classList.add('error');
    return;
  }

  projectStatus.classList.remove('error');
  projectStatus.textContent = 'Opening Facebook so you can send your estimate request.';
  window.open('https://www.facebook.com/profile.php?id=61595333751210', '_blank', 'noopener,noreferrer');
});
