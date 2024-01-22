
// // Obtener el elemento HTML donde mostrar la fecha
// const currentDateElement = document.getElementById('fechaActual');

// // Obtener la fecha actual
// const currentDate = new Date();

// // Formatear la fecha como una cadena legible
// const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const formatDate = currentDate.toLocaleDateString('es-ES', optionsDate);

// // Mostrar la fecha en la página
// currentDateElement.textContent = formatDate;


// Obtener el elemento HTML donde mostrar la fecha
const fechaActualElement = document.getElementById('fechaActual');

// Obtener la fecha actual
const fechaActual = new Date();

// Formatear la fecha como una cadena legible
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha);

// Mostrar la fecha en la página
fechaActualElement.textContent = fechaFormateada;