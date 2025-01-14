const lightBtn = document.getElementById('light-dark-mode');
const header = document.querySelector('header');
const headers = document.querySelectorAll('h3');
const background = document.querySelector('main');
const dateBtn = document.getElementById('todays-date');
const dateContainer = document.getElementById('date-container');
let darkMode = false;

lightBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        lightBtn.innerText = 'Light Mode';
        header.style.backgroundColor = 'black';
        header.style.color = 'white';
        headers.forEach((h3) => (h3.style.color = 'white'));
        background.style.backgroundColor = 'grey';
    } else {
        lightBtn.innerText = 'Dark Mode';
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        headers.forEach((h3) => (h3.style.color = 'black'));
        background.style.backgroundColor = 'white';
    }
});
