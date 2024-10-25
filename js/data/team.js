const teamMembers = [
    {
        id: 1,
        name: "Tony Stark",
        title: "Lead Developer",
        role: "Frontend Architect",
        location: {
            lat: 40.7128,
            lng: -74.0060,
            city: "New York, USA"
        },
        profile: "/images/profiles/tony.jpg",
        github: "https://github.com/tonystark",
        linkedin: "https://linkedin.com/in/tonystark",
        skills: ["React", "TypeScript", "UI/UX", "System Architecture"],
        interests: ["AI", "Robotics", "Clean Energy", "Innovation"]
    },
    {
        id: 2,
        name: "Bruce Banner",
        title: "Backend Specialist",
        role: "System Architect",
        location: {
            lat: 34.0522,
            lng: -118.2437,
            city: "Los Angeles, USA"
        },
        profile: "/images/profiles/bruce.jpg",
        github: "https://github.com/brucebanner",
        linkedin: "https://linkedin.com/in/brucebanner",
        skills: ["Python", "Node.js", "Database Design", "API Development"],
        interests: ["Data Science", "Quantum Computing", "Research"]
    },
    {
        id: 3,
        name: "Natasha Romanoff",
        title: "Security Expert",
        role: "DevSecOps Engineer",
        location: {
            lat: 55.7558,
            lng: 37.6173,
            city: "Moscow, Russia"
        },
        profile: "/images/profiles/natasha.jpg",
        github: "https://github.com/blackwidow",
        linkedin: "https://linkedin.com/in/natasharom",
        skills: ["Cybersecurity", "Docker", "Kubernetes", "Penetration Testing"],
        interests: ["Network Security", "Ethical Hacking", "Cloud Architecture"]
    }
];

export default teamMembers;