document.addEventListener("DOMContentLoaded", async function () {
    const aboutApi = "https://portfolio-codequillcrafts.onrender.com/api/about/";
    const servicesApi = "https://portfolio-codequillcrafts.onrender.com/api/services/";
    const projectsApi = "https://portfolio-codequillcrafts.onrender.com/api/projects/";
    const skillsApi = "https://portfolio-codequillcrafts.onrender.com/api/skills/";
    const contactApi = "https://portfolio-codequillcrafts.onrender.com/api/contact/";

    // Fetch and display 'About Me' section data
    try {
        const response = await fetch(aboutApi);
        const data = await response.json();

        document.querySelector('section#about .profile img').src = data[0].image;
        document.querySelector('section#about .profile .details .name').textContent = data[0].name;
        document.querySelector('section#about .profile .details .description').textContent = data[0].description;
        document.querySelector('section#about .profile .details a').href = data[0].resume;
    } catch (error) {
        console.error("Error fetching 'About Me' data:", error);
    }

    // Fetch and display Services
    try {
        const response = await fetch(servicesApi);
        const services = await response.json();
        const servicesContainer = document.querySelector('section#services .services-container');

        services.forEach(service => {
            const serviceCardHTML = `
                <div class="services-card">
                    <img src="${service.image}" alt="${service.title}">
                    <div class="services-card-content">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                    </div>
                </div>
            `;
            servicesContainer.innerHTML += serviceCardHTML;
        });
    } catch (error) {
        console.error("Error fetching Services:", error);
    }

    // Fetch and display Projects
    try {
        const response = await fetch(projectsApi);
        const projects = await response.json();
        const projectsContainer = document.querySelector('#projects-container');

        projects.forEach(project => {
            const projectCardHTML = `
                <div class="projects-card">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="projects-card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="buttons">
                        <a href="${project.liveLink}" target="_blank"><button>View Live</button></a>
                        <a href="${project.codeLink}" target="_blank"><button>View Code</button></a>
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += projectCardHTML;
        });
    } catch (error) {
        console.error("Error fetching Projects:", error);
    }

    // Fetch and display Skills
    try {
        const response = await fetch(skillsApi);
        const skills = await response.json();
        const skillsContainer = document.querySelector('#skills-container');

        skills.forEach(skill => {
            const skillCardHTML = `
                <div class="skills-card">
                    <h3>${skill.name}</h3>
                    <div class="skill-bar">
                        <div class="skill-bar-fill" style="width: ${skill.percentage}%;"></div>
                        <span class="skill-percentage">${skill.percentage}%</span>
                    </div>
                </div>
            `;
            skillsContainer.innerHTML += skillCardHTML;
        });
    } catch (error) {
        console.error("Error fetching Skills:", error);
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch(contactApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                contactForm.reset();
            } else {
                alert('Failed to send your message. Please try again later.');
            }
        } catch (error) {
            console.error("Error sending contact message:", error);
            alert('An error occurred. Please try again later.');
        }
    });
});
