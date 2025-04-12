// Przykładowe dane projektów
const projects = [
    {
        title: "Analiza sprzedaży",
        description: "Kompleksowa analiza sprzedaży z ostatnich 5 lat",
        tools: ["SQL", "Power BI"],
        category: "sql"
    },
    {
        title: "Predykcja churn",
        description: "Model predykcyjny w Pythonie",
        tools: ["Python", "Scikit-learn"],
        category: "python"
    }
];

// Funkcja do wyświetlania projektów
function displayProjects() {
    const gallery = document.querySelector('.project-gallery');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tools">${project.tools.join(', ')}</div>
        `;
        
        gallery.appendChild(projectCard);
    });
}

// Inicjalizacja po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
});
