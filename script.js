const lightBtn = document.getElementById('light-dark-mode');
const header = document.querySelector('header');
const headers = document.querySelectorAll('h3');
const background = document.querySelector('main');
const navBar = document.querySelector('nav');
const cert = document.querySelectorAll('cert');
const html = document.querySelector('html');
const dateBtn = document.getElementById('todays-date');
const dateContainer = document.getElementById('date-container');
let darkMode = false;

lightBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        lightBtn.innerText = 'Light Mode';
        header.style.backgroundColor = 'black';
        header.style.color = 'lightgray';
        navBar.style.backgroundColor = 'black';
        navBar.style.color = 'white';
        cert.style.color = 'black';
        html.style.backgroundColor = 'black';
        headers.forEach((h3) => {
            h3.style.backgroundColor = 'grey';
            h3.style.color = 'black';
        });
        background.style.backgroundColor = 'lightgray';
        lightBtn.style.backgroundColor = 'black';
        dateBtn.style.backgroundColor = 'black';
        dateBtn.style.color = 'grey';
        lightBtn.style.color = 'grey';
    } else {
        lightBtn.innerText = 'Dark Mode';
        header.style.backgroundColor = '';
        header.style.color = '';
        navBar.style.backgroundColor = '';
        navBar.style.color = '';
        cert.style.color = '';
        html.style.backgroundColor = '';
        headers.forEach((h3) => {
            h3.style.backgroundColor = '';
            h3.style.color = '';
        });
        background.style.backgroundColor = '';
        lightBtn.style.backgroundColor = '';
        dateBtn.style.backgroundColor = '';
        dateBtn.style.color = '';
        lightBtn.style.color = '';
    }
});
