const btn = document.getElementById('btn');
const title = document.getElementById('greeting');

if (btn && title) {
    btn.addEventListener('click', () => {
        const colors = ['#38bdf8', '#34d399', '#a78bfa', '#f87171', '#fbbf24'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;
    });
}