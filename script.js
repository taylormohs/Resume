const lightBtn = document.getElementById('light-dark-mode');
const header = document.querySelector('header');
const headers = document.querySelectorAll('h3');
const background = document.querySelector('main');
const navBar = document.querySelector('nav');
const navLinks = document.getElementsByClassName('nav-link');
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
        cert.forEach((certs) => {
            certs.style.color = 'black';
            certs.style.backgroundColor = 'lightgray';
        });
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
            certs.style.backgroundColor = '';
        });
        headers.forEach((h3) => {
            h3.style.backgroundColor = '';
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
    `${month}/${day}/${year}<br>
    ${hours} Hourse ${minutes} Minutes`;

let isDateContainerShowing = false;

dateBtn.addEventListener('click', () => {
    dateContainer.style.display = isDateContainerShowing ? 'none' : 'block';
    dateContainer.innerText = todaysDate;
    dateBtn.innerText = isDateContainerShowing ? 'Show Date' : 'Hide Date';
});
