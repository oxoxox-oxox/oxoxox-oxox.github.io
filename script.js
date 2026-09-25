const btn = document.getElementById('btn');
const title = document.getElementById('greeting');

btn.addEventListener('click', () => {
    const colors = ['#2563eb', '#10b981', '#7c3aed', '#ef4444', '#f59e0b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
});