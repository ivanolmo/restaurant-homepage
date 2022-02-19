let x = document.getElementById('menu__icon');
let y = document.getElementById('nav__list');

x.addEventListener('click', (e) => {
  e.preventDefault();
  y.classList.toggle('active--nav');
});
