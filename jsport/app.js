// Definir variables para elementos en español
var elementosEspañol = {
    titulo: "Mi Portfolio",
    boton: "Traducir",
    sobreMi: "Sobre mí",
    proyectos: "Proyectos"
};

// Definir variables para elementos en inglés
var elementosIngles = {
    titulo: "My Portfolio",
    boton: "Translate",
    sobreMi: "About me",
    proyectos: "Projects"
};

// Obtener elementos del DOM
var titulo = document.getElementById('titulo');
var boton = document.getElementById('toggle-btn');
var sobreMi = document.getElementById('sobre-mi');
var proyectos = document.getElementById('proyectos');-

// Función para cambiar el idioma
function cambiarIdioma(español) {
    if (español) {
        // Cambiar elementos a español
        titulo.textContent = elementosEspañol.titulo;
        boton.textContent = elementosEspañol.boton;
        sobreMi.textContent = elementosEspañol.sobreMi;
        proyectos.textContent = elementosEspañol.proyectos;
    } else {
        // Cambiar elementos a inglés
        titulo.textContent = elementosIngles.titulo;
        boton.textContent = elementosIngles.boton;
        sobreMi.textContent = elementosIngles.sobreMi;
        proyectos.textContent = elementosIngles.proyectos;
    }
}

// Event listener para el checkbox
var checkbox = document.getElementById('example_rounded_1');
checkbox.addEventListener('change', function() {
    cambiarIdioma(this.checked);
});

// Llamar a la función para configurar el idioma inicialmente
cambiarIdioma(checkbox.checked);
