import teamMembers from './data/team.js';

document.addEventListener('DOMContentLoaded', () => {
    const teamGrid = document.getElementById('team-grid');
    // console.log("teammanbers");
    // console.log(teamMembers);

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        
        card.innerHTML = `
            <img src="${member.profile}" alt="${member.name}" class="profile-image">
            <h2>${member.name}</h2>
            <h3>${member.title}</h3>
            <p>${member.role}</p>
            
            <div class="social-links">
                <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="github">
                    <i class="fa fa-github"></i>
                </a>
                <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="linkedin">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a href="/map.html" target="_self" rel="noopener noreferrer" class="map marker">
                    <i class="fa fa-map-marker"></i>
                </a>

                
            </div>
            
            <div class="skills-interests">
                <h4>Skills</h4>
                <div class="tags">
                    ${member.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                </div>
                
                <h4>Interests</h4>
                <div class="tags">
                    ${member.interests.map(interest => `<span class="tag">${interest}</span>`).join('')}
                </div>
            </div>
        `;
        
        teamGrid.appendChild(card);
    });
});