
const footer = document.createElement('footer');
document.body.appendChild(footer);

const body = document.querySelector('body');

let today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement('p');
copyright.innerHTML = `Sara Ashraf &#169; ${thisYear}`;

footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'MySQL', 'Video Editing', 'Python'];

const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

for (const s of skills) {
    const skill = document.createElement('li');
    skill.innerText = s;
    skillsList.appendChild(skill);
}