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
