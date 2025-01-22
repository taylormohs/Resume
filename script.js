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

const wfHeader = document.getElementById('wf-header');
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

const cjHeader = document.getElementById('cj-header');
const cjSummary = document.getElementById('cj-summary');
let isCjSummaryShowing = false;

cjHeader.addEventListener('click', () => {
    isCjSummaryShowing = !isCjSummaryShowing;
    if(isCjSummaryShowing) {
        cjSummary.innerHTML = `
        <p><strong>The skills I learned and used here are described above. I maintained a strong work ethic and consistency in performance and adaptivity that led to my recognition as Employee of the Year.</strong>
                </p>
        `
    } else {
        cjSummary.innerText = '';
    }
});

const cascadeHeader = document.getElementById('cascade-header');
const cascadeSummary = document.getElementById('cascade-summary');
let isCascadeSummaryShowing = false;

cascadeHeader.addEventListener('click', () => {
    isCascadeSummaryShowing = !isCascadeSummaryShowing;
    if (isCascadeSummaryShowing) {
        cascadeSummary.innerHTML = `
        <p><strong>The experience I gained as an EMT has also showcased my ability to excel at any career I put my energy towards. In this career I have demonstrated:</strong>
              <ul>
                <li>Crisis Management and Decision-Making: Provided immediate medical care in high-pressure situations, requiring quick and effective decision-making. This ability to remain calm and make informed decisions under stress is crucial in the fast-paced tech industry.</li>
                <li>Patient Care and Empathy: Delivered compassionate care to patients, often in distressing circumstances. My strong interpersonal skills and empathy are valuable for client relations and teamwork within a tech setting.</li>
                <li>Technical Proficiency: Operated complex medical equipment and technology to assess and treat patients. This technical proficiency can be easily adapted to work with various tech tools and software.</li>
                <li>Detailed Documentation and Reporting: Accurately documented patient information, treatment provided, and outcomes. My attention to detail ensures precision and quality in all tasks, whether documenting medical records or coding software applications.</li>
                <li>Team Collaboration: Worked closely with other healthcare professionals, first responders, and hospital staff to deliver comprehensive care. My ability to function effectively within a team is directly applicable to the collaborative nature of tech projects.</li>
                <li>Problem-Solving and Adaptability: Addressed and resolved diverse medical emergencies, showcasing my ability to adapt to dynamic situations and find creative solutions—traits essential in the ever-evolving tech landscape.</li>
                </ul>
                </p>
        `
    } else {
        cascadeSummary.innerText = '';
    }
});

const accessHeader = document.getElementById('access-header');
const accessSummary = document.getElementById('access-summary');
let isAccessSummaryShowing = false;

accessHeader.addEventListener('click', () => {
    isAccessSummaryShowing = !isAccessSummaryShowing;
    if (isAccessSummaryShowing) {
        accessSummary.innerHTML = `
        <p><strong>As a Direct Support Professional, the diverse environment I continuously experienced and catered to allowed me to grow necessary skills I use in life and will use in software development. These skills include but are not limited to:</strong>
            <ul>
            <li>Empathy and Client Relations: Developed strong interpersonal and communication skills while providing direct support to individuals with varying needs. This experience is crucial for client relations and teamwork in a tech setting.</li>
            <li>Problem-Solving and Adaptability: Addressed and resolved challenges faced by clients, showcasing my ability to remain calm under pressure and adapt to dynamic situations. This skill is vital in the fast-paced tech industry.</li>
            <li>Multitasking and Time Management: Managed multiple tasks simultaneously, from assisting clients with daily activities to maintaining accurate records. This experience has equipped me with the ability to prioritize and manage time efficiently, essential for project management and meeting deadlines in a tech role.</li>
            <li>Team Collaboration: Worked collaboratively with healthcare professionals, family members, and other support staff to ensure comprehensive care for clients. My ability to work in a team-oriented environment is directly applicable to the collaborative nature of tech projects.</li>
            <li>Attention to Detail: Maintained detailed and accurate records of client progress, adhering to regulatory and organizational standards. My meticulous attention to detail ensures accuracy and quality in all tasks, whether documenting client data or coding a software application.</li>
            <li>Advocacy and Communication: Enhanced client outcomes by effectively advocating for their needs and communicating with stakeholders. Demonstrating my persuasive communication skills and understanding of individual needs—attributes beneficial for roles in tech support, user experience, or customer relations.</li>
            </ul>
            </p>
        `
    } else {
        accessSummary.innerText = '';
    }
});

const codeHeader = document.getElementById('code-header');
const codeSummary = document.getElementById('code-summary');
let isCodeSummaryShowing = false;

codeHeader.addEventListener('click', () => {
    isCodeSummaryShowing = !isCodeSummaryShowing;
    if (isCodeSummaryShowing) {
        codeSummary.innerHTML = `
      <p><strong>freeCodeAcademy is a self-paced, online program that has allowed me to develop my skills as an entry level software engineer. I have completed courses for HTML, CSS and Javascript and am continuing to practice my skill set through gitHub and more courses. I plan to dive into Python next and continue expanding my vocabulary in computer languages.</strong>
        `
    } else {
        codeSummary.innerText = '';
    }
});

const bellinghamTechHeader = document.getElementById('bellingham-tech-header');
const bellinghamTechSummary = document.getElementById('bellingham-tech-summary');
let isBellinghamTechSummaryShowing = false;

bellinghamTechHeader.addEventListener('click', () => {
    isBellinghamTechSummaryShowing = !isBellinghamTechSummaryShowing;
    if (isBellinghamTechSummaryShowing) {
        bellinghamTechSummary.innerHTML = `
      <p><strong>I graduated at the top of my class, pursuing a career as an EMT. I worked closely with medical professionals and demonstrated the ability to effectively learn and use a career's worth of knowledge in a short period of time, while being excited to continue learning and progressing as a licensed EMT.
</strong>
        `
    } else {
        bellinghamTechSummary.innerText = '';
    }
});

const westernHeader = document.getElementById('western-header');
const westernSummary = document.getElementById('western-summary');
let isWesternSummaryShowing = false;

westernHeader.addEventListener('click', () => {
    isWesternSummaryShowing = !isWesternSummaryShowing;
    if (isWesternSummaryShowing) {
        westernSummary.innerHTML = `
      <p><strong>I originally went to school pursuing a career in healthcare. My plan was to get my undergraduate degree, gain hours in the  medical field and then apply to Physician Assistant school. I graduated in 3 years with a 3.9 GPA. My love of problem solving and the body made me want to pursue this career, however after some life changes and consideration, I have recognized that my ability and love of problem-solving can take me other directions that would better suit my future goals, for example, software development.</strong>
        `
    } else {
        westernSummary.innerText = '';  
    }
      });