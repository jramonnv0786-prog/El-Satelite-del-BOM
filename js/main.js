'use strict';

/**
 * main.js · Lógica de la ventana principal (index.html)
 * Hito 1: lanzar satelite.html centrada en la pantalla.
 */

// Tamaño fijo de la ventana satélite (en píxeles)
const ANCHO = 400;
const ALTO = 300;

// Botón de lanzar satélite
const btnLanzar = document.getElementById('btnLanzar');

// Lanzar satelite.html centrada en la pantalla
btnLanzar.addEventListener('click', () => {
  // Espacio libre = pantalla disponible - ventana; la mitad a cada lado
  const izquierda = Math.round((screen.availWidth - ANCHO) / 2); // Redondear: los píxeles deben ser enteros
  const arriba = Math.round((screen.availHeight - ALTO) / 2);

  // Abrir ventana satélite
  window.open(
    'satelite.html',
    'satelite',
    `width=${ANCHO},height=${ALTO},left=${izquierda},top=${arriba}` // Ventana centrada
  );
});
