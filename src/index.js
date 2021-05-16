import '/styles.css';
import cards from './menu.json';
import menuCardTml from './templates/menu-card.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
console.log(menuCardTml(cards[0]));

const cardsContainer = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(cards);

cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(cards) {
  return cards.map(menuCardTml).join(' ');
}
// ТЕМА---------
const themeControl = document.querySelector('#theme-switch-toggle');

const body = document.querySelector('body');

const bodyLigth = body.classList.add('light-theme');

themeControl.addEventListener('change', themeChangeControl);
const themeChangeControl = function () {
  if (body.light - theme) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
};
