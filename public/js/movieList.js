const body = document.querySelector('body')
const h1 = document.querySelector('h1')

// Preguntamos si quiere modo oscuro
let darkMode = window.confirm('¿Desea modo oscuro?')
if (darkMode) {
    body.style.backgroundColor = '#7f7f7f';
    body.classList = 'fondoMoviesList';
}

h1.innerHTML += 'LISTADO DE PELICULAS';
h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px';