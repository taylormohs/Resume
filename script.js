const lightBtn = document.getElementById('light-dark-mode');
const header = document.querySelector('header');
const headers = document.querySelectorAll('h3');
const background = document.querySelector('main');
const navBar = document.querySelector('nav-bar');
const navLinks = Array.from(document.getElementsByClassName('nav-link'));
const cert = document.getElementById('cert');
const html = document.querySelector('html');
const dateBtn = document.getElementById('todays-date');
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
        html.style.backgroundColor = 'black';
    } else {
        return;
    }
});
const dateContainer = document.getElementById('date-container');
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedHours = hours % 12 || 12;
const formattedMinutes = minutes.toString().padStart(2, '0');
const ampm = hours >= 12 ? 'PM' : 'AM';
const todaysDate = 
    `${month}/${day}/${year} 
    ${formattedHours}:${formattedMinutes} ${ampm}`;

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
