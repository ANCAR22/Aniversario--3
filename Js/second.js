// Fondo estrellado animado
const canvas = document.createElement('canvas');
canvas.id = 'starCanvas';
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars(ctx, stars) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.globalAlpha = star.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function animateStars() {
    const ctx = canvas.getContext('2d');
    const stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.5,
            speed: Math.random() * 0.2 + 0.05
        });
    }
    function loop() {
        for (let star of stars) {
            star.y += star.speed;
            if (star.y > canvas.height) star.y = 0;
        }
        drawStars(ctx, stars);
        requestAnimationFrame(loop);
    }
    loop();
}
animateStars();


const idiomas = [
    'Te amo', 'I love you', 'Je t\'aime', 'Ich liebe dich', 'Ti amo', 'Eu te amo', '愛してる', '사랑해', 'Я тебя люблю', 'Σ\'αγαπώ'
];

function crearTextoCayendo() {
    const texto = document.createElement('div');
    texto.innerText = idiomas[Math.floor(Math.random() * idiomas.length)];
    texto.style.position = 'fixed';
    texto.style.left = `${Math.random() * 90}%`;
    texto.style.top = '-40px';
    texto.style.color = '#fff';
    texto.style.fontSize = `${Math.random() * 1.5 + 1.2}em`;
    texto.style.opacity = Math.random() * 0.5 + 0.7;
    texto.style.textShadow = '0 0 16px #fff, 0 0 32px #ff69b4';
    texto.style.fontFamily = 'cursive, Segoe Script, Arial';
    texto.style.padding = '0.2em 0.6em';
    texto.style.borderRadius = '12px';
    texto.style.background = 'rgba(0,0,0,0.2)';
    texto.style.zIndex = '2';
    texto.style.transition = 'top 4s linear, opacity 0.5s';
    document.body.appendChild(texto);

    setTimeout(() => {
        texto.style.top = `${window.innerHeight}px`;
        texto.style.opacity = '0.2';
    }, 100);

    setTimeout(() => {
        texto.remove();
    }, 4000);
}


setInterval(crearTextoCayendo, 700);