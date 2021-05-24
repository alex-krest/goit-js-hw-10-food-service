import '/styles.css';
import cards from './menu.json';
import menuCardTml from './templates/menu-card.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const cardsContainer = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(cards);

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(cards) {
  return cards.map(menuCardTml).join(' ');
}
// ТЕМА---------

const themeControl = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

themeControl.addEventListener('change', themeChangeControl);

// ХРАНЕНИЕ ТЕМЫ
body.classList.add(
  localStorage.getItem('theme') === null ? 'light-theme' : localStorage.getItem('theme'),
);

// ВКЛЮЧЕННЫЙ ЧЕКБОКС ПРИ ТЁМНОЙ ТЕМЕ
if (body.classList.value === 'dark-theme') {
  themeControl.checked = true;
}

function themeChangeControl() {
  if (themeControl.checked) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}
