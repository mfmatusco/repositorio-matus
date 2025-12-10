// DATOS DE LA TABLA
const tableData = [
    { pos: 1, country: "Estados Unidos" },
    { pos: 2, country: "Japón" },
    { pos: 3, country: "Reino Unido" },
    { pos: 4, country: "Alemania" },
    { pos: 5, country: "China" },
    { pos: 6, country: "Francia" },
    { pos: 7, country: "Corea del Sur" },
    { pos: 8, country: "Canadá" },
    { pos: 9, country: "Brasil" },
    { pos: 10, country: "Australia" }
];

// RENDERIZAR TABLA
// Usamos un evento para asegurarnos que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#rankingTable tbody');
    
    if(tableBody) {
        tableData.forEach(item => {
            const row = document.createElement('tr');
            
            // Highlight a la primera fila
            if (item.pos === 1) {
                row.className = 'row-highlight';
            } else {
                row.className = 'text-gray-400 hover:bg-[#262626] transition-colors';
            }

            row.innerHTML = `
                <td class="font-mono">${item.pos}</td>
                <td>${item.country}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // ANIMACIÓN DE SCROLL
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});