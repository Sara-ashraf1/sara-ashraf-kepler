
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

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (event) => {
    
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name);
    console.log(email);
    console.log(message);

    const messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = 
    `<a href = "mailto:${email}">${name}</a>
    <span>${message}</span>`
    ;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", event => {
        const entry = event.target.parentNode;
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage)

    event.target.reset();
} )

fetch('https://api.github.com/users/Sara-ashraf1/repos')
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json()
})
.then(data => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById('Projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement('li');
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
}
})
.catch(error => console.error(error));

