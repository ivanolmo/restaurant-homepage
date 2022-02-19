// toggle nav on smaller screens
let icon = document.getElementById('menu__icon');
let nav = document.getElementById('nav__list');

icon.addEventListener('click', (e) => {
  e.preventDefault();
  nav.classList.toggle('active--nav');
});
