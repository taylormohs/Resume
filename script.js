const lightBtn = document.getElementById('light-dark-mode');
const header = document.querySelector('header');
const headers = document.querySelectorAll('h3');
const background = document.querySelector('main');
const navBar = document.querySelector('nav');
const navLinks = Array.from(document.getElementsByClassName('nav-link'));
const cert = document.getElementById('cert');
let darkMode = false;

lightBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        lightBtn.innerText = 'Light Mode';
        header.style.backgroundColor = 'black';
        header.style.color = 'lightgray';
        navBar.style.backgroundColor = 'black';
        navBar.style.color = 'lightgray';
        navLinks.forEach((link) => {
            link.style.color = 'lightgray';
            link.style.backgroundColor = 'black';
        }   );
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
        header.style.backgroundColor = '';
        header.style.color = '';
        navBar.style.backgroundColor = '';
        navBar.style.color = '';
        navLinks.forEach((link) => {
            link.style.color = '';
            link.style.backgroundColor = '';
        }   );
        cert.forEach((certs) => {
            certs.style.color = '';
        cert.style.color = '';
        cert.style.backgroundColor = '';
            h3.style.color = '';
        });
        background.style.backgroundColor = '';
        lightBtn.style.backgroundColor = '';
        dateBtn.style.backgroundColor = '';
        dateBtn.style.color = '';
        lightBtn.style.color = '';
    };
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
