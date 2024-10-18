document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const projectName = document.getElementById('projectName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];

    // Get selected technologies
    const technologies = [];
    if (document.getElementById('nodejs').checked) technologies.push('Node Js');
    if (document.getElementById('nextjs').checked) technologies.push('Next Js');
    if (document.getElementById('reactjs').checked) technologies.push('React Js');
    if (document.getElementById('typescript').checked) technologies.push('TypeScript');

    // Create a reader to read the image file and display it
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageSrc = e.target.result;
        addProjectToDOM(projectName, startDate, endDate, description, technologies, imageSrc);
    };
    reader.readAsDataURL(imageFile);
});

function addProjectToDOM(name, start, end, desc, techs, imgSrc) {
    const projectsContainer = document.getElementById('projectsContainer');

    // Create project card
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    projectCard.innerHTML = `
        <img src="${imgSrc}" alt="${name}">
        <h3>${name} - ${new Date(start).getFullYear()}</h3>
        <p>${desc}</p>
        <p><strong>Technologies:</strong> ${techs.join(', ')}</p>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Add project card to the DOM
    projectsContainer.appendChild(projectCard);

    // Add event listeners to edit and delete buttons
    projectCard.querySelector('.delete').addEventListener('click', () => {
        projectsContainer.removeChild(projectCard);
    });

    projectCard.querySelector('.edit').addEventListener('click', () => {
        alert('Edit functionality can be implemented here.');
    });
}
