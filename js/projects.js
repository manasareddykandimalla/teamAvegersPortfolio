import projects from './data/projects.js';

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    View Project <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
});