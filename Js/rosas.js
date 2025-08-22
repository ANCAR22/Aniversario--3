const canvas = document.getElementById('rosas');
const ctx = canvas.getContext('2d');

// Datos de los tulipanes (posición y color)
const tulipanes = [
    {x: 200, y: 180, color: '#ffb300'},
    {x: 160, y: 220, color: '#e53935'},
    {x: 240, y: 220, color: '#8e24aa'},
    {x: 180, y: 260, color: '#43a047'},
    {x: 220, y: 260, color: '#039be5'}
];

function dibujarTallo(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, 400);
    ctx.lineTo(x, y + 40);
    ctx.strokeStyle = '#388e3c';
    ctx.lineWidth = 8;
    ctx.stroke();
}

function dibujarHojas(x, y) {
    ctx.beginPath();
    ctx.ellipse(x - 18, y + 100, 22, 12, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#43a047';
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + 18, y + 70, 22, 12, -Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#43a047';
    ctx.fill();
}

// Dibuja la flor del tulipán
function dibujarTulipan(x, y, color) {
    // Pétalo central
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.bezierCurveTo(x - 20, y + 10, x - 10, y - 30, x, y - 10);
    ctx.bezierCurveTo(x + 10, y - 30, x + 20, y + 10, x, y + 40);
    ctx.fillStyle = color;
    ctx.fill();

    // Pétalo izquierdo
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.bezierCurveTo(x - 25, y + 15, x - 25, y - 10, x, y - 10);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.globalAlpha = 1;

    // Pétalo derecho
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.bezierCurveTo(x + 25, y + 15, x + 25, y - 10, x, y - 10);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.globalAlpha = 1;
}

function animarRamoTulipanes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tulipanes.forEach((tulipan, i) => {
        setTimeout(() => {
            dibujarTallo(tulipan.x, tulipan.y);
            setTimeout(() => {
                dibujarHojas(tulipan.x, tulipan.y);
                setTimeout(() => {
                    dibujarTulipan(tulipan.x, tulipan.y, tulipan.color);
                }, 300);
            }, 300);
        }, i * 900);
    });
}
animarRamoTulipanes();

// ...existing code...

// Mensajes de fondo personalizados
const mensajes = [
    "La amo mucho",
    "Gracias por compartir estos 3 años a mi lado",
    "Gracias por estar para mí",
    "Gracias por compartir tanto tiempo conmigo",
    "Mi lugar favorito es en el que estoy con usted",
    "Es la mejor"
];

let mensajesVisibles = [];

function crearMensajeFondo() {
    // Limita a 3 mensajes visibles
    if (mensajesVisibles.length >= 3) {
        const viejo = mensajesVisibles.shift();
        if (viejo && viejo.parentNode) viejo.parentNode.removeChild(viejo);
    }

    const texto = document.createElement('div');
    texto.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
    texto.style.position = 'fixed';
    texto.style.left = `${Math.random() * 60 + 20}%`; // Más centrado
    texto.style.top = `${Math.random() * 60 + 20}%`;  // Más centrado
    texto.style.color = '#b39ddb';
    texto.style.fontSize = `${Math.random() * 1.5 + 1.5}em`; // Más grande
    texto.style.opacity = '0.28'; // Más visible
    texto.style.fontFamily = 'Segoe Script, cursive, Arial';
    texto.style.pointerEvents = 'none';
    texto.style.zIndex = '1';
    texto.style.textShadow = '0 0 24px #7c43bd, 0 0 48px #fff';
    texto.style.transform = `rotate(${Math.random() * 16 - 8}deg)`;
    texto.style.transition = 'opacity 1s';

    document.body.appendChild(texto);
    mensajesVisibles.push(texto);

    setTimeout(() => {
        texto.style.opacity = '0.08';
    }, 4000);

    setTimeout(() => {
        if (texto.parentNode) texto.parentNode.removeChild(texto);
        mensajesVisibles = mensajesVisibles.filter(t => t !== texto);
    }, 6000);
}

setInterval(crearMensajeFondo, 3000); // Más tiempo entre mensajes

// ...resto del código...

// Carrusel de imágenes automático (sin flechas)
const imagenes = document.querySelectorAll('#carrusel img');
let idx = 0;
function mostrarImagenCarrusel() {
    imagenes.forEach((img, i) => img.classList.toggle('active', i === idx));
}
setInterval(() => {
    idx = (idx + 1) % imagenes.length;
    mostrarImagenCarrusel();
}, 2500);
mostrarImagenCarrusel();


// Imágenes cayendo (puedes usar corazones, flores, etc.)
const imagenesCayendo = [
        "images/img1.jpeg",
       "images/img10.jpeg",
        "images/img11.jpeg",
        "images/img12.jpeg",
        "images/img13.jpeg",
        "images/img5.jpeg",
        "images/img4.jpeg",
        "images/img6.jpeg",
        "images/img7.jpeg",
        "images/img8.jpeg",
        "images/img9.jpeg"
];

function crearImagenCayendo() {
    const img = document.createElement('img');
    img.src = imagenesCayendo[Math.floor(Math.random() * imagenesCayendo.length)];
    img.style.position = 'fixed';
    img.style.left = `${Math.random() * 90}%`;
    img.style.top = '-60px';
    img.style.width = `${Math.random() * 40 + 30}px`;
    img.style.opacity = Math.random() * 0.5 + 0.5;
    img.style.zIndex = '3';
    img.style.transition = 'top 4s linear';
    document.body.appendChild(img);

    setTimeout(() => {
        img.style.top = `${window.innerHeight}px`;
    }, 100);

    setTimeout(() => {
        img.remove();
    }, 4000);
}

setInterval(crearImagenCayendo, 900);