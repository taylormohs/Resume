const lightBtn = document.getElementById('light-dark-mode');
const header = document.querySelector('header');
const headers = document.querySelectorAll('h3');
const background = document.querySelector('main');
const navBar = document.querySelector('nav-bar');
const navLinks = Array.from(document.getElementsByClassName('nav-link'));
const cert = document.getElementById('cert');
let darkMode = false;

lightBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        lightBtn.innerText = 'Light Mode';
        header.style.backgroundColor = 'black';
        header.style.color = 'grey';
        navBar.style.backgroundColor = 'black';
        navBar.style.color = 'grey';
        navLinks.forEach((link) => {
            link.style.color = 'grey';
            link.style.backgroundColor = 'black';
        });
        cert.style.color = 'black';
        cert.style.backgroundColor = 'lightgray';
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
        header.style.removeProperty('background-color');
        header.style.removeProperty('color');
        navBar.style.removeProperty('background-color');
        navBar.style.removeProperty('color');
        navLinks.forEach((link) => {
            link.style.removeProperty('color');
            link.style.removeProperty('background-color');
        });
        cert.style.removeProperty('color');
        cert.style.removeProperty('background-color');
        headers.forEach((h3) => {
            h3.style.removeProperty('color');
            h3.style.removeProperty('background-color');
        });
        background.style.removeProperty('background-color');
        lightBtn.style.removeProperty('background-color');
        dateBtn.style.removeProperty('background-color');
        dateBtn.style.removeProperty('color');
        lightBtn.style.removeProperty('color');
    }
});

const dateBtn = document.getElementById('todays-date');
const dateContainer = document.getElementById('date-container');
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const todaysDate = 
    `${month}/${day}/${year}
    ${hours}: ${minutes}`;

let isDateContainerShowing = false;

dateBtn.addEventListener('click', () => {
   isDateContainerShowing = !isDateContainerShowing;
    if (isDateContainerShowing) {
    dateContainer.innerText = todaysDate;
    dateBtn.innerText = 'Hide Date';
    } else {
        dateContainer.innerText = '';
        dateBtn.innerText = 'Get Date & Time';
    }
});
