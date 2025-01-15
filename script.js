const lightBtn = document.getElementById('light-dark-mode');
const header = document.querySelector('header');
const headers = document.querySelectorAll('h3');
const navBar = document.querySelector('nav');
const navLinks = Array.from(document.getElementsByClassName('nav-link'));
const linkedIn = document.getElementById('linkedin');
const h2 = document.getElementById('career');
const h4 = document.getElementById('contact');
const summary = document.getElementById('summary');
const dateBtn = document.getElementById('todays-date');
const dateContainer = document.getElementById('date-container');
const resumeBtn = document.getElementById('resume');
const resumeContainer = document.getElementById('resume-container');

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
        h2.style.color = 'grey';
        h4.style.color = 'grey';
        linkedIn.style.color = 'grey';
        summary.style.color = 'grey';
        headers.forEach((h3) => {
            h3.style.backgroundColor = 'grey';
            h3.style.color = 'black';
        });
        lightBtn.style.backgroundColor = 'black';
        dateBtn.style.backgroundColor = 'black';
        dateBtn.style.color = 'grey';
        lightBtn.style.color = 'grey';
        dateContainer.style.color = 'black';
        resumeBtn.style.backgroundColor = 'black';
    } else {
        lightBtn.innerText = 'Dark Mode';
        header.style.backgroundColor = '';
        header.style.color = '';
        navBar.style.backgroundColor = '';
        navBar.style.color = '';
        navLinks.forEach((link) => {
            link.style.color = '';
            link.style.backgroundColor = '';
        });
        h2.style.color = '';
        h4.style.color = '';
        linkedIn.style.color = '';  
        summary.style.color = '';
        headers.forEach((h3) => {
            h3.style.backgroundColor = '';
            h3.style.color = '';
        });
        lightBtn.style.backgroundColor = '';
        dateBtn.style.backgroundColor = '';
        dateBtn.style.color = '';
        lightBtn.style.color = '';
        dateContainer.style.color = '';
        resumeBtn.style.backgroundColor = '';
    }
});

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

let isResumeContainerShowing = false;

resumeBtn.addEventListener('click', () => {
    isResumeContainerShowing = !isResumeContainerShowing;
    if (isResumeContainerShowing) { 
        resumeBtn.innerText = 'Hide Resume';
        resumeContainer.removeAttribute('hidden');
    } else {
        resumeBtn.innerText = 'Resume';
        resumeContainer.setAttribute('hidden', '');
    }
});
