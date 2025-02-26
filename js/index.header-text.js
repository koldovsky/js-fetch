const h1 = document.querySelector('.header__title');
// h1.style.color = 'red';
// h1.classList.add('highlight');

const greetings = [
    'Hello',
    'Buenos dias',
    'Вітаю!',
    'Привіт'
];

const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

h1.innerText = getRandomEl(greetings);
