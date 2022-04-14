const ratingInput = document.querySelector('.card__rating');
const ratingSubmit = document.getElementById('ratingSubmit');
const cardInput = document.getElementById('card--1');
const cardResult = document.getElementById('card--2');
const resultOutput = document.getElementById('resultOutput');
let resultRating;

const toggleCards = () => {
  cardInput.classList.toggle('hidden');
  cardResult.classList.toggle('hidden');
};

ratingSubmit.addEventListener('click', () => {
  if (!resultRating) return;
  toggleCards();
});

ratingInput.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT') {
    console.log(e.target.defaultValue);
    resultRating = Number(e.target.defaultValue);
    resultOutput.innerText = resultRating;
  }
});
