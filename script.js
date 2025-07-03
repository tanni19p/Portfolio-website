const projects = [
    { title: "Artfolio", desc: "A digital gallery showcasing my art using HTML and CSS." },
    { title: "To-Do List App", desc: "Built with HTML, CSS, and JavaScript." },
    { title: "Weather App", desc: "Displays weather data using API and styled with CSS." },
    { title: "Quiz App", desc: "Interactive quiz app built with HTML, CSS, and JavaScript." }
];

const grid = document.getElementById("projects-grid");

projects.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    card.addEventListener("click", () => openModal(idx));
    grid.appendChild(card);
});

function openModal(index) {
    alert(`Project: ${projects[index].title}`);
}

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const message = document.getElementById('message');

    if (name.value.trim().length < 2 || message.value.trim().length < 5) {
        alert("Please fill in all fields properly.");
        e.preventDefault();
    }

    const email = document.querySelector('input[type="email"]');
    if (!email.value.includes('@')) {
        alert("Please enter a valid email!");
        e.preventDefault();
    }
});

