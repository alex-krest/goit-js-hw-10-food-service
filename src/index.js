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

statusLocalStorage();

body.classList.add('light-theme');

themeControl.addEventListener('change', themeChangeControl);

function themeChangeControl() {
  if (themeControl.checked) {
    body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}
// ХРАНЕНИЕ ТЕМЫ
function statusLocalStorage() {
  const saveLocal = localStorage.getItem('theme');
  if (saveLocal) {
    //   ??????????????????????????
  }
}
