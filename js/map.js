import teamMembers from './data/team.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize map
    const map = L.map('map').setView([20, 0], 2);

    // Add OpenStreetMap tiles with dark mode support
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Create custom marker icon
    const createCustomMarker = (imageUrl) => {
        return L.divIcon({
            className: 'custom-marker',
            html: `
                <div class="marker-content">
                    <div class="marker-pin"></div>
                    <img src="${imageUrl}" class="marker-image" alt="Team member">
                </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 30],
            popupAnchor: [0, -30]
        });
    };

    // Initialize an array to hold marker locations
    const bounds = L.latLngBounds();

    // Add markers for each team member
    teamMembers.forEach(member => {
        const marker = L.marker([member.location.lat, member.location.lng], {
            icon: createCustomMarker(member.profile)
        }).addTo(map);

        // Extend the bounds with each marker's location
        bounds.extend(marker.getLatLng());

        // Create popup content
        const popupContent = `
            <img src="${member.profile}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>${member.title}</strong></p>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${member.location.city}</span>
            </div>
        `;

        const popup = document.getElementById('profile-popup');

        // Show popup on hover
        marker.on('mouseover', (e) => {
            popup.innerHTML = popupContent;
            popup.classList.add('active');
            
            // Position popup near the marker
            const point = map.latLngToContainerPoint(e.target.getLatLng());
            popup.style.left = (point.x + 30) + 'px';
            popup.style.top = (point.y - 100) + 'px';
        });

        // Hide popup when mouse leaves
        marker.on('mouseout', () => {
            popup.classList.remove('active');
        });

        // Center map on marker when clicked
        marker.on('click', (e) => {
            map.flyTo(e.target.getLatLng(), 6, {
                duration: 1.5,
                easeLinearity: 0.25
            });
        });
    });

    // Fit the map to the bounds of all markers
    map.fitBounds(bounds);
});
