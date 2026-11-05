/**
 * satelite.js · Lógica de la ventana satélite (satelite.html)
 */

// Hito 2.1: detección del sistema operativo.

// navigator.userAgent devuelve un String con datos del navegador y del sistema.
const userAgent = navigator.userAgent;

let sistema = 'un sistema desconocido';

// includes() busca un texto dentro del String.
if (userAgent.includes('Windows')) {
  sistema = 'Windows';
} else if (userAgent.includes('Mac')) {
  sistema = 'Mac';
} else if (userAgent.includes('Linux')) {
  sistema = 'Linux';
}

// Crear el párrafo, darle texto e insertarlo en el documento.
const parrafo = document.createElement('p');
parrafo.textContent = `¡Bienvenido! Estás navegando desde ${sistema}.`;
document.getElementById('bienvenida').appendChild(parrafo);

// Hito 2.2: control del historial de la ventana madre.

const URL_ILERNA = 'https://www.ilerna.es';

// assign(): carga la nueva URL y guarda la anterior en el historial.
document.getElementById('btnConHistorial').addEventListener('click', () => {
  window.opener.location.assign(URL_ILERNA);
});

// replace(): sustituye la URL actual en el historial.
document.getElementById('btnSinHistorial').addEventListener('click', () => {
  window.opener.location.replace(URL_ILERNA);
});

// Hito 3: autodestrucción con setTimeout().

const TIEMPO_AUTODESTRUCCION = 5000; // 5 segundos en milisegundos

document.getElementById('btnAutodestruccion').addEventListener('click', () => {
  // Mensaje visual durante la cuenta atrás.
  document.getElementById('mensajeCuentaAtras').textContent = 'Cerrando en 5 segundos...';

  // Al cumplirse el tiempo, la ventana se cierra sola.
  setTimeout(() => {
    window.close();
  }, TIEMPO_AUTODESTRUCCION);
});
