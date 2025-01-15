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
const wfHeader = document.getElementById('wf-header');

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

const wfSummary = document.getElementById('wf-summary');
let isWfSummaryShowing = false;

wfHeader.addEventListener('click', () => {
    isWfSummaryShowing = !isWfSummaryShowing;
    if (isWfSummaryShowing) {
        wfSummary.innerHTML = `
        <p><strong>As a bartender with 2 years of experience, I have honed a diverse skill set that can seamlessly transfer to a tech company environment. My roles and responsibilities have included:</strong>
              <ul>
                <li>Customer Service Excellence: Developed strong interpersonal and communication skills that are crucial for client relations and teamwork in a tech setting.</li>
                <li>Problem-Solving and Adaptability: Addressed and resolved customer concerns swiftly and effectively, showcasing my ability to remain calm under pressure and adapt to dynamic situations—a vital trait in the fast-paced tech industry.</li>
                <li>Multitasking and Time Management: Managed multiple tasks simultaneously, from preparing and serving drinks to handling cash transactions and maintaining inventory. This experience has equipped me with the ability to prioritize and manage time efficiently, essential for project management and meeting deadlines in a tech role.</li>
                <li>Team Collaboration: Worked collaboratively with kitchen staff, waitstaff, and management to ensure smooth operations and exceptional service. My ability to work in a team-oriented environment is directly applicable to the collaborative nature of tech projects.</li>
                <li>Attention to Detail: Maintained a clean and organized bar area, adhering to health and safety regulations. My meticulous attention to detail ensures accuracy and quality in all tasks, whether mixing a cocktail or coding a software application.</li>
                <li>Upselling and Sales Skills: Enhanced revenue by effectively upselling beverages and promoting specials, demonstrating my persuasive communication skills and understanding of market dynamics—attributes beneficial for roles in tech sales or marketing.</li>
              </ul>
                </p>
        `
    } else {
        wfSummary.innerText = '';
    }
});