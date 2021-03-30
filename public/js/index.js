// 2. Capturar el nombre del invitado o colocarle invitado por default
let name = window.prompt('Ingrese su nombre', 'Invitado')
if (name == null) { name = 'Invitado' }


// 1. Seleccionar main, h2, a y p
const body = document.querySelector('body')
const main = document.querySelector('main')
const h2 = document.querySelector('h2')
const a = document.querySelector('a')
const p = document.querySelectorAll('p')

// Agregar el nombre al lado de bienvenido y todo en mayuscula
h2.innerText += name.toUpperCase()

// Otro color para los <a>
a.style.color = '#E51B3E';

// Fondo de pantalla
const background = confirm('¿Desea colocar un fondo de pantalla?')
if (background) { body.classList.add('fondo') }

// Colocar una clase a los parrafos pares y otro a los impares
let count = 0; // arranco un contador
p.forEach(paragraph => {
    count += 1;
    if (count%2 == 0) { 
        paragraph.classList.add('destacadoImpar')
    } else {
        paragraph.classList.add('destacadoPar')
    }
});

main.style.display = 'block';