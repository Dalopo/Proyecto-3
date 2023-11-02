// Carrusel de imágenes
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

// Función para mostrar una imagen específica
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.opacity = 1;
        } else {
            image.style.opacity = 0;
        }
    });
}

// Función para mostrar la imagen anterior
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Función para mostrar la imagen siguiente
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Agregar eventos a los botones de flecha
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);
